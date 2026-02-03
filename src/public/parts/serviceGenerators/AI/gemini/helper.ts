import { Buffer } from "node:buffer";
import sharp from 'npm:sharp';
import {createPartFromBase64} from 'npm:@google/genai@^1.34.0'

const compressImage = async (buffer: Buffer, mime_type: string, check: (buffer: Buffer) => Promise<boolean>) => {
	let currentBuffer = buffer;
	const scale = 0.75;

	while (!(await check(currentBuffer))) {
		const image = sharp(currentBuffer);
		const metadata = await image.metadata();

		if (!metadata.width || !metadata.height) {
			throw new Error('Unable to get image dimensions');
		}

		const newWidth = Math.round(metadata.width * scale);
		const newHeight = Math.round(metadata.height * scale);

		if (newWidth < 1 || newHeight < 1) {
			throw new Error('Image too small to compress further');
		}

		currentBuffer = await image
			.resize(newWidth, newHeight)
			.toBuffer();
	}

	return await createPartFromBase64(currentBuffer.toString('base64'), mime_type);
};

export { compressImage };
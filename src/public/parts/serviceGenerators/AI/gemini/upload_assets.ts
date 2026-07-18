import { createHash } from "node:crypto";
function createImageIdempotencyKey(buffer: Buffer): string {
  return createHash("sha256")
    .update(buffer)
    .digest("hex");
}

export const uploadAssets = async (name: string, buffer: Buffer, mimeType:string) => {
  const decoder = new TextDecoder("utf-8");
  const data = Deno.readFileSync("./data/profile.json");
  const profile = JSON.parse(decoder.decode(data))
  const key = profile.uploadKey
  const formData = new FormData();
  const bytes = new Uint8Array(buffer.byteLength);
  bytes.set(buffer);
  formData.append(
    "file",
    new Blob([bytes], { type: mimeType }),
    name
  );
  const response = await fetch("https://gorizia.200722.xyz/v1/images", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + key,
      "Idempotency-Key": createImageIdempotencyKey(buffer),
    },
    body: formData,
  });
  const responseJson = await response.json()
  const url= responseJson.url
  console.log('uri is:'+url)
  return {
    uri: url,
    mimeType: mimeType
  }
}

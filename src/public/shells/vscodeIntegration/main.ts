import { getAllUserNames, getUserByUsername } from "../../../server/auth.mjs";
import { LoadChar } from "../../../server/managers/char_manager.mjs";
import { getLoadedPartList } from "../../../server/managers/index.mjs";
import * as rpc from 'npm:vscode-jsonrpc'

export async function register(id: string, conn: rpc.MessageConnection){
  try{
    await Promise.all(getAllUserNames().map(name => registerSocket(name, id, conn)))
  }catch(_){
    conn.dispose()
  }
}

async function registerSocket(username: string, id: string, conn: rpc.MessageConnection){
  const user = getUserByUsername(username)
  const x = getLoadedPartList(username, 'chars')
  if (x.length > 0 ){
    console.log('register ', id)
    const c = await LoadChar(username,x[0])
    const interfaces: any = c.interfaces as any
    if (interfaces.vscodeIntegration ) {
      interfaces.vscodeIntegration.register(id, conn)
    }
  }else{
    return Promise.reject('no chars to connect')
  }
}
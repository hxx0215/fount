import { getAllUserNames, getUserByUsername } from "../../../server/auth.mjs";
import { LoadChar } from "../../../server/managers/char_manager.mjs";
import { getLoadedPartList } from "../../../server/managers/index.mjs";
import * as rpc from 'npm:vscode-jsonrpc'
type RegisterInfo = {id: string; workspace: string}
export async function register(conn: rpc.MessageConnection, params: RegisterInfo){
  try{
    await Promise.all(getAllUserNames().map(name => registerSocket(name, params, conn)))
  }catch(_){
    conn.dispose()
  }
}

async function registerSocket(username: string, params: RegisterInfo, conn: rpc.MessageConnection){
  const x = getLoadedPartList(username, 'chars')
  if (x.length > 0 ){
    console.log('register ', params.id)
    x.forEach(async charName => {
      const c = await LoadChar(username,charName)
      const interfaces: any = c.interfaces as any
      if (interfaces.vscodeIntegration ) {
        interfaces.vscodeIntegration.register(params, conn)
      }
    })
  }else{
    return Promise.reject('no chars to connect')
  }
}
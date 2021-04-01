export enum MessageType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CUSTOM = 'CUSTOM'
}
interface BaseMesage {
  to?: string,
  chatId?: string,
  content?: any
}
interface TextMessage extends BaseMesage {
  content: string
}
interface ImageMessage extends BaseMesage {
  content: {
    url: string,
    name: string
  }
}
interface CustomMessage extends BaseMesage {
  content: {
    type: number,
    [index: string]: any
  }
}
function sendText(msg: TextMessage) {
}
function sendImage(msg: ImageMessage) {
}
function sendCustom(msg: CustomMessage) {
}


type MsgType = keyof typeof MessageType  ;

type GetMessageType<T> = T extends typeof MessageType.TEXT
? TextMessage:T extends typeof MessageType.IMAGE 
? ImageMessage: CustomMessage;

export function sendMessage<T extends MsgType>(msg: GetMessageType<T>, type: T) {
}


sendMessage({
  content: {
    name: 'name',
    url: 'test',
  }
}, MessageType.IMAGE )

sendMessage({
  content: {
    type: 12
  }
}, MessageType.CUSTOM )

sendMessage({
  content: '12'
}, MessageType.TEXT )
enum WebSocketEvents {
  WEBSOCEKT_CONNECT = "@@WEBSOKET/CONNECT",
  WEBSOCEKT_OPEN = "@@WEBSOKET/OPEN",
  WEBSOCEKT_SEND = "@@WEBSOKET/SEND",
  WEBSOCEKT_MESSAGE = "@@WEBSOKET/MESSAGE",
  WEBSOCEKT_CLOSE = "@@WEBSOKET/CLOSE",

  WEBSOCEKT_CREATE_ROOM = "create-room",
  WEBSOCEKT_JOIN_ROOM = "join-room",
  WEBSOCEKT_CONVERSATION = "conversation",
  WEBSOCEKT_LEAVE_ROOM = "leave-room",
  WEBSOCEKT_GET_ROOMS_LIST = "get-rooms-list",
  WEBSOCEKT_GET_CURRENT_ROOM = "get-current-room",
  WEBSOCEKT_DISCONNECT = "disconnect",
}

enum Events {
  NORMAL = "@@NORMAL/MESSAGE",
  CLEAR_CURRENT_ROOM = "clear-current-room",
  SET_CURRENT_ROOM = "set-current-room",
}

export const ActionTypes = {
  WebSocketEvents,
  Events,
};

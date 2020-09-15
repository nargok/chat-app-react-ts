import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "redux";
import io from "socket.io-client";

import { ActionTypes } from "../types/actions";

let websocket: SocketIOClient.Socket;

let isInitialization = false;

export const websocketMiddleware: Middleware = <S>({
  getState,
}: MiddlewareAPI<Dispatch, S>) => (next: Dispatch<AnyAction>) => (
  action: any
): any => {
  switch (action.type) {
    case ActionTypes.WebSocketEvents.WEBSOCEKT_CONNECT: {
      if (websocket === undefined || !websocket.connected) {
        // 接続
        websocket = io(action.payload.url);
      }

      if (!isInitialization) {
        websocket.on("open", () =>
          next({
            type: ActionTypes.WebSocketEvents.WEBSOCEKT_OPEN,
          })
        );

        websocket.on("close", (event: string) =>
          next({
            type: ActionTypes.WebSocketEvents.WEBSOCEKT_CLOSE,
            payload: event,
          })
        );

        // チャットルーム作成
        websocket.on(
          ActionTypes.WebSocketEvents.WEBSOCEKT_CREATE_ROOM,
          (event: string) =>
            next({
              type: ActionTypes.WebSocketEvents.WEBSOCEKT_MESSAGE,
              payload: event,
            })
        );

        // チャットルーム入室
        websocket.on(
          ActionTypes.WebSocketEvents.WEBSOCEKT_JOIN_ROOM,
          (event: string) =>
            next({
              type: ActionTypes.WebSocketEvents.WEBSOCEKT_MESSAGE,
              payload: event,
            })
        );

        // 会話
        websocket.on(
          ActionTypes.WebSocketEvents.WEBSOCEKT_CONVERSATION,
          (event: string) =>
            next({
              type: ActionTypes.WebSocketEvents.WEBSOCEKT_MESSAGE,
              payload: event,
            })
        );

        // チャットルーム一覧取得
        websocket.on(
          ActionTypes.WebSocketEvents.WEBSOCEKT_GET_ROOMS_LIST,
          (event: string) =>
            next({
              type: ActionTypes.WebSocketEvents.WEBSOCEKT_MESSAGE,
              payload: event,
            })
        );

        // 現在のチャットルーム取得
        websocket.on(
          ActionTypes.WebSocketEvents.WEBSOCEKT_GET_CURRENT_ROOM,
          (event: string) =>
            next({
              type: ActionTypes.WebSocketEvents.WEBSOCEKT_MESSAGE,
              payload: event,
            })
        );

        // 切断
        websocket.on(
          ActionTypes.WebSocketEvents.WEBSOCEKT_DISCONNECT,
          (event: string) =>
            next({
              type: ActionTypes.WebSocketEvents.WEBSOCEKT_MESSAGE,
              payload: event,
            })
        );

        // チャットルーム退室
        websocket.on(
          ActionTypes.WebSocketEvents.WEBSOCEKT_LEAVE_ROOM,
          (event: string) =>
            next({
              type: ActionTypes.WebSocketEvents.WEBSOCEKT_MESSAGE,
              payload: event,
            })
        );

        isInitialization = true;
      }
      break;
    }
  }
};

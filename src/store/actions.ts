import { action } from "typesafe-actions";

import { ActionTypes } from "../types/actions";
import {
  CreateRoom,
  Conversation,
  JoinRoom,
  CurrentRoom,
} from "../types/reception";

const URL: string = "ws://localhost:3333";

/**
 * WebSocketへの接続
 *
 * @param url 接続先URL
 */
export const connectWebSocket = (url: string = URL) =>
  action(ActionTypes.WebSocketEvents.WEBSOCEKT_CONNECT, { url });

/**
 * チャットルーム作成
 *
 * @param data 送信データ
 */
export const createRoom = (data: CreateRoom) =>
  action(ActionTypes.WebSocketEvents.WEBSOCEKT_SEND, {
    type: ActionTypes.WebSocketEvents.WEBSOCEKT_CREATE_ROOM,
    ...data,
  });

/**
 * チャットルーム入室
 *
 * @param data 送信データ
 */
export const joinRoom = (data: JoinRoom) =>
  action(ActionTypes.WebSocketEvents.WEBSOCEKT_SEND, {
    type: ActionTypes.WebSocketEvents.WEBSOCEKT_JOIN_ROOM,
    ...data,
  });

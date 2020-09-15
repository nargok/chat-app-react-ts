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

/**
 * メッセージの送信
 *
 * @param data 送信データ
 */
export const sendMessage = (data: Conversation) =>
  action(ActionTypes.WebSocketEvents.WEBSOCEKT_SEND, {
    type: ActionTypes.WebSocketEvents.WEBSOCEKT_CONVERSATION,
    ...data,
  });

/**
 * チャットルーム一覧取得
 *
 */
export const getRoomsList = () =>
  action(ActionTypes.WebSocketEvents.WEBSOCEKT_SEND, {
    type: ActionTypes.WebSocketEvents.WEBSOCEKT_GET_ROOMS_LIST,
  });

/**
 * 現在のチャットルーム情報取得
 *
 * @param data 送信データ
 */
export const getCutrentRoom = (data: CurrentRoom) =>
  action(ActionTypes.WebSocketEvents.WEBSOCEKT_SEND, {
    type: ActionTypes.WebSocketEvents.WEBSOCEKT_GET_CURRENT_ROOM,
    ...data,
  });

/**
 * チャットルーム退室
 *
 */
export const leaveRoom = () =>
  action(ActionTypes.WebSocketEvents.WEBSOCEKT_SEND, {
    type: ActionTypes.WebSocketEvents.WEBSOCEKT_LEAVE_ROOM,
  });

/**
 * 現在のチャットルーム情報クリア
 *
 */
export const clearCurrentRoom = () =>
  action(ActionTypes.Events.NORMAL, {
    type: ActionTypes.Events.CLEAR_CURRENT_ROOM,
  });

/**
 * 現在のチャットルームIDの設定
 *
 * @param roomId ルームID
 */
export const setCurrentRoomId = (roomId: string) =>
  action(ActionTypes.Events.NORMAL, {
    type: ActionTypes.Events.SET_CURRENT_ROOM,
    roomId,
  });

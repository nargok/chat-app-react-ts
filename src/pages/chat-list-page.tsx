import React from "react";
import styled from "styled-components";

import ChatList, { ChatListData } from "../components/chat-list";
import Button from "../components/button";

const data: ChatListData[] = [
  {
    roomId: "ROOM_1",
    name: "ちゃっとるーむ1",
    users: [],
  },
  {
    roomId: "ROOM_2",
    name: "ちゃっとるーむ2",
    users: [],
  },
  {
    roomId: "ROOM_3",
    name: "ちゃっとるーむ3",
    users: [],
  },
];

class ChatListPage extends React.Component {
  render() {
    return (
      <ChatListPageStyle>
        <div className="title">
          <div className="chatRoomList">チャットルーム一覧</div>
          <div>
            <Button name="チャットルームを作成" onClick={() => {}} primary />
          </div>
        </div>

        <ChatList data={data} />
      </ChatListPageStyle>
    );
  }
}

const ChatListPageStyle = styled.div`
  padding: 20px;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .chatRoomList {
    font-weight: bold;
    font-size: 20px;
  }
`;

export default ChatListPage;

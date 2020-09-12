import React from "react";
import Button from "../components/button";

class ChatListPage extends React.Component {
  render() {
    return (
      <div>
        チャットルームリスト
        <Button name="登録" onClick={() => console.log("登録")} primary />
        <Button name="そのほか" onClick={() => console.log("そのほか")} />
      </div>
    );
  }
}

export default ChatListPage;

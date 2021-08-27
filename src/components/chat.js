import {
  useHMSActions,
  useHMSStore,
  selectLocalPeer,
  selectPeers,
  selectHMSMessages,
  selectMessagesByRole,
  selectMessagesByPeerID,
  selectBroadcastMessages,

} from "@100mslive/hms-video-react";
import { useState, useEffect } from "react";
import React from "react";
import "dayjs/locale/es";
import * as dayjs from "dayjs";

const relativeTime = require("dayjs/plugin/relativeTime");
const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

const Chat = () => {
  const hmsActions = useHMSActions();
  const getMessages = useHMSStore(selectHMSMessages);
  const [inputMessage, setInputMessage] = useState("");

  const typedMessages = async () => {
    await hmsActions.sendBroadcastMessage(inputMessage);
    setInputMessage("");
  };

  const handleOnKeyDownEvent = (e) => {
    if (e.keyCode === 13) {
      typedMessages(inputMessage);
      setInputMessage("");
    }
  };
  function renderMessages(data) {
    console.log(data);
    return (
      <>
        <div>
          <div className="message-sender" key={data.id}>
            {data.senderName}
            <div className="date">{dayjs(data.time).format("LT")}</div>
          </div>
          <div className="message ">{data.message} </div>
        </div>
      </>
    );
  }

 

  return (
    <>
      <div className="chat">
        <div className="chat-title">
          <h2> Inbox </h2>
        </div>

        <div className="messages">
          <div className="messages-content scrollbar ">
            {getMessages.map(renderMessages)}
          </div>
        </div>

        <div className="message-box">
          <textarea
            type="text"
            className="message-input"
            placeholder="Type a message . . ."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          ></textarea>
          <button className="message-submit" type="button" onClick={typedMessages}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;


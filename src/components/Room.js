import { useState, useEffect } from "react";
import { selectPeers, useHMSStore } from "@100mslive/hms-video-react";
import Peer from "./Peer";
import Chat from "./chat";
import ButtonBar from "./ButtonBar";

const Room = ({ toggleChat, setToggleChat }) => {
  const peers = useHMSStore(selectPeers);
  // const [toggleChat, setToggleChat] = useState(true);

  return (
    <div className="grid-container" style={{ backgroundColor: "#1B2156" }}>
      <div className="peers-container">
        {peers.map((peer) => (
          <Peer key={peer.id} peer={peer} />
        ))}
      </div>
      {/*<div className="screenshare">screenshare</div>*/}
      <div className="chatbox-container">{toggleChat ? <Chat /> : null}</div>
    </div>
  );
};

export default Room;
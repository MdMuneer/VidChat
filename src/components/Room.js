import { useState, useEffect } from "react";
import { selectPeers, useHMSStore } from "@100mslive/hms-video-react";
import Peer from "./Peer";
import ButtonBar from "./ButtonBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Room = () => {
  const peers = useHMSStore(selectPeers);
  const [toggleChat, setToggleChat] = useState(true);

  return (
    <div className="grid-container" style={{ backgroundColor: "#1B2156" }}>
      <div className="peers-container">
        {peers.map((peer) => (
          <Peer key={peer.id} peer={peer} />
        ))}
      </div>
    </div>
  );
};

export default Room;
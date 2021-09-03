import React, { useState, useEffect, useMemo } from "react";
import { BiMicrophone } from "react-icons/bi";
import { BiMicrophoneOff } from "react-icons/bi";
import { BiVideo } from "react-icons/bi";
import { BiVideoOff } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { MdScreenShare } from "react-icons/md";
import { MdStopScreenShare } from "react-icons/md";
import {
  useHMSActions,
  useHMSStore,
  selectPeers,
  selectLocalPeer,
  selectIsLocalAudioEnabled,
  selectIsConnectedToRoom,
  selectIsLocalVideoEnabled,
  selectPeerScreenSharing,
  selectIsLocalScreenShared,
  selectScreenShareByPeerID,
} from "@100mslive/hms-video-react";
import Chat from "./chat";

const ButtonBar = ({ peer }) => {
  const peers = useHMSStore(selectPeers);
  const localPeer = useHMSStore(selectLocalPeer);
  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled);
  const audioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const amIScreenSharing = useHMSStore(selectIsLocalScreenShared);
  const presenter = useHMSStore(selectPeerScreenSharing);
  const [toggleChat, setToggleChat] = useState(true);

  // const screenshareVideoTrack = useHMSStore(selectScreenShareByPeerID(peerId));

  const toggleAudio = () => {
    hmsActions.setLocalAudioEnabled(!audioEnabled);
  };

  const toggleScreenShare = async () => {
    try {
      await hmsActions.setScreenShareEnabled(!amIScreenSharing);
    } catch (error) {
      console.error(error, "Screen not Shared");
    }
  };

  const toggleVideo = () => {
    hmsActions.setLocalVideoEnabled(!videoEnabled);
  };

  return (
    <>
      <div className="control-bar">
        <button
          className="chatbox-btn"
          onClick={() => setToggleChat(!toggleChat)}
        >
          In-call Messages
        </button>
        {toggleChat ? <Chat /> : null}
        <div className="center-buttons">
          {/*<button
                      className="features btn-toggle"
                      onClick={() => toggleScreenShare()}
                    >
                      {amIScreenSharing ? (
                        <MdStopScreenShare size="3em" />
                      ) : (
                        <MdScreenShare size="3em" />
                      )}
                    </button>
          */}
          <nav>
            <button className="btn-control" onClick={toggleAudio}>
              {audioEnabled ? (
                <BiMicrophone size="1.8em" />
              ) : (
                <BiMicrophoneOff size="1.8em" />
              )}
            </button>
            <button
              className="btn-control"
              alt="Leave Room"
              onClick={toggleVideo}
            >
              {videoEnabled ? (
                <BiVideo size="1.8em" />
              ) : (
                <BiVideoOff size="1.8em" />
              )}
            </button>
          </nav>
          {isConnected && (
            <FaPhone
              size="2em"
              id="leave-btn"
              className="btn-danger"
              onClick={() => hmsActions.leave()}
            />
          )}
        </div>
        <div className="App-name">VidChat</div>
      </div>
    </>
  );
};

export default ButtonBar;
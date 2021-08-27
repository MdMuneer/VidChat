import JoinForm from "./components/JoinForm";
import "./styles.css";
import Room from "./components/Room";
import { useEffect } from "react";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/hms-video-react";
import ButtonBar from "./components/ButtonBar";

const App = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="App" >
      {isConnected ? (
        <>
          <Room />
          <ButtonBar />
        </>
      ) : (
        <JoinForm />
      )}
    </div>
  );
};

export default App;
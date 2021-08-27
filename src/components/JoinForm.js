import { useState } from "react";
import backgroundVideo from './bg.mp4';
import {
  useHMSActions,
  useHMSStore,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
} from "@100mslive/hms-video-react";

const JoinForm = () => {
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    token: "",
  });

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    hmsActions.join({
      userName: inputValues.name,
      authToken: inputValues.token,
    });
  };

  return (
    <>
    <div className="showcase">
    <video autoPlay muted loop >
         <source src={backgroundVideo} type="video/mp4" />
    </video>
    <div className="overlay"></div>
    <form onSubmit={handleSubmit}>
      <h2 className="heading">Join Room</h2>
      <div className="input-container">
        <input
          className="inputfield"
          value={inputValues.name}
          onChange={handleInputChange}
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
        />
      </div>
      <div className="input-container">
        <input
          className="inputfield"
          value={inputValues.token}
          onChange={handleInputChange}
          id="token"
          type="text"
          name="token"
          placeholder="Auth token"
        />
      </div>
      <button className="btn-primary">Join</button>
    </form>
    </div>
    </>
  );
};

export default JoinForm;
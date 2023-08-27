import React from "react";
import { ReactMediaRecorder, useReactMediaRecorder } from "react-media-recorder";

function Recorder() {
    const {status,startRecording,stopRecording,mediaBlobUrl}=useReactMediaRecorder({video:true})
  return (
    
     
        <div style={{display:'flex',flexDirection:"column",margin:'50px'}}>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <video src={mediaBlobUrl} autoplay loop controls></video>
        </div>
   
    
  );
}

export default Recorder;

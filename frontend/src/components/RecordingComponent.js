import React, { useState, useEffect } from "react";

const RecordingComponent = () => {
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audioBlob, setAudioBlob] = useState(null);
  const [error, setError] = useState(null);

  const startRecording = () => {
    setRecording(true);
    setAudioChunks([]);
  };

  const stopRecording = () => {
    setRecording(false);
    const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
    console.log("Audio blob type:", audioBlob.type);
    setAudioBlob(audioBlob);
  };

  useEffect(() => {
    let mediaRecorder = null;

    if (recording) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.addEventListener("dataavailable", (e) => {
            if (e.data.size > 0) {
              setAudioChunks((chunks) => [...chunks, e.data]);
            }
          });
          mediaRecorder.start();
        })
        .catch((error) => setError(error));
    } else if (mediaRecorder !== null) {
      mediaRecorder.stop();
    }
  }, [recording]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("audio_file", new File([audioBlob], "audio.wav", { type: "audio/wav" }));
    try {
      const response = await fetch('http://127.0.0.1:8000/api/get_chatgpt_response/', {
        method: "POST",
        body: formData,
      });
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const downloadAudio = () => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "audio.wav");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("No audio recording available.");
    }
  };

  return (
    <div>
      <h1>Recording Component</h1>
      <button onClick={startRecording} disabled={recording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!recording}>
        Stop Recording
      </button>
      <button onClick={handleSubmit} disabled={!audioBlob}>
        Submit Recording
      </button>
      <button onClick={downloadAudio} disabled={!audioBlob}>
        Download Audio
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default RecordingComponent;

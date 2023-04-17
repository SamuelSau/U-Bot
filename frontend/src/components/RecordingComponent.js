import React, { useState } from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import styles from './RecordingComponent.module.css';

const RecordingComponent = ({ onMessagesUpdate }) => {
  const recorderControls = useAudioRecorder();
  const audioRef = React.useRef();

  // Add useState for messages
  const [messages, setMessages] = useState([]);

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    audioRef.current.src = url;
    audioRef.current.controls = true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append(
      'audio_file',
      new File([recorderControls.recordingBlob], 'audio.wav', { type: 'audio/wav' }),
    );

    try {
      const response = await fetch(
        'http://127.0.0.1:8000/api/get_chatgpt_response/',
        {
          method: 'POST',
          body: formData,
        },
      );
      const data = await response.json();
      setMessages(data.messages);
      if (onMessagesUpdate) {
        onMessagesUpdate(data.messages);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      <button
        className={styles.button}
        onClick={recorderControls.startRecording}
        disabled={recorderControls.isRecording}
      >
        Start Recording
      </button>
      <button
        className={styles.button}
        onClick={recorderControls.stopRecording}
        disabled={!recorderControls.isRecording}
      >
        Stop Recording
      </button>
      <button
        className={styles.button}
        onClick={handleSubmit}
        disabled={!recorderControls.recordingBlob}
      >
        Submit Recording
      </button>
      <audio ref={audioRef} controls />
    </div>
  );
};

export default RecordingComponent;

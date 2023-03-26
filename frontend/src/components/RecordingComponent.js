import React, { useState, useEffect, useRef} from 'react';
import { ReactMic } from 'react-mic';
import styles from './RecordingComponent.module.css';
import { Container, Message, Segment } from 'semantic-ui-react';

const RecordingComponent = ({ onMessagesUpdate }) => {
	const [recording, setRecording] = useState(false);
	const [audioBlob, setAudioBlob] = useState(null);
  const [messages, setMessages] = useState([]); // Store the messages in an array
  const [base64Audio, setBase64Audio] = useState(null);

	const startRecording = () => {
		setRecording(true);
	};

	const stopRecording = () => {
		setRecording(false);
	};

	const onData = (recordedData) => {
		// You can process recorded data here if needed
	};

	const onStop = (recordedBlob) => {
		console.log('Recorded blob:', recordedBlob);
		setAudioBlob(recordedBlob.blob);
	};

  const audioRef = useRef();

    useEffect(() => {
        if (base64Audio && audioRef.current) {
            const audioData = `data:audio/wav;base64,${base64Audio}`;
            audioRef.current.src = audioData;
            audioRef.current.play(); // Autoplay the audio
        }
    }, [base64Audio]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append(
		  'audio_file',
		  new File([audioBlob], 'audio.wav', { type: 'audio/wav' })
		);
		try {
		  const response = await fetch(
			'http://127.0.0.1:8000/api/get_chatgpt_response/',
			{
			  method: 'POST',
			  body: formData,
			}
		  );
		  const data = await response.json();
		  console.log('Response:', data);
		  setMessages((prevMessages) => [...prevMessages, ...data.messages]); // Append new messages to the existing array
		  setBase64Audio(data.audio_base64); // Store the Base64 audio data
		  // Call the onMessagesUpdate prop with the new messages
		  if (onMessagesUpdate) {
			onMessagesUpdate([...messages, ...data.messages]);
		  }
		  console.log(data.messages);
		} catch (error) {
		  console.error('Error:', error);
		}
	  };
	  
  const endSession = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/end_session/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // The session has ended successfully, refresh the page
        window.location.reload();
      } else {
        console.error('Error ending session:', response.statusText);
      }
    } catch (error) {
      console.error('Error ending session:', error);
    }
  };
  

	return (
		<div className={styles.container}>
      <div className="App">
		<Container>
			</Container>
    </div>
			<h1 className={styles.heading}>Recording Component</h1>
			<ReactMic
				record={recording}
				className={`${styles.soundWave} sound-wave`}
				onStop={onStop}
				onData={onData}
				mimeType='audio/wav'
			/>
			<button
				className={styles.button}
				onClick={startRecording}
				disabled={recording}
			>
				Start Recording
			</button>
			<button
				className={styles.button}
				onClick={stopRecording}
				disabled={!recording}
			>
				Stop Recording
			</button>
			<button
				className={styles.button}
				onClick={handleSubmit}
				disabled={!audioBlob}
			>
				Submit Recording
			</button>
      <audio ref={audioRef} controls autoPlay/>
      <button onClick={endSession}>End Session</button>
		</div>
	);
};

export default RecordingComponent;
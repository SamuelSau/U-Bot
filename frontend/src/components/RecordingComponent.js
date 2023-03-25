import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import styles from './RecordingComponent.module.css';

const RecordingComponent = () => {
	const [recording, setRecording] = useState(false);
	const [audioBlob, setAudioBlob] = useState(null);

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
			console.log('Response:', response);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<div className={styles.container}>
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
		</div>
	);
};

export default RecordingComponent;
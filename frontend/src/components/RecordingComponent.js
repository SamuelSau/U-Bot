import React, { useState } from 'react';
import { ReactMic } from 'react-mic';

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

	const downloadAudio = () => {
		if (audioBlob) {
			const url = URL.createObjectURL(audioBlob);
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', 'audio.wav');
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} else {
			alert('No audio recording available.');
		}
	};

	return (
		<div>
			<h1>Recording Component</h1>
			<ReactMic
				record={recording}
				className='sound-wave'
				onStop={onStop}
				onData={onData}
				mimeType='audio/wav'
			/>
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
		</div>
	);
};

export default RecordingComponent;
import React, { useState } from 'react';
import MediaPlayer from './components/MediaPlayer';

function App() {
    const videos = ["/turtle.mp4", "/monkeys.mp4", "/penguins.mp4", "/bear.mp4"];
    const audios = [
        "/Joint C Beat Laboratory - Aura.mp3",
        "/Joint C Beat Laboratory - Back in to the Toxic.mp3",
        "/Joint C Beat Laboratory - Blooming Poison.mp3",
        "/Joint C Beat Laboratory - Soul Underground.mp3"
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

    const nextVideo = () => setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    const prevVideo = () => setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
    const nextAudio = () => setCurrentAudioIndex((prev) => (prev + 1) % audios.length);
    const prevAudio = () => setCurrentAudioIndex((prev) => (prev - 1 + audios.length) % audios.length);

    const getFileName = (path) => path.split('/').pop();

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 w-full">
            <h2 className="text-3xl font-bold mb-6 text-center w-full">🎬 Reproductor Multimedia 🎶</h2>

            {/* Contenedor de Video */}
            <div className="w-full max-w-4xl bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
                <MediaPlayer type="video" src={videos[currentVideoIndex]} />
                <div className="flex justify-between mt-4">
                    <button onClick={prevVideo} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 transition rounded-lg shadow-md">⬅️ Anterior</button>
                    <button onClick={nextVideo} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 transition rounded-lg shadow-md">Siguiente ➡️</button>
                </div>
                <p className="mt-2 text-lg text-gray-400 hover:text-white transition">Encuentra estos vídeos y más en: <a href="https://pixabay.com/es/videos/search/animales/" className="text-blue-500 underline hover:text-blue-300">https://pixabay.com/es/videos/search/animales/</a></p>
            </div>

            {/* Contenedor de Audio */}
            <div className="w-full max-w-4xl bg-gray-800 rounded-2xl p-6 shadow-lg mt-8 text-center">
                <h3 className="text-xl font-semibold mb-2">{getFileName(audios[currentAudioIndex])}</h3>
                <MediaPlayer type="audio" src={audios[currentAudioIndex]} />
                <div className="flex justify-between mt-4">
                    <button onClick={prevAudio} className="px-4 py-2 bg-green-600 hover:bg-green-500 transition rounded-lg shadow-md">⬅️ Anterior</button>
                    <button onClick={nextAudio} className="px-4 py-2 bg-green-600 hover:bg-green-500 transition rounded-lg shadow-md">Siguiente ➡️</button>
                </div>
                <p className="mt-2 text-lg text-gray-400 hover:text-white transition">Encuentra estos audios y más en: <a href="https://freemusicarchive.org/search/?quicksearch=&search-genre=Hip-Hop" className="text-purple-500 underline hover:text-purple-300">https://freemusicarchive.org/search/?quicksearch=&search-genre=Hip-Hop</a></p>
            </div>
        </div>
    );
}

export default App;

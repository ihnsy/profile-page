import './App.css';

function App() {
  const name = '인소윤';
  const hobbies = ['여행', '베이킹', '발레'];

  return (
    <div className="profile-container">
      {/* YouTube 영상 임베드! */}
      <div className="background-video">
        <iframe
          src="https://youtu.be/_LJ62r7sIj8?si=JQKQuozI4jV5yKux"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      <div className="content">
        <h1 className="welcome-message">Welcome to {name}'s Profile!</h1>
        <h2>취미: </h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

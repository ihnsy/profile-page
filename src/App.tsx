import './App.css';

function App() {
  const name = '인소윤';
  const studentinfo = '건설환경공학부 23학번';
  const age = '21세';
  const hobbies = ['여행', '베이킹', '발레'];

  return (
    <div className="profile-container">
      {/* 반투명 배경 이미지 */}
      <div className="background-image"></div>

      <div className="content">
        <h1 className="welcome-message">{name}의 프로필입니다!</h1>
        <p>{studentinfo}</p>
        <p>나이: {age}</p>
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

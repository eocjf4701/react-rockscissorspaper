import Box from './component/Box'
import './App.css';

const choice = {
  rock: {
    name: "Rock",
    img: "https://mnmsoft.co.kr/aivs/images/2.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://mnmsoft.co.kr/aivs/images/1.png"
  },
  paper: {
    name: "Paper",
    img: "https://mnmsoft.co.kr/aivs/images/3.png"
  }
};

function App() {
  const play = (userChoice) => {
    console.log("선택됌", userChoice);
  }
  return (
    <div>
      <div className='main'>
        <Box title="You" />
        <img src="https://mnmsoft.co.kr/aivs/images/vs.png" />
        <Box title="Computer" />
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;

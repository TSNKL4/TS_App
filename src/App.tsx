import { useState, useEffect } from 'react';
import './App.css';
import characterImage from './images/coin.jpg';  // รูปตัวละคร
import coinImage from './images/logo.png';  // รูปเหรียญ
import HomeIcon from './images/Home.png';
import QuestIcon from './images/Quest.png';
import LauncherIcon from './images/Launcher.png';
import RoadmapIcon from './images/Roadmap.png';
import ReferralsIcon from './images/Referrals.png';
import bgImage from './images/bg.png';

function App() {
  const [canFarm, setCanFarm] = useState(true);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);
  const [farming, setFarming] = useState(false);
  const [tempCoins, setTempCoins] = useState<number>(0);

  const handleStartFarming = () => {
    if (canFarm) {
      setCanFarm(false);
      setFarming(true);
      setTempCoins(0);
      const now = Date.now();
      localStorage.setItem('lastFarmTime', now.toString());
      setTimeLeft(8 * 60 * 60);

      const interval = setInterval(() => {
        const lastFarmTimeString = localStorage.getItem('lastFarmTime');
        if (lastFarmTimeString) {
          const lastFarmTime = parseInt(lastFarmTimeString, 10);
          const timePassed = Math.floor((Date.now() - lastFarmTime) / 1000);
          const timeRemaining = 8 * 60 * 60 - timePassed;

          if (timeRemaining <= 0) {
            setCanFarm(true);
            setFarming(false);
            setBalance(prevBalance => prevBalance + 10);
            setTimeLeft(0);
            clearInterval(interval);
          } else {
            setTimeLeft(timeRemaining);
            setTempCoins((prevTempCoins) => prevTempCoins + 0.00034722);
          }
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  };

  const handleBoost = () => {
    alert('Boost button clicked!');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const lastFarmTimeString = localStorage.getItem('lastFarmTime');
      if (lastFarmTimeString) {
        const lastFarmTime = parseInt(lastFarmTimeString, 10);
        const timePassed = Math.floor((Date.now() - lastFarmTime) / 1000);
        const timeRemaining = 8 * 60 * 60 - timePassed;

        if (timeRemaining <= 0) {
          setCanFarm(true);
          setFarming(false);
          setBalance(prevBalance => prevBalance + 10);
          setTimeLeft(0);
          clearInterval(interval);
        } else {
          setTimeLeft(timeRemaining);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col justify-between items-center text-white">
      
      {/* ปุ่ม Join Squad */}
      <button className="join-squad-btn">Join Squad</button>

      <div className="character-section">
        <div className="character-img">
          <img src={characterImage} alt="Character" /> {/* รูปตัวละคร */}
        </div>
      </div>

      <div className="footer-section">
        <div className="farming-section mt-8">
          <div className="energy-display">
            <img src={coinImage} alt="Coin" className="coin-img" /> {/* รูปเหรียญ */}
            <span className="small-timer">{balance.toFixed(3)} </span> {/* 0.000 */}
          </div>
          <div className="BG-display"> 
            <img src={bgImage} alt="Bg"/>
          </div>
          <button
            className={`start-farming-btn ${!canFarm && 'disabled'}`}
            onClick={handleStartFarming}
            disabled={!canFarm}
          >
            {farming ? (
              <>
                <div className="animated-number">
                  Farming: {tempCoins.toFixed(3)} {formatTime(timeLeft)}
                </div>
              </>
            ) : 'Start Farming'}
          </button>
          
          <button
            className={`boost-btn ${!canFarm && 'disabled'}`}
            onClick={handleBoost}
            disabled={!canFarm}
          >
            Boost
          </button>
        </div>

        <nav className="footer mt-4">
          <button>
            <img src={HomeIcon} alt="Home" />
            Home
          </button>
          <button>
            <img src={QuestIcon} alt="Quest" />
            Quest
          </button>
          <button>
            <img src={LauncherIcon} alt="Launcher" />
            Launcher
          </button>
          <button>
            <img src={RoadmapIcon} alt="Roadmap" />
            Roadmap
          </button>
          <button>
            <img src={ReferralsIcon} alt="Referrals" />
            Referrals
          </button>
        </nav>
      </div>
    </div>
  );
}

export default App;

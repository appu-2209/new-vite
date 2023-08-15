import React from 'react'
import styles from './style'
import Navbar from './components/Navbar';
import Home from './components/Home';
import "./assets/css/global.css"
const App = () => {
  return (
    <div className="app w-full overflow-hidden">
      <div className="w-full h-full in-app">
      <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
<Navbar />
      </div>
      </div>

      <div className={`${styles.flexStart} home-main`}>
      <div className={`${styles.boxWidth} h-full`}>
<Home />
      </div>
      </div>


      <div className="footer">All Rights Reserved</div>
      </div>
    </div>
  )
}

export default App;

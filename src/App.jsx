import logo from './logo.svg';
import './App.scss';
import { usersData, notifData } from './data';
import NotifCard from './components/notifCard/NotifCard';
import { useState } from 'react';

function App() {

  const [unreadArr, setUnreadArr] = useState([0,1,2,3,4,5,6]);

  const readAll = () => {
    setUnreadArr([])
  }

  console.log(unreadArr)

  return (
    <div className="App">

      <main className='notif'>
        <header className='notif__header'>
          <section className='notif__indicate'>
            <h3 className='notif__indicate-label'>Notifications</h3>
            <div className='notif__indicate-value'>3</div>
          </section>

          <button onClick={readAll} className='notif__allread'>Mark all as read</button>
        </header>

        <main className='notif__cont'>
          {notifData.map(
            (notif) => <NotifCard notifData={notif} isUnread={unreadArr.includes(notif.id)}  unreadArr={unreadArr} setUnreadArr={setUnreadArr}/>
          )}

        </main>
      </main>

      <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.scss';
import { usersData, notifData } from './data';
import NotifCard from './components/notifCard/NotifCard';

function App() {

  return (
    <div className="App">

      <main className='notif'>
        <header className='notif__header'>
          <section className='notif__indicate'>
            <h3 className='notif__indicate-label'>Notifications</h3>
            <div className='notif__indicate-value'>3</div>
          </section>

          <button className='notif__allread'>Mark all as read</button>
        </header>

        <main className='notif__cont'>
          {notifData.map(
            notif => <NotifCard notifData={notif}/>
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

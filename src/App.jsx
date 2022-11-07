import logo from './logo.svg';
import './App.scss';

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
        </main>
      </main>

      <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

import './App.css'
import MainComponent from './components/MainComponent'
import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src='https://placedog.net/500/500' alt='doggo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Non Ci Ho Capito Un Cazzo
        </a>
      </header>
      <main>
        <MainComponent student='Giulio' country='Bergamo' color='white' />
        <MainComponent student='Giulia' country='Napoli' color='blue' />
        <MainComponent student='Umberto' country='Roma' color='green' />
      </main>
      <footer>
        <ClassComponent />
      </footer>
    </div>
  )
}

export default App

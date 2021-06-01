import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease'

function App() {
  return (
    <div>
      <header className='fixed-top'>
        <MyNavBar />
      </header>
      <main>
        <Welcome />
        <LatestRelease />
      </main>
      <footer >
        <MyFooter />
      </footer>
     </div>
  );
}

export default App;

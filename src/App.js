import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease'

function App() {
  return (
    <div>
      <header>
        <MyNavBar />
      </header>
      <main className='mb-5'>
        <Welcome />
        <LatestRelease />
      </main>
      <footer className='fixed-bottom'>
        <MyFooter />
      </footer>
     </div>
  );
}

export default App;

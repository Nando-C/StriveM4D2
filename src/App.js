import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <header>
        <MyNavBar />
      </header>
      <main>
        <Welcome />
      </main>
      <footer className='fixed-bottom'>
        <MyFooter />
      </footer>
     </div>
  );
}

export default App;

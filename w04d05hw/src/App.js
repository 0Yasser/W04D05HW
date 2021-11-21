import './App.css';
import Post from './components/Post';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About';
import Weather from './components/Weather';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <Post />
              </Route>
            <Route path="/Post">
              <Post />
            </Route>
            <Route  path="/About">
              <About />
            </Route>
            <Route path="/Weather">
              <Weather />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

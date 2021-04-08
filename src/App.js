import './App.css';
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import SideBar from './components/SideBar/SideBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route>
            
          </Route>
        </Switch>
      </Router>
      <Header />
      <div className="appBody">
        <SideBar />
        <MainVideo/>
      </div>
    </div>
  );
}

export default App;

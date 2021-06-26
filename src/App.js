
import './App.css';
import Header from './Components/Header'
import Videos from './Components/Videos'
import Sidebar from './Components/Sidebar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import SearchPage from './Components/SearchPage';
function App() {
  return (
    <div className="App">
    <Router>
        <Header/>
      <Switch>
        <Route path='/search/:searchTerm'>
        <div className="app_page">
     <Sidebar/>
    <SearchPage/>
     </div>
        </Route>
        <Route path='/'>
        
     <div className="app_page">
     <Sidebar/>
    <Videos/>
     </div>
        </Route>

      </Switch>
    </Router>



     
    </div>
  );
}

export default App;

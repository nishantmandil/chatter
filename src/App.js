import { React, useState } from "react";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";


function App() {

  const [{user}, dispatch] = useStateValue();
  // const [user, newUser] = useState();

  return (
    //BEM naming convention
    <div className="app">

      {!user ? (
        <Login />
      ):(
        <div className="app__body">
        <Router>

          <Switch>
          

            <Route path="/rooms/:roomId">
            <Sidebar />
              <Chat />
            </Route>

            <Route path="/">
            <Sidebar />
            </Route>
          </Switch>

        </Router>
        
      </div>
      )}

      
    </div>
  );
}

export default App;

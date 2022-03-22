import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/bootstrap/fontawesome/css/all.css';
import HelloWorld from "./components/helloworld/hello-world.js";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import Index from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div className="container">

          <Routes>
            <Route path="/hello"
                   exact={true}
                   element={<HelloWorld/>}/>
            <Route path="/"
                   exact={true}
                   element={<Labs/>}/>
            <Route path="/tuiter"
                   exact={true}
                   element={<Tuiter/>}/>
            <Route path="/tuiter/home"
                   element={<Index/>}/>
            <Route path="/tuiter/explore"
                   element={<ExploreScreen/>}/>
          </Routes>

        </div>
      </BrowserRouter>
  );
}

export default App;

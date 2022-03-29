import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/bootstrap/fontawesome/css/all.css';
import HelloWorld from "./components/helloworld/hello-world.js";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import HomeScreen from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditProfile from "./components/tuiter/profile/editProfile";
import ProfileScreen from "./components/tuiter/profile/profileComponent";


function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index element={<Labs />} />
              <Route path="labs" exact={true} element={<Labs />} />
              <Route path="hello" exact={true} element={<HelloWorld />} />
              <Route path="tuiter" element={<Tuiter/>}>
                <Route index element={<HomeScreen/>}/>
                <Route path="home" element={<HomeScreen/>}/>
                <Route path="explore" element={<ExploreScreen/>}/>
                <Route path="profile" element={<ProfileScreen/>}/>
                <Route path="edit/profile" element={<EditProfile/>}/>
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

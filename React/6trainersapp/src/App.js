import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Home from "./Home";
import TrainersList from "./TrainersLists";
import TrainersDetails from "./TrainersDetails";
function App(){
  return(
  <BrowserRouter>
  <h1>Trainer Management</h1>
  <nav>
    <Link to ="/">Home</Link>
    {" | "}
    <Link to ="/trainers">Trainers</Link> 
  </nav>
  <hr />
  <Routes>
    <Route
      path="/"
      element={<Navigate to ="/home"/>}
      />
      <Route
        path="/home"
        element={<Home />}
        />
      <Route
      path="/trainers"
      element={<TrainersList/>}
      />
      <Route
      path="/trainers/:id"
      element={<TrainersDetails/>}
      />
  </Routes>
  </BrowserRouter>
  );
}
export default App;
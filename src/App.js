import "./App.css";
import SignupMentor from "./Components/Authentication/SignupMentor";
import SignupStudent from "./Components/Authentication/SignupStudent";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import MainDashboard from "./Components/Dashboard/MainDashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signup-mentor" component={SignupMentor} />
        <Route exact path="/signup-student" component={SignupStudent} />
        <Route exact path="/main-dashboard" component={MainDashboard} />
        {/* <Signup /> */}
      </Router>
    </div>
  );
}

export default App;

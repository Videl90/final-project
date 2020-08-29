import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NewTrip from "./pages/NewTrip";
// import FlightResults from "./pages/FlightResults";
// import Agenda from "./pages/Agenda";


function App() {
  return (
    <Wrapper>
      <Router>
      <div>
        <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/newtrip" component={NewTrip} />
        {/* <Route exact path="/flight-results" component={FlightResults} />
        <Route exact path="/agenda" component={Agenda} /> */}
        </Switch>
      </div>
    </Router>
    </Wrapper>
  )
}

export default App;


import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Register, Home, Profle } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profle} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

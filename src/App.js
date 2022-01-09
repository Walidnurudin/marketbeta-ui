import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Register, Home, Profle } from "./pages";

// REDUX
import { Provider } from "react-redux";
import { store, persistor } from "./stores/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profle} />
          </Switch>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

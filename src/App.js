import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Register, Home, Profle } from "./pages";
import PrivateRoute from "./helpers/routes/privateRoute";
import PublicRoute from "./helpers/routes/publicRoute";

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
            <PublicRoute exact path="/register" component={Register} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/profile" component={Profle} />
          </Switch>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

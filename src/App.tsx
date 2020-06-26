import React from "react";
import { ThemeProvider } from "@aircall/tractor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppLayout } from "./components/AppLayout";
import { AccountPage } from "./pages/Account";
import { TodoPage } from "./pages/Todo";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppLayout>
          <Switch>
            <Route path="/" exact>
              <TodoPage />
            </Route>
            <Route path="/account">
              <AccountPage />
            </Route>
          </Switch>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About Text Utils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the Text to Analyze "
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

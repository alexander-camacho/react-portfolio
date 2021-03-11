import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"
import Projects from "./pages/Projects"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

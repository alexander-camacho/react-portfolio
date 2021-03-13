import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Header from "./components/Header"
import Projects from "./pages/Projects"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div className="bg-light">
        <Header />
        <Switch>
          <Route exact path={['/', '/about']} component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/projects' component={Projects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

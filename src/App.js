import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./nav";
import { Route, Switch } from "react-router";
import { PageNotFound } from "./pageNotFound";
import { Home } from "./home";
import { About } from "./aboutUs";
import { OurServices } from "./ourServices";
import { ContactUs } from "./contactUs";
import { Testimonial } from "./testimonial";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/aboutUs" component={About} />
        <Route path="/ourServices" component={OurServices} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/testimonial" component={Testimonial} />

        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

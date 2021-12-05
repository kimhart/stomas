import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./routes/index";
import TopNav from "./components/top-nav";
import ScrollToTop from "./components/scroll-to-top";
import NotFound from "./routes/not-found";

function App () {
  return (
    <div className="App">
      <Router>
        <>
          <ScrollToTop />
          <TopNav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;

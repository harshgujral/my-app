import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Layout from './Components/Layout';

import About from './view/about/About';
import Home from './view/home/Home';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/view/about/About">
                <About />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </>
    </div>
  );
}

export default App;

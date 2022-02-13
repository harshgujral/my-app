import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/layouts/footer/footer';
import './index.css';

import Header from './Components/layouts/header/header';
import About from './view/about/About';
import Home from './view/home/Home';

function App() {
  return (
    <div className="App">
      <>
    
   <Router>
   <Header />
   <Switch>
  <Route exact path = "/">
   <Home />
  </Route>

  <Route path = "/view/about/About">
   <About />
  </Route>

</Switch>

</Router>

<Footer />
</>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Residential3D from './pages/Residential3D';
import RepairMaintenance from './pages/RepairMaintenance';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/residential-3d" component={Residential3D} />
            <Route path="/repair-maintenance" component={RepairMaintenance} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
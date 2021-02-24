import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Home from './container/Home';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import ContactUs from './container/ContactUs';
import Post from './container/Post';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/post" component = {Post} />
      </div>
    </Router>
    
  );
}

export default App;

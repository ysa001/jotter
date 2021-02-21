import './App.css';

import Home from './components/Home/Home';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Route path="/" exact component={Home}/>
        
        <section className="dummy">
          <h1>rawr</h1>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';

import Home from './components/Home/Home';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

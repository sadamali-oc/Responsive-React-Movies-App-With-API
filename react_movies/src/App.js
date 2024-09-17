import { BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
<Router>
  <Switch>
  <Header/>

  </Switch>
</Router>
  );
}

export default App;

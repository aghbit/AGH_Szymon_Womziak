import { BrowserRouter as Router } from 'react-router-dom'
import Main from "./components/Main";
import Navbar from './components/extras/Navbar';

const App = () => {
  return (<div>
    <Router>
      <Main />
    </Router>
  </div>
  );
};

export default App;

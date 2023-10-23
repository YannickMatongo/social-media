import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentification from './Components/Authentification/Authentification';
import Homepage from './Components/HomePage/Homepage';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={true ? <Homepage /> : <Authentification />}>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;

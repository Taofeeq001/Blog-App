import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUP from './Components/SignUp';
import Allpost from './Components/Posts/Allpost';
import Post from './Components/Posts/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUP/>}/>
          <Route path='/allposts' element={<Allpost/>}/>
          <Route path='/posts/:id' element={<Post/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUP from './Components/SignUp';
import Allpost from './Components/Posts/Allpost';
import Post from './Components/Posts/Post';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import CreatePost from './Components/Posts/CreatePost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUP/>}/>
          <Route path='/signin' element={<Login/>}/>
          <Route path='/allposts' element={<Allpost/>}/>
          <Route path='/posts/:title' element={<Post/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

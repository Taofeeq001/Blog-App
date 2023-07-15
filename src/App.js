import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUP from './Components/SignUp';
import Allpost from './Components/Posts/Allpost';
import Post from './Components/Posts/Post';
import Login from './Components/Login';
import CreatePost from './Components/Posts/CreatePost';
import Dashboard from './Components/Dashboard/Dash/Dashboard';
import NewsBoard from './Components/News/NewsBoard';
import Sport from './Components/Sport/Sport';
import Forum from './Components/Forum/Forum';
import Settings from './Components/Settings/Settings';
import ForumPost from './Components/Forum/ForumPost';
import Landingpage from './Components/Landingpage/Landingpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/signup' element={<SignUP/>}/>
          <Route path='/signin' element={<Login/>}/>
          <Route path='/allposts' element={<Allpost/>}/>
          <Route path='/posts/:title' element={<Post/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/news' element={<NewsBoard/>}/>
          <Route path='/sports' element={<Sport/>}/>
          <Route path='/forum' element={<Forum/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/forumpost' element={<ForumPost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

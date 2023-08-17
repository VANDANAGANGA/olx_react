import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from  'react-router-dom'
import Post  from './store/postContext';
import Home from './Pages/Home';
import Singup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
function App() {
  const {user,setUser}= useContext(AuthContext)
  const{firebase} =useContext(FirebaseContext)
  useEffect(()=>{
     firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>

      <Router>
       <Route  exact path='/'>
          <Home />
       </Route>
       <Route path='/singup'>
          <Singup />
       </Route>
       <Route path='/login'>
          <Login />
       </Route>
       <Route path='/create'>
          <Create />
       </Route>
       <Route path='/view'>
          <View />
       </Route>
      </Router>
      </Post>
    </div>
  );
}

export default App;

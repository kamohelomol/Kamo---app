import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom' ;
import { useState } from 'react';
import Authservice from './pages/authservice';
import {useNavigate} from 'react-router-dom';
import Auth from './pages/auth';
import Home from './pages';
import Help from './pages/help';
import './App.css';



function App (){ 

  return(

    <Router>
    
    <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path='/help' element= {<help />} />
        <Route path='/loaded' element={<loaded />} /> 
    </Routes>
    
    </Router>
      )
       
       const navigate = useNavigate();
    
        const [ username , setUsername] = useState('');
        const [ password, setPassword ] = useState('');
        const [signedin, setSignedin] = useState('');
        const [showErrorMessage, setShowErrorMessage] = useState(false);
      
        const handleSigninClick = () =>{
      
          if(signedin){
              (navigate('./pages/auth'));
          } else {console.log("logged in")}
        }
      const isSignUp = false;
    
      const handleSubmit = async (e ) => {
         e.preventDefault();
        
         const user = Auth.getUser( username, password);
        
              if (user) {
                
                 setSignedin(true);
                 setShowErrorMessage(false);
                  console.log('Logged in:', user );
              }
        
              else {
                
                 setSignedin(false);
                 setShowErrorMessage(true);
                console.log ('Invalid credentials'); 
           }}
         
    
           return ( 
            <body>
              <div class='maindiv'>
                <header>
                  <h3>BusTag Connect 🎫</h3>
                </header>
                <div class='appbody'>
                  <div class='leftcontainer'>
                    <div class="maintext">
                      Top up your Rea Vaya bus tag in less than 5 minutes, easy! 
                    </div>
                    <div class='subtext'>
                      Bypass lengthy lines and top up your bus tag hassle free. 
                      Try our service and stay up to date with all information partaining to your daily commute
                    </div>
                  </div>
        
        
                  <div class='rightcontainer'>
                    <div class="formdiv"> 
                     <form onSubmit = {handleSubmit}>
                        <div>
                          <input type="text"  placeholder="Username"   value={username} onChange= {(e) => setUsername(e.target.value)}></input>
                        </div>
                        
                        <div>
                          <input type="password"  placeholder="Password"   value={password} onChange= {(e ) => setPassword(e.target.value)}></input>
                        </div>
                        <div>
                          <button>Hey</button>
                        </div>
                      </form>
                      
                    </div>
                  </div>
                </div>
              </div>
              
            </body>
           
            );
        
          
              
    
    



}

 



      
 
   
  
 export default App;
 
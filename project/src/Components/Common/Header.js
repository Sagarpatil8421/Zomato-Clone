import React, { useState } from 'react'
import '../../Styles/Header.css'
import Modal from 'react-modal'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '2%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Header() {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  
  const [isCreateAccountOpen, setIsCreateAccount] = useState(false)

  const fbCallback= (response)=>{
    console.log("Facebook call back response : ",response);
  }

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className='header'>
        <div className="s-logo">
            <span>e!</span>
        </div>
          <div className="btn-group login-block">
              <button className='login' onClick={()=> setIsLoginModalOpen(true)} >LogIn</button>
              <button className='signUp' onClick={()=> setIsCreateAccount(true)}>Create An Account</button>
          </div>


          {/* Login modal  */}
            <Modal 
            isOpen={isLoginModalOpen}
            style={customStyles}
            >
              <div className='login-Modal'>
                <h2 >Login 
                    <button className='btn btn-danger' style={{float:'right'}} onClick={()=> setIsLoginModalOpen(false)}>X</button>
                </h2>
          </div>

          <div>
              <form >
                  <input type="email" placeholder='Enter your email' /><br /><br />
                  <input type="password" placeholder='Enter your password' /><br /><br />
                  <button className='btn btn-success px-4' >Login</button>
              </form>
          </div>

          <div>
            <br />
            <FacebookLogin
              appId='601947984694888'
              // autoLoad={true}
              fields="name,email, picture"
              callback={()=> fbCallback()}
              // cssClass="my-facebook-button-class"
              icon="fa-facebook"
              style={{height:'15px'}}
            /> 

          
            <br />
            <GoogleLogin
              clientId="969414845856-4k1b1qirnfb9e00jb3r6dcgun9agonbn.apps.googleusercontent.com"
              // autoLoad={true}
              onFailure={responseGoogle} 
              onSuccess={responseGoogle}
              
            />
          </div>
        </Modal>

        {/* Create account Modal  */}
        <Modal 
            isOpen={isCreateAccountOpen}
            style={customStyles}
            >
              <div className='createAcc-Modal' >
                  <h2 >Create An Account &nbsp;&nbsp;
                      <button className='btn btn-danger' style={{float:'right',width:'40px'}} onClick={()=> setIsCreateAccount(false)}>X</button>
                  </h2>
              </div>

              <div className='createAcc'>
                  <input type="email" placeholder='Enter your email' /> <br /><br />
                  <input type="password" placeholder='Enter your password' /><br /><br />
                  <input type="password" placeholder='Enter your password again' /><br /><br />
                  <button className='btn btn-success px-3'>Create Account</button>
              </div>
        </Modal>
    </div>

  )
}

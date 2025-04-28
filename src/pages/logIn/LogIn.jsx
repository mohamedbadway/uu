import React, { useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import { FaRegPaperPlane} from 'react-icons/fa'
import axios from 'axios';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8000/users', {
        params: { email, password }
      });

      if (response.data.length > 0) {
          console.log("User authenticated");

      } else {
          setError('Invalid email or password');
      }
    }
    catch (error) {

      setError('Failed to login');
  }
  };
  

  return (
    <>
    <Banner  className={'banner page-banner'} background={" linear-gradient(0deg, transparent, #fff0e5, #fff0e5)"}>
    <h1 className='heading mb-2'> Account Login  </h1>
    <p className='mb-0'> Please enter your User/Email & Password  </p>
    </Banner>
    <div class="sign-up pt-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col1 col-lg-5">
            <form onSubmit={handleSubmit}>
              <div class=" signup-form">
                <div class="form-item">
                  <input type="email" name="email" placeholder=" Your Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="form-item">
                  <input type="password" name="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="remember-forget row mb-3 align-items-center justify-content-between">
                    <div class="col col-6">
                        <div class="checkbox-item mb-0">
                          <input id="checkbox-remember" type="checkbox"/>
                          <label for="checkbox-remember">Remember me</label>
                        </div>
                    </div>
                    <div class="col col-6">
                        <div class="forget-password text-end">
                          <a href="#!">Forget Password</a>
                        </div>
                    </div>
                </div>
                <Link type="submit" class="btn mb-5" to = {"/"}>
                  <span>
                    <small>Login</small>
                    <small>Login</small>
                  </span>
                  <FaRegPaperPlane className='ms-2' />
                </Link>
                {error && <p className="text-danger">{error}</p>}
                <p class="mb-0 text-center">Don't Have an account? <a href='/signup'> Register here</a> </p>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default LogIn
{/* <a href='/login'> Login</a> */}
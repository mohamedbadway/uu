import React, { useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import { FaRegPaperPlane, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from 'react-icons/fa6';
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';




const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sign, setSign] = useState("")
  const [error, setError] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userData = { email, password };
      await axios.post('http://localhost:8000/users', { userData });
      setSign("Signed successfully");


      console.log('user data:', userData);
    } catch (error) {
      setError('Failed to register');
    }
  };
  return (
    <>
    <Banner  className={'banner page-banner'} background={" linear-gradient(0deg, transparent, #fff0e5, #fff0e5)"}>
    <h1 className='heading mb-2'> Create Account </h1>
    <p className='mb-0'> Already Have Account?<a href='/login'> Login</a>  </p>
    </Banner>
    <div class="sign-up pt-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col1 col-lg-5">
            <form onSubmit={handleSubmit}>
              <div class=" signup-form">
                <div class="form-item">
                  <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="form-item">
                  <input type="password" name="createpassword" placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="form-item">
                  <input type="password" name="confirmpassword" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                
                <Link type="submit" class="btn mb-5" to={"/"}>
                  <span>
                    <small>Signup Now</small>
                    <small>Signup Now</small>
                  </span>
                  <FaRegPaperPlane className='ms-2' />
                </Link>
                {error && <p className="text-danger">{error}</p>}
                {sign && <p className="text-primary">{sign}</p>}
                <p class="text-center">Or Login With</p>
                <ul className='social-icons'>
                  <li>
                    <a href='#!' className='facebook'>
                      <FaFacebookF className='social-icon' />
                      <FaFacebookF className='social-icon'/>
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='twitter'>
                      <FaTwitter className='social-icon'/>
                      <FaTwitter className='social-icon'/>
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='google'>
                      <FaGoogle className='social-icon'/>
                      <FaGoogle  className='social-icon'/>
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default SignUp

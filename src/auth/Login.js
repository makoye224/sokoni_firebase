import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth, googleProvider } from '../config/firebase';
import {signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'

const Login = () => {
  // State to store email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error message

  const navigate = useNavigate()

  console.log(auth?.currentUser)

 // Function to handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  // Perform form validation
  const form = e.currentTarget;
  if (!form.checkValidity()) {
    e.stopPropagation();
    form.classList.add('was-validated');
    return;
  }

  try{
    const userCredentials =  await signInWithEmailAndPassword(auth, email, password);
    navigate('/')
  }catch(err){
    console.error(err)
    setError('wrong email or password')
  }
 
};

const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate('/')
    } catch (error) {
      console.error(error);
      console.error(error)
    }
  };


  return (
    <div className='d-flex justify-content-center align-items-center vh-10'>
     
      <Card style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Form onSubmit={handleSubmit} noValidate>
            <div className='mb-3'>

            {error && (
            <div className="alert alert-danger">{error}</div>
          )}
            
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required // Field is required
              />
              <div className='invalid-feedback'>
                Please provide a valid email address.
              </div>
            </div>
            <div className='mb-3'>
              
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required // Field is required
              />
              <div className='invalid-feedback'>
                Please provide your password.
              </div>
            </div>
            <div className='mb-3'>
              <Button
                type='submit'
                className='btn btn-primary btn-block'
                style={{ width: '100%' }}
              >
                Log In
              </Button>
            </div>
            <br/>
            <div>
            <Button
            className="btn btn-primary btn-block"
            style={{ width: '100%' }}
            onClick={signInWithGoogle}
            >
            Sign In with Google
            </Button>
            </div>
          </Form>
          <div className="mt-3 d-flex justify-content-between">
            <a href='/resetpassword'>Forgot Password?</a>
            <a href='/register'>Sign Up</a>
          </div>
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
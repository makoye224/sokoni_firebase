import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth, googleProvider} from '../config/firebase';
import {createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signInWithPopup} from 'firebase/auth'


const Register = () => {
  // State to store form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); 
  const [passwordError, setPasswordError] = useState(''); 

  const navigate = useNavigate()


   
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
        setPasswordError('passwords do not match')
        return;
    }
  
    // Perform form validation
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }
  
    try{
      const userCredentials =  await createUserWithEmailAndPassword(auth, email, password);
       // Set the user's display name
    await updateProfile(userCredentials.user, {
        firstName: firstName,
        lastName: lastName,
      });
      try{
          await sendEmailVerification(userCredentials.user)
      }catch(err){
          console.error(err)
      }
      
  
    }catch(err){
      console.log(err)
      setError(err.message)
    }
  };

  const signInWithGoogle =async()=>{
    try{
        await signInWithPopup(auth, googleProvider)
    }catch(err){
        console.error(err)
    }
  }


  return (
    <div className='d-flex justify-content-center align-items-center vh-10'>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
        <br/>
          <Card.Title>Sign Up</Card.Title>
          {error && (
            <div className="alert alert-danger">{error}</div>
          )}
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group controlId='firstName' className='mb-3'>
              <Form.Control
                type='text'
                placeholder='Enter your first name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required // Field is required
              />
              <div className='invalid-feedback'>
                Please provide your first name.
              </div>
            </Form.Group>
            <Form.Group controlId='lastName' className='mb-3'>
              <Form.Control
                type='text'
                placeholder='Enter your last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required // Field is required
              />
              <div className='invalid-feedback'>
                Please provide your last name.
              </div>
            </Form.Group>
            <Form.Group controlId='email' className='mb-3'>
              <Form.Control
                type='email'
                placeholder='Enter your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required // Field is required
              />
              <div className='invalid-feedback'>
                Please provide a valid email address.
              </div>
            </Form.Group>
            <Form.Group controlId='password' className='mb-3'>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required // Field is required
                minLength='6' // Minimum length of the password
              />
              <div className='invalid-feedback'>
                Password must be at least 6 characters.
              </div>
            </Form.Group>
            <Form.Group controlId='confirmPassword' className='mb-3'>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required // Field is required
                minLength='6' // Minimum length of the password
              />
              <div className='invalid-feedback'>
                Please confirm your password.
              </div>
              {passwordError && (<div className='alert alert-danger'>
                {passwordError}
              </div>)}
            </Form.Group>
            <div>
            <Button type='submit' className='btn btn-primary btn-block' style={{ width: '100%' }}>
              Sign Up
            </Button>
            </div>
            <br/>
            <div>
            <Button className='btn btn-primary btn-block' style={{ width: '100%' }} onClick={signInWithGoogle}>
              Sign Up with Google
            </Button>
            </div>
            <br/>
          </Form>
          <div className="mt-3 d-flex justify-content-between">
            <p>Already have an account? </p>
            <a href='/login'>Log In</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
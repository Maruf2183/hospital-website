import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Firebase/useAuth';
import './SignIn.css'

const SignIn = () => {
    const { error,signUpWithEmail, signInWithgoogle } = useAuth();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errorx, setError] = useState();





    const managaePassword = e => setPassword(e.target.value);
    const manageEmail = e => setEmail(e.target.value);

    const CreateAcoountWithEmailPassword = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at leeat 6 caracters');
            return;
            
        }
        else {

            signUpWithEmail(email, password)
            setError('')

        }
        e.target.reset();
    }
    

    console.log(email);
    console.log(password);




    return (
        <div className="container">
            <form  onSubmit={CreateAcoountWithEmailPassword} className="signin-form">
                <h2 className="title" >Please Sign up</h2>
                <h1 className='text-danger'>{error}</h1>

                <div className="input-field">
                    <span>Email</span>
                    <input onBlur={manageEmail} type="Email" placeholder="Email" required />
                </div>
                <div className="input-field">
                    <span>Pass</span>
                    <input onBlur={managaePassword} suggested="current-password" type="password" placeholder="password" required />
                </div>
                <div className='text-danger'>{errorx}</div>
                <button type='submit' className='buttonx'> Sign up</button>

                <p>Already sign in?</p>
                <a className='btn btn-primary' href='/login'> Log in</a>

                <button type='submit' onClick={() => signInWithgoogle()} className="buttonx">Google</button>


            </form>
        </div>
    );
};

export default SignIn;
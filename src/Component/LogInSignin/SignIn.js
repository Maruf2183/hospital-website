
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import useAuth from '../../Firebase/useAuth';
import './SignIn.css'

const SignIn = () => {
  

    const location = useLocation();
    const history = useHistory();
    const comeFrome = location?.state?.from || '/home';
    




    const { error, signUpWithEmail, signInWithgoogle, isloading } = useAuth();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');
    const [errorx, setError] = useState();





    const managaePassword = e => setPassword(e.target.value);
    const manageEmail = e => setEmail(e.target.value);
    const manageName = e => setName(e.target.value);

    const CreateAcoountWithEmailPassword = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at leeat 6 caracters');
            return;

        }
        else {
            signUpWithEmail(name, email, password, history, comeFrome)
            setError('')
        }
        e.target.reset();


    }

    if (isloading) {
        return (
            <div className='h-full min-w-full' >
                <h3>Loading ....</h3>
            </div>
        )
    };
    if (error) {
        window.location.reload();
    };
    











    return (
        <div className="loging-parent">
            <form onSubmit={CreateAcoountWithEmailPassword} className="signin-form">
                <h2 className="title" >Please Sign up</h2>
                <p style={{color:'red'}}>{error}</p>

                <div className="input-field">
                    <i class="fas fa-signature"></i>
                    <input onBlur={manageName} type="text" placeholder="Full Name" required />
                </div>
                <div className="input-field">
                    <i className="fas fa-at"></i>
                    <input onBlur={manageEmail} type="Email" placeholder="Email" required />
                </div>
                <div className="input-field">
                    <i class="fas fa-key"></i>
                    <input onBlur={managaePassword} suggested="current-password" type="password" placeholder="password" required />
                </div>
                <div className='text-danger'>{errorx}</div>
                <button type='submit' className='buttonx'> Sign up</button>

                <p>Already sign in?</p>
                <a className='btn btn-primary' href='/login'> Log in</a>

                <button type='submit' onClick={() => signInWithgoogle(history, comeFrome)} className="buttonx">Google</button>


            </form>
        </div>
    );
};

export default SignIn;
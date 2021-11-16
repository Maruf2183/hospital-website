

import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';




import useAuth from '../../Firebase/useAuth';



const LogIn = () => {
    const location = useLocation();
    const history = useHistory();
    const comeFrom = location?.state?.from || '/home';







    const { error, signInWithgoogle, signInWithEmail } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorx, setError] = useState('');





    const managaePassword = e => setPassword(e.target.value);
    const manageEmail = e => setEmail(e.target.value);


    const logInwithEmailPassword = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at leeat 6 caracters');
            return;

        }
        else {
            signInWithEmail(email, password, history, comeFrom)
            setError('')
        }
        e.target.reset();
    }
    if (error) {
        window.location.reload();
    };
   


    return (
        <div className="loging-parent">
            <form onSubmit={logInwithEmailPassword} className="signin-form">
                <h2 className="title" >Please Log In</h2>

                <p style={{color:'red'}}>{error}</p>


                <div className="input-field">
                    <i className="fas fa-at"></i>
                    <input onBlur={manageEmail} type="Email" placeholder="Email" required />
                </div>
                <div className="input-field">
                    <i class="fas fa-key"></i>
                    <input onBlur={managaePassword} type="password" placeholder="password" required />
                </div>
                <div className='text-danger'>{errorx}</div>
                <button type='submit' className="buttonx">Log In</button>

                <p>Not Sign in yet ?</p>
                <h5>Please Sign in first....</h5>
                <NavLink className='btn btn-primary ' to={{ pathname: '/signIn', state: { from: comeFrom } }} > Sign in </NavLink>

                <button type='button' onClick={() => signInWithgoogle(history, comeFrom)} className="buttonx">Google</button>




            </form>












        </div>
    );
};

export default LogIn;




import React, {useState } from 'react';

import useAuth from '../../Firebase/useAuth';

const LogIn = () => {

    const { error, signInWithgoogle, signInWithEmail } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorx, setError] = useState('');

 
   

   
    const managaePassword = e => setPassword(e.target.value);
    const manageEmail = e => setEmail(e.target.value);
    console.log(email);
    console.log(password);

    const logInwithEmailPassword = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at leeat 6 caracters');
            return;

        }
        else {
            signInWithEmail(email, password)
            setError('')
        }
        e.target.reset();
    }


    return (
        <div className="container">
            <form onSubmit={logInwithEmailPassword} className="signin-form">
                <h2 className="title" >Please Log In</h2>
                <h1 className='text-danger'>{error}</h1>

                <div className="input-field">
                    <span>Email</span>
                    <input onBlur={manageEmail} type="Email" placeholder="Email" required />
                </div>
                <div className="input-field">
                    <span>Pass</span>
                    <input onBlur={managaePassword} type="password" placeholder="password" required />
                </div>
                <div className='text-danger'>{errorx}</div>
                <button type='submit' className="buttonx">Log In</button>

                <p>Not Sign in yet ?</p>
                <h5>Please Sign in first....</h5>
                <a className='btn btn-primary ' href='/signIn'>Sign in</a>

                <button type='button' onClick={() => signInWithgoogle()} className="buttonx">Google</button>




            </form>




            
               

          




        </div>
    );
};

export default LogIn;
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Firebase/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isloading } = useAuth();
    if (isloading) {
        return (
            <div style={{ marginTop: '95px', minHeight: '1200px' }}>
                <div className="w-25 mx-auto text-center p-5">
                    <Spinner className='p-5' animation='border' variant='danger'></Spinner>
                </div>
            </div>
        )

    }


    return (

        <Route
            {...rest}
            render={     ({ location }) =>  user.email || user.displayName ? children : <Redirect  to={{ pathname: '/login', state: { from: location }}} > </Redirect>     } >
        </Route>
              

                   
                       
                       
                    


               




               


            
    );
};

export default PrivateRoute;
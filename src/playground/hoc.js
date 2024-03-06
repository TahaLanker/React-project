//HOC-
//reuse code
//render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
        <div>
            <h1>INFO</h1>
            <p>The info is: {props.info}</p>
        </div>
)

//HOC fxn
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <h1>This is private info.!!</h1>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const isAuthenticated = (WrappedComponent) => {
    return (props) => (
        <div>
            <h1>This is private info.!!</h1>
            {props.isAuth === true ? <WrappedComponent {...props}/> :
            <h3>Request not Authentic!! Please Login to view request.</h3>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = isAuthenticated(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info='Test Info' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info='Test Info' />, document.getElementById('app'));
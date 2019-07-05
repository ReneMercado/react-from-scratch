// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// const protectedRoute = ({ component : Component, ...rest }) => {
//     console.log(rest);
//     let auth = false;

//    return  <Route {...rest} render={(props) => {
//     return (
//          auth?  <Component {...rest}/> :  <Redirect to={{ pathname: '/', state: { from: props.location }}} />  
//     )
//     }}/>;
// };

// export default protectedRoute;

import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const protectedRoute = ({component: Component, ...rest}) => {

    return <Route {...rest} render={(props) => {
    let auth = false;

        let route =  null;
        if(auth)
            route = <Component {...props}></Component>
        else 
            route = <Redirect to={{ pathname: '/'}} ></Redirect>
        return (route);
    }}/>
}

export default protectedRoute;


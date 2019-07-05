import React, { useState, useEffect } from "react";

const hooksExample = props => {
  // MUST ONLY CALL HOOKS ON THE TOP LEVEL OF THE FUNCTION

  const [name, setName] = useState(""); //Simulate a state

  useEffect(() => {
    //always excecute when render function ends
    //useEffect Receives a function as parameter and excecute that code at the begining of the component, we have to avoid making http requests in render method.
    //axios get here

    // for(let key in mustBeObject){
    //     //do something like mustBeObject[key].name
    // }

    setName("test name inside use effect");

  }, []); //second argument is an array of variables that you want to check if one change then the useEffect will run again.
  // if you send empty array useEffect will run just once like componentWillMount
  // if no second argument, useEffect will run in every render event.

  const mousemoveHandler = event => {
    console.log(event.clientX);
  };
  useEffect(() => {
    document.addEventListener("mousemove", mousemoveHandler);

    return () => {
      document.removeEventListener("mousemove", mousemoveHandler);
    };
  });
};

export default hooksExample;

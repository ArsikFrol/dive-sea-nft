import React from 'react';
import './App.css'

import RouterComponent from "./router";
import { useDispatch } from "react-redux";
import axios from 'axios';

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    axios.get('http://localhost:3001/users').then(({ data }) => {
      dispatch({ type: 'OPENING_WEBSITE_USER', payload: data })
    })
    axios.get('http://localhost:3001/collection').then(({ data }) => {
      dispatch({ type: 'OPENING_WEBSITE_COLLECTION', payload: data })
    })
  }, [])

  return (
    <>
      <RouterComponent />
    </>
  );
}

export default App;

import './App.css'
import {useEffect, useReducer} from 'react';
import fetchPosts from './api/postsApi';
import { postsReducer, initialState } from './reducer/postsReducer';

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  useEffect = () => {
    async function load() {
      dispatch({type: "FETCH_START"});
      try {
      const data = await fetchPosts();
      dispatch({type: "FETCH_SUCCESS", payload: data});
      } catch (error) {
      dispatch({type: "FETCH_ERROR", payload: error.message});
      }
    }
    load();
  }, []; 

  return (
    <h1>Post Dashboard</h1>
    
  );
}

export default App;

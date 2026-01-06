import './App.css'
import {useEffect, useReducer} from 'react';
import fetchPosts from './api/postsApi';
import { postsReducer, initialState } from './reducer/postsReducer';
import PostList from './components/PostList';

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  useEffect(() => {
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
  }, []);

  const filteredPosts = state.posts.filter((post) => 
  post.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>Post Dashboard</h1>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      {!state.loading && !state.error && (
        <PostList posts={filteredPosts}></PostList>
      )}
    </div>
  );
}

export default App;

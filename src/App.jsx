import './App.css'
import {useEffect, useReducer, useState} from 'react';
import fetchPosts from './api/postsApi';
import { postsReducer, initialState } from './reducer/postsReducer';
import PostList from './components/PostList';
import FilterForm from './components/FilterForm';

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");

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
    <div className='App'>
      <h1>Post Dashboard</h1>
      <FilterForm searchTerm={searchTerm} onSearch={setSearchTerm}></FilterForm>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      {!state.loading && !state.error && (
        <>
          {filteredPosts.length === 0 ? (
            <div>
              <h3>No posts found</h3>
            </div>
          ) : (
            <PostList posts={filteredPosts}></PostList>
            )}
            </>
      )}
    </div>
  );
}

export default App;
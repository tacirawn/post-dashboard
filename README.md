File Organization

src/api/: Contains postsApi.js for handling API requests (fetching data).

src/components/: Contains UI components:

PostList.jsx: Renders the list of posts.

Post.jsx: Renders individual post cards.

FilterForm.jsx: The search input component for filtering posts.

src/reducer/: Contains postsReducer.js which manages the application state (posts, loading, error).

App.jsx: The main component that connects the reducer, API, and UI components.

App.css: Styling for the application layout and components.


Challenges

Initially, the initialState was defined as a function instead of an object, causing state access issues. Corrected initialState to be a plain object { posts: [], loading: false, error: null }.

The reducer was expecting action.payLoad, but the dispatch was sending payload. This resulted in empty data. Fixed the typo in postsReducer.js to match the dispatched action property (action.payload).
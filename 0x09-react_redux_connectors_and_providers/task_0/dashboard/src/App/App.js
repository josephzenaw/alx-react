// dashboard/src/App/App.js

import React from 'react';
import { connect } from 'react-redux'; // Import 'connect' from 'react-redux'

function App({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome to the Dashboard</h1>
      ) : (
        <h1>Please log in to access the Dashboard</h1>
      )}
    </div>
  );
}

// mapStateToProps connects the Redux state to your component props
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.isLoggedIn, // Access the 'isLoggedIn' property from uiReducer
  };
};

// Connect the component to Redux
export default connect(mapStateToProps)(App);


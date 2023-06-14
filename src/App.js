//import react
import React from 'react';
//import toats
import { Toaster } from 'react-hot-toast';
//import routes
import PublicRoutes from './routes/PublicRoute';

function App() {
  return (
    <React.Fragment>
        <Toaster/>
        <PublicRoutes />
    </React.Fragment>
  );
}

export default App;

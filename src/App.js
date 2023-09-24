
import './App.css';

import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
 const  pagesize=6;
 const  country="in"
 const apikey = process.env.REACT_APP_NEWS_API
  
 const [progress, setprogress] = useState(0);



    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        height = {3}
        progress={progress}
       
      />

          <Routes>
            <Route exact path="/"              element={<News setprogress = {setprogress } apikey = {apikey} key="general" pagesize={pagesize} country={country} category="general" />} />
            <Route exact path="/business"      element={<News setprogress = {setprogress } apikey = {apikey} key="business" pagesize={pagesize} country={country} category="business" />} />
            <Route exact path="/entertainment" element={<News setprogress = {setprogress } apikey = {apikey} key="entertainment" pagesize={pagesize} country={country} category="entertainment" />} />
            <Route exact path="/general"       element={<News setprogress = {setprogress } apikey = {apikey} key="general" pagesize={pagesize} country={country} category="general" />} />
            <Route exact path="/health"        element={<News setprogress = {setprogress } apikey = {apikey} key="health" pagesize={pagesize} country={country} category="health" />} />
            <Route exact path="/science"       element={<News setprogress = {setprogress } apikey = {apikey} key="science" pagesize={pagesize} country={country} category="science" />} />
            <Route exact path="/sports"        element={<News setprogress = {setprogress } apikey = {apikey} key="sports" pagesize={pagesize} country={country} category="sports" />} />
            <Route exact path="/technology"    element={<News setprogress = {setprogress } apikey = {apikey} key="technology" pagesize={pagesize} country={country} category="technology" />} />
          </Routes>
        </Router>
      </div>
    )

}
 
export default App;

App.propTypes = {
  category: PropTypes.string,
};


import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pagesize=6;
  country="us"
  apikey = process.env.REACT_APP_NEWS_API
  

  state = {
    progress : 0
  }

  setProgess = (progress)=>{
    this.setState({progress : progress})
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        height = {3}
        progress={this.state.progress}
       
      />

          <Routes>
            <Route exact path="/"              element={<News setProgess = {this.setProgess } apikey = {this.apikey} key="general" pagesize={this.pagesize} country={this.country} category="general" />} />
            <Route exact path="/business"      element={<News setProgess = {this.setProgess } apikey = {this.apikey} key="business" pagesize={this.pagesize} country={this.country} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgess = {this.setProgess } apikey = {this.apikey} key="entertainment" pagesize={this.pagesize} country={this.country} category="entertainment" />} />
            <Route exact path="/general"       element={<News setProgess = {this.setProgess } apikey = {this.apikey} key="general" pagesize={this.pagesize} country={this.country} category="general" />} />
            <Route exact path="/health"        element={<News setProgess = {this.setProgess } apikey = {this.apikey} key="health" pagesize={this.pagesize} country={this.country} category="health" />} />
            <Route exact path="/science"       element={<News setProgess = {this.setProgess } apikey = {this.apikey} key="science" pagesize={this.pagesize} country={this.country} category="science" />} />
            <Route exact path="/sports"        element={<News setProgess = {this.setProgess } apikey = {this.apikey} key="sports" pagesize={this.pagesize} country={this.country} category="sports" />} />
            <Route exact path="/technology"    element={<News setProgess = {this.setProgess } apikey = {this.apikey} key="technology" pagesize={this.pagesize} country={this.country} category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

App.propTypes = {
  category: PropTypes.string,
};

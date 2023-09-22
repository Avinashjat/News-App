
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loadingimg from './Loadingimg';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class News extends Component {

  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page :1 
    };
  }

  async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94903894357049f3adb1f24ae0b50794&page=1&pagesize=${this.props.pagesize}`;
    this.setState({ loading : true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults,
      loading : false }); 
  }
  

  clickpage1 = async()=>{

    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94903894357049f3adb1f24ae0b50794&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    this.setState({ loading : true})
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ articles: parsedData.articles }); 

  this.setState({
    page : this.state.page-1,
    articles: parsedData.articles,
    loading : false
   })
  
  }
  

  clickpage2 =async()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)){

    }else
    {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94903894357049f3adb1f24ae0b50794&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({ loading : true})
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ articles: parsedData.articles }); 

    this.setState({
       page : this.state.page+1,
       articles: parsedData.articles,
       loading : false
      })
    }
  }


  render() {
    return (
      
      <div className="container my-3">
        
        <h1 className='text-center' style={{margin : "35px 0" }}>News World - Top headlines</h1>
        {this.state.loading&& <Loadingimg />}
        <div className="row">
          {this.state.articles.length > 0 ? ( // Check if articles array is not empty
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 44) : ''}
                    description={element.description ? element.description.slice(0, 88) : ''}
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              ); 
            })
          ) :
           <p> </p>
          }
        </div>

              <div className="container d-flex justify-content-between">

                <button disabled={this.state.page<=1} type="button" className="btn btn-dark "  onClick={this.clickpage1} >&larr; Previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.clickpage2}> Next &rarr;</button>
              </div>
      </div>
    );
  }
}

export default News;

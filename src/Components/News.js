
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loadingimg from './Loadingimg';



export class News extends Component {

  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page :1 
    };
  }

  async updatecodes (){
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94903894357049f3adb1f24ae0b50794&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading : true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults,
      loading : false }); 
  }

  async componentDidMount() {
    this.updatecodes();
  }
  

  clickpage1 = async()=>{


  this.setState({ page : this.state.page-1});
  this.updatecodes();
  }
  

  clickpage2 =async()=>{
  
  this.setState({ page : this.state.page+1});
  this.updatecodes();
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
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    
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

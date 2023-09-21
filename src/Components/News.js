// import React, { Component } from 'react'
// import NewsItem from './NewsItem'

// export class News extends Component {

    
//     constructor(){
//       console.log("i am consuturor")
//         super();
//        this.state ={
//                articals :[ ],
//                loading : false
//        }
        
//     }

//    async componentDidMount(){
//      let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=94903894357049f3adb1f24ae0b50794"
//      let data = await fetch(url);
//      let parsedData = await data.json();
//      this.setState({articals :parsedData.articals })
//     }

//   render() {
 
//     return (
//       <div className = " container my-3">
//         <h2> News World - Top headline </h2>
      
   
//              <div className="row">
//              {this.state.articals.map((element)=>{
//               return <div className="col-md-4" key={element.url}>
//               <NewsItem  title={element.title?element.title.slice(0,44):""} discription={element.description?element.description.slice(0,88):""}  imgurl ={element.urlToImage} newsurl={element.url} />
//               </div>

//               })}
                
//            </div>
           
//       </div>
//     )
//   }
// }

// export default News






import React, { Component } from 'react';
import NewsItem from './NewsItem';

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


    let url ='https://newsapi.org/v2/top-headlines?country=in&apiKey=94903894357049f3adb1f24ae0b50794&page=1&pagesize=15';
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults }); 
  }
  

  clickpage1 = async()=>{

    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=94903894357049f3adb1f24ae0b50794&page=${this.state.page-1}&pagesize=15`;
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ articles: parsedData.articles }); 

  this.setState({
    page : this.state.page-1,
    articles: parsedData.articles
   })
  
  }
  

  clickpage2 =async()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalResults/15)){

    }else
    {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=94903894357049f3adb1f24ae0b50794&page=${this.state.page+1}&pagesize=15`;
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ articles: parsedData.articles }); 

    this.setState({
       page : this.state.page+1,
       articles: parsedData.articles
      })
    }
  }


  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center'>News World - Top headlines</h1>

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
          ) : (
            <p>Loading...</p>
          )}
        </div>

              <div className="container d-flex justify-content-between">

                <button disabled={this.state.page<=1} type="button" className="btn btn-dark "  onClick={this.clickpage1} >&larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.clickpage2}> Next &rarr;</button>
              </div>
      </div>
    );
  }
}

export default News;

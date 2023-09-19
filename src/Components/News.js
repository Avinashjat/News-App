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
      loading: true,
    };
  }

  async componentDidMount() {
    let url =
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=94903894357049f3adb1f24ae0b50794';
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles }); 
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News World - Top headlines</h2>

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
      </div>
    );
  }
}

export default News;

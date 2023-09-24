// lksjdfdlksjfdslkf343kdfsldkfjdslfj




// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Loadingimg from './Loadingimg';
// import InfiniteScroll from "react-infinite-scroll-component";



// export class News extends Component {

//  capitalizeFirstLetter=(string)=> {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: true,
//       page :1 ,
//       totalResults : 0
//     };
//     document.title = `World News - ${this.capitalizeFirstLetter(props.category)}`
//   }

//   async updatecodes (){
//     props.setProgess(20);
//     const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pagesize=${props.pagesize}`;
//     this.setState({ loading : true})
//     let data = await fetch(url);
//     props.setProgess(45);
//     let parsedData = await data.json();
//     props.setProgess(70);
//     this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults,
//       loading : false }); 
//       props.setProgess(100);
//   }

//   async componentDidMount() {
//     this.updatecodes();
//   }
  
//   clickpage1 = async()=>{
//   this.setState({ page : this.state.page-1});
//   this.updatecodes();
//   }
  
//   clickpage2 =async()=>{
//   this.setState({ page : this.state.page+1});
//   this.updatecodes();
//   }

//   fetchMoreData = async () => {
//     this.setState({ page : this.state.page+1});
//     const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pagesize=${props.pagesize}`;
    
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({ articles: this.state.articles.concat(parsedData.articles)
//       ,totalResults:parsedData.totalResults,
//       loading : false }); 
//   };

//   render() {
//     return (
//       <>
 
        
//         <h1 className='text-center' style={{margin : "35px 0" }}>News World - Top  {this.capitalizeFirstLetter(props.category)} headlines</h1>
//         {this.state.loading && <Loadingimg />}
        
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<h4> <Loadingimg /> </h4>}
//         >
 
//         <div className="container">
//         <div className="row">
//            {  this.state.articles.map((element) => {
//               return (
//                 <div className="col-md-4" key={element.url}>
//                   <NewsItem
//                     title={element.title ? element.title.slice(0, 44) : ''}
//                     description={element.description ? element.description.slice(0, 88) : ''}
//                     imgurl={element.urlToImage}
//                     newsurl={element.url}
//                     author={element.author}
//                     date={element.publishedAt}
//                     source={element.source.name}
                    
//                   />
//               </div>
//               )
//             }) }
//             </div>
//         </div>
//         </InfiniteScroll>

     
//        </>
//     );
//   }
// }

// export default News;



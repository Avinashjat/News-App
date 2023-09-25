
import React, {useEffect ,useState } from 'react';
import NewsItem from './NewsItem';
import Loadingimg from './Loadingimg';
import InfiniteScroll from "react-infinite-scroll-component";



const News =(props)=> {

 const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// document.title = `World News - ${capitalizeFirstLetter(props.category)}`

const [articles, setarticles] = useState([]);
const [loading, setloading] = useState(true);
const [page, setpage] = useState(1);
const [totalResults, settotalResults] = useState(0);


  const updatecodes = async()=>{
    props.setProgress(20);
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setloading(true)
   
    let data = await fetch(url);
    props.setProgress(45);
    let parsedData = await data.json();
    props.setProgress(70);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    updatecodes();
   // eslint-disable-next-line 
  },[]);

  
  
  // const clickpage1 = async()=>{
  //     setpage(page-1)
  // updatecodes();
  // }
  
  // const clickpage2 =async()=>{
  //   setpage(page+1)

  // updatecodes();
  // }



  const fetchMoreData = async () => {
    
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setpage(page+1)
    
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };

 
    return (
      <>
 
        
        <h1 className='text-center' style={{margin : "35px 0",marginTop : "80px" }}>News World - Top  {capitalizeFirstLetter(props.category)} headlines</h1>
        {loading && <Loadingimg />}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={ <Loadingimg />}
        >
 
        <div className="container">
        <div className="row">
           { articles.map((element) => {
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
              )
            }) }
            </div>
        </div>
        </InfiniteScroll>

     
       </>
    );
  
}

export default News;





import React from 'react'

const NewsItem =(props)=> {
  
    let {title , discription,imgurl,newsurl,author,date,source}= props
    return (
      <div className="my-3">
           <div className="card" >
           <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left : "88%" , zIndex : 1 }}>
    {source}
    <span className="visually-hidden">unread messages</span>

  </span>
  <img src={imgurl?imgurl:"https://english.cdn.zeenews.com/sites/default/files/2023/09/18/1283694-aditya-l1-isro.jpg"} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}</p>
    <p className="card-text"><small className="text-body-secondary">  by {author?author:"Unknow"} on {new Date(date).toGMTString()} </small></p>
    <a href={newsurl} target='_blank)' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem

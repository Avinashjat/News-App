import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , discription,imgurl,newsurl}= this.props
    return (
      <div className="my-3">
           <div className="card" style={{width: "18rem"}}>
  <img src={imgurl?imgurl:"https://english.cdn.zeenews.com/sites/default/files/2023/09/18/1283694-aditya-l1-isro.jpg"} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}</p>
    <a href={newsurl} target='_blank)' className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem

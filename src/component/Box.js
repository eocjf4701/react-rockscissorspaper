import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img src="https://mnmsoft.co.kr/aivs/images/1.png" className="item-img" />
      <h2>Win</h2>
    </div>
  )
}

export default Box
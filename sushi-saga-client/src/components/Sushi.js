import React from 'react'

const Sushi = ({data, handleSushiClick}) => {
  let {id, name, img_url, price, ...info} = data
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => handleSushiClick(id, price)}>
        { info.eaten ? null : <img src={img_url} width="100%" alt=""/> }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
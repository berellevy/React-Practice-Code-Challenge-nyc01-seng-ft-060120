import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({ sushiList=[], nextFour=f=>f, handleSushiClick=f=>f }) => {

  let sushiCards = sushiList.map(sushi => {
      return (
        <Sushi 
            key={sushi.id} 
            data={sushi} 
            handleSushiClick={handleSushiClick} 
        />
      )
  })
  
  return (
    <Fragment>
      <div className="belt">
        {sushiCards}
        <MoreButton nextFour={nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
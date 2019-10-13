import React, {Fragment} from 'react'

const Sushi = (props) => {

  let images = props.sushi.img_url
  let sushi = props.sushi

  return (
    <Fragment>
      <div className="sushi">
        <div className="plate"
          onClick={() => props.eat(sushi)}>
          {
            props.eatenSushi.includes(sushi) ?
              null
              :
              <img src={images} width="100%" alt="sushi"/>
          }
        </div>
        <h4 className="sushi-details">
          <p>{sushi.name}</p>
          ${sushi.price}
        </h4>
      </div>
    </Fragment>
    )
}

export default Sushi

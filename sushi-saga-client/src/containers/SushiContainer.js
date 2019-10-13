import React, {Fragment} from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) =>{

    // let limitSushi = this.state.remainingSushi.slice(0,4)

    return <div className="belt">
      <Fragment>
        {
          props.fourSushi.map(sushi => {
            return <Sushi
              eat={props.eat}
              eatenSushi={props.eatenSushi}
              sushi={sushi}
              key={sushi.id}
              />
          })
        }
        <MoreButton
          moreSushi={props.moreSushi}
          />
      </Fragment>
    </div>
}
// <Fragment>
// <div className="belt">
// {
// limitSushi.map(sushi => {
// <Sushi
//   sushiInfo={null}
//   key={null}
//   eatenSushi={null}
//   />
// })
// }
// <MoreButton
//   remainingSushi={this.state.remainingSushi}
//   updateSushis={this.updateSushis}/>
// </div>
// </Fragment>

export default SushiContainer

import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} key={index}/>
    })
  }

  // const storeEarnings = () => {
  //   let
  //   return props.eatenSushi.map(sushi => {
  //     return sushi.price + sushi.price
  //   })
  // }
  // console.log(props.storeEarnings)
  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.totalMoney } remaining! <br></br>
      The sushi store has made: ${null}
      </h1>
      <h5>Add more money here:</h5>
      <form
        onChange={props.getAmount}
        onSubmit={event => props.addMoney(event)}>
        $<input type="number"></input><br></br>
      <input type="submit" value="Add Money"></input>
    </form>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table

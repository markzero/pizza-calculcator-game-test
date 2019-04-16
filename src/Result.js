import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import Content from "./components/Content"
import Title from "./components/Title"

function Result({location: {state: {age, height, weight, bodyType}}}) {
  let capacity = 1
  if (age < 15 || height < 160 || weight < 70 || bodyType === 'Skinny') {
    capacity = 0.5
  } else if (height > 190 || weight > 90 || bodyType === 'Fat') {
    capacity = 1.5
  }

  return (
    <Content>
      <Title>Your capacity is:</Title>
      <p className="p-4 text-center">
        {`${capacity} ${capacity === 1 ? 'Pizza' : 'Pizzas'}`}
      </p>
      <div className="flex justify-end">
        <Link to="/">Calculate again</Link>
      </div>
    </Content>
  )
}

export default withRouter(Result)

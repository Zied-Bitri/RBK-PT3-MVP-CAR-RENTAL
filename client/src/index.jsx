import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Car from './components/Car.jsx'

const App = () => {
  const [cars, setCars] = useState([])
  useEffect(() => {
    $.ajax({
      url: '/api/cars',
      success: (data) => {
        console.log(data)
        setCars(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [])

  return (
    <div>
      <h1>Car Rental</h1>
      <Car cars={cars} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

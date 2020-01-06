'use strict'

import React from 'react'
import Square from './square'

// Class
class App extends React.Component {
  render () {
    return (
      <div className='container'>
        {['blue', 'red', 'green'].map((square) => (
          <Square key={square} color={square} />
        ))}
      </div>
    )
  }
}

// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         <Title name='Wellyson' />
//       </div>
//     )
//   }
// })

export default App

'use strict'

import React from 'react'
import Square from './square'

// Class
class App extends React.Component {
  render () {
    return (
      <div
        className='container' onClick={function (e) {
          alert('clicou')
        }}
      >
        <Square />
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

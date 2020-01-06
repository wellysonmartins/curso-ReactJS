'use strict'

import React from 'react'
import Title from './title'

// Class
class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Title name='Wellyson' />
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

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TodoContainer from './TodoContainer'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<TodoContainer />, document.getElementById('root'))
registerServiceWorker()

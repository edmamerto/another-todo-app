import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TodoContainer from './TodoContainer'
import registerServiceWorker from './registerServiceWorker'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<TodoContainer />, document.getElementById('root'))
registerServiceWorker()

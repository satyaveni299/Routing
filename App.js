import {Route, Switch, Redirect} from 'react-router-dom'

import NotFound from './components/NotFound'
import Home from './components/Home'
import Login from './components/Login'

import './App.css'

const App = () => (
  <div className="app-body">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ebank/login" component={Login} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/bad-path" component={NotFound} />
      <Redirect to="/ebank/login" />
    </Switch>
  </div>
)

export default App

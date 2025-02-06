import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    id: '',
    pin: '',
    showSubmitError: false,
    errorMsg: '',
  }

  changePin = event => {
    this.setState({pin: event.target.value})
  }

  changeId = event => {
    this.setState({id: event.target.value})
  }

  validateInputs = () => {
    const {id, pin} = this.state

    if (id.trim() === '' && pin.trim() === '') {
      this.setState({
        showSubmitError: true,
        errorMsg: 'User ID and PIN cannot be empty',
      })
      return false
    }
    if (id.trim() === '') {
      this.setState({
        showSubmitError: true,
        errorMsg: 'Invalid user ID',
      })
      return false
    }
    if (pin.trim() === '') {
      this.setState({showSubmitError: true, errorMsg: 'Invalid PIN'})
      return false
    }
    return true
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitLogin = async event => {
    event.preventDefault()

    if (!this.validateInputs()) {
      return
    }

    const {id, pin} = this.state
    const userDetails = {user_id: id, pin}
    const loginApiUrl = 'https://apis.ccbp.in/ebank/login'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(loginApiUrl, options)
      const data = await response.json()

      if (response.ok) {
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.onSubmitFailure(data.error_msg)
      }
    } catch (error) {
      this.onSubmitFailure('Something went wrong. Please try again!')
    }
  }

  render() {
    const {id, pin, showSubmitError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <form className="login-container" onSubmit={this.submitLogin}>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>
        <div className="input-container">
          <h1>Welcome Back!</h1>
          <label htmlFor="userid">User ID</label>
          <input type="text" value={id} onChange={this.changeId} id="userid" />
          <br />
          <label htmlFor="PIN">PIN</label>
          <input
            type="password"
            value={pin}
            onChange={this.changePin}
            id="PIN"
          />
          <br />
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">{errorMsg}</p>}
        </div>
      </form>
    )
  }
}

export default Login

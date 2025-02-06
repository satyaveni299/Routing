import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Home = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  return (
    <div className="home-container">
      <div className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <button onClick={onLogout}>Logout</button>
      </div>
      <div className="data-container">
        <h1>Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </div>
    </div>
  )
}

export default Home

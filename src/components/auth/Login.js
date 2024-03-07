import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, FormGroup, Input } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.css"

export const Login = ({ setLoggedInUser }) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    //TODO: handle submit functionality
  }

  return (
    <div className="login__container">
      <div className="login__card">
        <h1 className="login__title">Rare</h1>
        <FormGroup id="login__username">
          <Input
            id="login__username-input"
            className="login__input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </FormGroup>

        <FormGroup id="login__email">
          <Input
            id="login__email-input"
            className="login__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </FormGroup>

        <Button color="primary" onClick={handleSubmit} className="login__btn">
          Login
        </Button>
      </div>

      <p className="login__register-link">
        Don't have an account yet? Click{" "}
        <Link to="/register" id="auth-link">
          here
        </Link>{" "}
        to sign up!
      </p>
    </div>
  )
}

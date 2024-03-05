import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, FormGroup, Input, Label } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.css"

export const Register = ({ setLoggedInUser }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordVer, setPasswordVer] = useState("")
  const [picUrl, setPicUrl] = useState("") //TODO: display profile image
  const [bio, setBio] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    //TODO: handle submit functionality
  }

  return (
    <div className="login__container">
      <div className="login__card">
        <h1 className="login__title">Rare</h1>

        <div className="register__content-container">
          <div className="register__content-a">
            <FormGroup id="login__first-name">
              <Label for="login__first-name-input"></Label>
              <Input
                id="login__first-name-input"
                className="register__input"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>

            <FormGroup id="login__last-name">
              <Label for="login__last-name-input"></Label>
              <Input
                id="login__last-name-input"
                className="register__input"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>

            <FormGroup id="login__email">
              <Label for="login__email-input"></Label>
              <Input
                id="login__email-input"
                className="register__input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
          </div>

          <div className="register__content-b">
            <FormGroup id="login__username">
              <Label for="login__username-input"></Label>
              <Input
                id="login__username-input"
                className="register__input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>

            <FormGroup id="login__password">
              <Label for="login__password-input"></Label>
              <Input
                id="login__password-input"
                className="register__input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>

            <FormGroup id="login__password-ver">
              <Label for="login__password-ver-input"></Label>
              <Input
                id="login__password-ver-input"
                className="register__input"
                type="password"
                placeholder="Verify Password"
                value={passwordVer}
                onChange={(e) => setPasswordVer(e.target.value)}
              />
            </FormGroup>

            <FormGroup id="login__pic-url">
              <Label for="login__pic-url-input"></Label>
              <Input
                id="login__pic-url-input"
                className="register__input"
                type="text"
                placeholder="Profile Pic URL"
                value={picUrl}
                onChange={(e) => setPicUrl(e.target.value)}
              />
            </FormGroup>

            <FormGroup id="login__bio">
              <Label for="login__bio-input"></Label>
              <Input
                id="login__bio-input"
                className="register__input"
                type="textarea"
                placeholder="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </FormGroup>
          </div>
        </div>

        <Button color="primary" className="login__btn" onClick={handleSubmit}>
          Register
        </Button>
      </div>
      <p className="login__register-link">
        Already signed up? Log in{" "}
        <Link to="/login" id="auth-link">
          here
        </Link>
        !
      </p>
    </div>
  )
}

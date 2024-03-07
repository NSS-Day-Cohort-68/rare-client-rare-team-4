import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, FormGroup, Input, Label } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.css"
import { createUser, getUserByEmail, getUserById } from "../../managers/userManager"
import { isEmptyObject } from "../../helper"

export const Register = ({ setLoggedInUser }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const trimInput = () => {
    setFirstName(firstName.trim())
    setLastName(lastName.trim())
    setUsername(username.trim())
    setEmail(email.trim())
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    trimInput()

    if (!firstName || !lastName || !username || !email) {
      window.alert("Please complete the required fields")
    } else {
      getUserByEmail(email).then((user) => {
        if (!isEmptyObject(user)) {
          window.alert("Account already in use")
        } else {
          createUser({
            first_name: firstName,
            last_name: lastName,
            username,
            email,
          }).then((newUserToken) => {
            getUserById(newUserToken.token).then((newUser) => {
              localStorage.setItem(
                "rare_user",
                JSON.stringify({
                  ...newUser,
                })
              )
              setLoggedInUser(newUser)
              navigate("/")
            })
          })
        }
      })
    }
  }

  return (
    <div className="login__container">
      <div className="login__card">
        <h1 className="login__title">Rare</h1>

        <div className="register__content-container">
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

          <FormGroup id="login__username">
            <Label for="login__username-input"></Label>
            <Input
              id="login__username-input"
              className="register__input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value.replace(/\s/g, "").trim().toLowerCase())}
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
              onChange={(e) => setEmail(e.target.value.replace(/\s/g, "").trim().toLowerCase())}
            />
          </FormGroup>
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

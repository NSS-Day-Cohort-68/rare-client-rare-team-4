import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, FormGroup, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { getUserByEmail } from "../../managers/userManager";
import { isEmptyObject } from "../../helper";

export const Login = ({ setLoggedInUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email) {
      window.alert("Please complete the required fields");
    } else {
      getUserByEmail(email).then((user) => {
        if (!isEmptyObject(user)) {
          localStorage.setItem(
            "rare_user",
            JSON.stringify({
              ...user,
            })
          );

          setLoggedInUser(user);
          navigate("/");
        } else {
          window.alert("Invalid username or email");
        }
      });
    }
  };

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
            onChange={(e) =>
              setUsername(
                e.target.value.replace(/\s/g, "").trim().toLowerCase()
              )
            }
            placeholder="Username"
          />
        </FormGroup>

        <FormGroup id="login__email">
          <Input
            id="login__email-input"
            className="login__input"
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value.replace(/\s/g, "").trim().toLowerCase())
            }
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
  );
};

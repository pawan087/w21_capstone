import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import * as sessionActions from "../../store/session";
import styles from "./SignupForm.module.css";

function SignupFormPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  // const [email, setEmail] = useState("chahal.pawanpreet@gmail.com");
  // const [username, setUsername] = useState("pawan087");
  // const [password, setPassword] = useState("password");
  // const [confirmPassword, setConfirmPassword] = useState("password");
  // const [firstName, setFirstName] = useState("Pawan");
  // const [lastName, setLastName] = useState("Chahal");
  // const [phone, setPhone] = useState("4082594824");
  // const [address1, setAddress1] = useState("6144 Evangeline Dr.");
  // const [address2, setAddress2] = useState("San Jose, CA 95123");
  // const [errors, setErrors] = useState([]);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setErrors([]);

      setPhone(`${phone}`);

      return dispatch(
        sessionActions.signup({
          email,
          username,
          password,
          firstName,
          lastName,
          phone,
          address1,
          address2,
        })
      ).catch(async (res) => {
        const data = await res.json();

        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.signupform}>
        {
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}

            <p>Sign-Up Form</p>
          </ul>
        }

        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <label>
          Phone
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <label>
          Street Address
          <input
            type="text"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
        </label>

        <label>
          City, State Zip
          <input
            type="text"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default SignupFormPage;

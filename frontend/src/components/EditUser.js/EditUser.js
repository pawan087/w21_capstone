import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { profileEdit } from "../../store/session";
import styles from "./EditUser.module.css";

export default function EditUser() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [phone, setPhone] = useState(user?.phone);
  const [address1, setAddress1] = useState(user?.address1);
  const [address2, setAddress2] = useState(user?.address2);
  const [repeatPassword, setRepeatPassword] = useState("");

  const onProfileEdit = async (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      return dispatch(
        profileEdit({
          id: user.id,
          username,
          email,
          password: oldPassword,
          newPassword: password,
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
    } else {
      setErrors(["Passwords do not match"]);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateOldPassword = (e) => {
    setOldPassword(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updatePhone = (e) => {
    setPhone(e.target.value);
  };

  const updateAddress1 = (e) => {
    setAddress1(e.target.value);
  };

  const updateAddress2 = (e) => {
    setAddress2(e.target.value);
  };

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.container}>
      <h2>Edit User Page</h2>

      <form className={styles.form} onSubmit={onProfileEdit}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>

        <br />
        <div>
          <div>
            <div>
              <label>User Name</label>
            </div>

            <div>
              <input
                type="text"
                name="username"
                onChange={updateUsername}
                value={username}
                placeholder="Username"
              ></input>
            </div>
          </div>

          <br />

          <div>
            <div>
              <label>Email</label>
            </div>

            <div>
              <input
                type="text"
                name="email"
                onChange={updateEmail}
                value={email}
                placeholder="Email"
              ></input>
            </div>
          </div>

          <br />

          <div>
            <div>
              <label>First Name</label>
            </div>

            <div>
              <input
                type="text"
                onChange={updateFirstName}
                value={firstName}
                placeholder="First Name"
              ></input>
            </div>
          </div>

          <br />

          <div>
            <div>
              <label>Last Name</label>
            </div>

            <div>
              <input
                type="text"
                onChange={updateLastName}
                value={lastName}
                placeholder="Last Name"
              ></input>
            </div>
          </div>

          <br />

          <div>
            <div>
              <label>Phone</label>
            </div>

            <div>
              <textarea
                onChange={updatePhone}
                value={phone}
                placeholder="Ex: (555) 555-555"
              ></textarea>
            </div>
          </div>
        </div>

        <br />
        <div>
          <div>
            <div>
              <label>Address</label>
            </div>

            <div>
              <textarea
                onChange={updateAddress1}
                value={address1}
                placeholder="Ex: 123 Main Street"
              ></textarea>
            </div>
          </div>

          <div>
            <div>
              <textarea
                onChange={updateAddress2}
                value={address2}
                placeholder="Ex: San Jose, CA 95127"
              ></textarea>
            </div>
          </div>

          <br />

          <div>
            <div>
              <label>Password</label>
            </div>

            <div>
              <input
                type="password"
                name="old_password"
                onChange={updateOldPassword}
                value={oldPassword}
                required={true}
              ></input>
            </div>
          </div>

          <div>
            <div>
              <label>New Password</label>
            </div>

            <div>
              <input
                type="password"
                name="password"
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
          </div>

          <div>
            <div>
              <label>Confirm Password</label>
            </div>

            <div>
              {/* If there's a value in the password field require the repeat password, otherwise don't require it */}

              {password ? (
                <input
                  type="password"
                  name="repeat_password"
                  onChange={updateRepeatPassword}
                  value={repeatPassword}
                  required={true}
                ></input>
              ) : (
                <input
                  type="password"
                  name="repeat_password"
                  onChange={updateRepeatPassword}
                  value={repeatPassword}
                ></input>
              )}
            </div>
          </div>

          <br />

          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

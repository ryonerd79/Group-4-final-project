import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './assets/css/loginSignup.css';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    isTeacher: false,
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setFormState({
        ...formState,
        [name]: checked,
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="main-element">
      <div className="form-container">
        <div className="form-content">
          <h4 className="signup-text">Sign Up</h4>
          <div className="form-inner">
            {data ? (
              <p>Success! You may now head</p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input
                    className="form-input"
                    placeholder="Your username"
                    name="username"
                    type="text"
                    value={formState.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-input"
                    placeholder="*********"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group is-teacher-checkbox">
                <label className="is-teacher-checkbox">
                Indicate if you're a teacher by checking the box:
                <input
                    className="form-checkbox"
                    name="isTeacher"
                    type="checkbox"
                    checked={formState.isTeacher}
                    onChange={handleChange}
                  />
                </label>
                </div>
                <button
                  className="form-submit-button"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="error-msg">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;

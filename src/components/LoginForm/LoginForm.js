import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import loginThunk from "../../redux/thunks/userThunk";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
  const dispatch = useDispatch;
  const emptyFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(emptyFields);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (formData.username !== "" && formData.password !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  const resetData = () => {
    setFormData(emptyFields);
  };

  const changeData = (event) =>
    setFormData({ ...formData, [event.target.id]: event.target.value });

  const submitLogin = (event) => {
    event.preventDefault();
    dispatch(loginThunk(formData));
    resetData();
  };

  return (
    <LoginFormStyled autoComplete="off" noValidate onSubmit={submitLogin}>
      <label htmlFor="username">
        Username:
        <input
          id="username"
          type="text"
          value={formData.username}
          onChange={changeData}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          id="password"
          type="text"
          value={formData.password}
          onChange={changeData}
        />
      </label>
      <button type="submit" disabled={buttonDisabled}>
        LOG IN
      </button>
    </LoginFormStyled>
  );
};
export default LoginForm;

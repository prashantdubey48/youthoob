import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./_loginScreen.scss";
import { login } from "../../redux/actions/auth.action";
import { useHistory } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  console.log("token", accessToken);

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  const handleLogin = () => {
    dispatch(login());
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <p>Youthoob!!!!</p>
        <button onClick={handleLogin}>Login With GOOGLE</button>
        <p>This Project is made using YOUTUBE DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreen;

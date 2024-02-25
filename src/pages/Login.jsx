import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const [image, setImage] = useState("");

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          { headers: { Authorization: `Bearer ${response.access_token}` } }
        );
        console.log(res);
        setImage(res.data.picture);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div>
      <button onClick={() => login()}>Sign in with Google 🚀</button>
      {image && <img src={image} />}
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FcGoogle } from "react-icons/fc";
import LoginCarousel from "../Components/LoginSignUpPage/LoginCarousel/LoginCarousel";
import { Link } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    uppercase: false,
    numbers: false,
    minLength: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    let uppercase = false;
    let numbers = false;
    let minLength = false;

    if (name === "password") {
      uppercase = /[A-Z]/.test(value);
      numbers = /[0-9]/.test(value);
      minLength = value.length >= 8;
    }

    setFormData({
      ...formData,
      [name]: value,
      uppercase,
      numbers,
      minLength,
    });
  };

  const handleConfirmPasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setFormData({
      ...formData,
      showConfirmPassword: !formData.showConfirmPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      setError("All fields are required.");
      setSuccess("");
  
      setTimeout(() => {
        setError("");
      }, 2000);
  
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
  
      setTimeout(() => {
        setError("");
      }, 2000);
  
      return;
    }
  
    if (!formData.uppercase || !formData.numbers || !formData.minLength) {
      setError("Password does not meet the required criteria.");
      setSuccess("");
  
      setTimeout(() => {
        setError("");
      }, 2000);
  
      return;
    }
  
    // Perform sign-up logic here
  
    // Simulating sign-up success after 1 second
    setSuccess("Sign up successful!");
  
    setTimeout(() => {
      setSuccess("");
    }, 2000);
  
    setError("");
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
      uppercase: false,
      numbers: false,
      minLength: false,
    });
  };
  

  let slides = [
    "https://www.searchenginejournal.com/wp-content/uploads/2022/09/influencer-marketing2-631aeb9e3273a-sej.png",
    "https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2Finfluencer+india.jpg&h=570&w=855&q=100&v=20170226&c=1",
    "https://agencynetwork.org/assets/upload/article/835112326202038253232_6393005ccc516923b883acee_Influencer-Marketing.jpg",
  ];

  return (
    <div className="flex flex-row h-[100vh] relative">
      {/* carousal panel */}
      <div className="h-screen w-[100%] relative">
        <LoginCarousel slides={slides} autoSlide={true} />
      </div>
      <div className="w-full md:w-[61%] p-10">
        <h2 className="text-5xl font-bold mb-4 text-left text-blue-600 font-serif">
          Keek
        </h2>
        <div className="flex flex-col space-y-4 mb-6">
          <Button
            variant="outlined"
            className="flex items-center justify-center w-full"
            startIcon={<FcGoogle />}
            style={{ color: "black", border: "1px solid lightgrey" }}
          >
            Continue with Google
          </Button>
          <Link to={"/Login_Mobile"}>
          <Button
            startIcon={<FaMobileAlt style={{ color: "grey" }} />}
            variant="outlined"
            className="flex items-center justify-center w-full"
            style={{ color: "black", border: "1px solid lightgrey" }}
          >
            Continue with Mobile Number
          </Button>
          </Link>
        </div>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label
              className="block text-left text-gray-700 mb-2"
              htmlFor="username"
            >
              Name
            </label>
            <div className="relative">
              <TextField
                size="small"
                id="username"
                name="username"
                variant="outlined"
                placeholder="John Doe"
                fullWidth
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaUser />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </div>
          </div>
          <div className="mb-1">
            <label className="block text-left text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <TextField
                size="small"
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@gmail.com"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaEnvelope />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              className="block text-left text-gray-700 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <TextField
                size="small"
                id="password"
                placeholder="Password"
                name="password"
                type={formData.showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                value={formData.password}
                onChange={handlePasswordChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                required
              />
            </div>
            <div className="mt-2 flex flex-column">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.uppercase}
                    style={{ color: formData.uppercase ? "green" : "gray" }}
                    disabled
                  />
                }
                label="Uppercase"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.numbers}
                    style={{ color: formData.numbers ? "green" : "gray" }}
                    disabled
                  />
                }
                label="Numbers"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.minLength}
                    style={{ color: formData.minLength ? "green" : "gray" }}
                    disabled
                  />
                }
                label="Min 8 Characters"
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              className="block text-left text-gray-700 mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <TextField
                size="small"
                placeholder="Password"
                id="confirmPassword"
                name="confirmPassword"
                type={formData.showConfirmPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                value={formData.confirmPassword}
                onChange={handleConfirmPasswordChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowConfirmPassword} edge="end">
                        {formData.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-600 transition mb-2 duration-200"
          >
            Sign Up
          </button>
          <div className="items-center text-center">
            <h2>
              Already have an account?&nbsp;
              <button className="text-end text-blue-600 active:text-blue-800 active:font-semibold">
                <Link to={"/"}>Login</Link>
              </button>
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

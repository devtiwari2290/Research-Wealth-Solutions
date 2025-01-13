import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md px-8 py-8">
        <div className="pb-4 max-w-44 mx-auto text-center">
          <img src="/images/logo.png" alt="" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-customTheme-theme1 focus:border-customTheme-theme1"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-customTheme-theme1 focus:border-customTheme-theme1"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="remember-me"
              className="w-4 h-4 bg-customTheme-theme1 border-gray-300 rounded focus:ring-customTheme-theme1 focus:ring-opacity-25"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
              Remember Me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-customTheme-theme1 text-white p-2 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        {/* <div className="mt-6 flex items-center justify-between">
          <span className="border-t flex-grow border-gray-300"></span>
          <span className="mx-3 text-sm text-gray-500">OR</span>
          <span className="border-t flex-grow border-gray-300"></span>
        </div> */}

        {/* Sign Up Link */}
        {/* <p className="mt-6 text-center text-sm text-gray-600">
          Dont have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Login;

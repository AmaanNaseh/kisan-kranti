import { useState } from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("customer"); // Default to "customer"

  const { login, loading } = useUserStore(); // Ensure `signup` is implemented in `useUserStore`

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter all fields");
      return;
    }
    login(email, password); // Pass role to signup function
  };

  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        className="sm:mx-auto sm:w-full sm:max-w-md"
      >
        <LogIn
          className="mx-auto h-12 w-12 text-emerald-500"
          aria-hidden="true"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
          Login
        </h2>
        {/* <p className="mt-2 text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-emerald-500 hover:text-emerald-400"
          >
            Log In
          </Link>
        </p> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="bg-gray-800 py-8 px-6 shadow rounded-lg sm:px-10">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 
                  rounded-md shadow-sm placeholder-gray-500 text-gray-300 bg-gray-700 
                  focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 
                  sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 
                  rounded-md shadow-sm placeholder-gray-500 text-gray-300 bg-gray-700 
                  focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 
                  sm:text-sm"
                />
              </div>
            </div>
            {/* 
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-300"
              >
                Login As
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="block w-full mt-1 px-3 py-2 bg-gray-700 border border-gray-600 
                rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 
                focus:border-emerald-500 sm:text-sm text-gray-300"
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
            </div> */}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent 
                rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600
                hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-emerald-500 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader
                      className="mr-2 h-5 w-5 animate-spin"
                      aria-hidden="true"
                    />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;

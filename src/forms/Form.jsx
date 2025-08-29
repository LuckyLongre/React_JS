import { useState } from "react";

export const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    message: "",
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!user.name.trim()) newErrors.name = "Name is required";
    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!user.password) {
      newErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (user.password !== user.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!user.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!user.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", user);
        setIsSubmitting(false);
        alert("Registration successful!");
      }, 1500);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <form
        onSubmit={handleSubmitForm}
        className="bg-gray-900 text-gray-100 w-full max-w-md p-8 rounded-2xl shadow-2xl space-y-6 border border-purple-700/30"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Create Account
          </h2>
          <p className="mt-2 text-gray-400">Join our community today</p>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Full Name *
          </label>
          <input
            value={user.name}
            onChange={handleInputChange}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
            className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email Address *
          </label>
          <input
            value={user.email}
            onChange={handleInputChange}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
            Phone Number *
          </label>
          <input
            value={user.phone}
            onChange={handleInputChange}
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
          />
          {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Password *
          </label>
          <input
            value={user.password}
            onChange={handleInputChange}
            type="password"
            name="password"
            id="password"
            placeholder="Create a password"
            className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.password ? 'border-red-500' : 'border-gray-700'} text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
          />
          {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
            Confirm Password *
          </label>
          <input
            value={user.confirmPassword}
            onChange={handleInputChange}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
            className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-700'} text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
          />
          {errors.confirmPassword && <p className="text-red-400 text-sm">{errors.confirmPassword}</p>}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            About Yourself (Optional)
          </label>
          <textarea
            value={user.message}
            onChange={handleInputChange}
            name="message"
            id="message"
            rows="3"
            placeholder="Tell us a bit about yourself..."
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start space-x-3">
          <input
            checked={user.agreeToTerms}
            onChange={handleInputChange}
            type="checkbox"
            name="agreeToTerms"
            id="agreeToTerms"
            className="mt-1 focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-600 rounded bg-gray-800"
          />
          <label htmlFor="agreeToTerms" className="text-sm text-gray-300">
            I agree to the <a href="#" className="text-purple-400 hover:text-purple-300">Terms and Conditions</a> *
          </label>
        </div>
        {errors.agreeToTerms && <p className="text-red-400 text-sm">{errors.agreeToTerms}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-lg font-medium text-gray-100 transition-all flex items-center justify-center ${isSubmitting ? 'bg-purple-700' : 'bg-purple-600 hover:bg-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Create Account'
          )}
        </button>

        <div className="text-center text-sm text-gray-400">
          Already have an account? <a href="#" className="font-medium text-purple-400 hover:text-purple-300">Sign in</a>
        </div>
      </form>
    </div>
  );
};
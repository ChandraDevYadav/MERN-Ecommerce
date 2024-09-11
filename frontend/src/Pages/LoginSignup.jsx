import React, { useState } from 'react'

const LoginSignup = () => {

  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const login = async () => {
    console.log("Login Function Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("Signup function Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className='w-full h-[80vh] bg-[#fce3fe] pt-12 pb-24 flex items-center justify-center'>
      <div className="w-[580px] h-[500px] bg-white p-10 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className='text-3xl font-semibold mb-4'>{state}</h1>
        <div className="flex flex-col gap-7 mt-8 w-full">
          {state === "Sign Up" && <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' className='h-[42px] w-full pl-5 border border-[#c9c9c9] text-[#5c5c5c] text-lg' />}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' className='h-[42px] w-full pl-5 border border-[#c9c9c9] text-[#5c5c5c] text-lg' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' className='h-[42px] w-full pl-5 border border-[#c9c9c9] text-[#5c5c5c] text-lg' />
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }} className='w-full h-[52px] bg-[#ff4141] text-white text-xl font-medium rounded-lg mt-8 cursor-pointer'>Continue</button>
        <p className='mt-5 text-[#5c5c5c] text-lg font-medium'>
          {state === "Sign Up" ? "Already have an account? " : "Create an account? "}
          <span onClick={() => { setState(state === "Login" ? "Sign Up" : "Login") }} className='text-[#ff4141] font-semibold cursor-pointer'>
            {state === "Sign Up" ? "Login here" : "Click here"}
          </span>
        </p>
        <div className="flex items-center gap-5 mt-6 text-[#5c5c5c] text-lg font-medium">
          <input type="checkbox" />
          <p>By continuing I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup

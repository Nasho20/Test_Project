// import React, { useState } from "react";
// import "../styles/Register.css"

// export default function Register() {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [birthday, setBirthday] = useState('');
//     const [phone, setPhone] = useState('');
//     const [password, setPassword] = useState('');
//     const [photo, setPhoto] = useState('');
//     const [adress, setAdress] = useState('');
//     const [linkedin, setLinkedin] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(username);

//     }
//     return (
//         <div className='bg-image'>
//             <div className='login-box'>
//                 <h1>Dont't have an account? <br /> Register here</h1>
//                 <form onSubmit={handleSubmit} className='register-form'>
//                     <label htmlFor='username'></label>
//                     <input value={username} type="username" placeholder="Username" id="username" onChange={(e) => setUsername(e.target.value)} /><br />
//                     <label htmlFor='email'></label>
//                     <input value={email} type="email" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} /><br />
//                     <label htmlFor='password'></label>
//                     <input value={password} type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} /> <br />
//                     <input type="checkbox" id="remember-me" name="remember-button" value="Remember" />
//                     <label for="remember-button">Remember me</label><br />
//                     <a href="/">Forgot your password?</a> <br />
//                     <button className='signup'>SIGN UP</button><button type='submit'>LOGIN</button>
//                 </form>
//             </div>
//         </div>
//     )
// }



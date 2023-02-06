// import React, { useState } from "react";
// import UserProfile from "./UserProfile";

// function LoginExample() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     try {
//       const response = await fetch("https://reqres.in/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       const jsonData = await response.json();
//       for (var i = 0; i <= jsonData.data.length; i++) {
//         const checkEmail = jsonData.data[i].email === email;
//         if (checkEmail) {
//           setLoggedIn(true);
//           setError(false);
//           break;
//         } else {
//           setLoggedIn(false);
//           setError(true);
//         }
//       }
//       //   console.log(jsonData);
//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   if (loggedIn) return <UserProfile />;
//   else
//     return (
//       <form
//         onSubmit={handleSubmit}
//         style={{ width: "300px", margin: "0 auto" }}
//       >
//         <div style={{ margin: "10px 0" }}>
//           <label htmlFor="email" style={{ display: "block" }}>
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ width: "100%", padding: "5px" }}
//           />
//         </div>
//         <div style={{ margin: "10px 0" }}>
//           <label htmlFor="password" style={{ display: "block" }}>
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ width: "100%", padding: "5px" }}
//           />
//         </div>
//         {loading ? (
//           <div style={{ color: "gray" }}>Loading...</div>
//         ) : error ? (
//           <div style={{ color: "red" }}>Error: {error}</div>
//         ) : (
//           <button type="submit" style={{ width: "100%", padding: "5px" }}>
//             Submit
//           </button>
//         )}
//       </form>
//     );
// }

// export default LoginExample;

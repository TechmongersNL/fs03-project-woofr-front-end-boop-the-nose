import React from 'react';

export default function SignUp() {
	return <div>SignUp</div>;
}

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { signupThunk } from "../store/auth/thunks";
// import { useNavigate } from "react-router-dom";

// export default function SignupPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   function handleSubmit(event) {
//     event.preventDefault();
//     dispatch(signupThunk(email, password, firstName));
//     navigate("/login");
//   }

//   return (
//     <div style={{ marginLeft: 30 }}>
//       <h1>Sign up</h1>
//       <form onSubmit={handleSubmit}>
//         <p>
//           <label>
//             Email:{" "}
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//         </p>
//         <p>
//           <label>
//             Password:{" "}
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//         </p>
//         <p>
//           <label>
//             First name:{" "}
//             <input
//               type="name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </label>
//         </p>
//         <p>
//           <button type="submit">Sign up</button>
//         </p>
//       </form>
//     </div>
//   );
// }

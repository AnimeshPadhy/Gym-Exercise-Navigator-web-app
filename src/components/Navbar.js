import React from "react";

import Logo from "../assets/images/logo_BeRipped.png";

const Navbar = () => {
  return (
    <nav class="navbar " >
  <div class="container-fluid">
  <a class="navbar-brand" href="/">
      <img
        src={Logo}
        alt="Logo"
        style={{ maxWidth: '200px', height: 'auto' }} /* Inline CSS for the logo */
      />
    </a> 
    <div style={{display:"flex"}}>
        <div class="nav-item" style={{padding: "0 1.3rem;"}}>
        <a class="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </div>
        <div class="nav-item" style={{padding: "0 1.3rem"}}>
          <a class="nav-link" href="#exercises">
            Exercises
          </a>
        </div> 
    </div>
  </div>
</nav>
//     <nav class="navbar navbar-expand-lg">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="/">
//       <img
//         src={Logo}
//         alt="Logo"
//         style={{ maxWidth: '200px', height: 'auto' }} /* Inline CSS for the logo */
//       />
//     </a>
//     <button
//       class="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarNav"
//       aria-controls="navbarNav"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="/">
//             Home
//           </a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#exercises">
//             Exercises
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

  );
};

export default Navbar;

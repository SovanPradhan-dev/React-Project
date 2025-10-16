// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./component/nav.jsx";
// import Division from "./component/division.jsx";
// import Footer from "./component/footer.jsx";
// import SignIn from "./component/signin.jsx";  // Example signin page
// import SignUp from "./component/signup.jsx";  // Example signup page

// function App() {
//   return (
//     <Router>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Division />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/nav.jsx";
import Division from "./component/division.jsx";
import Footer from "./component/footer.jsx";
import SignIn from "./component/signin.jsx";
import SignUp from "./component/signup.jsx";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<><Division /> , <Footer /></>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;

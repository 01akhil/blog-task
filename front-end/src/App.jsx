
// import Blog from "./pages/Blog";
// import CreateBlog from "./pages/CreateBlog";
// import Home from "./pages/Home"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {

//   return (
//     <>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
      
//         <Route path="/create-blog" element={<CreateBlog />} />
//         <Route path="/blogs" element={<Blog/>} />
//       </Routes>
//     </Router>
//     </>
//   )
// }

// export default App



import React from "react";
import Blog from "./pages/Blog";
import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify CSS
import BlogDetail from "./pages/BlogDetail";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute"
function App() {
  return (
    <>
      <Router>
        <Routes>
        
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/create-blog" element={<ProtectedRoute><CreateBlog /></ProtectedRoute>} />
        <Route path="/blogs" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
        <Route path="/blog/:id" element={<ProtectedRoute><BlogDetail /></ProtectedRoute>} />
        
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop />
    </>
  );
}

export default App;

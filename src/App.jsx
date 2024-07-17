import "./App.css";
import BlogPostItem from "./copmonents/BlogPostItem";
import BlogPostList from "./copmonents/BlogPostList";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/post/:id" element={<BlogPostItem />} />
      </Routes>
    </>
  );
}

export default App;

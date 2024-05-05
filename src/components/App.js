import React from "react";
import blogData from "../data/blog";
import Header from "./Header";

console.log(blogData);

const App = () => {
  return (
    <div className="App">
      <Header />
      <aside>{/* Content for Aside component */}</aside>
      <main>{/* Content for Main component (e.g., ArticleList) */}</main>
    </div>
  );
};

export default App;

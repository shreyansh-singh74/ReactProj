import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient_text">Popular topics people ask about</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Science"
            title="How do black holes work?"
            text="Think of black holes like cosmic vacuum cleaners with gravity so strong that nothing, not even light, can escape once it gets too close..."
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Technology"
            title="What is artificial intelligence?"
            text="AI is like teaching computers to think and learn, similar to how you learned to recognize faces or play games..."
          />
          <Article
            imgUrl={blog03}
            date="Biology"
            title="How does DNA work?"
            text="DNA is like a recipe book inside every cell of your body. It contains all the instructions needed to build and maintain you..."
          />
          <Article
            imgUrl={blog04}
            date="Physics"
            title="Why does the internet work?"
            text="The internet is like a giant postal system for digital messages, with computers acting as post offices that pass information along..."
          />
          <Article
            imgUrl={blog05}
            date="Economics"
            title="How do cryptocurrencies work?"
            text="Cryptocurrency is like digital money that uses special math problems to keep track of who owns what without needing a bank..."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;

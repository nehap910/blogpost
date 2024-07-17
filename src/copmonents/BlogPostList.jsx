import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import BlogPostCard from "./BlogPostCard";

function BlogPostList() {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  const [clickedCards, setClickedCards] = useState({});

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              sources: "techcrunch",
              apiKey: "b9f74c0e8e7b4b7f87ce57c945cd2045",
            },
          }
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);



  return (
    <>
        <h1>Top headlines from TechCrunch right now</h1>
        <Grid container spacing={4} justifyContent="center">
      {news.map((article, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <BlogPostCard article={article} index={index} />
        </Grid>
      ))}
    </Grid>
    </>
    
  );
}

export default BlogPostList;

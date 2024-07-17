import React from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
function BlogPostItem() {
  const { state } = useLocation();
  const { article } = state;

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            article.urlToImage ||
            "/static/images/cards/contemplative-reptile.jpg"
          }
          title={article.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.description}
          </Typography>
        </CardContent>
        <Button color="secondary" href="/">
          BACK
        </Button>{" "}
        <Button size="small" href={article.url} target="_blank">
          Read Full Article
        </Button>
      </Card>
    </>
  );
}

export default BlogPostItem;

import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function BlogPostCard({ article, index }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/post/${index}`, { state: { article } });
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          margin: "20px auto",
          cursor: "pointer",
          border: "1px black solid",
        }}
        onClick={handleCardClick}
      >
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
        </CardContent>
        <Button color="secondary" onClick={handleCardClick}>
          See the post
        </Button>{" "}
      </Card>
    </>
  );
}

export default BlogPostCard;

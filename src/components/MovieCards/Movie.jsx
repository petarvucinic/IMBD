import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Group, Button } from "@mantine/core";

function Movie({ movie }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ heigth: "450px", width: "230px", position: "relative" }}
      shadow="md"
      p="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <Image src={movie.image} alt="Norway" />
      </Card.Section>
      <Group sx={{ position: "relative" }}>
        <Text sx={{ fontSize: 16, fontWeight: "700px" }}>
          {movie.title.length < 15 ? movie.title : movie.title.substring(0, 15)}
        </Text>
        <Text
          sx={{
            fontSize: 12,
            marginTop: "5px",
            position: "absolute",
            right: 0,
          }}
        >
          {movie.imDbRating}/10
        </Text>
      </Group>

      <Button
        sx={{
          width: "100%",
          background: "#d3d3d3",
          minHeight: "50",
          marginTop: "20px",
          fontSize: "10px",
        }}
        radius="xl"
        size="xs"
        onClick={() =>
          navigate("/aboutMovie", {
            state: {
              image: movie.image,
              title: movie.title,
              fullTitle: movie.fullTitle,
              imDbRatingCount: movie.imDbRatingCount,
            },
          })
        }
      >
        About
      </Button>
    </Card>
  );
}

export default Movie;

import React from "react";

import { Card, Image} from "@mantine/core";

function Movie({ movie }) {
  return (
    <Card sx={{heigth: "450px", width: "230px"}} shadow="md" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={movie.image}  alt="Norway" />
      </Card.Section>
    </Card>
  );
}

export default Movie;

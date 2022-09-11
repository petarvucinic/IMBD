import React from "react";

import { Card, Image, Text, Group } from "@mantine/core";

function Movie({ movie }) {
  return (
    <Card shadow="md" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={movie.image} height={160} alt="Norway" />
      </Card.Section>
    </Card>
  );
}

export default Movie;

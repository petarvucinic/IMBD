import { Navbar, Stack } from "@mantine/core";
import React from "react";
import { TablerIcon, IconSearch, IconHome2 } from "@tabler/icons";

function Try() {
  const mockdata = [
    { icon: IconHome2, label: "Home" },
    { icon: IconSearch, label: "Search" },
  ];
  return (
    <Navbar>
      <Navbar.Section>
        <Stack>{IconHome2}</Stack>
      </Navbar.Section>
    </Navbar>
  );
}

export default Try;

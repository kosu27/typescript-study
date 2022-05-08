export const color = "red";

color = "blue";

const theme = {
  color: "red",
  backgroundColor: "blue",
} as const;

theme.color = "blue";

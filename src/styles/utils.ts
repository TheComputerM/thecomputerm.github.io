import type { StyleWithSelectors } from "@vanilla-extract/css/dist/declarations/src/types";

type ResponsiveUtilInput = Record<string, StyleWithSelectors>

const breakpoints: Record<string, number> = {
  mobile: 640,
};

export function responsive(input: ResponsiveUtilInput) {
  const output = [];
  for (const query in input) {
    const [operator, screen] = query.split(" ");
    const sign = operator === ">" ? "min" : "max";
    output.push([
      `screen and (${sign}-width: ${breakpoints[screen]}px)`,
      input[query],
    ]);
  }
  return {
    "@media": Object.fromEntries(output),
  };
}

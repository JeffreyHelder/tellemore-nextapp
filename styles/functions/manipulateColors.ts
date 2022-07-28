import chroma from "chroma-js";

function hexToRgb(color: any) {
  return chroma(color).rgb().join(", ");
}

export function rgba(color: any, opacity: any) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export function darken(color: any, amount: any) {
  return chroma(color).darken(amount).hex();
}

export function lighten(color: any, amount: any) {
  return chroma(color).darken(-amount).hex();
}

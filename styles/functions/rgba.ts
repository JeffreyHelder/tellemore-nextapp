import chroma from "chroma-js";

function hexToRgb(color: any) {
  return chroma(color).rgb().join(", ");
}

function rgba(color: any, opacity: any) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;

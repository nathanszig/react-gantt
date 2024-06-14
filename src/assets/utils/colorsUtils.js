export const colorsUtils = {
  red: "#ef4444",
  orange: "#f97316",
  yellow: "#eab308",
  lime: "#84cc16",
  green: "#16a34a",
  cyan: "#22d3ee",
  blue: "#3b82f6",
  purple: "#7c3aed",
  fuschia: "#d946ef",
  pink: "#db2777"
}

/**
 * Function to convert hex color to rgba color
 * https://gist.github.com/danieliser/b4b24c9f772066bcf0a6
 * @param {string} hexCode hex code of the color to be converted to rgba
 * @param {int} opacity opacity of the color
 * @returns RGBA color
 */
export const convertHexToRGBA = (hexCode, opacity = 1) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return `rgba(${r},${g},${b},${opacity})`;
};

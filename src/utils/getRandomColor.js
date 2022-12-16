import tinycolor from "tinycolor2";

export const getRandomColor = (index, pointColor) => {
  if (index === 0) return pointColor;
  const randomValue = Math.floor(Math.random() * 10);
  const bgColor = Math.floor(Math.random() * 1)
    ? tinycolor(pointColor || "#ffffff").darken(randomValue * 10)
    : tinycolor(pointColor || "#ffffff").brighten(randomValue * 10);

  return bgColor;
};

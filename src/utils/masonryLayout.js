export const masonryLayout = () => {
  const container = document.querySelector(".masonry-container");
  const masonryContainerStyle = getComputedStyle(container);

  const autoRows = parseInt(
    masonryContainerStyle.getPropertyValue("grid-auto-rows"),
  );

  document.querySelectorAll(".masonry-item").forEach((elt) => {
    const scrollHeight = elt.scrollHeight;

    elt.style.gridRowEnd = `span ${Math.ceil(scrollHeight / autoRows / 1.4)}`;
  });

  document.querySelectorAll(".masonry-item-image").forEach((elt) => {
    const imgWidth = container.scrollWidth / 2 - 10;

    elt.style.gridRowEnd = `span ${Math.ceil(imgWidth / autoRows / 2)}`;
  });
};

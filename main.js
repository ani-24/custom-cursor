const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.transition = "none";
  let x = e.pageX;
  let y = e.pageY;
  cursor.setAttribute("style", `left: ${x}px; top: ${y}px`);
});

window.addEventListener("mousedown", () => {
  cursor.style.transition = "100ms ease-in-out";
  cursor.classList.add("click");
});

window.addEventListener("mouseup", () => {
  cursor.classList.remove("click");
});

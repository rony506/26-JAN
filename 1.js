const no = document.getElementById("btn-no");
no.onmouseover = () => {
  const x = Math.floor(Math.random() * 100) + 1;
  const y = Math.floor(Math.random() * 100) + 1;
  no.style.left = x + "px";
  no.style.top = y + "px";
};

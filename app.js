window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const drums = document.querySelectorAll(".drums div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#382039",
    "#ec8f6a",
    "#216583",
    "#a1dd70",
    "#204969"
  ];

  drums.forEach((drum, index) => {
    drum.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createShape(index);
    });
  });

  const createShape = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});

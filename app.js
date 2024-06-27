const body = document.querySelector(".body");
const issues = document.querySelectorAll(".issue");
const images = document.querySelectorAll("img");

window.addEventListener("scroll", checkBoxes);

checkBoxes();
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  images.forEach((img) => {
    const rect = img.getBoundingClientRect();
    const boxTop = Math.abs(rect.top);

    if (boxTop < triggerBottom) {
      img.classList.add("show");
    } else {
      img.classList.remove("show");
    }
  });
}

document.addEventListener("scroll", () => {
  let closestIssue = null;
  let closestDistance = Infinity;

  issues.forEach((issue) => {
    const rect = issue.getBoundingClientRect();
    const distance = Math.abs(rect.top);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIssue = issue;
    }
  });

  if (closestIssue) {
    const color = closestIssue.getAttribute("data-color");
    document.body.style.backgroundColor = color;
  }
});

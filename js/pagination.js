const goForward = document.getElementById("goForward"),
  next = document.getElementById("next"),
  back = document.getElementById("back"),
  GoBackward = document.getElementById("GoBackward");
const nums = document.getElementsByClassName("num");
let activeNum = 1;
const comments = document.querySelectorAll(".comments .media");

goForward.addEventListener("click", () => {
  resetNums();
  nums[0].classList.add("active");
});
GoBackward.addEventListener("click", () => {
  resetNums();
  nums[2].classList.add("active");
});
next.addEventListener("click", () => {
  resetNums();
  console.log(activeNum);
  const index = activeNum < 1 ? 0 : activeNum--;
  nums[index].classList.add("active");
});
back.addEventListener("click", () => {
  resetNums();
  const index = activeNum >= 2 ? 2 : activeNum++;
  nums[index].classList.add("active");
});

// reset nums classname active
function resetNums() {
  for (let i = 0; i < nums.length; i++) {
    nums[i].classList.remove("active");
  }
}

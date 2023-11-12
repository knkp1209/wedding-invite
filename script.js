let currentPage = 0;
// const totalPages = 11; // 包括封面和RSVP页面
const totalPages = 11; // 包括封面和RSVP页面

function nextPage1(pageNumber) {
  var currentPageDiv = document.getElementById("page" + currentPage);
  var nextPageDiv = document.getElementById("page" + pageNumber);

  if (currentPageDiv) {
    currentPageDiv.style.display = "none";
  }
  if (nextPageDiv) {
    nextPageDiv.style.display = "block";
    window.scrollTo(0, 0); // 新增：滚动到顶部
  }

  currentPage = pageNumber;

  // 如果不是最后一页，设置自动切换到下一页
  if (currentPage < totalPages) {
    if (currentPage == 0) {
      nextPage(currentPage + 1);
    } else {
      setTimeout(function () {
        nextPage(currentPage + 1);
      }, 10000); // 5秒后自动跳转
    }
  }
}

function nextPage(pageNumber) {
  var currentPageDiv = document.getElementById("page" + currentPage);
  var nextPageDiv = document.getElementById("page" + pageNumber);

  if (currentPageDiv) {
    currentPageDiv.classList.add("fade-out");
    currentPageDiv.addEventListener("animationend", function () {
      this.style.display = "none";
      this.classList.remove("fade-out");
    }, { once: true });
  }


  currentPage = pageNumber;
  if (currentPage == 2) {
    sweetLove()
  }

  if (nextPageDiv) {
    var list = ["block", "block", "block", "flex", "flex", "flex", "flex", "flex", "flex", "flex", "flex"]
    nextPageDiv.style.display = list[currentPage];
    nextPageDiv.classList.add("fade-in");
  }

  if (currentPage < totalPages) {
    var list = [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]
    if (currentPage == 0) {
      nextPage(currentPage + 1);
    } else {
      setTimeout(function () {
        nextPage(currentPage + 1);
      }, list[currentPage-1]); // 调整为你需要的时间
    }
  }
}

function startAutoPlay() {
  toggleMusic();
  nextPage(1); // 开始自动播放从第1页开始
}

function submitRSVP() {
  var name = document.getElementById("name").value;
  if (name) {
    alert("Thank you for your response, " + name + "!");
  } else {
    alert("Please enter your name.");
  }
}

function toggleMusic() {
  var music = document.getElementById("background-music");
  var playIcon = document.querySelector(".fa-play");
  var pauseIcon = document.querySelector(".fa-music");

  if (music.paused) {
    music.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline-block";
    pauseIcon.classList.add("rotating");
  } else {
    music.pause();
    playIcon.style.display = "inline-block";
    pauseIcon.style.display = "none";
    pauseIcon.classList.remove("rotating");
  }
}

function sweetLove() {
  // 添加动画类
  // setTimeout(function () {
  //   var element = document.getElementById("sweet-love");
  //   element.classList.add("bounce");
  // }, 1000); // 调整为你需要的时间
}

window.onload = function () {
  toggleMusic(); // 调用你的函数
};

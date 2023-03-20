const heightPost = document.querySelector(".post-detail-content").clientHeight;
const postMainContent = document.querySelector(
  ".post-detail-content .post-detail-content-main"
);
postMainContent.style.height = heightPost + "px";

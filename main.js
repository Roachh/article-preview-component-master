firstShareButton = document.querySelector(".author .share-btn");
secondShareButton = document.querySelector(".share .share-btn");
shareSection = document.querySelector(".share");
authorSection = document.querySelector(".author");

console.log(shareSection);

firstShareButton.onclick = shareToggle;

secondShareButton.onclick = shareToggle;

function shareToggle() {
  if (authorSection.classList.contains("active")) {
    shareSection.classList.remove("active");
    authorSection.classList.remove("active");
  } else {
    authorSection.classList.add("active");
    shareSection.classList.add("active");
  }
}

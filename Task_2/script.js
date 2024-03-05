document.querySelector("#copy-text").addEventListener("click", () => {
  let copyText = document.querySelector("#copy-link-input");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
});

document.querySelector(".share-btn").addEventListener("click", () => {
  document.querySelector(".copy-link-model").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", () => {
  document.querySelector(".copy-link-model").style.display = "none";
});

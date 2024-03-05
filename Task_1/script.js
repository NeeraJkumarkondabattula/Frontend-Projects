const details = document.querySelectorAll(".details");

details.forEach((item, index) => {
  item.addEventListener("click", () => {
    const title = item.querySelector(".faq-title");
    const content = item.querySelector(".faq-content");
    if (content.classList.contains("open")) {
      const icon = item.querySelector("img");
      icon.src = "./assets/add.png";
      content.classList.remove("open");
      title.style.opacity = "0.80";
      icon.style.opacity = "0.80";
      content.style.height = 0;
    } else {
      const icon = item.querySelector("img");
      icon.src = "./assets/minus-circle.png";
      icon.style.opacity = "1";
      title.style.opacity = "1";
      content.classList.add("open");
      item.style.opacity = 1;
      content.style.height = `${content.scrollHeight}px`;
    }
    remove(index);
  });
});

function remove(index1) {
  details.forEach((item2, index2) => {
    if (index1 != index2) {
      const icon = item2.querySelector("img");
      icon.src = "./assets/add.png";
      icon.style.opacity = "0.80";
      let content2 = item2.querySelector(".faq-content");
      if (content2.classList.contains("open")) {
        content2.classList.remove("open");
      }
      let title = item2.querySelector(".faq-title");
      title.style.opacity = "0.80";
      content2.style.height = 0;
    }
  });
}

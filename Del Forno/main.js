window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    
    if (window.scrollY > 150) {
      header.classList.add("scroll__sticky");
    } else {
      header.classList.remove("scroll__sticky");
    }
  });
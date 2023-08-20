document.addEventListener("DOMContentLoaded", function() {
  // Lấy phần tử navbar
  var navbar = document.querySelector('.navbar');

  // Lưu trữ vị trí cuộn trang trước đó
  var prevScrollPos = window.pageYOffset;

  // Xử lý sự kiện cuộn trang
  const scrollHandler = function() {
    var currentScrollPos = window.pageYOffset;

    // Kiểm tra hướng cuộn
    if (prevScrollPos > currentScrollPos) {
      // Cuộn lên
      navbar.classList.remove('navbar-hidden');
    } else {
      // Cuộn xuống
      navbar.classList.add('navbar-hidden');
    }

    // Lưu trữ vị trí cuộn trang hiện tại để so sánh lần sau
    prevScrollPos = currentScrollPos;
  };

  // Thêm lắng nghe sự kiện scroll
  window.addEventListener('scroll', scrollHandler);

  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarToggleItem = document.querySelectorAll(".navbar-toggle-item");
  console.log(navbarToggleItem);
  const navbarMenu = document.querySelector(".navbar-menu");
  const isExpand = "is-expand";
  
  let isClicked = false;

  navbarToggle.addEventListener("click", function() {
    if (!isClicked) {
      navbarMenu.classList.add(isExpand);
      navbarToggleItem[0].classList.add("toggle-item-1");
      navbarToggleItem[navbarToggleItem.length - 1].classList.add("toggle-item-3");
      navbarToggleItem[1].classList.add("toggle-item-2");
      // navbar.style.transform = "unset";
      window.removeEventListener('scroll', scrollHandler);
    } else {
      navbarToggleItem[0].classList.remove("toggle-item-1");
      navbarToggleItem[navbarToggleItem.length - 1].classList.remove("toggle-item-3");
      navbarToggleItem[1].classList.remove("toggle-item-2");
      navbarMenu.classList.remove(isExpand);
      window.addEventListener('scroll', scrollHandler);
    }

    isClicked = !isClicked;
  })

  window.addEventListener("click", function(e) {
    if(!navbarMenu.contains(e.target) && !e.target.matches(".navbar-toggle")) {  
      navbarMenu.classList.remove(isExpand);
      navbarToggleItem[0].classList.remove("toggle-item-1");
      navbarToggleItem[navbarToggleItem.length - 1].classList.remove("toggle-item-3");
      navbarToggleItem[1].classList.remove("toggle-item-2");
      window.addEventListener('scroll', scrollHandler);
    }
  })

  // Slick slider
  if (window.innerWidth < 767) {
    $(".header-list").slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }
});


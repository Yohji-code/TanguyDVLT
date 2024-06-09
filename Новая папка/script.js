function enterFullScreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
      element.msRequestFullscreen();
    }
  }
  document.querySelectorAll('.body img').forEach(img => {
    img.addEventListener('click', function() {
      enterFullScreen(this);
    });
  });
  function toggleMenu() {
    var overlay = document.getElementById("overlay");
    if (overlay.style.display === "none") {
      overlay.style.display = "flex"; /* Использование flex для выравнивания текста */
      overlay.style.justifyContent = "center"; /* Центрирование содержимого по горизонтали */
      overlay.style.alignItems = "center"; /* Центрирование содержимого по вертикали */
    } else {
      overlay.style.display = "none";
    }
  }
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("modalBtn");
  var span = document.getElementsByClassName("close")[0];
  
  // Когда пользователь кликает на картинку, открываем модальное окно
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // Когда пользователь кликает на (x), закрываем модальное окно
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // Когда пользователь кликает в любом месте за пределами модального окна, закрываем его
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
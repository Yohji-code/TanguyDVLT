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
  document.querySelectorAll('.body1 img').forEach(img => {
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
  var modal1 = document.getElementById("myModal1");
  var btn1 = document.getElementById("modalBtn1");
  var span1 = document.getElementsByClassName("close1")[0];
  
  // Когда пользователь кликает на картинку, открываем модальное окно
  btn1.onclick = function() {
    modal1.style.display = "block";
  }
  
  // Когда пользователь кликает на (x), закрываем модальное окно
  span1.onclick = function() {
    modal1.style.display = "none";
  }
  
  // Когда пользователь кликает в любом месте за пределами модального окна, закрываем его
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function appendToLocalStorage() {
    // Получаем текущий текст из textarea
    var newText = document.getElementById('inputText').value;
    // Проверяем, не пустая ли строка
    if (newText.trim() !== '') {
      // Преобразуем первый символ в верхний регистр
      newText = capitalizeFirstLetter(newText);
      // Получаем уже сохранённый текст из localStorage
      var existingText = localStorage.getItem('myText') || '';
      // Объединяем существующий текст с новым текстом, добавляя перенос строки
      var combinedText = existingText + (existingText ? '\n' : '') + newText;
      // Сохраняем объединённый текст в localStorage с ключом 'myText'
      localStorage.setItem('myText', combinedText);
    }
    // Очищаем textarea
    document.getElementById('inputText').value = '';
  }
  
  function loadFromLocalStorage() {
    // Получаем текст из localStorage
    var text = localStorage.getItem('myText');
    // Проверяем, не пустая ли строка
    if (text) {
      // Разделяем текст на строки
      var lines = text.split('\n');
      // Очищаем displayText
      document.getElementById('displayText').innerHTML = '';
      lines.forEach(function(line) {
        var div = document.createElement('div');
        div.textContent = line;
        div.style.border = '2px solid black';
        div.style.borderRadius = '5px'
        div.style.marginBottom = '20px';
        div.style.padding = '10px'; 
        div.style.backgroundColor = 'white';
        document.getElementById('displayText').appendChild(div);
      });
    }
  }
  
  // Добавляем слушатель событий на кнопку для вызова функции добавления текста
  document.getElementById('click2').addEventListener('click', appendToLocalStorage);
  
  // Вызываем функцию загрузки при загрузке страницы, чтобы восстановить текст
  window.onload = loadFromLocalStorage;

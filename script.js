document.addEventListener("DOMContentLoaded", function() {

    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");

    setInterval(function() {

      if (image1.style.display === "block") {
        image1.style.display = "none";
        image2.style.display = "block";
      } else {
        image1.style.display = "block";
        image2.style.display = "none";
      }
    }, 500);
  });

  window.addEventListener('scroll', function() {
    var image = document.getElementById('floatingImage');
    var scrollPosition = window.scrollY;


    var movementSensitivity = 1000;


    var newPosition = scrollPosition / movementSensitivity;

    image.style.transform = 'translateY(' + newPosition + 'px)';
  });

  document.addEventListener("DOMContentLoaded", function() {
    var catinhaImage = document.querySelector("img[src='assets/catinha.png']");
  
    // Verifica se a imagem catinha foi encontrada
    if (catinhaImage) {
      // Adiciona um evento de clique à imagem catinha
      catinhaImage.addEventListener("click", function() {
        // Redireciona o usuário para a página "tojibbg.html"
        window.location.href = "tojibbg.html";
      });
    }
  });
  
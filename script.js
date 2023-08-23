document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => button.addEventListener('mouseover', () => {
    button.classList.add('hovered');
    button.style.color = 'transparent';
  
    const shows = Array.from(document.querySelectorAll('.show'));
    shows.forEach(show => show.style.display = "flex");

}))
buttons.forEach(button => button.addEventListener('mouseout', () => {
    button.classList.remove('hovered');
    button.style.color = 'black';
}))

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const projectLinks = document.querySelectorAll(".project");

  projectLinks.forEach((link, index) => {
    const projectURLs = [
      "https://github.com/ttduongdo/rock-paper-scissor.git",
      "https://github.com/ttduongdo/etch-a-sketch.git",
      "https://github.com/ttduongdo/tic-tac-toe.git",
      "https://github.com/ttduongdo/pizza-hangman.git",
      "https://github.com/ttduongdo/pizza-hangman.git"
    ];

    link.href = projectURLs[index];
  });
});






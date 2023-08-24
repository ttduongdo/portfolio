document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

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

function doGet(e) {
  var params = e.parameter;
  var name = params.name;
  var email = params.email;
  var message = params.message;

  var ss = SpreadsheetApp.openById('1uefnZeF3tCkLFdzoLSYiE3DtoWDXpg5AIgCWt6JpLRE');
  var sheet = ss.getSheetByName('port contact box'); // Change the sheet name if necessary

  sheet.appendRow([name, email, message]);

  return ContentService.createTextOutput('Form submitted successfully.');
}






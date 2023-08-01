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
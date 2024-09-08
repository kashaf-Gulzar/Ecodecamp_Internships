// Corrected JavaScript code
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"], // Correct property name
    typeSpeed: 100, // Correct property name
    backSpeed: 100, // Correct property name
    backDelay: 1000,
    loop: true,
  });
/*-----------------*/
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('mouseover', () => {
      project.style.transform = 'scale(1.05)';
      project.style.transition = 'transform 0.3s ease';
  });
  project.addEventListener('mouseout', () => {
      project.style.transform = 'scale(1)';
  });
});

/*---------------*/
document.querySelectorAll('.radial-bar').forEach(bar => {
  let percentage = bar.getAttribute('data-percentage'); // Fetch percentage
  let circle = bar.querySelector('.path');
  let radius = circle.r.baseVal.value;
  let circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;

  const offset = circumference - (percentage / 100) * circumference;
  circle.style.strokeDashoffset = offset;
});

/*-----------------*/
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your message has been submitted!');
});
/*---------*/

    document.querySelector('.menu-btn').addEventListener('click', function() {
        document.querySelector('.navbar').classList.toggle('active');
    });

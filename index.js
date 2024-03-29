document.addEventListener('DOMContentLoaded', function() {
    // Simulate a delay for demonstration purposes (remove this in a real scenario)
    setTimeout(function() {
      // Hide the preloader after the fade-out animation
      document.getElementById('preloader').style.display = 'none';
    }, 4000); // Adjust the delay as needed
  });

  const homeLink = document.getElementById('home');
const homeContent = document.getElementById('homecontent');

homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (homeContent.style.display === 'none') {
    homeContent.style.display = 'block';
  } else {
    homeContent.style.display = 'none';
  }
});


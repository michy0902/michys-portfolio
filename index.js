document.addEventListener('DOMContentLoaded', function() {
    // Simulate a delay for demonstration purposes (remove this in a real scenario)
    setTimeout(function() {
      // Hide the preloader after the fade-out animation
      document.getElementById('preloader').style.display = 'none';
    }, 4000); // Adjust the delay as needed
  });

 /* document.addEventListener('DOMContentLoaded', function() {
    // Get references to the link and the div
    var home = document.getElementById('home');
    var home-content = document.getElementById('home-content');

    // Add a click event listener to the link
    home.addEventListener('click', function(event) {
        // Prevent the default link behavior (e.g., navigating to a new page)
        event.preventDefault();

        // Toggle the visibility of the div
        if (home-content.style.display === 'none') {
            home-content.style.display = 'block';
        } else {
            home-content.style.display = 'none';
        }
    });
});
*/

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Get all the sections/screens
  const welcomeScreen = document.getElementById('welcome-screen');
  const loginScreen = document.getElementById('login-screen');
  const dashboardScreen = document.getElementById('dashboard-screen');
  
  // Get navigation buttons
  const getStartedBtn = document.getElementById('get-started-btn');
  const signupLink = document.getElementById('signup-link');
  const loginForm = document.getElementById('login-form');
  const bottomNavItems = document.querySelectorAll('.nav-item');
  
  // Function to show a specific screen
  function showScreen(screen) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));
    
    // Show the requested screen
    screen.classList.add('active');
  }
  
  // Event listeners for navigation
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function() {
      showScreen(loginScreen);
    });
  }
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual form submission
      
      // Get the form values
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Simple validation
      if (email && password) {
        showScreen(dashboardScreen);
      } else {
        alert('Please enter both email and password.');
      }
    });
  }
  
  // Bottom navigation functionality
  bottomNavItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      // Remove active class from all nav items
      bottomNavItems.forEach(navItem => navItem.classList.remove('active'));
      // Add active class to clicked item
      this.classList.add('active');
      
      // In a real app, you would handle navigation to different sections here
    });
  });
  
  // For demo purposes - adding functionality to workout start buttons
  const startButtons = document.querySelectorAll('.start-btn');
  startButtons.forEach(button => {
    button.addEventListener('click', function() {
      const workoutName = this.closest('.workout-info').querySelector('h3').textContent;
      alert(`Starting workout: ${workoutName}`);
    });
  });
  
  // Initialize nutrition chart animation (simulating data loading)
  setTimeout(() => {
    animateNutritionChart(70); // 70% progress
  }, 500);
});

// Function to animate the circular progress
function animateNutritionChart(percentage) {
  const circle = document.querySelector('.progress');
  if (!circle) return;
  
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  
  // Calculate the dash offset based on percentage
  const offset = circumference - (percentage / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

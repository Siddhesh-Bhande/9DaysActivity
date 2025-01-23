let userPoints = 0;
let currentActivity = null;

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  showHome();
  loadUserData();
});

// Load user data from localStorage
function loadUserData() {
  const savedPoints = localStorage.getItem("userPoints");
  if (savedPoints) {
    userPoints = parseInt(savedPoints);
    updatePointsDisplay();
  }
}

// Update points display
function updatePointsDisplay() {
  document.getElementById("points").textContent = userPoints;
}

// Add points and save
function addPoints(points) {
  userPoints += points;
  localStorage.setItem("userPoints", userPoints);
  updatePointsDisplay();

  // Show reward animation
  showReward(`+${points} points!`);
}

// Show reward popup
function showReward(message) {
  const reward = document.createElement("div");
  reward.className =
    "fixed top-20 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg bounce";
  reward.textContent = message;
  document.body.appendChild(reward);

  setTimeout(() => {
    reward.remove();
  }, 2000);
}

// Show home screen
function showHome() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = `
        <div class="space-y-4">
            <div class="bg-purple-100 p-4 rounded-lg">
                <h2 class="text-lg font-bold mb-2">Daily Challenge</h2>
                <div class="activity-card bg-white p-4 rounded-lg shadow">
                    ${getRandomActivity().title}
                </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
                ${Object.keys(activities)
                  .map(
                    (category) => `
                    <div class="activity-card bg-white p-4 rounded-lg shadow cursor-pointer"
                         onclick="showCategory('${category}')">
                        <h3 class="font-bold capitalize">${category}</h3>
                        <p class="text-sm text-gray-600">${activities[category].length} activities</p>
                    </div>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;
}

// Show categories
function showCategories() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = `
        <div class="space-y-4">
            ${Object.keys(activities)
              .map(
                (category) => `
                <div class="bg-white p-4 rounded-lg shadow">
                    <h2 class="text-lg font-bold mb-2 capitalize">${category}</h2>
                    <div class="space-y-2">
                        ${activities[category]
                          .map(
                            (activity) => `
                            <div class="activity-card p-2 border rounded cursor-pointer hover:bg-gray-50"
                                 onclick="startActivity('${category}', '${activity.id}')">
                                <div class="flex items-center">
                                    <i class="fas ${activity.icon} text-purple-600 mr-3"></i>
                                    <div>
                                        <h3 class="font-bold">${activity.title}</h3>
                                        <p class="text-sm text-gray-600">${activity.description}</p>
                                    </div>
                                </div>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `
              )
              .join("")}
        </div>
    `;
}

// Start activity
function startActivity(category, activityId) {
  const activity = activities[category].find((a) => a.id === activityId);
  if (!activity || !activityComponents[activity.component]) return;

  currentActivity = activity;
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = activityComponents[activity.component].render();
  activityComponents[activity.component].init();
}

// Show achievements
function showAchievements() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = `
        <div class="space-y-4">
            <h2 class="text-xl font-bold">Your Achievements</h2>
            <div class="bg-white p-4 rounded-lg shadow">
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="font-bold">Total Points</h3>
                        <p class="text-purple-600 font-bold">${userPoints}</p>
                    </div>
                    <i class="fas fa-star text-yellow-400 text-2xl"></i>
                </div>
            </div>
            <!-- Add more achievements here -->
        </div>
    `;
}

// Show user profile
function showProfile() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = `
        <div class="space-y-4">
            <div class="text-center">
                <div class="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i class="fas fa-user text-4xl text-purple-600"></i>
                </div>
                <h2 class="text-xl font-bold">Your Profile</h2>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
                <div class="space-y-2">
                    <p><strong>Total Points:</strong> ${userPoints}</p>
                    <p><strong>Activities Completed:</strong> ${getCompletedActivities()}</p>
                </div>
            </div>
        </div>
    `;
}

// Helper functions
function getRandomActivity() {
  const allActivities = Object.values(activities).flat();
  return allActivities[Math.floor(Math.random() * allActivities.length)];
}

function getCompletedActivities() {
  // This would normally be tracked in localStorage or a backend
  return Math.floor(userPoints / 100);
}

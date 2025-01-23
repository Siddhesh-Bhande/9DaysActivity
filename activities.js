const activities = {
  creativity: [
    {
      id: "paint",
      title: "Paint a Masterpiece",
      description: "Express yourself through digital painting",
      points: 100,
      icon: "fa-paint-brush",
      component: "PaintCanvas",
    },
    {
      id: "story",
      title: "Write a Funny Story",
      description: "Create an entertaining tale",
      points: 80,
      icon: "fa-pen-fancy",
      component: "StoryWriter",
    },
    {
      id: "vision-board",
      title: "Create Vision Board",
      description: "Design your dreams and aspirations",
      points: 90,
      icon: "fa-images",
      component: "VisionBoard",
    },
    {
      id: "origami",
      title: "Origami Animals",
      description: "Create paper animals step by step",
      points: 70,
      icon: "fa-dove",
      component: "OrigamiMaker",
    },
    {
      id: "mandala",
      title: "Design a Mandala",
      description: "Create beautiful geometric patterns",
      points: 85,
      icon: "fa-compass",
      component: "MandalaMaker",
    },
  ],
  games: [
    {
      id: "puzzle",
      title: "Jigsaw Puzzle",
      description: "Solve beautiful puzzles",
      points: 90,
      icon: "fa-puzzle-piece",
      component: "JigsawPuzzle",
    },
    {
      id: "quiz",
      title: "Compliment Quiz",
      description: "Take a fun quiz and discover your amazing qualities!",
      points: 100,
      icon: "fa-question-circle",
      component: "ComplimentQuiz",
    },
    {
      id: "word-association",
      title: "Word Association",
      description: "Connect related words creatively",
      points: 75,
      icon: "fa-comments",
      component: "WordGame",
    },
    {
      id: "memory",
      title: "Memory Match",
      description: "Match pairs of cute animals",
      points: 85,
      icon: "fa-clone",
      component: "MemoryGame",
    },
    {
      id: "riddles",
      title: "Fun Riddles",
      description: "Solve entertaining riddles",
      points: 80,
      icon: "fa-lightbulb",
      component: "RiddleGame",
    },
  ],
  selfCare: [
    {
      id: "meditation",
      title: "Mindfulness Meditation",
      description: "Find your inner peace",
      points: 70,
      icon: "fa-spa",
      component: "Meditation",
    },
    {
      id: "gratitude",
      title: "Gratitude Journal",
      description: "Write about what you're thankful for",
      points: 65,
      icon: "fa-book-heart",
      component: "GratitudeJournal",
    },
    {
      id: "affirmations",
      title: "Daily Affirmations",
      description: "Practice positive self-talk",
      points: 60,
      icon: "fa-heart",
      component: "Affirmations",
    },
    {
      id: "breathing",
      title: "Breathing Exercise",
      description: "Calm your mind with guided breathing",
      points: 55,
      icon: "fa-wind",
      component: "BreathingGuide",
    },
    {
      id: "self-care-checklist",
      title: "Self-Care Checklist",
      description: "Track your daily self-care activities",
      points: 75,
      icon: "fa-clipboard-check",
      component: "SelfCareCheck",
    },
  ],
  learning: [
    {
      id: "cooking",
      title: "Cook Taiwanese Dish",
      description: "Learn to cook a traditional recipe",
      points: 95,
      icon: "fa-utensils",
      component: "CookingGuide",
    },
    {
      id: "drawing-class",
      title: "Drawing Tutorial",
      description: "Learn basic drawing techniques",
      points: 85,
      icon: "fa-pencil-alt",
      component: "DrawingClass",
    },
    {
      id: "magic-tricks",
      title: "Magic Tricks",
      description: "Learn simple magic tricks",
      points: 80,
      icon: "fa-magic",
      component: "MagicTutorial",
    },
    {
      id: "knitting",
      title: "Knitting Basics",
      description: "Learn to knit step by step",
      points: 90,
      icon: "fa-mitten",
      component: "KnittingGuide",
    },
    {
      id: "photography",
      title: "Photo Challenge",
      description: "Learn photography basics",
      points: 85,
      icon: "fa-camera",
      component: "PhotoChallenge",
    },
  ],
  challenges: [
    {
      id: "scavenger",
      title: "Home Scavenger Hunt",
      description: "Find items around your home",
      points: 100,
      icon: "fa-search",
      component: "ScavengerHunt",
    },
    {
      id: "blind-drawing",
      title: "Blind Drawing",
      description: "Draw without looking at the paper",
      points: 70,
      icon: "fa-eye-slash",
      component: "BlindDrawing",
    },
    {
      id: "tower",
      title: "Tower Builder",
      description: "Build the tallest tower possible",
      points: 85,
      icon: "fa-tower-observation",
      component: "TowerBuilder",
    },
    {
      id: "dance",
      title: "Dance Challenge",
      description: "Learn and perform dance moves",
      points: 90,
      icon: "fa-music",
      component: "DanceChallenge",
    },
    {
      id: "tongue-twister",
      title: "Tongue Twisters",
      description: "Master tricky phrases",
      points: 75,
      icon: "fa-comment-dots",
      component: "TongueTwister",
    },
  ],
  physical: [
    {
      id: "yoga",
      title: "Yoga Session",
      description: "Follow gentle yoga routines",
      points: 80,
      icon: "fa-pray",
      component: "YogaSession",
    },
    {
      id: "mini-workout",
      title: "Mini Olympics",
      description: "Fun indoor exercises",
      points: 95,
      icon: "fa-dumbbell",
      component: "MiniOlympics",
    },
    {
      id: "juggling",
      title: "Learn to Juggle",
      description: "Master basic juggling",
      points: 85,
      icon: "fa-baseball",
      component: "JugglingGuide",
    },
    {
      id: "plank",
      title: "Plank Challenge",
      description: "Test your core strength",
      points: 75,
      icon: "fa-person",
      component: "PlankChallenge",
    },
    {
      id: "obstacle",
      title: "Indoor Obstacle Course",
      description: "Create and complete a course",
      points: 100,
      icon: "fa-running",
      component: "ObstacleCourse",
    },
  ],
  // Add more categories...
};

// Activity components
const activityComponents = {
  PaintCanvas: {
    render: () => {
      return `
                <div class="p-4">
                    <h2 class="text-xl font-bold mb-4">Paint a Masterpiece</h2>
                    <div class="canvas-container bg-white border rounded-lg shadow-lg">
                        <canvas id="paintCanvas" class="w-full h-64 touch-none"></canvas>
                    </div>
                    <div class="mt-4">
                        <div class="color-picker grid grid-cols-5 gap-2 mb-4">
                            <!-- Basic Colors -->
                            <button onclick="setColor('#000000')" class="w-8 h-8 bg-black rounded-full"></button>
                            <button onclick="setColor('#FFFFFF')" class="w-8 h-8 bg-white border rounded-full"></button>
                            <button onclick="setColor('#808080')" class="w-8 h-8 bg-gray-500 rounded-full"></button>
                            <button onclick="setColor('#FF0000')" class="w-8 h-8 bg-red-500 rounded-full"></button>
                            <button onclick="setColor('#FFA500')" class="w-8 h-8 bg-orange-500 rounded-full"></button>
                            
                            <!-- Warm Colors -->
                            <button onclick="setColor('#FFD700')" class="w-8 h-8 bg-yellow-400 rounded-full"></button>
                            <button onclick="setColor('#FF69B4')" style="background-color: #FF69B4" class="w-8 h-8 rounded-full"></button>
                            <button onclick="setColor('#FF1493')" style="background-color: #FF1493" class="w-8 h-8 rounded-full"></button>
                            <button onclick="setColor('#8B4513')" style="background-color: #8B4513" class="w-8 h-8 rounded-full"></button>
                            <button onclick="setColor('#A0522D')" style="background-color: #A0522D" class="w-8 h-8 rounded-full"></button>

                            <!-- Cool Colors -->
                            <button onclick="setColor('#0000FF')" class="w-8 h-8 bg-blue-500 rounded-full"></button>
                            <button onclick="setColor('#4169E1')" style="background-color: #4169E1" class="w-8 h-8 rounded-full"></button>
                            <button onclick="setColor('#00BFFF')" style="background-color: #00BFFF" class="w-8 h-8 rounded-full"></button>
                            <button onclick="setColor('#008080')" style="background-color: #008080" class="w-8 h-8 rounded-full"></button>
                            <button onclick="setColor('#40E0D0')" style="background-color: #40E0D0" class="w-8 h-8 rounded-full"></button>

                            <!-- Green Shades -->
                            <button onclick="setColor('#00FF00')" class="w-8 h-8 bg-green-500 rounded-full"></button>
                            <button onclick="setColor('#98FB98')" style="background-color: #98FB98" class="w-8 h-8 rounded-full"></button>
                            <button onclick="setColor('#32CD32')" style="background-color: #32CD32" class="w-8 h-8 rounded-full"></button>
                            <button onclick="setColor('#006400')" style="background-color: #006400" class="w-8 h-8 rounded-full"></button>
                            <button onclick="setColor('#228B22')" style="background-color: #228B22" class="w-8 h-8 rounded-full"></button>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="brush-size flex gap-2">
                                <button onclick="setBrushSize(2)" class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Small</button>
                                <button onclick="setBrushSize(5)" class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Medium</button>
                                <button onclick="setBrushSize(10)" class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Large</button>
                            </div>
                            <button onclick="clearCanvas()" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Clear</button>
                        </div>
                        <button onclick="saveDrawing()" class="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                            Save Masterpiece
                        </button>
                    </div>
                </div>
            `;
    },
    init: () => {
      const canvas = document.getElementById("paintCanvas");
      const ctx = canvas.getContext("2d");
      let isDrawing = false;
      let currentColor = "#000000";
      let brushSize = 5;

      // Set canvas size
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Set initial canvas background to white
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Drawing functions
      function startDrawing(e) {
        isDrawing = true;
        draw(e);
      }

      function stopDrawing() {
        isDrawing = false;
        ctx.beginPath();
      }

      function draw(e) {
        if (!isDrawing) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.type.includes("touch")
          ? e.touches[0].clientX - rect.left
          : e.clientX - rect.left;
        const y = e.type.includes("touch")
          ? e.touches[0].clientY - rect.top
          : e.clientY - rect.top;

        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        ctx.strokeStyle = currentColor;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
      }

      // Event listeners
      canvas.addEventListener("mousedown", startDrawing);
      canvas.addEventListener("mousemove", draw);
      canvas.addEventListener("mouseup", stopDrawing);
      canvas.addEventListener("mouseout", stopDrawing);

      // Touch events
      canvas.addEventListener("touchstart", startDrawing);
      canvas.addEventListener("touchmove", draw);
      canvas.addEventListener("touchend", stopDrawing);

      // Prevent scrolling while drawing on mobile
      canvas.addEventListener(
        "touchmove",
        (e) => {
          e.preventDefault();
        },
        { passive: false }
      );

      // Expose functions globally
      window.setColor = (color) => {
        currentColor = color;
      };

      window.setBrushSize = (size) => {
        brushSize = size;
      };

      window.clearCanvas = () => {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };

      window.saveDrawing = () => {
        // Save the drawing to localStorage
        try {
          const drawings =
            JSON.parse(localStorage.getItem("savedDrawings")) || [];
          drawings.push({
            date: new Date().toISOString(),
            image: canvas.toDataURL(),
          });
          localStorage.setItem("savedDrawings", JSON.stringify(drawings));

          // Add points and show success message
          addPoints(100);
          showReward("Masterpiece saved! +100 points!");

          // Optional: Show saved confirmation
          const saveBtn = document.querySelector("button:last-child");
          saveBtn.textContent = "Saved! ✨";
          saveBtn.disabled = true;
          setTimeout(() => {
            saveBtn.textContent = "Save Masterpiece";
            saveBtn.disabled = false;
          }, 2000);
        } catch (error) {
          console.error("Error saving drawing:", error);
          showReward("Couldn't save drawing. Please try again!");
        }
      };
    },
  },
  ComplimentQuiz: {
    render: () => {
      return `
                <div class="p-4">
                    <h2 class="text-xl font-bold mb-4">Compliment Quiz</h2>
                    <div id="quiz-container" class="space-y-4">
                        <div id="question-container" class="bg-white p-4 rounded-lg shadow-lg">
                            <!-- Question will be loaded here -->
                        </div>
                        <div id="options-container" class="space-y-2">
                            <!-- Options will be loaded here -->
                        </div>
                        <div class="flex justify-between items-center mt-4">
                            <div id="progress" class="text-purple-600 font-bold"></div>
                            <button id="next-btn" 
                                    class="px-6 py-2 bg-purple-600 text-white rounded-lg hidden hover:bg-purple-700 transition-colors">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            `;
    },
    init: () => {
      const quizData = [
        {
          question: "When you walk into a room...",
          options: [
            "I try to blend in",
            "I say hi to everyone",
            "I wait for others to approach",
            "I make everyone smile",
          ],
          compliments: [
            "Your quiet confidence is truly admirable!",
            "Your friendly nature brightens everyone's day!",
            "Your thoughtful approach makes others feel comfortable!",
            "Your positive energy is absolutely contagious!",
          ],
        },
        {
          question: "What's your favorite way to spend free time?",
          options: [
            "Reading or learning",
            "Creating art",
            "Helping others",
            "Adventure and exploration",
          ],
          compliments: [
            "Your curiosity and wisdom are inspiring!",
            "Your creativity makes the world more beautiful!",
            "Your kindness changes lives!",
            "Your adventurous spirit is amazing!",
          ],
        },
        {
          question: "How do you handle challenges?",
          options: [
            "Analyze and plan",
            "Take action immediately",
            "Ask for advice",
            "Stay positive and adapt",
          ],
          compliments: [
            "Your analytical mind is truly impressive!",
            "Your decisive nature is admirable!",
            "Your willingness to learn from others shows great wisdom!",
            "Your resilience is truly inspiring!",
          ],
        },
        {
          question: "What's your favorite season?",
          options: [
            "Spring, when flowers bloom",
            "Summer, full of energy",
            "Autumn, with cozy vibes",
            "Winter, peaceful and serene",
          ],
          compliments: [
            "You bring new life and hope wherever you go!",
            "Your warmth and energy light up everyone's day!",
            "Your presence makes everything feel warm and cozy!",
            "Your calm and peaceful nature is so refreshing!",
          ],
        },
        {
          question: "How do you prefer to express yourself?",
          options: [
            "Through art and creativity",
            "By helping and supporting others",
            "With words and stories",
            "Through actions and achievements",
          ],
          compliments: [
            "Your creative soul brings beauty to the world!",
            "Your caring nature makes everyone feel special!",
            "Your words have the power to inspire and uplift!",
            "Your actions speak volumes about your amazing character!",
          ],
        },
        {
          question: "What's your approach to making decisions?",
          options: [
            "Consider everyone's feelings",
            "Trust my intuition",
            "Weigh all options carefully",
            "Go with what feels right",
          ],
          compliments: [
            "Your empathy makes you an incredible person!",
            "Your intuition is remarkably insightful!",
            "Your thoughtfulness shows great wisdom!",
            "Your authentic approach is truly admirable!",
          ],
        },
        {
          question: "How do you react to success?",
          options: [
            "Share credit with others",
            "Celebrate with everyone",
            "Feel quietly proud",
            "Set new goals immediately",
          ],
          compliments: [
            "Your humility makes you even more amazing!",
            "Your joy is contagious and uplifting!",
            "Your quiet confidence is truly admirable!",
            "Your ambition is truly inspiring!",
          ],
        },
        {
          question: "What's your ideal weekend activity?",
          options: [
            "Helping at a local charity",
            "Creating something new",
            "Learning a new skill",
            "Spending time with loved ones",
          ],
          compliments: [
            "Your generous heart makes the world better!",
            "Your creative spirit is absolutely wonderful!",
            "Your desire to grow is truly inspiring!",
            "Your loving nature is beautiful to see!",
          ],
        },
        {
          question: "How do you handle stress?",
          options: [
            "Take care of others first",
            "Find creative solutions",
            "Stay calm and focused",
            "Face it with optimism",
          ],
          compliments: [
            "Your selflessness is truly remarkable!",
            "Your innovative thinking is impressive!",
            "Your composure under pressure is admirable!",
            "Your positive attitude is absolutely inspiring!",
          ],
        },
        {
          question: "What quality do others often praise you for?",
          options: [
            "Being a good listener",
            "Making others laugh",
            "Being dependable",
            "Being encouraging",
          ],
          compliments: [
            "Your attentiveness makes others feel valued!",
            "Your humor brightens everyone's day!",
            "Your reliability makes you incredibly special!",
            "Your supportive nature helps others shine!",
          ],
        },
        {
          question: "How do you approach new friendships?",
          options: [
            "Show genuine interest in others",
            "Share joy and laughter",
            "Offer help and support",
            "Create fun memories together",
          ],
          compliments: [
            "Your genuine interest in others is beautiful!",
            "Your joyful spirit draws people to you!",
            "Your supportive nature makes you a treasure!",
            "Your fun-loving nature makes life better!",
          ],
        },
        {
          question: "What motivates you most?",
          options: [
            "Making others happy",
            "Personal growth",
            "Creating beauty",
            "Achieving goals",
          ],
          compliments: [
            "Your dedication to others' happiness is precious!",
            "Your commitment to growth is admirable!",
            "Your ability to create beauty is remarkable!",
            "Your drive for excellence is inspiring!",
          ],
        },
        {
          question: "How do you deal with mistakes?",
          options: [
            "Learn from them gracefully",
            "Fix them immediately",
            "Help others avoid similar ones",
            "See them as opportunities",
          ],
          compliments: [
            "Your grace under pressure is remarkable!",
            "Your proactive nature is admirable!",
            "Your desire to help others is beautiful!",
            "Your positive perspective is inspiring!",
          ],
        },
        {
          question: "What's your superpower?",
          options: [
            "Making others feel special",
            "Finding creative solutions",
            "Staying positive",
            "Being there for others",
          ],
          compliments: [
            "Your ability to make others feel valued is magical!",
            "Your creative mind is absolutely brilliant!",
            "Your positivity is a gift to everyone around you!",
            "Your reliability makes you absolutely precious!",
          ],
        },
        {
          question: "How do you celebrate others' success?",
          options: [
            "Show genuine excitement",
            "Give heartfelt compliments",
            "Help them achieve more",
            "Share their joy widely",
          ],
          compliments: [
            "Your genuine happiness for others is beautiful!",
            "Your encouraging words lift others higher!",
            "Your supportive nature helps others soar!",
            "Your ability to celebrate others is precious!",
          ],
        },
        {
          question: "What's your dream?",
          options: [
            "Making the world better",
            "Creating lasting beauty",
            "Inspiring others",
            "Spreading happiness",
          ],
          compliments: [
            "Your desire to improve the world is inspiring!",
            "Your creative vision is absolutely beautiful!",
            "Your impact on others is truly meaningful!",
            "Your joy-spreading nature is precious!",
          ],
        },
        {
          question: "How do you show love?",
          options: [
            "Through small acts of kindness",
            "By being there always",
            "With words of affirmation",
            "By creating special moments",
          ],
          compliments: [
            "Your thoughtful gestures touch hearts!",
            "Your constant presence is a blessing!",
            "Your uplifting words heal and inspire!",
            "Your ability to create joy is magical!",
          ],
        },
        {
          question: "What makes you unique?",
          options: [
            "My caring heart",
            "My creative mind",
            "My positive spirit",
            "My genuine nature",
          ],
          compliments: [
            "Your compassionate heart is truly special!",
            "Your creative soul brings magic to life!",
            "Your positive energy transforms lives!",
            "Your authenticity is absolutely beautiful!",
          ],
        },
        {
          question: "How do you want to be remembered?",
          options: [
            "As someone who helped others",
            "As someone who spread joy",
            "As someone who inspired",
            "As someone who cared deeply",
          ],
          compliments: [
            "Your helpful nature leaves lasting impact!",
            "Your joyful spirit brightens countless lives!",
            "Your inspiring presence changes lives!",
            "Your caring heart touches everyone!",
          ],
        },
        {
          question: "What's your best quality?",
          options: [
            "My ability to love",
            "My creative spirit",
            "My resilient nature",
            "My kind heart",
          ],
          compliments: [
            "Your capacity for love is boundless!",
            "Your creativity brings light to the world!",
            "Your resilience is truly remarkable!",
            "Your kindness changes lives!",
          ],
        },
        {
          question: "How do you brighten someone's day?",
          options: [
            "With genuine compliments",
            "Through small surprises",
            "By being there to listen",
            "With warm hugs and smiles",
          ],
          compliments: [
            "Your sincere words lift spirits!",
            "Your thoughtful gestures bring joy!",
            "Your listening ear heals hearts!",
            "Your warm presence lights up lives!",
          ],
        },
        {
          question: "What's your life motto?",
          options: [
            "Spread kindness everywhere",
            "Create beauty daily",
            "Make others smile",
            "Love unconditionally",
          ],
          compliments: [
            "Your kindness makes the world better!",
            "Your creativity inspires everyone!",
            "Your ability to bring smiles is precious!",
            "Your loving nature is a true gift!",
          ],
        },
        {
          question: "What's your greatest strength?",
          options: [
            "Making others feel loved",
            "Finding beauty everywhere",
            "Staying positive always",
            "Being authentically me",
          ],
          compliments: [
            "Your loving nature touches hearts deeply!",
            "Your appreciation of beauty is inspiring!",
            "Your positivity lights up the darkest days!",
            "Your authentic self is absolutely beautiful!",
          ],
        },
      ];

      let currentQuestion = 0;
      let selectedCompliments = [];
      let quizScores = JSON.parse(localStorage.getItem("quizScores")) || [];

      function showQuestion() {
        const questionContainer = document.getElementById("question-container");
        const optionsContainer = document.getElementById("options-container");
        const progressElement = document.getElementById("progress");
        const nextButton = document.getElementById("next-btn");

        const question = quizData[currentQuestion];
        questionContainer.innerHTML = `
          <h3 class="text-lg font-bold mb-2">${question.question}</h3>
        `;

        optionsContainer.innerHTML = question.options
          .map(
            (option, index) => `
          <button class="option-btn w-full p-3 text-left border rounded-lg hover:bg-purple-50 transition-colors"
                  data-index="${index}">
            ${option}
          </button>
        `
          )
          .join("");

        progressElement.textContent = `Question ${currentQuestion + 1}/${
          quizData.length
        }`;
        nextButton.classList.add("hidden");

        // Add click handlers to options
        const optionButtons = document.querySelectorAll(".option-btn");
        optionButtons.forEach((button) => {
          button.addEventListener("click", () => {
            optionButtons.forEach((btn) =>
              btn.classList.remove("bg-purple-100")
            );
            button.classList.add("bg-purple-100");
            nextButton.classList.remove("hidden");

            // Store the compliment
            const complimentIndex = parseInt(button.dataset.index);
            selectedCompliments[currentQuestion] =
              question.compliments[complimentIndex];
          });
        });
      }

      function showResults() {
        const quizContainer = document.getElementById("quiz-container");
        const randomCompliments = selectedCompliments.filter((c) => c);

        // Save score and compliments
        const quizResult = {
          date: new Date().toISOString(),
          compliments: randomCompliments,
          score: randomCompliments.length * 5, // 5 points per compliment
        };

        quizScores.push(quizResult);
        localStorage.setItem("quizScores", JSON.stringify(quizScores));

        quizContainer.innerHTML = `
          <div class="bg-purple-100 p-6 rounded-lg shadow-lg text-center">
            <h3 class="text-xl font-bold mb-4">✨ Your Amazing Qualities ✨</h3>
            <div class="text-lg text-purple-600 mb-4">
              Score: ${quizResult.score} points!
            </div>
            <div class="space-y-4">
              ${randomCompliments
                .map(
                  (compliment) => `
                <div class="compliment-card bg-white p-4 rounded-lg shadow fade-in">
                  ${compliment}
                </div>
              `
                )
                .join("")}
            </div>
            <div class="mt-4 text-sm text-gray-600">
              Previous best score: ${Math.max(
                ...quizScores.map((s) => s.score),
                0
              )}
            </div>
            <button onclick="addPoints(${quizResult.score}); showCategories();" 
                    class="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Complete Quiz
            </button>
          </div>
        `;
      }

      // Initialize the first question
      showQuestion();

      // Add event listener to next button
      document.getElementById("next-btn").addEventListener("click", () => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
          showQuestion();
        } else {
          showResults();
        }
      });
    },
  },
  StoryWriter: {
    render: () => {
      return `
            <div class="p-4">
                <h2 class="text-xl font-bold mb-4">Write a Funny Story</h2>
                <div id="story-container" class="space-y-4">
                    <div class="bg-purple-100 p-4 rounded-lg">
                        <p class="text-lg font-medium" id="story-prompt"></p>
                    </div>
                    <textarea 
                        id="story-input" 
                        class="w-full h-48 p-4 border rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-purple-300"
                        placeholder="Continue the story in your own funny way..."></textarea>
                    <div class="flex justify-between items-center">
                        <button 
                            onclick="newPrompt()" 
                            class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
                            New Prompt
                        </button>
                        <button 
                            onclick="saveStory()" 
                            class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            Save Story
                        </button>
                    </div>
                    <div id="saved-message" class="hidden text-center text-green-600 font-medium"></div>
                </div>
            </div>
        `;
    },
    init: () => {
      const funnyPrompts = [
        {
          prompt: "One day, my pet goldfish decided to learn parkour...",
          suggestion:
            "Maybe it started practicing flips in its bowl or recruited other fish for a circus act?",
        },
        {
          prompt:
            "The vegetables in my fridge started a rebellion at midnight...",
          suggestion:
            "Did the carrots elect a leader? Did the tomatoes form an escape committee?",
        },
        {
          prompt:
            "My grandmother's knitting needles turned out to be magic wands...",
          suggestion:
            "What kind of spells did she accidentally cast while making sweaters?",
        },
        {
          prompt:
            "The clouds above my house formed into the shape of a giant dancing chicken...",
          suggestion: "Did it start teaching dance lessons to other clouds?",
        },
        {
          prompt: "My homework actually ate my dog this morning...",
          suggestion:
            "How did your teacher react to this unique twist on a classic excuse?",
        },
        {
          prompt: "The mirror in my bathroom started giving fashion advice...",
          suggestion:
            "Was it kind or brutally honest about your pajama choices?",
        },
        {
          prompt:
            "All the shoes in the world suddenly decided to go on vacation...",
          suggestion: "Where did they go? What did humans do without shoes?",
        },
        {
          prompt:
            "The moon got tired of night shift and switched with the sun...",
          suggestion:
            "How did the nocturnal animals adapt to the new schedule?",
        },
        {
          prompt:
            "My smartphone developed a sense of humor and started telling dad jokes...",
          suggestion: "Did other phones start laughing at its puns?",
        },
        {
          prompt:
            "The trees in my neighborhood started playing musical chairs...",
          suggestion:
            "How did people react to finding different trees in their yards each morning?",
        },
      ];

      let currentPromptIndex = 0;
      const savedStories =
        JSON.parse(localStorage.getItem("savedStories")) || [];

      function showPrompt(index) {
        const promptElement = document.getElementById("story-prompt");
        const prompt = funnyPrompts[index];
        promptElement.innerHTML = `
          ${prompt.prompt}
          <p class="text-sm text-purple-600 mt-2">
            <i class="fas fa-lightbulb"></i> Idea spark: ${prompt.suggestion}
          </p>
        `;
      }

      window.newPrompt = () => {
        currentPromptIndex = (currentPromptIndex + 1) % funnyPrompts.length;
        showPrompt(currentPromptIndex);
        document.getElementById("story-input").value = "";
        document.getElementById("saved-message").classList.add("hidden");
      };

      window.saveStory = () => {
        const storyText = document.getElementById("story-input").value.trim();
        if (storyText.length < 50) {
          showReward(
            "Please write a longer story! Let your creativity flow! 📝"
          );
          return;
        }

        const story = {
          prompt: funnyPrompts[currentPromptIndex].prompt,
          continuation: storyText,
          date: new Date().toISOString(),
          id: Date.now(),
        };

        savedStories.push(story);
        localStorage.setItem("savedStories", JSON.stringify(savedStories));

        // Show success message with the story preview
        const savedMessage = document.getElementById("saved-message");
        savedMessage.innerHTML = `
          <div class="bg-green-50 p-4 rounded-lg mt-4">
            <p class="text-green-600 font-bold">Story saved! ✨</p>
            <div class="mt-2 text-sm text-gray-600">
              <p class="font-bold">${story.prompt}</p>
              <p class="mt-1">${story.continuation.substring(0, 100)}...</p>
            </div>
          </div>
        `;
        savedMessage.classList.remove("hidden");

        // Add points and show reward
        addPoints(80);
        showReward("Amazing story! +80 points! 📚✨");

        // Optional: Show previously saved stories count
        if (savedStories.length > 1) {
          setTimeout(() => {
            showReward(
              `You've written ${savedStories.length} funny stories! 🌟`
            );
          }, 2000);
        }
      };

      // Initialize with first prompt
      showPrompt(currentPromptIndex);

      // Add auto-save draft functionality
      const storyInput = document.getElementById("story-input");
      let autoSaveTimeout;

      storyInput.addEventListener("input", () => {
        clearTimeout(autoSaveTimeout);
        autoSaveTimeout = setTimeout(() => {
          localStorage.setItem(
            "storyDraft",
            JSON.stringify({
              promptIndex: currentPromptIndex,
              text: storyInput.value,
            })
          );
        }, 1000);
      });

      // Load draft if exists
      const savedDraft = JSON.parse(localStorage.getItem("storyDraft"));
      if (savedDraft) {
        currentPromptIndex = savedDraft.promptIndex;
        showPrompt(currentPromptIndex);
        storyInput.value = savedDraft.text;
      }
    },
  },
  VisionBoard: {
    render: () => {
      return `
            <div class="p-4">
                <h2 class="text-xl font-bold mb-4">Create Your Vision Board ✨</h2>
                
                <!-- Vision Board Canvas -->
                <div id="vision-board" class="bg-white p-4 rounded-lg shadow-lg min-h-[400px] relative">
                    <div id="board-items" class="relative min-h-[400px]"></div>
                </div>

                <!-- Controls -->
                <div class="mt-4 space-y-4">
                    <!-- Add Items Controls -->
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <h3 class="font-bold mb-2">Add to Your Board</h3>
                        <div class="flex flex-wrap gap-2">
                            <button onclick="addText()" class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                <i class="fas fa-text"></i> Add Text
                            </button>
                            <button onclick="addImage()" class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                <i class="fas fa-image"></i> Add Image
                            </button>
                            <button onclick="addSticker()" class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                <i class="fas fa-star"></i> Add Sticker
                            </button>
                            <input type="color" id="colorPicker" class="h-10 w-10 rounded cursor-pointer">
                        </div>
                    </div>

                    <!-- Inspiration Prompts -->
                    <div class="bg-yellow-50 p-4 rounded-lg">
                        <h3 class="font-bold mb-2">✨ Vision Prompts</h3>
                        <div id="prompt-carousel" class="text-center">
                            <p id="current-prompt" class="text-lg text-purple-700"></p>
                            <button onclick="nextPrompt()" class="mt-2 text-sm text-purple-600 hover:text-purple-800">
                                Next Prompt <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Save Controls -->
                    <div class="flex justify-between">
                        <button onclick="clearBoard()" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                            Clear Board
                        </button>
                        <button onclick="saveVisionBoard()" class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                            Save Vision Board
                        </button>
                    </div>
                </div>

                <!-- Sticker Panel (Hidden by default) -->
                <div id="sticker-panel" class="hidden fixed bottom-0 left-0 right-0 bg-white p-4 rounded-t-lg shadow-lg">
                    <div class="grid grid-cols-4 gap-4">
                        <!-- Stickers will be loaded here -->
                    </div>
                </div>
            </div>
        `;
    },
    init: () => {
      const visionPrompts = [
        {
          title: "Dream Big! 🌟",
          prompt: "What's your biggest dream for the future?",
          tip: "Add images or words that represent your ultimate goals",
        },
        {
          title: "Happy Places 🏖️",
          prompt: "Where do you feel most peaceful and happy?",
          tip: "Include pictures of places you love or want to visit",
        },
        {
          title: "Future You 👑",
          prompt: "How do you see yourself in 5 years?",
          tip: "Add words describing your future self's amazing qualities",
        },
        {
          title: "Joy Sparks ✨",
          prompt: "What brings you the most joy in life?",
          tip: "Include images of things that make you smile",
        },
        {
          title: "Growth Goals 🌱",
          prompt: "What new skills would you love to learn?",
          tip: "Add symbols or images representing your learning goals",
        },
        {
          title: "Adventure Awaits 🗺️",
          prompt: "What adventures would you like to experience?",
          tip: "Include pictures of places you'd love to explore",
        },
        {
          title: "Heart's Desires 💖",
          prompt: "What does your heart truly desire?",
          tip: "Add words or images that represent your deepest wishes",
        },
        {
          title: "Creative Dreams 🎨",
          prompt: "What would you create if anything was possible?",
          tip: "Include symbols of your creative aspirations",
        },
        {
          title: "Positive Vibes 🌈",
          prompt: "What words inspire and motivate you?",
          tip: "Add your favorite inspiring quotes or mantras",
        },
        {
          title: "Future Home 🏡",
          prompt: "What's your dream living space like?",
          tip: "Include images that represent your ideal environment",
        },
      ];

      const stickers = [
        "⭐",
        "🌟",
        "✨",
        "💫",
        "🌈",
        "🦋",
        "🌺",
        "🌸",
        "🎨",
        "💝",
        "💖",
        "💕",
        "💗",
        "💓",
        "💜",
        "💙",
        "💚",
        "🧡",
        "🌍",
        "🎯",
        "🎪",
        "🎠",
        "🎡",
        "🎢",
        "🎨",
        "🎭",
        "🎪",
        "🏃‍♀️",
        "🧘‍♀️",
        "🏋️‍♀️",
        "🚴‍♀️",
        "🎯",
        "🎪",
        "🎨",
        "🎭",
        "🎪",
      ];

      let currentPromptIndex = 0;
      let selectedColor = "#9F7AEA"; // Default purple color

      function showPrompt(index) {
        const promptElement = document.getElementById("current-prompt");
        const prompt = visionPrompts[index];
        promptElement.innerHTML = `
                <div class="space-y-2">
                    <h4 class="font-bold text-xl">${prompt.title}</h4>
                    <p class="text-purple-600">${prompt.prompt}</p>
                    <p class="text-sm text-gray-600"><i class="fas fa-lightbulb"></i> ${prompt.tip}</p>
                </div>
            `;
      }

      window.nextPrompt = () => {
        currentPromptIndex = (currentPromptIndex + 1) % visionPrompts.length;
        showPrompt(currentPromptIndex);
      };

      window.addText = () => {
        const text = prompt("Enter your text:", "");
        if (text) {
          const textElement = document.createElement("div");
          textElement.className = "absolute p-2 cursor-move text-xl font-bold";
          textElement.style.color = selectedColor;
          textElement.style.left = "50%";
          textElement.style.top = "50%";
          textElement.style.transform = "translate(-50%, -50%)";
          textElement.textContent = text;
          makeElementDraggable(textElement);
          document.getElementById("board-items").appendChild(textElement);
        }
      };

      window.addImage = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const img = document.createElement("img");
              img.src = event.target.result;
              img.className =
                "absolute w-32 h-32 object-cover rounded-lg cursor-move";
              img.style.left = "50%";
              img.style.top = "50%";
              img.style.transform = "translate(-50%, -50%)";
              makeElementDraggable(img);
              document.getElementById("board-items").appendChild(img);
            };
            reader.readAsDataURL(file);
          }
        };
        input.click();
      };

      window.addSticker = () => {
        const stickerPanel = document.getElementById("sticker-panel");
        stickerPanel.innerHTML = stickers
          .map(
            (sticker) => `
                <button onclick="placeSticker('${sticker}')" 
                        class="text-3xl hover:scale-110 transition-transform">
                    ${sticker}
                </button>
            `
          )
          .join("");
        stickerPanel.classList.remove("hidden");
      };

      window.placeSticker = (sticker) => {
        const stickerElement = document.createElement("div");
        stickerElement.className = "absolute text-4xl cursor-move";
        stickerElement.style.left = "50%";
        stickerElement.style.top = "50%";
        stickerElement.style.transform = "translate(-50%, -50%)";
        stickerElement.textContent = sticker;
        makeElementDraggable(stickerElement);
        document.getElementById("board-items").appendChild(stickerElement);
        document.getElementById("sticker-panel").classList.add("hidden");
      };

      function makeElementDraggable(element) {
        let pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;
        element.onmousedown = dragMouseDown;
        element.ontouchstart = dragTouchStart;

        function dragMouseDown(e) {
          e.preventDefault();
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
        }

        function dragTouchStart(e) {
          e.preventDefault();
          pos3 = e.touches[0].clientX;
          pos4 = e.touches[0].clientY;
          document.ontouchend = closeDragElement;
          document.ontouchmove = elementTouchDrag;
        }

        function elementDrag(e) {
          e.preventDefault();
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          element.style.top = element.offsetTop - pos2 + "px";
          element.style.left = element.offsetLeft - pos1 + "px";
        }

        function elementTouchDrag(e) {
          e.preventDefault();
          pos1 = pos3 - e.touches[0].clientX;
          pos2 = pos4 - e.touches[0].clientY;
          pos3 = e.touches[0].clientX;
          pos4 = e.touches[0].clientY;
          element.style.top = element.offsetTop - pos2 + "px";
          element.style.left = element.offsetLeft - pos1 + "px";
        }

        function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
          document.ontouchend = null;
          document.ontouchmove = null;
        }
      }

      window.clearBoard = () => {
        if (confirm("Are you sure you want to clear your vision board?")) {
          document.getElementById("board-items").innerHTML = "";
        }
      };

      window.saveVisionBoard = () => {
        const board = document.getElementById("vision-board");
        html2canvas(board).then((canvas) => {
          try {
            const visionBoards =
              JSON.parse(localStorage.getItem("visionBoards")) || [];
            visionBoards.push({
              date: new Date().toISOString(),
              image: canvas.toDataURL(),
              prompt: visionPrompts[currentPromptIndex].title,
            });
            localStorage.setItem("visionBoards", JSON.stringify(visionBoards));

            addPoints(90);
            showReward("Vision Board saved! +90 points! 🎨✨");

            // Show success message
            const successMessage = document.createElement("div");
            successMessage.className =
              "fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg";
            successMessage.textContent = "Vision Board saved successfully! ✨";
            document.body.appendChild(successMessage);
            setTimeout(() => successMessage.remove(), 3000);
          } catch (error) {
            console.error("Error saving vision board:", error);
            showReward("Couldn't save vision board. Please try again!");
          }
        });
      };

      // Initialize color picker
      const colorPicker = document.getElementById("colorPicker");
      colorPicker.value = selectedColor;
      colorPicker.addEventListener("input", (e) => {
        selectedColor = e.target.value;
      });

      // Show first prompt
      showPrompt(currentPromptIndex);

      // Add click outside handler for sticker panel
      document.addEventListener("click", (e) => {
        const stickerPanel = document.getElementById("sticker-panel");
        if (
          !stickerPanel.contains(e.target) &&
          e.target.id !== "add-sticker-btn"
        ) {
          stickerPanel.classList.add("hidden");
        }
      });
    },
  },
  MandalaMaker: {
    render: () => {
      return `
            <div class="p-4">
                <h2 class="text-xl font-bold mb-4">Design a Beautiful Mandala ✨</h2>
                
                <!-- Mandala Canvas -->
                <div class="canvas-container bg-white border rounded-lg shadow-lg">
                    <canvas id="mandalaCanvas" class="w-full h-[400px] touch-none"></canvas>
                </div>

                <!-- Controls -->
                <div class="mt-4 space-y-4">
                    <!-- Tools -->
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <h3 class="font-bold mb-2">Tools</h3>
                        <div class="grid grid-cols-2 gap-4">
                            <!-- Symmetry Controls -->
                            <div>
                                <label class="block text-sm font-medium mb-1">Symmetry Lines</label>
                                <select id="symmetryLines" class="w-full p-2 rounded border">
                                    <option value="4">4 Lines</option>
                                    <option value="6">6 Lines</option>
                                    <option value="8" selected>8 Lines</option>
                                    <option value="12">12 Lines</option>
                                    <option value="16">16 Lines</option>
                                </select>
                            </div>
                            
                            <!-- Brush Size -->
                            <div>
                                <label class="block text-sm font-medium mb-1">Brush Size</label>
                                <input type="range" id="brushSize" min="1" max="20" value="3" 
                                    class="w-full accent-purple-600">
                            </div>
                        </div>

                        <!-- Color Controls -->
                        <div class="mt-4">
                            <label class="block text-sm font-medium mb-1">Colors</label>
                            <div class="flex flex-wrap gap-2">
                                <button onclick="setMandalaColor('#FF1493')" class="w-8 h-8 rounded-full" style="background-color: #FF1493"></button>
                                <button onclick="setMandalaColor('#9400D3')" class="w-8 h-8 rounded-full" style="background-color: #9400D3"></button>
                                <button onclick="setMandalaColor('#4169E1')" class="w-8 h-8 rounded-full" style="background-color: #4169E1"></button>
                                <button onclick="setMandalaColor('#00CED1')" class="w-8 h-8 rounded-full" style="background-color: #00CED1"></button>
                                <button onclick="setMandalaColor('#32CD32')" class="w-8 h-8 rounded-full" style="background-color: #32CD32"></button>
                                <button onclick="setMandalaColor('#FFD700')" class="w-8 h-8 rounded-full" style="background-color: #FFD700"></button>
                                <button onclick="setMandalaColor('#FFA500')" class="w-8 h-8 rounded-full" style="background-color: #FFA500"></button>
                                <button onclick="setMandalaColor('#FF4500')" class="w-8 h-8 rounded-full" style="background-color: #FF4500"></button>
                                <input type="color" id="customColor" class="w-8 h-8 rounded cursor-pointer">
                            </div>
                        </div>

                        <!-- Pattern Templates -->
                        <div class="mt-4">
                            <label class="block text-sm font-medium mb-2">Pattern Guides</label>
                            <div class="grid grid-cols-4 gap-2">
                                <button onclick="setPattern('flower')" class="p-2 bg-white rounded border hover:bg-purple-50">
                                    🌸 Flower
                                </button>
                                <button onclick="setPattern('star')" class="p-2 bg-white rounded border hover:bg-purple-50">
                                    ⭐ Star
                                </button>
                                <button onclick="setPattern('swirl')" class="p-2 bg-white rounded border hover:bg-purple-50">
                                    🌀 Swirl
                                </button>
                                <button onclick="setPattern('hearts')" class="p-2 bg-white rounded border hover:bg-purple-50">
                                    💖 Hearts
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex justify-between gap-2">
                        <button onclick="undoMandala()" class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                            <i class="fas fa-undo"></i> Undo
                        </button>
                        <button onclick="clearMandala()" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                            Clear
                        </button>
                        <button onclick="saveMandala()" class="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                            Save Mandala
                        </button>
                    </div>
                </div>

                <!-- Tips Panel -->
                <div class="mt-4 bg-yellow-50 p-4 rounded-lg">
                    <h3 class="font-bold mb-2">✨ Mandala Tips</h3>
                    <div id="mandala-tip" class="text-sm text-gray-600"></div>
                </div>
            </div>
        `;
    },
    init: () => {
      const canvas = document.getElementById("mandalaCanvas");
      const ctx = canvas.getContext("2d");
      let isDrawing = false;
      let currentColor = "#9400D3";
      let symmetryLines = 8;
      let brushSize = 3;
      let lastX = 0;
      let lastY = 0;
      let undoStack = [];
      let currentPattern = null;

      const tips = [
        "Start from the center and work your way out for balanced designs",
        "Try using different colors for each layer of your mandala",
        "Combine straight lines and curves for interesting patterns",
        "Take your time - mandala creation is a relaxing journey",
        "Experiment with different symmetry lines for unique effects",
        "Use the pattern guides as inspiration for your design",
        "Mix thin and thick lines to create depth in your mandala",
        "Remember, there's no 'wrong' way to create a mandala!",
      ];

      // Set canvas size
      function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (undoStack.length > 0) {
          ctx.putImageData(undoStack[undoStack.length - 1], 0, 0);
        }
      }

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      // Drawing functions
      function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      function getSymmetricPoints(x, y) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const points = [];

        for (let i = 0; i < symmetryLines; i++) {
          const angle = (Math.PI * 2 * i) / symmetryLines;
          const dx = x - centerX;
          const dy = y - centerY;

          const cos = Math.cos(angle);
          const sin = Math.sin(angle);

          const newX = centerX + (dx * cos - dy * sin);
          const newY = centerY + (dx * sin + dy * cos);
          points.push({ x: newX, y: newY });
        }

        return points;
      }

      function draw(e) {
        if (!isDrawing) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.type.includes("touch")
          ? e.touches[0].clientX - rect.left
          : e.clientX - rect.left;
        const y = e.type.includes("touch")
          ? e.touches[0].clientY - rect.top
          : e.clientY - rect.top;

        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        ctx.strokeStyle = currentColor;

        const points = getSymmetricPoints(x, y);
        const lastPoints = getSymmetricPoints(lastX, lastY);

        for (let i = 0; i < points.length; i++) {
          if (lastX !== 0) {
            drawLine(
              lastPoints[i].x,
              lastPoints[i].y,
              points[i].x,
              points[i].y
            );
          }
        }

        lastX = x;
        lastY = y;
      }

      function startDrawing(e) {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        lastX = e.type.includes("touch")
          ? e.touches[0].clientX - rect.left
          : e.clientX - rect.left;
        lastY = e.type.includes("touch")
          ? e.touches[0].clientY - rect.top
          : e.clientY - rect.top;

        // Save state for undo
        undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        if (undoStack.length > 20) undoStack.shift(); // Limit stack size
      }

      function stopDrawing() {
        isDrawing = false;
        lastX = 0;
        lastY = 0;
      }

      // Event listeners
      canvas.addEventListener("mousedown", startDrawing);
      canvas.addEventListener("mousemove", draw);
      canvas.addEventListener("mouseup", stopDrawing);
      canvas.addEventListener("mouseout", stopDrawing);

      canvas.addEventListener("touchstart", startDrawing);
      canvas.addEventListener("touchmove", draw);
      canvas.addEventListener("touchend", stopDrawing);

      // Prevent scrolling while drawing on mobile
      canvas.addEventListener(
        "touchmove",
        (e) => {
          e.preventDefault();
        },
        { passive: false }
      );

      // Pattern templates
      const patterns = {
        flower: (x, y) => {
          const radius = 20;
          const petals = 8;
          for (let i = 0; i < petals; i++) {
            const angle = (Math.PI * 2 * i) / petals;
            const x2 = x + Math.cos(angle) * radius;
            const y2 = y + Math.sin(angle) * radius;
            drawLine(x, y, x2, y2);
          }
        },
        star: (x, y) => {
          const outerRadius = 25;
          const innerRadius = 10;
          const points = 5;
          for (let i = 0; i < points * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (Math.PI * i) / points;
            const x2 = x + Math.cos(angle) * radius;
            const y2 = y + Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x2, y2);
            else ctx.lineTo(x2, y2);
          }
          ctx.closePath();
          ctx.stroke();
        },
        swirl: (x, y) => {
          const turns = 2;
          const points = 50;
          let radius = 0;
          ctx.beginPath();
          for (let i = 0; i < points; i++) {
            const angle = (Math.PI * 2 * turns * i) / points;
            radius += 0.5;
            const x2 = x + Math.cos(angle) * radius;
            const y2 = y + Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x2, y2);
            else ctx.lineTo(x2, y2);
          }
          ctx.stroke();
        },
        hearts: (x, y) => {
          const size = 15;
          ctx.beginPath();
          ctx.moveTo(x, y + size * 0.7);
          ctx.bezierCurveTo(x, y, x - size, y, x - size, y + size * 0.7);
          ctx.bezierCurveTo(
            x - size,
            y + size * 1.5,
            x,
            y + size * 1.4,
            x,
            y + size * 2
          );
          ctx.bezierCurveTo(
            x,
            y + size * 1.4,
            x + size,
            y + size * 1.5,
            x + size,
            y + size * 0.7
          );
          ctx.bezierCurveTo(x + size, y, x, y, x, y + size * 0.7);
          ctx.stroke();
        },
      };

      // Expose functions globally
      window.setMandalaColor = (color) => {
        currentColor = color;
      };

      window.clearMandala = () => {
        if (confirm("Are you sure you want to clear your mandala?")) {
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          undoStack = [];
        }
      };

      window.undoMandala = () => {
        if (undoStack.length > 0) {
          ctx.putImageData(undoStack.pop(), 0, 0);
        }
      };

      window.setPattern = (patternName) => {
        currentPattern = patterns[patternName];
        showReward(
          `${
            patternName.charAt(0).toUpperCase() + patternName.slice(1)
          } pattern selected! Click to place.`
        );
      };

      window.saveMandala = () => {
        try {
          const mandalas =
            JSON.parse(localStorage.getItem("savedMandalas")) || [];
          mandalas.push({
            date: new Date().toISOString(),
            image: canvas.toDataURL(),
          });
          localStorage.setItem("savedMandalas", JSON.stringify(mandalas));

          addPoints(85);
          showReward("Mandala saved! +85 points! 🎨✨");
        } catch (error) {
          console.error("Error saving mandala:", error);
          showReward("Couldn't save mandala. Please try again!");
        }
      };

      // Initialize controls
      document
        .getElementById("symmetryLines")
        .addEventListener("change", (e) => {
          symmetryLines = parseInt(e.target.value);
        });

      document.getElementById("brushSize").addEventListener("input", (e) => {
        brushSize = parseInt(e.target.value);
      });

      document.getElementById("customColor").addEventListener("input", (e) => {
        currentColor = e.target.value;
      });

      // Show random tips
      function showRandomTip() {
        const tipElement = document.getElementById("mandala-tip");
        tipElement.textContent = tips[Math.floor(Math.random() * tips.length)];
        setTimeout(showRandomTip, 10000); // Show new tip every 10 seconds
      }
      showRandomTip();
    },
  },
  JigsawPuzzle: {
    render: () => {
      return `
            <div class="p-4">
                <h2 class="text-xl font-bold mb-4">Jigsaw Puzzle</h2>
                
                <!-- Puzzle Selection -->
                <div class="bg-purple-50 p-4 rounded-lg mb-4">
                    <h3 class="font-bold mb-2">Choose a Puzzle</h3>
                    <select id="puzzle-select" class="w-full p-2 rounded border">
                        <!-- Puzzle options will be loaded here -->
                    </select>
                </div>

                <!-- Puzzle Area -->
                <div class="relative">
                    <!-- Puzzle Canvas -->
                    <div id="puzzle-container" class="bg-white border rounded-lg shadow-lg aspect-square relative">
                        <canvas id="puzzleCanvas" class="w-full h-full"></canvas>
                    </div>

                    <!-- Progress -->
                    <div id="puzzle-progress" class="mt-2 text-center text-purple-600 font-bold"></div>
                </div>

                <!-- Controls -->
                <div class="mt-4 flex justify-between gap-2">
                    <button onclick="shufflePuzzle()" class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                        Shuffle
                    </button>
                    <button onclick="showHint()" class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                        Hint
                    </button>
                    <button onclick="newPuzzle()" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        New Puzzle
                    </button>
                </div>
            </div>
        `;
    },
    init: () => {
      const puzzles = [
        {
          id: "cute-cat",
          title: "Cute Cat",
          image: "https://placekitten.com/400/400",
          difficulty: "easy",
          pieces: 9,
        },
        {
          id: "puppy",
          title: "Playful Puppy",
          image: "https://placedog.net/400/400",
          difficulty: "easy",
          pieces: 9,
        },
        {
          id: "sunset",
          title: "Beautiful Sunset",
          image: "https://picsum.photos/seed/sunset/400/400",
          difficulty: "medium",
          pieces: 16,
        },
        {
          id: "flowers",
          title: "Spring Flowers",
          image: "https://picsum.photos/seed/flowers/400/400",
          difficulty: "medium",
          pieces: 16,
        },
        {
          id: "beach",
          title: "Tropical Beach",
          image: "https://picsum.photos/seed/beach/400/400",
          difficulty: "hard",
          pieces: 25,
        },
        {
          id: "mountains",
          title: "Mountain View",
          image: "https://picsum.photos/seed/mountains/400/400",
          difficulty: "hard",
          pieces: 25,
        },
        {
          id: "butterfly",
          title: "Colorful Butterfly",
          image: "https://picsum.photos/seed/butterfly/400/400",
          difficulty: "easy",
          pieces: 9,
        },
        {
          id: "unicorn",
          title: "Magical Unicorn",
          image: "https://picsum.photos/seed/unicorn/400/400",
          difficulty: "medium",
          pieces: 16,
        },
        {
          id: "rainbow",
          title: "Rainbow Sky",
          image: "https://picsum.photos/seed/rainbow/400/400",
          difficulty: "medium",
          pieces: 16,
        },
        {
          id: "castle",
          title: "Fairy Castle",
          image: "https://picsum.photos/seed/castle/400/400",
          difficulty: "hard",
          pieces: 25,
        },
        {
          id: "garden",
          title: "Secret Garden",
          image: "https://picsum.photos/seed/garden/400/400",
          difficulty: "medium",
          pieces: 16,
        },
        {
          id: "forest",
          title: "Enchanted Forest",
          image: "https://picsum.photos/seed/forest/400/400",
          difficulty: "hard",
          pieces: 25,
        },
        {
          id: "balloon",
          title: "Hot Air Balloon",
          image: "https://picsum.photos/seed/balloon/400/400",
          difficulty: "easy",
          pieces: 9,
        },
        {
          id: "mermaid",
          title: "Mermaid Lagoon",
          image: "https://picsum.photos/seed/mermaid/400/400",
          difficulty: "medium",
          pieces: 16,
        },
        {
          id: "dragon",
          title: "Friendly Dragon",
          image: "https://picsum.photos/seed/dragon/400/400",
          difficulty: "hard",
          pieces: 25,
        },
        {
          id: "candy",
          title: "Candy Land",
          image: "https://picsum.photos/seed/candy/400/400",
          difficulty: "easy",
          pieces: 9,
        },
        {
          id: "space",
          title: "Space Adventure",
          image: "https://picsum.photos/seed/space/400/400",
          difficulty: "hard",
          pieces: 25,
        },
        {
          id: "circus",
          title: "Circus Fun",
          image: "https://picsum.photos/seed/circus/400/400",
          difficulty: "medium",
          pieces: 16,
        },
        {
          id: "teddy",
          title: "Teddy Bears",
          image: "https://picsum.photos/seed/teddy/400/400",
          difficulty: "easy",
          pieces: 9,
        },
        {
          id: "fairy",
          title: "Fairy Garden",
          image: "https://picsum.photos/seed/fairy/400/400",
          difficulty: "medium",
          pieces: 16,
        },
      ];

      let currentPuzzle = null;
      let pieces = [];
      let selectedPiece = null;
      let isComplete = false;

      const canvas = document.getElementById("puzzleCanvas");
      const ctx = canvas.getContext("2d");
      const container = document.getElementById("puzzle-container");

      // Set canvas size
      function resizeCanvas() {
        const size = container.offsetWidth;
        canvas.width = size;
        canvas.height = size;
        if (currentPuzzle) {
          drawPieces();
        }
      }

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      // Initialize puzzle select
      const puzzleSelect = document.getElementById("puzzle-select");
      puzzleSelect.innerHTML = puzzles
        .map(
          (puzzle) => `
        <option value="${puzzle.id}">
          ${puzzle.title} (${puzzle.difficulty} - ${Math.sqrt(
            puzzle.pieces
          )}x${Math.sqrt(puzzle.pieces)})
        </option>
      `
        )
        .join("");

      // Load puzzle image
      function loadPuzzle(puzzleId) {
        currentPuzzle = puzzles.find((p) => p.id === puzzleId);
        if (!currentPuzzle) return;

        const img = new Image();
        img.onload = () => {
          // Create puzzle pieces
          const pieceSize = canvas.width / Math.sqrt(currentPuzzle.pieces);
          pieces = [];

          for (let y = 0; y < Math.sqrt(currentPuzzle.pieces); y++) {
            for (let x = 0; x < Math.sqrt(currentPuzzle.pieces); x++) {
              pieces.push({
                x: x * pieceSize,
                y: y * pieceSize,
                correctX: x * pieceSize,
                correctY: y * pieceSize,
                width: pieceSize,
                height: pieceSize,
                image: img,
                sourceX: x * (img.width / Math.sqrt(currentPuzzle.pieces)),
                sourceY: y * (img.height / Math.sqrt(currentPuzzle.pieces)),
                sourceWidth: img.width / Math.sqrt(currentPuzzle.pieces),
                sourceHeight: img.height / Math.sqrt(currentPuzzle.pieces),
              });
            }
          }

          shufflePieces();
          drawPieces();
        };
        img.src = currentPuzzle.image;
      }

      // Shuffle pieces
      function shufflePieces() {
        for (let i = pieces.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [pieces[i].x, pieces[j].x] = [pieces[j].x, pieces[i].x];
          [pieces[i].y, pieces[j].y] = [pieces[j].y, pieces[i].y];
        }
        isComplete = false;
      }

      // Draw pieces
      function drawPieces() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw grid
        ctx.strokeStyle = "#ddd";
        ctx.lineWidth = 1;
        const gridSize = canvas.width / Math.sqrt(currentPuzzle.pieces);
        for (let i = 1; i < Math.sqrt(currentPuzzle.pieces); i++) {
          ctx.beginPath();
          ctx.moveTo(i * gridSize, 0);
          ctx.lineTo(i * gridSize, canvas.height);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(0, i * gridSize);
          ctx.lineTo(canvas.width, i * gridSize);
          ctx.stroke();
        }

        // Draw pieces
        pieces.forEach((piece) => {
          ctx.drawImage(
            piece.image,
            piece.sourceX,
            piece.sourceY,
            piece.sourceWidth,
            piece.sourceHeight,
            piece.x,
            piece.y,
            piece.width,
            piece.height
          );
        });

        // Draw selected piece highlight
        if (selectedPiece) {
          ctx.strokeStyle = "#4C1D95";
          ctx.lineWidth = 3;
          ctx.strokeRect(
            selectedPiece.x,
            selectedPiece.y,
            selectedPiece.width,
            selectedPiece.height
          );
        }
      }

      // Check if puzzle is complete
      function checkCompletion() {
        isComplete = pieces.every(
          (piece) =>
            Math.abs(piece.x - piece.correctX) < 5 &&
            Math.abs(piece.y - piece.correctY) < 5
        );

        if (isComplete) {
          // Snap all pieces to correct positions
          pieces.forEach((piece) => {
            piece.x = piece.correctX;
            piece.y = piece.correctY;
          });
          drawPieces();

          // Save progress and award points
          const completedPuzzles = JSON.parse(
            localStorage.getItem("completedPuzzles") || "[]"
          );
          if (!completedPuzzles.includes(currentPuzzle.id)) {
            completedPuzzles.push(currentPuzzle.id);
            localStorage.setItem(
              "completedPuzzles",
              JSON.stringify(completedPuzzles)
            );

            // Award points based on difficulty
            const points =
              currentPuzzle.difficulty === "easy"
                ? 50
                : currentPuzzle.difficulty === "medium"
                ? 75
                : 100;
            addPoints(points);
            showReward(`Puzzle Complete! +${points} points! 🎉`);
          }
        }

        updateProgress();
      }

      // Update progress display
      function updateProgress() {
        const progress = document.getElementById("puzzle-progress");
        const correctPieces = pieces.filter(
          (piece) =>
            Math.abs(piece.x - piece.correctX) < 5 &&
            Math.abs(piece.y - piece.correctY) < 5
        ).length;

        progress.textContent = `Progress: ${correctPieces}/${pieces.length} pieces`;
      }

      // Event handlers
      canvas.addEventListener("mousedown", (e) => {
        if (isComplete) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        selectedPiece = pieces.find(
          (piece) =>
            x >= piece.x &&
            x <= piece.x + piece.width &&
            y >= piece.y &&
            y <= piece.y + piece.height
        );

        if (selectedPiece) {
          // Bring selected piece to front
          pieces = pieces.filter((p) => p !== selectedPiece);
          pieces.push(selectedPiece);
          drawPieces();
        }
      });

      canvas.addEventListener("mousemove", (e) => {
        if (!selectedPiece || isComplete) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        selectedPiece.x = x - selectedPiece.width / 2;
        selectedPiece.y = y - selectedPiece.height / 2;

        drawPieces();
      });

      canvas.addEventListener("mouseup", () => {
        if (!selectedPiece || isComplete) return;

        // Snap to grid
        const gridSize = canvas.width / Math.sqrt(currentPuzzle.pieces);
        selectedPiece.x = Math.round(selectedPiece.x / gridSize) * gridSize;
        selectedPiece.y = Math.round(selectedPiece.y / gridSize) * gridSize;

        // Keep pieces within canvas
        selectedPiece.x = Math.max(
          0,
          Math.min(canvas.width - gridSize, selectedPiece.x)
        );
        selectedPiece.y = Math.max(
          0,
          Math.min(canvas.height - gridSize, selectedPiece.y)
        );

        drawPieces();
        checkCompletion();
        selectedPiece = null;
      });

      // Expose functions globally
      window.shufflePuzzle = () => {
        if (!isComplete) {
          shufflePieces();
          drawPieces();
          updateProgress();
        }
      };

      window.showHint = () => {
        if (isComplete) return;

        // Temporarily show correct positions
        const originalPositions = pieces.map((p) => ({ x: p.x, y: p.y }));
        pieces.forEach((piece) => {
          piece.x = piece.correctX;
          piece.y = piece.correctY;
        });
        drawPieces();

        setTimeout(() => {
          pieces.forEach((piece, i) => {
            piece.x = originalPositions[i].x;
            piece.y = originalPositions[i].y;
          });
          drawPieces();
        }, 1000);
      };

      window.newPuzzle = () => {
        if (
          !isComplete &&
          !confirm("Start a new puzzle? Current progress will be lost.")
        ) {
          return;
        }
        loadPuzzle(puzzleSelect.value);
      };

      // Initialize first puzzle
      puzzleSelect.addEventListener("change", () => {
        if (
          !isComplete &&
          !confirm("Change puzzle? Current progress will be lost.")
        ) {
          puzzleSelect.value = currentPuzzle.id;
          return;
        }
        loadPuzzle(puzzleSelect.value);
      });

      loadPuzzle(puzzleSelect.value);
    },
  },
  OrigamiMaker: {
    render: () => {
      return `
            <div class="p-4">
                <h2 class="text-xl font-bold mb-4">Origami Animals</h2>
                
                <!-- Origami Grid -->
                <div class="grid grid-cols-2 gap-4" id="origami-grid">
                    <!-- Grid items will be loaded here -->
                </div>

                <!-- Instructions View (hidden by default) -->
                <div id="instructions-view" class="fixed inset-0 bg-white z-50 hidden">
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-4">
                            <button onclick="closeInstructions()" class="text-gray-600">
                                <i class="fas fa-arrow-left"></i> Back
                            </button>
                            <button onclick="markCompleted()" id="complete-btn" class="px-4 py-2 bg-purple-600 text-white rounded-lg">
                                Mark Complete
                            </button>
                        </div>
                        <iframe id="instructions-frame" class="w-full h-[calc(100vh-120px)]" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        `;
    },
    init: () => {
      const origamiItems = [
        {
          id: "crane",
          name: "Origami Crane",
          image:
            "https://origami.me/wp-content/uploads/2024/08/origami-crane.jpg",
          url: "https://origami.me/crane/",
          difficulty: "Medium",
        },
        {
          id: "swan",
          name: "Origami Swan",
          image:
            "https://origami.me/wp-content/uploads/2024/07/easy-origami-swan-1.jpg",
          url: "https://origami.me/swan/",
          difficulty: "Easy",
        },
        {
          id: "frog",
          name: "Origami Frog",
          image:
            "https://origami.me/wp-content/uploads/2024/07/easy-origami-frog.jpg",
          url: "https://origami.me/jumping-frog/",
          difficulty: "Easy",
        },
        {
          id: "butterfly",
          name: "Origami Butterfly",
          image:
            "https://origami.me/wp-content/uploads/2024/07/easy-origami-butterfly.jpg",
          url: "https://origami.me/butterfly/",
          difficulty: "Easy",
        },
        // Add new origami animals
        {
          id: "snail",
          name: "Origami Snail",
          image:
            "https://origami.me/wp-content/uploads/2024/09/origami-snail.jpg",
          url: "https://origami.me/snail/",
          difficulty: "Easy",
        },
        {
          id: "turtle",
          name: "Origami Turtle",
          image:
            "https://origami.me/wp-content/uploads/2024/10/easy-origami-turtle.jpg",
          url: "https://origami.me/turtle/",
          difficulty: "Easy",
        },
        {
          id: "rabbit",
          name: "Origami Rabbit",
          image:
            "https://origami.me/wp-content/uploads/2024/08/easy-origami-rabbit.jpg",
          url: "https://origami.me/rabbit/",
          difficulty: "Easy",
        },
        {
          id: "owl",
          name: "Origami Owl",
          image:
            "https://origami.me/wp-content/uploads/2024/09/traditional-origami-owl.jpg",
          url: "https://origami.me/owl/",
          difficulty: "Medium",
        },
      ];

      let currentOrigami = null;
      const completedOrigami = JSON.parse(
        localStorage.getItem("completedOrigami") || "[]"
      );

      // Render origami grid
      const grid = document.getElementById("origami-grid");
      grid.innerHTML = origamiItems
        .map(
          (item) => `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <div class="aspect-square relative">
                    <img src="${item.image}" 
                         class="w-full h-full object-cover" 
                         alt="${item.name}">
                    ${
                      completedOrigami.includes(item.id)
                        ? '<div class="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1"><i class="fas fa-check"></i></div>'
                        : ""
                    }
                </div>
                <div class="p-3">
                    <h3 class="font-bold text-gray-800">${item.name}</h3>
                    <div class="flex justify-between items-center mt-2">
                        <span class="text-sm text-gray-600">${
                          item.difficulty
                        }</span>
                        <button onclick="showInstructions('${item.id}')" 
                                class="text-purple-600 hover:text-purple-800">
                            Start <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `
        )
        .join("");

      // Show instructions
      window.showInstructions = (id) => {
        currentOrigami = origamiItems.find((item) => item.id === id);
        const instructionsView = document.getElementById("instructions-view");
        const frame = document.getElementById("instructions-frame");

        frame.src = currentOrigami.url;
        instructionsView.classList.remove("hidden");

        // Update complete button state
        const completeBtn = document.getElementById("complete-btn");
        completeBtn.classList.toggle(
          "bg-green-500",
          completedOrigami.includes(id)
        );
        completeBtn.textContent = completedOrigami.includes(id)
          ? "Completed!"
          : "Mark Complete";
      };

      // Close instructions
      window.closeInstructions = () => {
        document.getElementById("instructions-view").classList.add("hidden");
        document.getElementById("instructions-frame").src = "";
        currentOrigami = null;
      };

      // Mark origami as completed
      window.markCompleted = () => {
        if (!currentOrigami) return;

        if (!completedOrigami.includes(currentOrigami.id)) {
          completedOrigami.push(currentOrigami.id);
          localStorage.setItem(
            "completedOrigami",
            JSON.stringify(completedOrigami)
          );

          // Award points based on difficulty
          const points = currentOrigami.difficulty === "Easy" ? 50 : 75;
          addPoints(points);
          showReward(`${currentOrigami.name} completed! +${points} points! 🎉`);

          // Update UI
          const completeBtn = document.getElementById("complete-btn");
          completeBtn.textContent = "Completed!";
          completeBtn.classList.add("bg-green-500");

          // Refresh grid to show completion status
          grid.innerHTML = origamiItems
            .map(
              (item) => `
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="aspect-square relative">
                            <img src="${item.image}" 
                                 class="w-full h-full object-cover" 
                                 alt="${item.name}">
                            ${
                              completedOrigami.includes(item.id)
                                ? '<div class="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1"><i class="fas fa-check"></i></div>'
                                : ""
                            }
                        </div>
                        <div class="p-3">
                            <h3 class="font-bold text-gray-800">${
                              item.name
                            }</h3>
                            <div class="flex justify-between items-center mt-2">
                                <span class="text-sm text-gray-600">${
                                  item.difficulty
                                }</span>
                                <button onclick="showInstructions('${
                                  item.id
                                }')" 
                                        class="text-purple-600 hover:text-purple-800">
                                    Start <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `
            )
            .join("");
        }
      };
    },
  },
  WordGame: {
    render: () => {
      return `
            <div class="p-4 mb-16"> <!-- Added margin bottom for nav bar -->
                <h2 class="text-xl font-bold mb-4">Word Association Game</h2>
                
                <!-- Game Area -->
                <div class="bg-white p-4 rounded-lg shadow-lg">
                    <div class="text-center mb-4">
                        <div class="text-lg font-bold text-purple-600">Score: <span id="word-score">0</span></div>
                        <div class="text-sm text-gray-600">Find the related word!</div>
                    </div>

                    <!-- Word Display -->
                    <div class="text-center mb-6">
                        <div class="text-2xl font-bold mb-2" id="current-word"></div>
                        <div class="grid grid-cols-2 gap-2">
                            <button onclick="checkWordAnswer(0)" class="word-option p-3 bg-purple-50 rounded-lg hover:bg-purple-100"></button>
                            <button onclick="checkWordAnswer(1)" class="word-option p-3 bg-purple-50 rounded-lg hover:bg-purple-100"></button>
                            <button onclick="checkWordAnswer(2)" class="word-option p-3 bg-purple-50 rounded-lg hover:bg-purple-100"></button>
                            <button onclick="checkWordAnswer(3)" class="word-option p-3 bg-purple-50 rounded-lg hover:bg-purple-100"></button>
                        </div>
                    </div>

                    <!-- Progress -->
                    <div class="text-center text-sm text-gray-600" id="word-progress"></div>
                </div>
            </div>
        `;
    },
    init: () => {
      const wordPairs = [
        {
          word: "Ephemeral",
          options: ["Temporary", "Permanent", "Stable", "Fixed"],
          correct: 0,
        },
        {
          word: "Ubiquitous",
          options: ["Everywhere", "Rare", "Hidden", "Scarce"],
          correct: 0,
        },
        {
          word: "Serendipity",
          options: ["Coincidence", "Planning", "Strategy", "Method"],
          correct: 0,
        },
        {
          word: "Melancholy",
          options: ["Sadness", "Happiness", "Excitement", "Joy"],
          correct: 0,
        },
        {
          word: "Enigmatic",
          options: ["Mysterious", "Clear", "Simple", "Obvious"],
          correct: 0,
        },
        {
          word: "Resilient",
          options: ["Strong", "Weak", "Fragile", "Delicate"],
          correct: 0,
        },
        {
          word: "Nostalgia",
          options: ["Memory", "Future", "Present", "Reality"],
          correct: 0,
        },
        {
          word: "Paradox",
          options: ["Contradiction", "Agreement", "Harmony", "Balance"],
          correct: 0,
        },
        {
          word: "Euphoria",
          options: ["Joy", "Sorrow", "Pain", "Grief"],
          correct: 0,
        },
        {
          word: "Ambivalent",
          options: ["Uncertain", "Decided", "Sure", "Confident"],
          correct: 0,
        },
      ];

      // Randomize correct answer positions
      wordPairs.forEach((pair) => {
        const correctOption = pair.options[pair.correct];
        const randomIndex = Math.floor(Math.random() * 4);
        // Swap correct answer with random position
        [pair.options[pair.correct], pair.options[randomIndex]] = [
          pair.options[randomIndex],
          pair.options[pair.correct],
        ];
        pair.correct = randomIndex;
      });

      let currentWordIndex = 0;
      let score = 0;

      function showWord() {
        const current = wordPairs[currentWordIndex];
        document.getElementById("current-word").textContent = current.word;

        const options = document.querySelectorAll(".word-option");
        options.forEach((option, index) => {
          option.textContent = current.options[index];
        });

        document.getElementById("word-progress").textContent = `Question ${
          currentWordIndex + 1
        } of ${wordPairs.length}`;
      }

      window.checkWordAnswer = (selectedIndex) => {
        const current = wordPairs[currentWordIndex];
        const options = document.querySelectorAll(".word-option");

        // Disable all buttons temporarily
        options.forEach((btn) => (btn.disabled = true));

        // Highlight correct and incorrect answers
        options[current.correct].classList.add("bg-green-200");
        if (selectedIndex !== current.correct) {
          options[selectedIndex].classList.add("bg-red-200");
        }

        if (selectedIndex === current.correct) {
          score += 10;
          document.getElementById("word-score").textContent = score;
          showReward("Correct! +10 points! 🌟");
        }

        // Wait before moving to next question
        setTimeout(() => {
          currentWordIndex++;
          if (currentWordIndex < wordPairs.length) {
            // Reset button styles and enable them
            options.forEach((btn) => {
              btn.classList.remove("bg-green-200", "bg-red-200");
              btn.disabled = false;
            });
            showWord();
          } else {
            // Game complete
            const mainContent = document.getElementById("main-content");
            mainContent.innerHTML = `
                        <div class="p-4 mb-16">
                            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                                <h3 class="text-2xl font-bold mb-4">Game Complete!</h3>
                                <p class="text-xl mb-4">Final Score: ${score}</p>
                                <button onclick="addPoints(${score}); showCategories();" 
                                        class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                    Back to Categories
                                </button>
                            </div>
                        </div>
                    `;
          }
        }, 1500);
      };

      showWord();
    },
  },

  MemoryGame: {
    render: () => {
      return `
            <div class="p-4">
                <h2 class="text-xl font-bold mb-4">Memory Match</h2>
                
                <!-- Game Stats -->
                <div class="flex justify-between mb-4">
                    <div class="text-purple-600">Matches: <span id="matches">0</span>/8</div>
                    <div class="text-purple-600">Moves: <span id="moves">0</span></div>
                </div>

                <!-- Game Grid -->
                <div class="grid grid-cols-4 gap-2" id="memory-grid">
                    <!-- Cards will be generated here -->
                </div>
            </div>
        `;
    },
    init: () => {
      const emojis = [
        "🐶",
        "🐱",
        "🐰",
        "🐼",
        "🦊",
        "🐨",
        "🐯",
        "🦁",
        "🐶",
        "🐱",
        "🐰",
        "🐼",
        "🦊",
        "🐨",
        "🐯",
        "🦁",
      ];

      let flippedCards = [];
      let matchedPairs = 0;
      let moves = 0;
      let canFlip = true;

      // Shuffle emojis
      const shuffledEmojis = emojis.sort(() => Math.random() - 0.5);

      // Create grid
      const grid = document.getElementById("memory-grid");
      shuffledEmojis.forEach((emoji, index) => {
        const card = document.createElement("div");
        card.className =
          "memory-card bg-purple-100 aspect-square rounded-lg cursor-pointer flex items-center justify-center text-3xl";
        card.innerHTML = `
                <div class="card-inner w-full h-full relative transform transition-transform duration-500">
                    <div class="card-front absolute w-full h-full flex items-center justify-center bg-purple-200 rounded-lg">
                        <span>?</span>
                    </div>
                    <div class="card-back absolute w-full h-full flex items-center justify-center bg-white rounded-lg opacity-0">
                        ${emoji}
                    </div>
                </div>
            `;
        card.dataset.emoji = emoji;
        card.addEventListener("click", () => flipCard(card));
        grid.appendChild(card);
      });

      function flipCard(card) {
        if (
          !canFlip ||
          flippedCards.includes(card) ||
          card.classList.contains("matched")
        )
          return;

        // Flip animation
        const inner = card.querySelector(".card-inner");
        const front = card.querySelector(".card-front");
        const back = card.querySelector(".card-back");
        inner.style.transform = "rotateY(180deg)";
        front.style.opacity = "0";
        back.style.opacity = "1";

        flippedCards.push(card);

        if (flippedCards.length === 2) {
          moves++;
          document.getElementById("moves").textContent = moves;
          canFlip = false;

          if (flippedCards[0].dataset.emoji === flippedCards[1].dataset.emoji) {
            // Match found
            matchedPairs++;
            document.getElementById("matches").textContent = matchedPairs;
            flippedCards.forEach((card) => card.classList.add("matched"));
            flippedCards = [];
            canFlip = true;

            if (matchedPairs === 8) {
              // Game complete
              const score = Math.max(100 - moves * 2, 10);
              setTimeout(() => {
                grid.innerHTML = `
                                <div class="col-span-4 text-center p-6">
                                    <h3 class="text-2xl font-bold mb-4">Game Complete!</h3>
                                    <p class="text-xl mb-4">Score: ${score} points</p>
                                    <button onclick="addPoints(${score}); showCategories();" 
                                            class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                        Complete Game
                                    </button>
                                </div>
                            `;
              }, 500);
            }
          } else {
            // No match
            setTimeout(() => {
              flippedCards.forEach((card) => {
                const inner = card.querySelector(".card-inner");
                const front = card.querySelector(".card-front");
                const back = card.querySelector(".card-back");
                inner.style.transform = "";
                front.style.opacity = "1";
                back.style.opacity = "0";
              });
              flippedCards = [];
              canFlip = true;
            }, 1000);
          }
        }
      }
    },
  },

  RiddleGame: {
    render: () => {
      return `
            <div class="p-4">
                <h2 class="text-xl font-bold mb-4">Fun Riddles</h2>
                
                <!-- Riddle Display -->
                <div class="bg-white p-4 rounded-lg shadow-lg">
                    <div class="mb-4">
                        <p id="riddle-text" class="text-lg font-medium mb-4"></p>
                        <input type="text" id="riddle-answer" 
                               class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-300"
                               placeholder="Type your answer...">
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <button onclick="checkRiddleAnswer()" 
                                class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                            Submit Answer
                        </button>
                        <button onclick="showRiddleHint()" 
                                class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                            Hint
                        </button>
                    </div>

                    <div id="riddle-feedback" class="mt-4 text-center hidden"></div>
                </div>

                <!-- Progress -->
                <div class="mt-4 text-center">
                    <div class="text-purple-600">
                        Solved: <span id="riddles-solved">0</span>/<span id="total-riddles"></span>
                    </div>
                </div>
            </div>
        `;
    },
    init: () => {
      const riddles = [
        {
          question:
            "What has keys, but no locks; space, but no room; and you can enter, but not go in?",
          answer: "keyboard",
          hint: "You use it to type",
        },
        {
          question: "What gets wetter and wetter the more it dries?",
          answer: "towel",
          hint: "You use it after a shower",
        },
        {
          question: "What has a head and a tail but no body?",
          answer: "coin",
          hint: "You can find it in your pocket",
        },
        {
          question:
            "What has cities, but no houses; forests, but no trees; and rivers, but no water?",
          answer: "map",
          hint: "It helps you find your way",
        },
        {
          question: "The more you take, the more you leave behind. What am I?",
          answer: "footsteps",
          hint: "You make these when you walk",
        },
        {
          question: "What has legs, but doesn't walk?",
          answer: "table",
          hint: "You eat on it",
        },
        {
          question: "What is always in front of you but can't be seen?",
          answer: "future",
          hint: "It hasn't happened yet",
        },
        {
          question:
            "I'm tall when I'm young, and short when I'm old. What am I?",
          answer: "candle",
          hint: "I give you light",
        },
        {
          question:
            "What can travel around the world while staying in a corner?",
          answer: "stamp",
          hint: "You put it on an envelope",
        },
        {
          question: "What has one eye, but can't see?",
          answer: "needle",
          hint: "You use it to sew",
        },
        {
          question:
            "The more you take away from it, the larger it becomes. What is it?",
          answer: "hole",
          hint: "It's empty space",
        },
        {
          question: "What breaks when you say it?",
          answer: "silence",
          hint: "It's very quiet",
        },
        {
          question: "What goes up but never comes down?",
          answer: "age",
          hint: "It increases every year",
        },
        {
          question: "I speak without a mouth and hear without ears. What am I?",
          answer: "echo",
          hint: "You hear me repeat",
        },
        {
          question:
            "What has keys that open no doors, space but no room, and you can enter but not go in?",
          answer: "keyboard",
          hint: "You type on it",
        },
        {
          question:
            "The person who makes it, sells it. The person who buys it never uses it. What is it?",
          answer: "coffin",
          hint: "Used at a funeral",
        },
        {
          question:
            "What starts with E, ends with E, but only contains one letter?",
          answer: "envelope",
          hint: "You put mail in it",
        },
        {
          question: "What has a thumb and four fingers but is not alive?",
          answer: "glove",
          hint: "Keeps your hands warm",
        },
        {
          question: "What runs but never walks, has a mouth but never talks?",
          answer: "river",
          hint: "Water flows through it",
        },
        {
          question: "What can fill a room but takes up no space?",
          answer: "light",
          hint: "Helps you see",
        },
      ];

      let currentRiddleIndex = 0;
      let score = 0;

      function showRiddle() {
        const riddle = riddles[currentRiddleIndex];
        document.getElementById("riddle-text").textContent = riddle.question;
        document.getElementById("riddle-answer").value = "";
        document.getElementById("riddle-feedback").classList.add("hidden");
        document.getElementById("riddles-solved").textContent = score;
        document.getElementById("total-riddles").textContent = riddles.length;
      }

      window.showRiddleHint = () => {
        const hint = riddles[currentRiddleIndex].hint;
        showReward(`Hint: ${hint} 💡`);
      };

      window.checkRiddleAnswer = () => {
        const userAnswer = document
          .getElementById("riddle-answer")
          .value.trim()
          .toLowerCase();
        const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();
        const feedback = document.getElementById("riddle-feedback");

        if (userAnswer === correctAnswer) {
          score++;
          feedback.textContent = "Correct! 🎉";
          feedback.classList.remove("hidden", "text-red-600");
          feedback.classList.add("text-green-600");

          setTimeout(() => {
            currentRiddleIndex++;
            if (currentRiddleIndex < riddles.length) {
              showRiddle();
            } else {
              // Game complete
              const finalScore = score * 5;
              const gameArea = document.querySelector(".bg-white");
              gameArea.innerHTML = `
                            <div class="text-center p-6">
                                <h3 class="text-2xl font-bold mb-4">All Riddles Complete!</h3>
                                <p class="text-xl mb-4">Final Score: ${finalScore} points</p>
                                <button onclick="addPoints(${finalScore}); showCategories();" 
                                        class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                    Complete Game
                                </button>
                            </div>
                        `;
            }
          }, 1500);
        } else {
          feedback.textContent = "Try again! 🤔";
          feedback.classList.remove("hidden", "text-green-600");
          feedback.classList.add("text-red-600");
        }
      };

      // Initialize first riddle
      showRiddle();

      // Add enter key support
      document
        .getElementById("riddle-answer")
        .addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            checkRiddleAnswer();
          }
        });
    },
  },
  Affirmations: {
    render: () => {
      return `
            <div class="p-4 mb-16">
                <h2 class="text-xl font-bold mb-4">Daily Affirmations & Visualization</h2>
                
                <!-- Mood Tracker -->
                <div class="bg-purple-50 p-4 rounded-lg mb-4">
                    <h3 class="font-bold mb-2">How are you feeling today?</h3>
                    <div class="grid grid-cols-5 gap-2" id="mood-selector">
                        <button class="mood-btn p-2 rounded-lg hover:bg-purple-100" data-mood="amazing">
                            🌟 Amazing
                        </button>
                        <button class="mood-btn p-2 rounded-lg hover:bg-purple-100" data-mood="happy">
                            😊 Happy
                        </button>
                        <button class="mood-btn p-2 rounded-lg hover:bg-purple-100" data-mood="okay">
                            😌 Okay
                        </button>
                        <button class="mood-btn p-2 rounded-lg hover:bg-purple-100" data-mood="meh">
                            😕 Meh
                        </button>
                        <button class="mood-btn p-2 rounded-lg hover:bg-purple-100" data-mood="down">
                            😔 Down
                        </button>
                    </div>
                </div>

                <!-- Affirmation Display -->
                <div class="bg-white p-6 rounded-lg shadow-lg mb-4">
                    <div id="affirmation-card" class="text-center">
                        <p id="affirmation-text" class="text-2xl font-bold text-purple-600 mb-4"></p>
                        <p id="affirmation-message" class="text-gray-600 mb-6"></p>
                        
                        <!-- Visualization Exercise -->
                        <div class="bg-purple-50 p-4 rounded-lg mb-4">
                            <h3 class="font-bold mb-2">✨ Visualization Exercise</h3>
                            <p id="visualization-prompt" class="text-gray-700 mb-4"></p>
                            <div class="flex justify-center mb-4">
                                <button onclick="startVisualization()" 
                                        class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                    Start 1-Minute Visualization
                                </button>
                            </div>
                            <div id="visualization-timer" class="hidden">
                                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                    <div id="timer-progress" class="bg-purple-600 h-2.5 rounded-full" style="width: 100%"></div>
                                </div>
                                <p class="text-sm text-gray-600">Take deep breaths and visualize...</p>
                            </div>
                        </div>
                        
                        <!-- Reflection Input -->
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">
                                Reflect on your visualization and affirmation:
                            </label>
                            <textarea id="reflection-input" 
                                    class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-300"
                                    rows="3"
                                    placeholder="Write your thoughts here..."></textarea>
                        </div>
                    </div>

                    <!-- Navigation -->
                    <div class="flex justify-between items-center mt-6">
                        <button onclick="previousAffirmation()" 
                                class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                            Previous
                        </button>
                        <span id="affirmation-counter" class="text-gray-600"></span>
                        <button onclick="nextAffirmation()" 
                                class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                            Next
                        </button>
                    </div>
                </div>

                <!-- Mood History -->
                <div class="bg-white p-4 rounded-lg shadow-lg">
                    <h3 class="font-bold mb-2">Your Mood Journey</h3>
                    <div id="mood-history" class="text-sm text-gray-600">
                        <!-- Mood history will be displayed here -->
                    </div>
                </div>
            </div>
        `;
    },
    init: () => {
      const affirmations = [
        {
          text: "I am worthy of love and respect",
          message:
            "Take a moment to appreciate your inherent value. You deserve kindness from others and yourself.",
        },
        {
          text: "I choose to be confident and brave today",
          message:
            "Your courage grows with each small step. Embrace challenges as opportunities for growth.",
        },
        {
          text: "My creativity knows no bounds",
          message:
            "Your unique perspective brings something special to the world. Let your imagination soar!",
        },
        {
          text: "I radiate positive energy",
          message:
            "Your attitude can brighten someone's day. Your smile is contagious!",
        },
        {
          text: "I am becoming stronger every day",
          message:
            "Each challenge you overcome adds to your strength. Celebrate your progress!",
        },
        {
          text: "I trust in my journey",
          message:
            "Your path is uniquely yours. Every step forward is progress, no matter how small.",
        },
        {
          text: "I am surrounded by opportunities",
          message:
            "Open your eyes to the possibilities around you. Good things are coming your way!",
        },
        {
          text: "My potential is limitless",
          message:
            "There are no boundaries to what you can achieve. Dream big!",
        },
        {
          text: "I deserve to take care of myself",
          message:
            "Self-care is not selfish. It's essential for your wellbeing and growth.",
        },
        {
          text: "I choose joy and gratitude",
          message:
            "Finding joy in small moments makes life beautiful. What are you grateful for today?",
        },
        {
          text: "I am resilient and adaptable",
          message:
            "You can handle whatever comes your way. You've overcome challenges before!",
        },
        {
          text: "My voice matters",
          message:
            "Your thoughts and feelings are valid. Share your truth with confidence.",
        },
        {
          text: "I attract positive relationships",
          message:
            "You deserve supportive and uplifting connections. Good people are drawn to your authentic self.",
        },
        {
          text: "I celebrate my uniqueness",
          message:
            "Your quirks and differences make you special. Embrace what makes you unique!",
        },
        {
          text: "I am creating my dream life",
          message:
            "Every positive choice brings you closer to your goals. You're building something amazing!",
        },
        {
          text: "I radiate peace and calm",
          message:
            "Take a deep breath. You have the power to create tranquility within yourself.",
        },
        {
          text: "I choose to see the good in today",
          message:
            "Focus on the positive aspects of each moment. There's always something to appreciate.",
        },
        {
          text: "I trust my intuition",
          message:
            "Your inner wisdom guides you well. Listen to that quiet voice within.",
        },
        {
          text: "I am worthy of success",
          message:
            "You deserve all the good things coming your way. Embrace your achievements!",
        },
        {
          text: "I am enough, just as I am",
          message:
            "You don't need to change to be worthy. You are complete and valuable right now.",
        },
      ];

      const visualizations = [
        {
          prompt:
            "Imagine yourself surrounded by a warm, golden light. Feel its energy filling you with confidence and peace.",
          focus: "inner peace",
        },
        {
          prompt:
            "Picture yourself achieving your biggest goal. See the joy and pride on your face.",
          focus: "success",
        },
        {
          prompt:
            "Visualize a peaceful garden where you can be completely yourself. What do you see, hear, and feel?",
          focus: "self-acceptance",
        },
        {
          prompt:
            "Imagine negative thoughts as leaves floating away on a gentle stream, leaving you feeling lighter.",
          focus: "letting go",
        },
        {
          prompt:
            "See yourself radiating positive energy that touches everyone around you.",
          focus: "positive impact",
        },
      ];

      let currentIndex = 0;
      const completedReflections = new Set();
      let isVisualizing = false;
      let visualizationTimer;

      // Initialize mood tracking
      const moodHistory = JSON.parse(
        localStorage.getItem("moodHistory") || "[]"
      );
      updateMoodHistory();

      // Add mood selection handlers
      document.querySelectorAll(".mood-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const mood = btn.dataset.mood;
          moodHistory.push({
            mood: mood,
            date: new Date().toISOString(),
          });
          localStorage.setItem("moodHistory", JSON.stringify(moodHistory));
          updateMoodHistory();

          // Clear previous selection
          document
            .querySelectorAll(".mood-btn")
            .forEach((b) => b.classList.remove("bg-purple-200"));
          btn.classList.add("bg-purple-200");
        });
      });

      function updateMoodHistory() {
        const historyElement = document.getElementById("mood-history");
        const recentMoods = moodHistory.slice(-5).reverse();

        historyElement.innerHTML = recentMoods.length
          ? recentMoods
              .map(
                (entry) => `
            <div class="flex justify-between items-center mb-2">
              <span>${getMoodEmoji(entry.mood)} ${entry.mood}</span>
              <span class="text-xs">${formatDate(entry.date)}</span>
            </div>
          `
              )
              .join("")
          : '<p class="text-center">No mood entries yet</p>';
      }

      function getMoodEmoji(mood) {
        const emojis = {
          amazing: "🌟",
          happy: "😊",
          okay: "😌",
          meh: "😕",
          down: "😔",
        };
        return emojis[mood] || "😊";
      }

      function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      }

      window.startVisualization = () => {
        if (isVisualizing) return;

        isVisualizing = true;
        const timerElement = document.getElementById("visualization-timer");
        const progressBar = document.getElementById("timer-progress");
        timerElement.classList.remove("hidden");

        let timeLeft = 60; // 1 minute
        progressBar.style.width = "100%";

        visualizationTimer = setInterval(() => {
          timeLeft--;
          progressBar.style.width = `${(timeLeft / 60) * 100}%`;

          if (timeLeft <= 0) {
            clearInterval(visualizationTimer);
            isVisualizing = false;
            timerElement.classList.add("hidden");
            showReward("Visualization complete! ✨");
          }
        }, 1000);
      };

      function showAffirmation() {
        const current = affirmations[currentIndex];
        document.getElementById("affirmation-text").textContent = current.text;
        document.getElementById("affirmation-message").textContent =
          current.message;
        document.getElementById("affirmation-counter").textContent = `${
          currentIndex + 1
        } / ${affirmations.length}`;

        // Show visualization prompt
        const visualization =
          visualizations[currentIndex % visualizations.length];
        document.getElementById("visualization-prompt").textContent =
          visualization.prompt;

        // Show saved reflection if exists
        const reflectionInput = document.getElementById("reflection-input");
        reflectionInput.value =
          localStorage.getItem(`affirmation-${currentIndex}`) || "";
      }

      window.previousAffirmation = () => {
        if (currentIndex > 0) {
          currentIndex--;
          showAffirmation();
        }
      };

      window.nextAffirmation = () => {
        const reflection = document
          .getElementById("reflection-input")
          .value.trim();

        if (reflection) {
          // Save reflection
          localStorage.setItem(`affirmation-${currentIndex}`, reflection);
          completedReflections.add(currentIndex);

          if (currentIndex < affirmations.length - 1) {
            currentIndex++;
            showAffirmation();
          } else if (completedReflections.size === affirmations.length) {
            // All affirmations completed
            const points = completedReflections.size * 5;
            const mainContent = document.getElementById("main-content");
            mainContent.innerHTML = `
                        <div class="p-4 mb-16">
                            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                                <h3 class="text-2xl font-bold mb-4">Journey Complete!</h3>
                                <p class="text-xl mb-4">You've reflected on all affirmations!</p>
                                <p class="mb-6">Points earned: ${points}</p>
                                <button onclick="addPoints(${points}); showCategories();" 
                                        class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                    Back to Categories
                                </button>
                            </div>
                        </div>
                    `;
          }
        } else {
          showReward("Please share your reflection before moving on 💭");
        }
      };

      // Initialize first affirmation
      showAffirmation();

      // Cleanup on navigation
      return () => {
        if (visualizationTimer) {
          clearInterval(visualizationTimer);
        }
      };
    },
  },
  Meditation: {
    render: () => {
      return `
            <div class="p-4 mb-16">
                <h2 class="text-xl font-bold mb-4">Mindfulness Meditation</h2>
                
                <!-- Session Selection -->
                <div class="bg-purple-50 p-4 rounded-lg mb-4">
                    <h3 class="font-bold mb-2">Choose Your Practice</h3>
                    <select id="meditation-select" class="w-full p-2 rounded border">
                        <option value="breath">Breath Awareness (5 min)</option>
                        <option value="body">Body Scan (7 min)</option>
                        <option value="loving">Loving-Kindness (5 min)</option>
                        <option value="gratitude">Gratitude Meditation (5 min)</option>
                        <option value="peace">Inner Peace (3 min)</option>
                    </select>
                </div>

                <!-- Meditation Area -->
                <div class="bg-white p-6 rounded-lg shadow-lg mb-4">
                    <div id="meditation-content" class="text-center">
                        <!-- Timer Display -->
                        <div class="mb-6">
                            <div class="text-4xl font-bold text-purple-600" id="meditation-timer">5:00</div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <div id="timer-progress" class="bg-purple-600 h-2.5 rounded-full" style="width: 100%"></div>
                            </div>
                        </div>

                        <!-- Guidance Text -->
                        <p id="meditation-guidance" class="text-lg text-gray-600 mb-6"></p>

                        <!-- Controls -->
                        <div class="flex justify-center gap-4">
                            <button id="start-btn" onclick="startMeditation()" 
                                    class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                Start Practice
                            </button>
                            <button id="pause-btn" onclick="pauseMeditation()" 
                                    class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 hidden">
                                Pause
                            </button>
                        </div>
                    </div>

                    <!-- Post-Meditation Reflection (hidden initially) -->
                    <div id="reflection-section" class="hidden">
                        <h3 class="font-bold mb-2">Reflect on Your Practice</h3>
                        <textarea id="meditation-reflection" 
                                class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-300"
                                rows="3"
                                placeholder="How do you feel after this meditation?"></textarea>
                        <button onclick="completeMeditation()" 
                                class="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 w-full">
                            Complete Practice
                        </button>
                    </div>
                </div>

                <!-- Meditation Stats -->
                <div class="bg-white p-4 rounded-lg shadow-lg">
                    <h3 class="font-bold mb-2">Your Meditation Journey</h3>
                    <div id="meditation-stats" class="text-sm text-gray-600">
                        <!-- Stats will be displayed here -->
                    </div>
                </div>
            </div>
        `;
    },
    init: () => {
      const meditations = {
        breath: {
          duration: 300, // 5 minutes
          guidanceInterval: 30,
          guidance: [
            "Find a comfortable position and gently close your eyes",
            "Take a deep breath in through your nose...",
            "And slowly exhale through your mouth...",
            "Notice the natural rhythm of your breath",
            "If your mind wanders, gently return to your breath",
            "Feel the sensation of air entering and leaving your body",
            "Each breath is an opportunity to begin again",
            "You're doing great, stay present with your breath",
            "Notice any tension in your body and let it go",
            "Simply observe your thoughts without judgment",
          ],
        },
        body: {
          duration: 420, // 7 minutes
          guidanceInterval: 40,
          guidance: [
            "Begin by focusing on your toes and feet",
            "Move your awareness to your legs",
            "Notice any sensations in your hips and lower back",
            "Bring attention to your stomach and chest",
            "Feel your arms and hands",
            "Focus on your neck and shoulders",
            "Notice your face and head",
            "Be aware of your whole body",
            "Release any remaining tension",
            "Feel the sense of peace in your body",
          ],
        },
        loving: {
          duration: 300, // 5 minutes
          guidanceInterval: 30,
          guidance: [
            "Begin by sending love to yourself",
            "May you be happy and healthy",
            "May you be safe and protected",
            "May you be at peace",
            "Now extend these wishes to others",
            "May all beings be happy",
            "May all beings be free from suffering",
            "Feel your heart expanding with love",
            "Embrace this feeling of connection",
            "Let compassion fill your being",
          ],
        },
        gratitude: {
          duration: 300, // 5 minutes
          guidanceInterval: 30,
          guidance: [
            "Think of something you're grateful for",
            "Feel the warmth of gratitude in your heart",
            "Remember someone who helped you",
            "Appreciate the simple gifts of life",
            "Be thankful for this moment",
            "Acknowledge your own strength",
            "Feel grateful for your breath",
            "Appreciate your body and health",
            "Think of a happy memory",
            "Let gratitude fill your being",
          ],
        },
        peace: {
          duration: 180, // 3 minutes
          guidanceInterval: 20,
          guidance: [
            "Take a deep, calming breath",
            "Let go of any tension",
            "Feel a sense of peace washing over you",
            "You are safe and supported",
            "Each breath brings more peace",
            "Release any worries or concerns",
            "Feel the stillness within",
            "You are exactly where you need to be",
            "Embrace this moment of tranquility",
            "Rest in peaceful awareness",
          ],
        },
      };

      let currentMeditation = null;
      let timer = null;
      let timeLeft = 0;
      let isPaused = false;
      let currentGuidanceIndex = 0;
      let guidanceTimer = null;

      function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById(
          "meditation-timer"
        ).textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

        const progress = (timeLeft / currentMeditation.duration) * 100;
        document.getElementById("timer-progress").style.width = `${progress}%`;
      }

      function updateGuidance() {
        const guidance = currentMeditation.guidance[currentGuidanceIndex];
        document.getElementById("meditation-guidance").textContent = guidance;
        currentGuidanceIndex =
          (currentGuidanceIndex + 1) % currentMeditation.guidance.length;
      }

      window.startMeditation = () => {
        if (isPaused) {
          isPaused = false;
          document.getElementById("start-btn").textContent = "Start Practice";
        } else {
          const type = document.getElementById("meditation-select").value;
          currentMeditation = meditations[type];
          timeLeft = currentMeditation.duration;
          currentGuidanceIndex = 0;
        }

        document.getElementById("start-btn").classList.add("hidden");
        document.getElementById("pause-btn").classList.remove("hidden");
        document.getElementById("meditation-select").disabled = true;

        updateGuidance();
        guidanceTimer = setInterval(
          updateGuidance,
          currentMeditation.guidanceInterval * 1000
        );

        timer = setInterval(() => {
          timeLeft--;
          updateTimer();

          if (timeLeft <= 0) {
            clearInterval(timer);
            clearInterval(guidanceTimer);
            showReward("Meditation complete! Take a moment to reflect ✨");
            document
              .getElementById("reflection-section")
              .classList.remove("hidden");
            document
              .getElementById("meditation-content")
              .classList.add("hidden");
          }
        }, 1000);
      };

      window.pauseMeditation = () => {
        isPaused = true;
        clearInterval(timer);
        clearInterval(guidanceTimer);
        document.getElementById("start-btn").textContent = "Resume";
        document.getElementById("start-btn").classList.remove("hidden");
        document.getElementById("pause-btn").classList.add("hidden");
      };

      window.completeMeditation = () => {
        const reflection = document
          .getElementById("meditation-reflection")
          .value.trim();
        if (!reflection) {
          showReward("Please share your reflection before completing 💭");
          return;
        }

        // Save meditation session
        const sessions = JSON.parse(
          localStorage.getItem("meditationSessions") || "[]"
        );
        sessions.push({
          type: document.getElementById("meditation-select").value,
          duration: currentMeditation.duration,
          reflection: reflection,
          date: new Date().toISOString(),
        });
        localStorage.setItem("meditationSessions", JSON.stringify(sessions));

        // Award points
        const points = Math.floor(currentMeditation.duration / 60) * 10;
        addPoints(points);
        showReward(`Meditation complete! +${points} points! 🧘‍♀️✨`);

        // Return to categories
        showCategories();
      };

      // Update meditation stats
      function updateStats() {
        const sessions = JSON.parse(
          localStorage.getItem("meditationSessions") || "[]"
        );
        const statsElement = document.getElementById("meditation-stats");

        if (sessions.length === 0) {
          statsElement.innerHTML =
            '<p class="text-center">No meditation sessions yet</p>';
          return;
        }

        const totalMinutes = sessions.reduce(
          (acc, session) => acc + session.duration / 60,
          0
        );
        const recentSessions = sessions.slice(-3).reverse();

        statsElement.innerHTML = `
                <div class="mb-2">Total Practice: ${Math.round(
                  totalMinutes
                )} minutes</div>
                <div class="mb-2">Sessions: ${sessions.length}</div>
                <div class="mt-4 font-bold">Recent Sessions:</div>
                ${recentSessions
                  .map(
                    (session) => `
                    <div class="mt-2 p-2 bg-purple-50 rounded">
                        <div class="text-sm">${new Date(
                          session.date
                        ).toLocaleDateString()}</div>
                        <div class="font-medium">${session.type} (${
                      session.duration / 60
                    } min)</div>
                    </div>
                `
                  )
                  .join("")}
            `;
      }

      // Initialize
      updateStats();
      updateTimer();
    },
  },
  GratitudeJournal: {
    render: () => {
      return `
            <div class="p-4 mb-16">
                <h2 class="text-xl font-bold mb-4">Gratitude Journal</h2>

                <!-- Today's Entry -->
                <div class="bg-white p-6 rounded-lg shadow-lg mb-4">
                    <h3 class="font-bold mb-4">Today's Gratitude</h3>
                    
                    <!-- Prompts -->
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">
                                What made you smile today? 😊
                            </label>
                            <textarea id="gratitude-1" 
                                    class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-300"
                                    rows="2"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">
                                Name three small things you're grateful for: ✨
                            </label>
                            <textarea id="gratitude-2" 
                                    class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-300"
                                    rows="2"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">
                                Who would you like to thank today? 💝
                            </label>
                            <textarea id="gratitude-3" 
                                    class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-300"
                                    rows="2"></textarea>
                        </div>
                    </div>

                    <!-- Mood Selection -->
                    <div class="mt-6">
                        <label class="block text-sm font-medium mb-2">
                            How do you feel after reflecting? 
                        </label>
                        <div class="flex gap-2">
                            <button onclick="selectMood('grateful')" class="mood-btn p-2 rounded-lg hover:bg-purple-100">
                                🙏 Grateful
                            </button>
                            <button onclick="selectMood('peaceful')" class="mood-btn p-2 rounded-lg hover:bg-purple-100">
                                😌 Peaceful
                            </button>
                            <button onclick="selectMood('hopeful')" class="mood-btn p-2 rounded-lg hover:bg-purple-100">
                                🌟 Hopeful
                            </button>
                            <button onclick="selectMood('blessed')" class="mood-btn p-2 rounded-lg hover:bg-purple-100">
                                ✨ Blessed
                            </button>
                        </div>
                    </div>

                    <!-- Save Button -->
                    <button onclick="saveGratitudeEntry()" 
                            class="mt-6 w-full px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                        Save Today's Entry
                    </button>
                </div>

                <!-- Previous Entries -->
                <div class="bg-white p-4 rounded-lg shadow-lg">
                    <h3 class="font-bold mb-4">Gratitude Journey</h3>
                    <div id="gratitude-history" class="space-y-4">
                        <!-- Previous entries will be displayed here -->
                    </div>
                </div>
            </div>
        `;
    },
    init: () => {
      let selectedMood = "";
      const gratitudeHistory = JSON.parse(
        localStorage.getItem("gratitudeEntries") || "[]"
      );

      // Load today's entry if exists
      const today = new Date().toISOString().split("T")[0];
      const todayEntry = gratitudeHistory.find((entry) =>
        entry.date.startsWith(today)
      );
      if (todayEntry) {
        document.getElementById("gratitude-1").value = todayEntry.smile || "";
        document.getElementById("gratitude-2").value = todayEntry.things || "";
        document.getElementById("gratitude-3").value = todayEntry.thanks || "";
        if (todayEntry.mood) {
          selectMood(todayEntry.mood);
        }
      }

      window.selectMood = (mood) => {
        selectedMood = mood;
        document.querySelectorAll(".mood-btn").forEach((btn) => {
          btn.classList.remove("bg-purple-200");
        });
        event.target.classList.add("bg-purple-200");
      };

      window.saveGratitudeEntry = () => {
        const smile = document.getElementById("gratitude-1").value.trim();
        const things = document.getElementById("gratitude-2").value.trim();
        const thanks = document.getElementById("gratitude-3").value.trim();

        if (!smile || !things || !thanks) {
          showReward("Please fill in all gratitude prompts 💭");
          return;
        }

        if (!selectedMood) {
          showReward("Please select how you feel 🙏");
          return;
        }

        // Save entry
        const entry = {
          date: new Date().toISOString(),
          smile,
          things,
          thanks,
          mood: selectedMood,
        };

        // Remove previous entry from today if exists
        const filteredHistory = gratitudeHistory.filter(
          (e) => !e.date.startsWith(new Date().toISOString().split("T")[0])
        );

        filteredHistory.push(entry);
        localStorage.setItem(
          "gratitudeEntries",
          JSON.stringify(filteredHistory)
        );

        // Award points
        const points = 65;
        addPoints(points);
        showReward(`Gratitude entry saved! +${points} points! 🙏✨`);

        // Update history display
        updateGratitudeHistory();
      };

      function updateGratitudeHistory() {
        const historyElement = document.getElementById("gratitude-history");
        const recentEntries = gratitudeHistory.slice(-5).reverse();

        historyElement.innerHTML = recentEntries.length
          ? recentEntries
              .map(
                (entry) => `
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-sm text-gray-600">
                                ${new Date(entry.date).toLocaleDateString()}
                            </span>
                            <span class="text-lg">${getMoodEmoji(
                              entry.mood
                            )}</span>
                        </div>
                        <p class="text-sm mb-1"><strong>Grateful for:</strong> ${
                          entry.smile
                        }</p>
                        <p class="text-sm mb-1"><strong>Small things:</strong> ${
                          entry.things
                        }</p>
                        <p class="text-sm"><strong>Thank you to:</strong> ${
                          entry.thanks
                        }</p>
                    </div>
                `
              )
              .join("")
          : '<p class="text-center text-gray-600">No entries yet. Start your gratitude journey today!</p>';
      }

      function getMoodEmoji(mood) {
        const emojis = {
          grateful: "🙏",
          peaceful: "😌",
          hopeful: "🌟",
          blessed: "✨",
        };
        return emojis[mood] || "🙏";
      }

      // Initialize history display
      updateGratitudeHistory();
    },
  },
  BreathingGuide: {
    render: () => {
      return `
            <div class="p-4 mb-16">
                <h2 class="text-xl font-bold mb-4">Breathing Exercises</h2>

                <!-- Exercise Selection -->
                <div class="bg-purple-50 p-4 rounded-lg mb-4">
                    <h3 class="font-bold mb-2">Choose Your Practice</h3>
                    <select id="breathing-select" class="w-full p-2 rounded border">
                        <option value="478">4-7-8 Relaxing Breath (4 min)</option>
                        <option value="box">Box Breathing (5 min)</option>
                        <option value="calm">Calming Breath (3 min)</option>
                        <option value="energy">Energizing Breath (2 min)</option>
                        <option value="balance">Balanced Breathing (4 min)</option>
                    </select>
                </div>

                <!-- Breathing Animation -->
                <div class="bg-white p-6 rounded-lg shadow-lg mb-4">
                    <div id="breathing-animation" class="text-center mb-6">
                        <div class="relative w-48 h-48 mx-auto">
                            <div id="breath-circle" class="absolute inset-0 bg-purple-100 rounded-full transition-transform duration-1000 ease-in-out">
                            </div>
                            <div id="breath-text" class="absolute inset-0 flex items-center justify-center text-xl font-bold text-purple-600">
                                Inhale
                            </div>
                        </div>
                    </div>

                    <!-- Timer Display -->
                    <div class="text-center mb-6">
                        <div class="text-4xl font-bold text-purple-600" id="breathing-timer">4:00</div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                            <div id="timer-progress" class="bg-purple-600 h-2.5 rounded-full" style="width: 100%"></div>
                        </div>
                    </div>

                    <!-- Controls -->
                    <div class="flex justify-center gap-4">
                        <button id="start-btn" onclick="startBreathing()" 
                                class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                            Start Practice
                        </button>
                        <button id="pause-btn" onclick="pauseBreathing()" 
                                class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 hidden">
                            Pause
                        </button>
                    </div>
                </div>

                <!-- Practice History -->
                <div class="bg-white p-4 rounded-lg shadow-lg">
                    <h3 class="font-bold mb-2">Your Breathing Journey</h3>
                    <div id="breathing-stats" class="text-sm text-gray-600">
                        <!-- Stats will be displayed here -->
                    </div>
                </div>
            </div>
        `;
    },
    init: () => {
      const breathingPatterns = {
        478: {
          duration: 240,
          pattern: [
            { phase: "inhale", duration: 4 },
            { phase: "hold", duration: 7 },
            { phase: "exhale", duration: 8 },
            { phase: "pause", duration: 1 },
          ],
          description: "Inhale for 4, hold for 7, exhale for 8",
        },
        box: {
          duration: 300,
          pattern: [
            { phase: "inhale", duration: 4 },
            { phase: "hold", duration: 4 },
            { phase: "exhale", duration: 4 },
            { phase: "hold", duration: 4 },
          ],
          description: "Equal duration for each phase",
        },
        calm: {
          duration: 180,
          pattern: [
            { phase: "inhale", duration: 4 },
            { phase: "hold", duration: 2 },
            { phase: "exhale", duration: 6 },
            { phase: "pause", duration: 2 },
          ],
          description: "Long exhale for deep relaxation",
        },
        energy: {
          duration: 120,
          pattern: [
            { phase: "inhale", duration: 2 },
            { phase: "hold", duration: 1 },
            { phase: "exhale", duration: 2 },
            { phase: "pause", duration: 1 },
          ],
          description: "Quick energizing breaths",
        },
        balance: {
          duration: 240,
          pattern: [
            { phase: "inhale", duration: 5 },
            { phase: "hold", duration: 3 },
            { phase: "exhale", duration: 5 },
            { phase: "pause", duration: 3 },
          ],
          description: "Balanced breathing for focus",
        },
      };

      let currentPattern = null;
      let timer = null;
      let phaseTimer = null;
      let timeLeft = 0;
      let currentPhaseIndex = 0;
      let isPaused = false;

      function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById(
          "breathing-timer"
        ).textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

        const progress = (timeLeft / currentPattern.duration) * 100;
        document.getElementById("timer-progress").style.width = `${progress}%`;
      }

      function updateBreathingAnimation(phase) {
        const circle = document.getElementById("breath-circle");
        const text = document.getElementById("breath-text");

        switch (phase) {
          case "inhale":
            circle.style.transform = "scale(1.5)";
            text.textContent = "Inhale";
            break;
          case "hold":
            text.textContent = "Hold";
            break;
          case "exhale":
            circle.style.transform = "scale(1)";
            text.textContent = "Exhale";
            break;
          case "pause":
            text.textContent = "Pause";
            break;
        }
      }

      window.startBreathing = () => {
        if (isPaused) {
          isPaused = false;
          document.getElementById("start-btn").textContent = "Start Practice";
        } else {
          const type = document.getElementById("breathing-select").value;
          currentPattern = breathingPatterns[type];
          timeLeft = currentPattern.duration;
          currentPhaseIndex = 0;
        }

        document.getElementById("start-btn").classList.add("hidden");
        document.getElementById("pause-btn").classList.remove("hidden");
        document.getElementById("breathing-select").disabled = true;

        const runPhase = () => {
          const phase = currentPattern.pattern[currentPhaseIndex];
          updateBreathingAnimation(phase.phase);

          phaseTimer = setTimeout(() => {
            currentPhaseIndex =
              (currentPhaseIndex + 1) % currentPattern.pattern.length;
            if (!isPaused) runPhase();
          }, phase.duration * 1000);
        };

        runPhase();

        timer = setInterval(() => {
          timeLeft--;
          updateTimer();

          if (timeLeft <= 0) {
            clearInterval(timer);
            clearTimeout(phaseTimer);
            completeBreathing();
          }
        }, 1000);
      };

      window.pauseBreathing = () => {
        isPaused = true;
        clearInterval(timer);
        clearTimeout(phaseTimer);
        document.getElementById("start-btn").textContent = "Resume";
        document.getElementById("start-btn").classList.remove("hidden");
        document.getElementById("pause-btn").classList.add("hidden");
      };

      function completeBreathing() {
        // Save session
        const sessions = JSON.parse(
          localStorage.getItem("breathingSessions") || "[]"
        );
        sessions.push({
          type: document.getElementById("breathing-select").value,
          duration: currentPattern.duration,
          date: new Date().toISOString(),
        });
        localStorage.setItem("breathingSessions", JSON.stringify(sessions));

        // Award points
        const points = Math.floor(currentPattern.duration / 60) * 10;
        addPoints(points);
        showReward(`Breathing practice complete! +${points} points! 🌬️✨`);

        // Return to categories
        showCategories();
      }

      function updateStats() {
        const sessions = JSON.parse(
          localStorage.getItem("breathingSessions") || "[]"
        );
        const statsElement = document.getElementById("breathing-stats");

        if (sessions.length === 0) {
          statsElement.innerHTML =
            '<p class="text-center">No breathing sessions yet</p>';
          return;
        }

        const totalMinutes = sessions.reduce(
          (acc, session) => acc + session.duration / 60,
          0
        );
        const recentSessions = sessions.slice(-3).reverse();

        statsElement.innerHTML = `
                <div class="mb-2">Total Practice: ${Math.round(
                  totalMinutes
                )} minutes</div>
                <div class="mb-2">Sessions: ${sessions.length}</div>
                <div class="mt-4 font-bold">Recent Sessions:</div>
                ${recentSessions
                  .map(
                    (session) => `
                    <div class="mt-2 p-2 bg-purple-50 rounded">
                        <div class="text-sm">${new Date(
                          session.date
                        ).toLocaleDateString()}</div>
                        <div class="font-medium">${session.type} (${
                      session.duration / 60
                    } min)</div>
                    </div>
                `
                  )
                  .join("")}
            `;
      }

      // Initialize
      updateStats();
      updateTimer();
    },
  },
  SelfCareCheck: {
    render: () => {
      return `
            <div class="p-4 mb-16">
                <h2 class="text-xl font-bold mb-4">Daily Self-Care Checklist</h2>

                <!-- Today's Progress -->
                <div class="bg-purple-50 p-4 rounded-lg mb-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-bold">Today's Progress</h3>
                        <span class="text-purple-600" id="completion-status">0/20 completed</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div id="progress-bar" class="bg-purple-600 h-2.5 rounded-full" style="width: 0%"></div>
                    </div>
                </div>

                <!-- Checklist Categories -->
                <div class="space-y-4">
                    <!-- Physical Self-Care -->
                    <div class="bg-white p-4 rounded-lg shadow-lg">
                        <h3 class="font-bold mb-3 text-purple-600">Physical Self-Care</h3>
                        <div class="space-y-2">
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="physical" data-points="5">
                                <span>Got 7-8 hours of sleep</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="physical" data-points="5">
                                <span>Drank enough water (8 glasses)</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="physical" data-points="5">
                                <span>Ate healthy meals</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="physical" data-points="5">
                                <span>Did some physical activity</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="physical" data-points="5">
                                <span>Took necessary medications/vitamins</span>
                            </label>
                        </div>
                    </div>

                    <!-- Emotional Self-Care -->
                    <div class="bg-white p-4 rounded-lg shadow-lg">
                        <h3 class="font-bold mb-3 text-purple-600">Emotional Self-Care</h3>
                        <div class="space-y-2">
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="emotional" data-points="5">
                                <span>Practiced mindfulness/meditation</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="emotional" data-points="5">
                                <span>Expressed gratitude</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="emotional" data-points="5">
                                <span>Set healthy boundaries</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="emotional" data-points="5">
                                <span>Acknowledged your feelings</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="emotional" data-points="5">
                                <span>Did something that brings joy</span>
                            </label>
                        </div>
                    </div>

                    <!-- Mental Self-Care -->
                    <div class="bg-white p-4 rounded-lg shadow-lg">
                        <h3 class="font-bold mb-3 text-purple-600">Mental Self-Care</h3>
                        <div class="space-y-2">
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="mental" data-points="5">
                                <span>Took regular breaks</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="mental" data-points="5">
                                <span>Limited screen time</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="mental" data-points="5">
                                <span>Learned something new</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="mental" data-points="5">
                                <span>Organized your space</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="mental" data-points="5">
                                <span>Practiced problem-solving</span>
                            </label>
                        </div>
                    </div>

                    <!-- Social Self-Care -->
                    <div class="bg-white p-4 rounded-lg shadow-lg">
                        <h3 class="font-bold mb-3 text-purple-600">Social Self-Care</h3>
                        <div class="space-y-2">
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="social" data-points="5">
                                <span>Connected with loved ones</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="social" data-points="5">
                                <span>Asked for help when needed</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="social" data-points="5">
                                <span>Engaged in meaningful conversation</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="social" data-points="5">
                                <span>Showed kindness to others</span>
                            </label>
                            <label class="flex items-center gap-2 p-2 hover:bg-purple-50 rounded">
                                <input type="checkbox" class="care-item" data-category="social" data-points="5">
                                <span>Maintained healthy relationships</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Save Progress -->
                <button onclick="saveSelfCare()" 
                        class="mt-6 w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    Complete Daily Check-In
                </button>

                <!-- History -->
                <div class="mt-6 bg-white p-4 rounded-lg shadow-lg">
                    <h3 class="font-bold mb-3">Self-Care History</h3>
                    <div id="selfcare-history" class="space-y-3">
                        <!-- History will be displayed here -->
                    </div>
                </div>
            </div>
        `;
    },
    init: () => {
      let completedItems = new Set();
      const totalItems = 20;
      const history = JSON.parse(
        localStorage.getItem("selfCareHistory") || "[]"
      );

      // Load today's progress if exists
      const today = new Date().toISOString().split("T")[0];
      const todayEntry = history.find((entry) => entry.date.startsWith(today));
      if (todayEntry) {
        todayEntry.completed.forEach((item) => {
          const checkbox = document.querySelector(
            `input[data-category="${item.category}"][data-points="${item.points}"]`
          );
          if (checkbox) {
            checkbox.checked = true;
            completedItems.add(item);
          }
        });
        updateProgress();
      }

      // Add event listeners to checkboxes
      document.querySelectorAll(".care-item").forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
          const item = {
            category: this.dataset.category,
            points: parseInt(this.dataset.points),
          };

          if (this.checked) {
            completedItems.add(item);
            showReward("Great job taking care of yourself! ✨");
          } else {
            completedItems.delete(item);
          }

          updateProgress();
        });
      });

      function updateProgress() {
        const progress = (completedItems.size / totalItems) * 100;
        document.getElementById("progress-bar").style.width = `${progress}%`;
        document.getElementById(
          "completion-status"
        ).textContent = `${completedItems.size}/${totalItems} completed`;
      }

      window.saveSelfCare = () => {
        if (completedItems.size === 0) {
          showReward("Please check at least one self-care item 💭");
          return;
        }

        // Save progress
        const entry = {
          date: new Date().toISOString(),
          completed: Array.from(completedItems),
          total: completedItems.size,
        };

        // Remove previous entry from today if exists
        const filteredHistory = history.filter(
          (e) => !e.date.startsWith(new Date().toISOString().split("T")[0])
        );

        filteredHistory.push(entry);
        localStorage.setItem(
          "selfCareHistory",
          JSON.stringify(filteredHistory)
        );

        // Award points based on completion
        const points = completedItems.size * 5;
        addPoints(points);
        showReward(`Self-care check-in complete! +${points} points! 🌟`);

        // Update history display
        updateHistory();
      };

      function updateHistory() {
        const historyElement = document.getElementById("selfcare-history");
        const recentEntries = history.slice(-5).reverse();

        historyElement.innerHTML = recentEntries.length
          ? recentEntries
              .map(
                (entry) => `
                    <div class="bg-purple-50 p-3 rounded-lg">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-sm text-gray-600">
                                ${new Date(entry.date).toLocaleDateString()}
                            </span>
                            <span class="text-purple-600 font-bold">
                                ${entry.total}/${totalItems} completed
                            </span>
                        </div>
                        <div class="text-sm">
                            ${getCategorySummary(entry.completed)}
                        </div>
                    </div>
                `
              )
              .join("")
          : '<p class="text-center text-gray-600">No entries yet. Start your self-care journey today!</p>';
      }

      function getCategorySummary(completed) {
        const categories = {};
        completed.forEach((item) => {
          categories[item.category] = (categories[item.category] || 0) + 1;
        });

        return Object.entries(categories)
          .map(
            ([category, count]) =>
              `${
                category.charAt(0).toUpperCase() + category.slice(1)
              }: ${count}`
          )
          .join(" • ");
      }

      // Initialize history display
      updateHistory();
      updateProgress();
    },
  },
  // Add more activity components...
};

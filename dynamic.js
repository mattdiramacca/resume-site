// Resume Data - Update this with your actual information
const resumeData = {
    name: "Matthew DiRamacca",
    title: "Dev",
    email: "mattydiramacca@gmail.com", // Note: Fixed double dot from HTML
    location: "Naples, FL",
<<<<<<< HEAD
    coverLetter: "Cover letter like description that lays out my goals and career aspirations",
    about: "Work history limited. Skills you are seeing them used right now.",
    jobs: [
        {
            title: "Senior Software Engineer",
            company: "Tech Company Inc.",
            period: "2022 - Present",
            description: "Led development of scalable web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions."
        },
        {
            title: "Full Stack Developer",
            company: "StartupXYZ",
            period: "2020 - 2022",
            description: "Developed and maintained full-stack applications. Implemented RESTful APIs and responsive front-end interfaces. Worked with React, Node.js, and PostgreSQL."
=======
    coverLetter: `
    I’m currently working in the restaurant industry while studying for my CompTIA Security+ certification and building up my skills for a future in tech. I enjoy programming everything from web pages to terminal text editors and small games, and I have experience with JavaScript, C, and C++ while always being open to learning more. My goal is to build a long-term tech career where I can keep growing, solving problems, and putting my curiosity and work ethic to good use. 
    `,
    about: "Work history limited. Skills you are seeing them used right now.",
    jobs: [
        {
            title: "IT Support Specialist",
            company: "Oni Studios",
            period: "2023 - 2025",
            description: "Led IT support for the company, including hardware and software installation and maintenance."
        },
        {
            title: "General Manager",
            company: "Jimmy Johns LOL",
            period: "2020 - 2025",
            description: "Worked managing and scheduling staff, ordering inventory, keeping track of inventory and maintaining a good work enviornment. All while completing daily operations in an efficient and quality manner."
>>>>>>> c6d8735 (made some fixes)
        },
        {
            title: "Junior Developer",
            company: "Web Solutions Ltd.",
            period: "2018 - 2020",
            description: "Built and maintained web applications. Learned best practices in software development and collaborated with senior developers on various projects."
        }
    ],
    projects: [
        {
            title: "E-Commerce Platform",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            description: "Built a full-featured e-commerce platform with user authentication, product management, and payment integration."
        },
        {
            title: "Task Management App",
            tech: ["Vue.js", "Firebase", "CSS3"],
            description: "Created a collaborative task management application with real-time updates and drag-and-drop functionality."
        },
        {
            title: "Vim-like Text Editor",
            tech: ["C"],
            description: "Terminal-based text editor inspired by vim, coded in C for maximum efficiency and performance. Features modal editing, command mode, and low-level terminal control."
        },
        {
            title: "Portfolio Website",
            tech: ["HTML5", "CSS3", "JavaScript"],
            description: "Designed and developed a responsive portfolio website showcasing projects and skills."
        }
    ]
};

// Initialize Resume Content
function initializeResume() {
    // Set cover letter text
    const coverLetterEl = document.getElementById('cover-letter-text');
    if (coverLetterEl) {
        coverLetterEl.textContent = resumeData.coverLetter;
    }
    
    // Set profile information only if elements are empty or contain placeholder text
    const nameEl = document.getElementById('name');
    const titleEl = document.getElementById('title');
    const emailEl = document.getElementById('email');
    const locationEl = document.getElementById('location');
    const aboutEl = document.getElementById('about-text');
    
    // Only update if the element contains placeholder/default text
    if (nameEl && (!nameEl.textContent.trim() || nameEl.textContent.includes('Your Name'))) {
        nameEl.textContent = resumeData.name;
    }
    if (titleEl && (!titleEl.textContent.trim() || titleEl.textContent.includes('Your Professional Title'))) {
        titleEl.textContent = resumeData.title;
    }
    if (emailEl && (!emailEl.textContent.trim() || emailEl.textContent.includes('your.email@example.com'))) {
        emailEl.textContent = resumeData.email;
    }
    if (locationEl && (!locationEl.textContent.trim() || locationEl.textContent.includes('Your Location'))) {
        locationEl.textContent = resumeData.location;
    }
    if (aboutEl && (!aboutEl.textContent.trim() || aboutEl.textContent.includes('Add your professional summary'))) {
        aboutEl.textContent = resumeData.about;
    }

    // Populate job history
    const jobContainer = document.getElementById('job-history');
    resumeData.jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job-item';
        jobElement.innerHTML = `
            <div class="job-title">${job.title}</div>
            <div class="job-company">${job.company}</div>
            <div class="job-period">${job.period}</div>
            <div class="job-description">${job.description}</div>
        `;
        jobContainer.appendChild(jobElement);
    });

    // Tech logo mapping - maps tech names to their icon identifiers
    const techLogoMap = {
        'React': 'react',
        'Node.js': 'nodedotjs',
        'Node': 'nodedotjs',
        'MongoDB': 'mongodb',
        'Stripe': 'stripe',
        'Vue.js': 'vuedotjs',
        'Vue': 'vuedotjs',
        'Firebase': 'firebase',
        'CSS3': 'css3',
        'CSS': 'css3',
        'JavaScript': 'javascript',
        'JS': 'javascript',
        'API': 'api',
        'Chart.js': 'chartdotjs',
        'HTML5': 'html5',
        'HTML': 'html5',
        'Python': 'python',
        'Java': 'java',
        'C': 'c',
        'C++': 'cplusplus',
        'C#': 'csharp',
        'Go': 'go',
        'Rust': 'rust',
        'PHP': 'php',
        'Ruby': 'ruby',
        'Swift': 'swift',
        'Kotlin': 'kotlin',
        'TypeScript': 'typescript',
        'TS': 'typescript',
        'Docker': 'docker',
        'Kubernetes': 'kubernetes',
        'AWS': 'amazonaws',
        'Azure': 'microsoftazure',
        'Git': 'git',
        'GitHub': 'github',
        'GitLab': 'gitlab',
        'PostgreSQL': 'postgresql',
        'MySQL': 'mysql',
        'Redis': 'redis',
        'Express': 'express',
        'Next.js': 'nextdotjs',
        'Angular': 'angular',
        'Svelte': 'svelte',
        'Tailwind': 'tailwindcss',
        'Bootstrap': 'bootstrap',
        'jQuery': 'jquery',
        'Django': 'django',
        'Flask': 'flask',
        'Laravel': 'laravel',
        'Spring': 'spring',
        'TensorFlow': 'tensorflow',
        'PyTorch': 'pytorch'
    };

    // Function to get tech logo URL
    function getTechLogo(techName) {
        const iconName = techLogoMap[techName] || techName.toLowerCase().replace(/\s+/g, '').replace(/\./g, 'dot');
        return `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${iconName}.svg`;
    }

    // Populate projects
    const projectContainer = document.getElementById('project-history');
    resumeData.projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-item';
        
        const techContainer = document.createElement('div');
        techContainer.className = 'project-tech';
        
        project.tech.forEach(tech => {
            const logoUrl = getTechLogo(tech);
            const img = document.createElement('img');
            img.src = logoUrl;
            img.alt = tech;
            img.className = 'tech-logo';
            img.title = tech;
            
            // Fallback to text if image fails to load
            img.onerror = function() {
                const fallback = document.createElement('span');
                fallback.className = 'tech-tag';
                fallback.textContent = tech;
                techContainer.replaceChild(fallback, img);
            };
            
            techContainer.appendChild(img);
        });
        
        projectElement.innerHTML = `
            <div class="project-title">${project.title}</div>
            <div class="project-description">${project.description}</div>
        `;
        projectElement.insertBefore(techContainer, projectElement.querySelector('.project-description'));
        projectContainer.appendChild(projectElement);
    });

    // Add "Currently Learning" section
    const learningSection = document.createElement('div');
    learningSection.className = 'learning-section';
    
    const currentlyLearning = document.createElement('div');
    currentlyLearning.className = 'learning-item';
    
    const learningLabel = document.createElement('span');
    learningLabel.className = 'learning-label';
    learningLabel.textContent = 'Currently Learning:';
    currentlyLearning.appendChild(learningLabel);
    
    const cLogo = document.createElement('img');
    cLogo.src = getTechLogo('C');
    cLogo.alt = 'C';
    cLogo.className = 'tech-logo';
    cLogo.title = 'C';
    cLogo.onerror = function() {
        const fallback = document.createElement('span');
        fallback.className = 'tech-tag';
        fallback.textContent = 'C';
        currentlyLearning.replaceChild(fallback, cLogo);
    };
    currentlyLearning.appendChild(cLogo);
    
    const willingToLearn = document.createElement('div');
    willingToLearn.className = 'learning-item';
    
    const willingLabel = document.createElement('span');
    willingLabel.className = 'learning-label';
    willingLabel.textContent = 'Willing to Learn:';
    willingToLearn.appendChild(willingLabel);
    
    const willingText = document.createElement('span');
    willingText.className = 'learning-text';
    willingText.textContent = 'Any Language';
    willingToLearn.appendChild(willingText);
    
    learningSection.appendChild(currentlyLearning);
    learningSection.appendChild(willingToLearn);
    projectContainer.appendChild(learningSection);
}

// Snake Game Implementation
class SnakeGame {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.gridSize = 20;
        this.tileCount = this.canvas.width / this.gridSize;
        
        this.snake = [{ x: 10, y: 10 }];
        this.food = { x: 15, y: 15 };
        this.dx = 0;
        this.dy = 0;
        this.score = 0;
        this.highScore = localStorage.getItem('snakeHighScore') || 0;
        this.gameRunning = false;
        this.gameLoop = null;
        
        this.initializeGame();
    }

    initializeGame() {
        document.getElementById('high-score').textContent = this.highScore;
        this.setupEventListeners();
    }

    setupEventListeners() {
        const startPauseBtn = document.getElementById('start-pause-game');
        startPauseBtn.addEventListener('click', () => this.toggleStartPause());
        document.getElementById('reset-game').addEventListener('click', () => this.reset());
        document.getElementById('play-again').addEventListener('click', () => this.reset());

        // Get game section element for focus checking
        const gameSection = document.getElementById('game');
        let isMouseInGameSection = false;

        // Track mouse position in game section
        gameSection.addEventListener('mouseenter', () => {
            isMouseInGameSection = true;
        });
        gameSection.addEventListener('mouseleave', () => {
            isMouseInGameSection = false;
        });

        // Make canvas focusable
        this.canvas.setAttribute('tabindex', '0');
        this.canvas.style.cursor = 'pointer';

        document.addEventListener('keydown', (e) => {
            const key = e.key.toLowerCase();
            const isGameKey = key === 'w' || key === 's' || key === 'a' || key === 'd';
            
            // Check if we're in the game section (mouse over, canvas focused, or game section focused)
            const isInGameSection = isMouseInGameSection || 
                                   gameSection.contains(document.activeElement) ||
                                   document.activeElement === this.canvas ||
                                   this.canvas === document.activeElement;
            
            // If WASD key pressed in game section and game not running, start it
            if (isGameKey && isInGameSection && !this.gameRunning) {
                this.start();
                const btn = document.getElementById('start-pause-game');
                btn.textContent = 'Pause Game';
                btn.classList.add('paused');
            }
            
            // Only process movement if game is running
            if (!this.gameRunning) return;
            
            if (key === 'w' && this.dy === 0) {
                this.dx = 0;
                this.dy = -1;
            } else if (key === 's' && this.dy === 0) {
                this.dx = 0;
                this.dy = 1;
            } else if (key === 'a' && this.dx === 0) {
                this.dx = -1;
                this.dy = 0;
            } else if (key === 'd' && this.dx === 0) {
                this.dx = 1;
                this.dy = 0;
            }
        });
    }

    toggleStartPause() {
        const btn = document.getElementById('start-pause-game');
        if (this.gameRunning) {
            this.pause();
            btn.textContent = 'Start Game';
            btn.classList.remove('paused');
        } else {
            this.start();
            btn.textContent = 'Pause Game';
            btn.classList.add('paused');
        }
    }

    start() {
        if (this.gameRunning) return;
        this.gameRunning = true;
        document.getElementById('game-over').classList.add('hidden');
        // Draw initial state
        this.draw();
        // Start game loop with requestAnimationFrame for smoother performance
        this.lastTime = performance.now();
        this.gameLoop = requestAnimationFrame((timestamp) => this.gameLoopUpdate(timestamp));
    }

    gameLoopUpdate(timestamp) {
        if (!this.gameRunning) return;
        
        const elapsed = timestamp - this.lastTime;
        // Update game every 100ms (faster than before)
        if (elapsed >= 100) {
            this.update();
            this.lastTime = timestamp;
        }
        
        this.gameLoop = requestAnimationFrame((timestamp) => this.gameLoopUpdate(timestamp));
    }

    pause() {
        if (!this.gameRunning) return;
        this.gameRunning = false;
        cancelAnimationFrame(this.gameLoop);
    }

    reset() {
        this.snake = [{ x: 10, y: 10 }];
        this.food = this.generateFood();
        this.dx = 0;
        this.dy = 0;
        this.score = 0;
        this.gameRunning = false;
        cancelAnimationFrame(this.gameLoop);
        document.getElementById('score').textContent = this.score;
        document.getElementById('game-over').classList.add('hidden');
        
        // Reset button state
        const btn = document.getElementById('start-pause-game');
        btn.textContent = 'Start Game';
        btn.classList.remove('paused');
        
        this.draw();
    }

    generateFood() {
        let newFood;
        do {
            newFood = {
                x: Math.floor(Math.random() * this.tileCount),
                y: Math.floor(Math.random() * this.tileCount)
            };
        } while (this.snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
        return newFood;
    }

    update() {
        // Don't move if no direction is set
        if (this.dx === 0 && this.dy === 0) {
            return;
        }

        const head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };

        // Check wall collision
        if (head.x < 0 || head.x >= this.tileCount || head.y < 0 || head.y >= this.tileCount) {
            this.gameOver();
            return;
        }

        // Check self collision (skip the first segment which is the current head)
        if (this.snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
            this.gameOver();
            return;
        }

        this.snake.unshift(head);

        // Check food collision
        if (head.x === this.food.x && head.y === this.food.y) {
            this.score++;
            document.getElementById('score').textContent = this.score;
            this.food = this.generateFood();
        } else {
            this.snake.pop();
        }

        this.draw();
    }

    draw() {
        // Clear canvas
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw snake
        this.ctx.fillStyle = '#10b981';
        this.snake.forEach((segment, index) => {
            if (index === 0) {
                // Head with different color
                this.ctx.fillStyle = '#34d399';
            } else {
                this.ctx.fillStyle = '#10b981';
            }
            this.ctx.fillRect(segment.x * this.gridSize, segment.y * this.gridSize, this.gridSize - 2, this.gridSize - 2);
        });

        // Draw food
        this.ctx.fillStyle = '#ef4444';
        this.ctx.fillRect(this.food.x * this.gridSize, this.food.y * this.gridSize, this.gridSize - 2, this.gridSize - 2);
    }

    gameOver() {
        this.gameRunning = false;
        clearInterval(this.gameLoop);
        
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('snakeHighScore', this.highScore);
            document.getElementById('high-score').textContent = this.highScore;
        }
        
        // Reset button state
        const btn = document.getElementById('start-pause-game');
        btn.textContent = 'Start Game';
        btn.classList.remove('paused');
        
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('game-over').classList.remove('hidden');
    }
}

// Email Form Submission Handler
function handleEmailFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = {
        name: document.getElementById('employer-name').value,
        email: document.getElementById('employer-email').value,
        company: document.getElementById('employer-company').value || 'Not provided',
        message: document.getElementById('employer-message').value || 'No message',
        timestamp: new Date().toISOString()
    };

    const messageDiv = document.getElementById('form-message');
    
    // Store in localStorage (for demo/testing purposes)
    // In production, you should send this to a backend server
    try {
        const submissions = JSON.parse(localStorage.getItem('employerSubmissions') || '[]');
        submissions.push(formData);
        localStorage.setItem('employerSubmissions', JSON.stringify(submissions));
        
        // Show success message
        messageDiv.textContent = 'Thank you! Your information has been submitted.';
        messageDiv.className = 'form-message success';
        messageDiv.classList.remove('hidden');
        
        // Reset form
        form.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageDiv.classList.add('hidden');
        }, 5000);
        
        // TODO: Send to backend server
        // For production, uncomment and configure one of these options:
        // sendToBackend(formData);
        // sendToFormspree(formData);
        // sendToEmailJS(formData);
        
    } catch (error) {
        messageDiv.textContent = 'Error submitting form. Please try again.';
        messageDiv.className = 'form-message error';
        messageDiv.classList.remove('hidden');
        console.error('Form submission error:', error);
    }
}

// Example backend submission functions (uncomment and configure as needed)

// Option 1: Send to your own backend API
// async function sendToBackend(data) {
//     try {
//         const response = await fetch('/api/submit-email', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data)
//         });
//         if (!response.ok) throw new Error('Network response was not ok');
//     } catch (error) {
//         console.error('Backend submission error:', error);
//     }
// }

// Option 2: Send to Formspree (free service)
// async function sendToFormspree(data) {
//     try {
//         const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data)
//         });
//         if (!response.ok) throw new Error('Formspree submission failed');
//     } catch (error) {
//         console.error('Formspree error:', error);
//     }
// }

// Option 3: Send to EmailJS (free service)
// async function sendToEmailJS(data) {
//     try {
//         emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
//             from_name: data.name,
//             from_email: data.email,
//             company: data.company,
//             message: data.message
//         });
//     } catch (error) {
//         console.error('EmailJS error:', error);
//     }
// }

// Profile picture upload functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeResume();
    const game = new SnakeGame('game-canvas');
    game.draw(); // Initial draw

    // Setup profile picture upload
    const profilePicture = document.getElementById('profile-picture');
    const imagePlaceholder = document.querySelector('.image-placeholder');

    if (profilePicture && imagePlaceholder) {
        profilePicture.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        profilePicture.src = event.target.result;
                        imagePlaceholder.style.display = 'none';
                    };
                    reader.readAsDataURL(file);
                }
            };
            input.click();
        });
    }

    // Setup email form submission
    const emailForm = document.getElementById('employer-email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', handleEmailFormSubmission);
    }

    // Setup scroll reveal for landing page
    const landingPage = document.querySelector('.landing-page');
    const fullPage = document.getElementById('full-page');
    
    if (landingPage && fullPage) {
        let hasScrolled = false;
        
        // Handle scroll reveal
        function handleScroll() {
            const scrollY = window.scrollY || window.pageYOffset;
            const revealThreshold = 100; // Start revealing after 100px scroll
            
            if (scrollY > revealThreshold && !hasScrolled) {
                hasScrolled = true;
                // Start both transitions simultaneously for smooth crossfade
                landingPage.classList.add('hidden');
                fullPage.classList.add('revealed');
            } else if (scrollY <= revealThreshold && hasScrolled) {
                hasScrolled = false;
                landingPage.classList.remove('hidden');
                fullPage.classList.remove('revealed');
            }
        }
        
        // Initial check
        handleScroll();
        
        // Listen for scroll events only
        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Setup theme toggle
    const themeButtons = document.querySelectorAll('.theme-btn');
    const savedTheme = localStorage.getItem('resume-theme') || 'default';
    
    // Apply saved theme
    document.body.setAttribute('data-theme', savedTheme);
    themeButtons.forEach(btn => {
        if (btn.dataset.theme === savedTheme) {
            btn.classList.add('active');
        }
    });
    
    // Handle theme switching
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            
            // Update active state
            themeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Apply theme
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('resume-theme', theme);
        });
    });
});


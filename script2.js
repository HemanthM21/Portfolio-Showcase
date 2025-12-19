window.addEventListener('load', function () {
    const splashScreen = document.getElementById('splashScreen');
    const mainContent = document.getElementById('mainContent');

    setTimeout(function () {
        splashScreen.classList.add('fade-out');
        mainContent.classList.add('show');
    }, 2500);

    setTimeout(function () {
        splashScreen.style.display = 'none';
    }, 3300);
});

// project data
const projects = {
    project0: {
        title: "MindGrid — AI-Powered Life Operating System",
        image: "images/p0.png",
        icon: "🧠",
        description: "MindGrid is an AI-powered personal productivity OS designed to understand a user’s life, not just their tasks. It unifies task management, document intelligence, and psychological journaling into one intelligent system that analyzes behavior, priorities, and thoughts to deliver personalized productivity insights.",
        features: [
            "AI-assisted task creation and smart prioritization",
            "Document intelligence using OCR for bills, receipts, and tickets",
            "Automatic reminder generation from documents and deadlines",
            "AI-powered journaling with mood detection and behavior insights",
            "Centralized dashboard with animated cards and activity feed",
            "Secure JWT-based authentication with Google OAuth support",
            "Real-time insights and personalized productivity suggestions",
            "Responsive, modern UI with smooth animations"
        ],
        technologies: [
            "React",
            "Vite",
            "Framer Motion",
            "Node.js",
            "Express.js",
            "MongoDB Atlas",
            "JWT Authentication",
            "Google OAuth",
            "OCR & AI APIs"
        ],
        challenges: "The biggest challenge was designing a system that combines multiple domains—tasks, documents, and journaling—into a single coherent user experience. Managing AI-driven insights, authentication flows, and real-time UI updates required careful state management and clean API architecture. This was addressed by modular backend routes, token-based authentication, and a component-driven frontend with animation orchestration.",
        role: "Backend Developer & System Architect — Owned and implemented the complete backend architecture, authentication system, AI integrations, API design, and database management using Node.js, Express, and MongoDB Atlas. Handled secure authentication, AI-driven features, and all backend API workflows. Managed deployment with backend on Render and frontend on Vercel. Frontend UI/UX and visual framework were collaboratively developed by my teammate during the hackathon.",
        liveDemo: "https://mindgrid-three.vercel.app/",
        viewCode: "https://github.com/HemanthM21/MINDGRID"
    },
    project1: {
        title: "Wanderly - Travel Discovery Platform",
        image: "images/Screenshot 2025-06-23 152629.png",
        icon: "🚀",
        image: "images/p1.png",
        description: "A full-stack travel platform inspired by Airbnb, built from scratch to help users discover peaceful stays, rides, and unique experiences. More than just code — it's a crafted journey from schema to screen.",
        features: [
            "Complete CRUD functionality for travel listings",
            "User authentication and role-based authorization",
            "Search and filter by category, location, and preferences",
            "Interactive location-based maps powered by Mapbox",
            "Secure image upload and storage via Cloudinary",
            "Review and rating system for listings",
            "Responsive design with smooth user experience across all devices",
            "Session management with flash messages for user feedback"
        ],
        technologies: ["Node.js", "Express.js", "MongoDB", "EJS Templates", "Bootstrap", "Cloudinary", "Mapbox", "Passport.js", "MVC Architecture"],
        challenges: "The primary challenge was architecting a scalable MVC structure while implementing secure authentication flows and managing complex data relationships between users, listings, and reviews. I solved this by implementing Passport.js for authentication, designing efficient MongoDB schemas with proper referencing, and integrating middleware for request validation.",
        role: "Full Stack Developer & Architect - Designed the complete application architecture from database schema to frontend implementation. Built RESTful APIs, implemented secure authentication flows, integrated third-party services (Cloudinary, Mapbox), and crafted a responsive UI.",
        liveDemo: "https://wanderly-project.onrender.com",
        viewCode: "https://github.com/HemanthM21/wanderly-project"
    },
    project2: {
        title: "EDVORA - Learning Management System",
        image: "images/p2.png",
        icon: "📚",
        description: "An interactive Learning Management System that transforms education through innovation and collaboration. Built for both students and teachers with real-time course management, assignment tracking, and performance analytics.",
        features: [
            "Dual-role functionality for students and teachers",
            "Real-time course enrollment and management",
            "Assignment submission with file upload support",
            "Interactive dashboards with Chart.js visualizations",
            "Grade tracking and performance analytics",
            "Discussion forums for Q&A and collaboration",
            "JWT-based authentication with role-based access control",
            "Responsive design optimized for all devices"
        ],
        technologies: ["Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "Passport.js", "JWT", "bcryptjs", "Chart.js", "HTML5/CSS3/JavaScript"],
        challenges: "Building a scalable system that handles multiple user roles with different permissions while maintaining real-time data synchronization was complex. Implemented JWT-based authentication with middleware for role verification and optimized MongoDB queries for efficient data retrieval.",
        role: "Full Stack Developer - Architected the entire LMS platform with dual-role dashboards, built RESTful APIs, implemented secure authentication, and created interactive data visualizations for performance tracking.",
        liveDemo: "https://edvora-lms-uz2l.onrender.com",
        viewCode: "https://github.com/HemanthM21/edvora-lms"
    },
    project3: {
        title: "ComidaCare - Food Donation Platform",
        image: "images/p3.png",
        icon: "🍽️",
        note: "Frontend completed; backend development is ongoing.",
        description: "A socially impactful platform that bridges the gap between surplus food and those in need. Real-time food sharing application connecting restaurants, bakeries, and food outlets with communities to reduce waste and fight hunger.",
        features: [
            "Real-time food donation listings with instant notifications",
            "Dual-role system for food donors and recipients",
            "Interactive geolocation with distance-based matching",
            "Google Maps integration for nearby food discovery",
            "Socket.io for real-time updates and alerts",
            "Image upload for food item visualization",
            "Pickup scheduling and coordination system",
            "Impact tracking dashboard showing meals saved"
        ],
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Google Maps API", "Cloudinary", "JWT", "bcryptjs"],
        challenges: "Implementing real-time notifications while maintaining location-based accuracy was challenging. Used Socket.io for instant updates and Google Maps Geolocation API to calculate distances, ensuring recipients receive alerts for nearby donations only.",
        role: "Full Stack Developer - Developed the entire platform from concept to deployment, including real-time notification system, geolocation features, and dual-role user interfaces for donors and recipients.",
        liveDemo: "https://comidacare.vercel.app/",
        viewCode: "https://github.com/HemanthM21/comidacare"
    },
    project4: {
        title: "Simon Says - Classic Memory Game",
        image: "images/simon-game.png",
        icon: "🎮",
        description: "A web-based recreation of the classic Simon electronic memory game. Players test their memory by repeating increasingly complex sequences of colored buttons with corresponding sounds. Each level adds a new step to the sequence, creating an engaging challenge that grows progressively harder.",
        features: [
            "Classic 4-button gameplay with color-coded tiles (red, green, blue, yellow)",
            "Unique sound effects for each colored button",
            "Progressive difficulty with increasing sequence length",
            "Visual feedback with button animations and light effects",
            "Keyboard controls to start the game",
            "Game over detection with restart capability",
            "Level progression system",
            "Responsive design for cross-device compatibility"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "DOM Manipulation", "Audio API"],
        challenges: "Creating smooth animations and synchronizing visual feedback with audio cues was crucial for the user experience. Implemented efficient sequence generation and validation logic to handle increasingly complex patterns while maintaining game state across multiple levels.",
        role: "Front-End Developer - Designed and developed the complete game interface, implemented game logic for sequence generation and validation, integrated audio feedback system, and created responsive animations for interactive gameplay.",
        liveDemo: "https://simon-game-beta-one.vercel.app/",
        viewCode: "https://github.com/HemanthM21/Simon-game"
    },
    project5: {
        title: "Weather Forecast Dashboard",
        icon: "🌤️",
        description: "A comprehensive weather application providing real-time weather data, 7-day forecasts, and interactive weather maps. Features location-based weather detection and detailed meteorological information.",
        features: [
            "Real-time weather data from OpenWeatherMap API",
            "7-day weather forecast with hourly breakdowns",
            "Location-based automatic weather detection",
            "Search functionality for any city worldwide",
            "Interactive weather charts using Chart.js",
            "Weather alerts and severe condition warnings",
            "Temperature unit conversion (Celsius/Fahrenheit)",
            "Responsive design with beautiful weather animations"
        ],
        technologies: ["React", "OpenWeatherMap API", "Chart.js", "Geolocation API", "Axios", "CSS Animations"],
        challenges: "Handling multiple API calls efficiently while providing smooth user experience required optimization. Implemented caching mechanism to reduce API calls and used React hooks for efficient state management and data fetching.",
        role: "Frontend Developer - Designed and developed the entire weather dashboard with API integration, data visualization, and responsive UI with smooth animations.",
        liveDemo: "#",
        viewCode: "#"
    },
    project6: {
        title: "Phoenix Fresh - Organic Grocery Web App",
        image: "images/p4.png",
        icon: "🛒",
        description: "Phoenix Fresh is a modern, responsive organic grocery web application designed to provide a seamless shopping experience for healthy and eco-conscious consumers. The platform features an elegant UI, product listings with categories, and a clean, interactive design that ensures a smooth browsing experience across devices. Built as a frontend-focused project to enhance JavaScript and UI development skills.",
        features: [
            "Interactive and responsive product catalog",
            "Smooth navigation between product categories",
            "User-friendly and modern shopping interface",
            "Search and filter options for product discovery",
            "Dynamic product cards with hover effects and clean layout",
            "Attractive color palette and typography for better readability",
            "Responsive design compatible with all devices",
            "Frontend-only prototype showcasing UI and UX design skills"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX Design", "Frontend Development"],
        challenges: "Designing a visually appealing layout that balances usability and aesthetics while maintaining code simplicity. Focused on improving JavaScript logic, DOM handling, and responsive design techniques.",
        role: "Front-End Developer - Developed the entire UI and front-end logic from scratch, focusing on clean design principles, responsiveness, and intuitive user interaction.",
        liveDemo: "https://phoenix-fresh.vercel.app/",
        viewCode: "https://github.com/HemanthM21/Phoenix-Fresh"
    }
};

// certificate data
const certificates = {
    cert1: {
        title: "Prompt Design in Vertex AI",
        icon: "☁️",
        image: "images/c1.png",
        issuer: "Google Cloud",
        date: "October 2025",
        description: "Introductory skill badge in Machine Learning & AI, focusing on prompt engineering techniques and best practices for working with Google's Vertex AI platform.",
        skills: [
            "Prompt Engineering and Design",
            "Vertex AI Platform",
            "Machine Learning Fundamentals",
            "AI Model Interaction",
            "Natural Language Processing Basics",
            "Google Cloud Platform",
            "AI/ML Best Practices"
        ],
        credentialUrl: "https://www.skills.google/public_profiles/bbc20b6c-458e-4668-89bf-6c642a8cb017/badges/19186259"
    },
    cert2: {
        title: "Quests Of Wonders - 3rd Place",
        icon: "🏆",
        image: "images/c2.jpg",
        issuer: "ISTE - Mohan Babu University",
        date: "August 2024",
        description: "Certificate of Appreciation for securing 3rd place in the Quests Of Wonders event, demonstrating problem-solving skills and technical expertise in a competitive environment.",
        skills: [
            "Problem Solving and Critical Thinking",
            "Technical Quiz Competitions",
            "Team Collaboration",
            "Quick Decision Making",
            "Technical Knowledge Application",
            "Competitive Programming Skills"
        ],
        credentialUrl: "#"
    },
    cert3: {
        title: "Web Development Hackathon - Winner",
        icon: "🥇",
        image: "images/c3.jpg",
        issuer: "CETA - Mohan Babu University",
        date: "March 2025",
        description: "Certificate of Achievement for securing Winner/Runner-up position in YuvaRang-2K25 Web Development Hackathon, organized by Tech-Nova Club, CETA. Demonstrated outstanding performance in building innovative web solutions.",
        skills: [
            "Web Development (HTML, CSS, JavaScript)",
            "Problem Solving under Time Constraints",
            "Creative UI/UX Design",
            "Team Collaboration",
            "Rapid Prototyping",
            "Live Project Presentation",
            "Competitive Development"
        ],
        credentialUrl: "#"
    },
    cert4: {
        title: "Code Verse Hack Fest 2K24",
        icon: "💻",
        image: "images/c4.jpg",
        issuer: "MBU & IBM - iDEALab",
        date: "April 2024",
        description: "Participation certificate for actively participating in Code Verse Hack Fest 2K24, a hackathon event focused on innovation and problem-solving in Artificial Intelligence and Machine Learning domain.",
        skills: [
            "Hackathon Participation",
            "AI/ML Problem Solving",
            "Innovation and Ideation",
            "Team Collaboration",
            "Technical Presentation",
            "Rapid Development Skills"
        ],
        credentialUrl: "#"
    },
    cert5: {
        title: "Cyber Security with Ethical Hacking Workshop",
        icon: "🔐",
        image: "images/c5.jpg",
        issuer: "E-CELL IIT Hyderabad & Techobytes Technologies",
        date: "January 2025",
        description: "2-day intensive workshop on Cyber Security with Ethical Hacking, covering penetration testing, vulnerability assessment, and security best practices. Organized by Techobytes Technologies in collaboration with E-CELL IIT Hyderabad.",
        skills: [
            "Ethical Hacking Fundamentals",
            "Penetration Testing Techniques",
            "Network Security",
            "Vulnerability Assessment",
            "Security Tools (Kali Linux, Metasploit)",
            "Web Application Security",
            "Security Best Practices",
            "Cyber Threat Analysis"
        ],
        credentialUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7289630973527220226/"
    },
    cert6: {
        title: "AWS Student Community Day - Tirupati",
        icon: "☁️",
        image: "images/c6.jpg",
        issuer: "AWS Tirupati User Group & AWS Cloud Clubs MBU",
        date: "November 2025",
        description: "Certificate of Participation for attending AWS Student Community Day at Mohan Babu University. The event featured comprehensive sessions on modern cloud architecture, serverless computing, event-driven architecture with AWS Lambda, AWS Bedrock, RAG pipelines for private AI implementations, and analyzing cloud networks with GenAI for infrastructure troubleshooting.",
        skills: [
            "AWS Cloud Computing",
            "Serverless Architecture",
            "AWS Lambda & Event-Driven Design",
            "AWS Bedrock & RAG Pipelines",
            "Cloud Network Analysis with GenAI",
            "Modern Cloud Architecture",
            "AI/ML Integration in Cloud"
        ],
        credentialUrl: "#"
    }
};

// custom cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    follower.style.left = cursorX + 'px';
    follower.style.top = cursorY + 'px';

    requestAnimationFrame(animateCursor);
}
animateCursor();

const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card, .certificate-card, .menu-toggle');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.borderColor = '#f7931e';
        follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = '#ff6b35';
        follower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// mobile menu toggle
function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    const menuToggle = document.querySelector('.menu-toggle');
    menuOverlay.classList.toggle('active');
    menuToggle.classList.toggle('active');

    if (menuOverlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// menu navigation
function menuNavigate(sectionId) {
    const menuOverlay = document.getElementById('menuOverlay');
    const menuToggle = document.querySelector('.menu-toggle');
    menuOverlay.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = 'auto';

    scrollToSection(sectionId);

    const menuLinks = document.querySelectorAll('.menu-overlay-links a');
    menuLinks.forEach(link => link.classList.remove('active-link'));
    event.target.classList.add('active-link');
}

// smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// open project modal
function openModal(projectId) {
    const project = projects[projectId];
    const modal = document.getElementById('projectModal');

    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
    modal.scrollTop = 0;

    document.getElementById('modalTitle').textContent = project.title;

    const modalTitle = document.getElementById('modalTitle');
    modalTitle.textContent = project.title;

    const existingNote = document.getElementById('projectNote');
    if (existingNote) existingNote.remove();

    if (project.note) {
        const noteElement = document.createElement('p');
        noteElement.id = 'projectNote';
        noteElement.textContent = project.note;
        noteElement.style.color = '#f7931e';
        noteElement.style.fontSize = '1rem';
        noteElement.style.textAlign = 'center';
        noteElement.style.marginTop = '0.4rem';
        noteElement.style.fontStyle = 'italic';
        modalTitle.insertAdjacentElement('afterend', noteElement);
    }


    const modalImageElement = document.getElementById('modalImage');
    if (project.image) {
        modalImageElement.innerHTML = `<img src="${project.image}" alt="${project.title} Screenshot" />`;
    } else {
        modalImageElement.textContent = project.icon;
    }

    let detailsHTML = `
        <p style="font-size: 1.2rem; margin-bottom: 2rem; color: #c4b9a4;">${project.description}</p>
        
        <h3>Key Features</h3>
        <ul>
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        
        <h3>Technologies Used</h3>
        <div class="project-tags" style="margin-top: 1.5rem;">
            ${project.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
        </div>
        
        <h3>Challenges & Solutions</h3>
        <p>${project.challenges}</p>
        
        <h3>My Role</h3>
        <p>${project.role}</p>
    `;

    document.getElementById('modalDetails').innerHTML = detailsHTML;
    document.getElementById('modalLinks').innerHTML = `
        <a href="${project.liveDemo}" target="_blank" class="modal-btn">Live Demo</a>
        <a href="${project.viewCode}" target="_blank" class="modal-btn secondary">View Code</a>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// close project modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// open certificate modal
function openCertificateModal(certId) {
    const cert = certificates[certId];
    const modal = document.getElementById('certificateModal');

    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
    modal.scrollTop = 0;

    document.getElementById('certModalTitle').textContent = cert.title;

    const certImageElement = document.getElementById('certModalImage');
    if (cert.image) {
        certImageElement.innerHTML = `<img src="${cert.image}" alt="${cert.title}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 15px;">`;
    } else {
        certImageElement.textContent = cert.icon;
    }

    let detailsHTML = `
        <div style="margin-bottom: 1.5rem;">
            <p style="font-size: 1.1rem; color: #f7931e; margin-bottom: 0.5rem;"><strong>Issued by:</strong> ${cert.issuer}</p>
            <p style="font-size: 1.1rem; color: #f7931e;"><strong>Date:</strong> ${cert.date}</p>
        </div>
        
        <p style="font-size: 1.2rem; margin-bottom: 2rem; color: #c4b9a4;">${cert.description}</p>
        
        <h3>Skills Acquired</h3>
        <ul>
            ${cert.skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
    `;

    document.getElementById('certModalDetails').innerHTML = detailsHTML;

    if (cert.credentialUrl && cert.credentialUrl !== '#') {
        document.getElementById('certModalLinks').innerHTML = `
            <a href="${cert.credentialUrl}" target="_blank" class="modal-btn">View Credential</a>
        `;
    } else {
        document.getElementById('certModalLinks').innerHTML = '';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// close certificate modal
function closeCertificateModal() {
    const certModal = document.getElementById('certificateModal');
    certModal.classList.remove('active');

    if (window.fromExtraCertificates) {
        window.fromExtraCertificates = false;
        openAllCertificatesModal();
    } else {
        document.body.style.overflow = 'auto';
    }
}

// close all certificates modal
function closeAllCertificatesModal() {
    const modal = document.getElementById('allCertificatesModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    window.fromExtraCertificates = false;
}

// extra certificate modal - ONLY IMAGE
function openExtraCertificateModal(index) {
    const cert = window.extraCertificatesData[index];
    const modal = document.getElementById('certificateModal');

    closeAllCertificatesModal();

    window.fromExtraCertificates = true;

    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) modalContent.scrollTop = 0;
    modal.scrollTop = 0;

    document.getElementById('certModalTitle').textContent = cert.title;

    const certImageElement = document.getElementById('certModalImage');
    if (cert.image) {
        certImageElement.innerHTML = `<img src="${cert.image}" alt="${cert.title}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 15px;">`;
    } else {
        certImageElement.textContent = cert.icon;
    }

    document.getElementById('certModalDetails').innerHTML = '';

    if (cert.credentialUrl && cert.credentialUrl !== '#') {
        document.getElementById('certModalLinks').innerHTML = `
            <a href="${cert.credentialUrl}" target="_blank" class="modal-btn">View Credential</a>
        `;
    } else {
        document.getElementById('certModalLinks').innerHTML = '';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Open ALL Certificates Modal
function openAllCertificatesModal() {
    const modal = document.getElementById('allCertificatesModal');

    const extraCertificates = [
        {
            icon: "🎓",
            title: "Entrepreneurship I Laying the Foundation",
            issuer: "Coursera",
            date: "July 2025",
            image: "images/cre1.png",
            credentialUrl: "#"
        },
        {
            icon: "🎓",
            title: "Entrepreneurship II Preparing for Launch",
            issuer: "Coursera",
            date: "July 2025",
            image: "images/cre2.png",
            credentialUrl: "#"
        },
        {
            icon: "🎓",
            title: "Fundamentals of Accounting Capstone",
            issuer: "Coursera",
            date: "July 2025",
            image: "images/cre3.png",
            credentialUrl: "#"
        },
        {
            icon: "🎓",
            title: "Strategic Innovation Managing Innovation Initiatives",
            issuer: "Coursera",
            date: "July 2025",
            image: "images/cre4.png",
            credentialUrl: "#"
        },
        // {
        //     icon: "🎓",
        //     title: "Responsive Web Design",
        //     issuer: "freeCodeCamp",
        //     date: "June 2024",
        //     image: "images/c10.jpg",
        //     credentialUrl: "#"
        // }
    ];

    // Generate certificate list HTML
    let certificatesListHTML = '';
    extraCertificates.forEach((cert, index) => {
        certificatesListHTML += `
            <div class="cert-list-item">
                <div class="cert-list-icon">${cert.icon}</div>
                <div class="cert-list-content">
                    <h4>${cert.title}</h4>
                    <p>${cert.issuer} • ${cert.date}</p>
                </div>
                <button class="cert-view-btn" onclick="openExtraCertificateModal(${index});">
                    View Certificate
                </button>
            </div>
        `;
    });

    document.getElementById('allCertificatesList').innerHTML = certificatesListHTML;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    window.extraCertificatesData = extraCertificates;
    window.fromExtraCertificates = false;
}

window.onclick = function (event) {
    const projectModal = document.getElementById('projectModal');
    const certModal = document.getElementById('certificateModal');
    const allCertsModal = document.getElementById('allCertificatesModal');

    if (event.target == projectModal) {
        closeModal();
    }
    if (event.target == certModal) {
        closeCertificateModal();
    }
    if (event.target == allCertsModal) {
        closeAllCertificatesModal();
    }
}

// Close modals on Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const projectModal = document.getElementById('projectModal');
        const certModal = document.getElementById('certificateModal');
        const menuOverlay = document.getElementById('menuOverlay');
        const allCertsModal = document.getElementById('allCertificatesModal');

        if (projectModal.classList.contains('active')) {
            closeModal();
        }
        if (certModal.classList.contains('active')) {
            closeCertificateModal();
        }
        if (menuOverlay.classList.contains('active')) {
            toggleMenu();
        }
        if (allCertsModal.classList.contains('active')) {
            closeAllCertificatesModal();
        }
    }
});

// Advanced Scroll Reveal Animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');
    const certificateCards = document.querySelectorAll('.certificate-card');

    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });

    skillCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - revealPoint) {
            card.classList.add('active');
        }
    });

    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - revealPoint) {
            card.classList.add('active');
        }
    });

    certificateCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - revealPoint) {
            card.classList.add('active');
        }
    });
}

// Parallax effect on scroll
function parallaxEffect() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    const scrolled = window.pageYOffset;

    parallaxSections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
            const offset = (scrolled - sectionTop) * 0.05;
            section.style.transform = `translateY(${offset}px)`;
        }
    });
}

let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            revealOnScroll();
            parallaxEffect();
            ticking = false;
        });
        ticking = true;
    }
});

revealOnScroll();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const targetId = href.substring(1);
            scrollToSection(targetId);
        }
    });
});
        // Mobile menu toggle
        document.getElementById('mobileMenuBtn').addEventListener('click', function() {
            const nav = document.getElementById('mainNav');
            nav.classList.toggle('active');
        });

        // Page navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetPage = this.getAttribute('data-page');
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
                
                // Show target page
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
                document.getElementById(targetPage).classList.add('active');
                
                // Close mobile menu if open
                document.getElementById('mainNav').classList.remove('active');
                
                // Update URL hash
                window.location.hash = targetPage;
            });
        });

        // Load projects data
        const projects = [
            { id: 1, title: "Autonomous Drone", year: 2025, type: "drone", desc: "A fully autonomous drone capable of navigation in GPS-denied environments using computer vision and SLAM technology.", tech: "ROS, Python, OpenCV, Pixhawk", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { id: 2, title: "6-DOF Robotic Arm", year: 2024, type: "arm", desc: "A 6-degree-of-freedom robotic arm with precision control for industrial pick-and-place applications.", tech: "Arduino, Stepper Motors, CNC", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { id: 3, title: "AI-Powered Rover", year: 2025, type: "ai", desc: "Mars rover prototype with AI-based terrain analysis and autonomous decision-making capabilities.", tech: "TensorFlow, Raspberry Pi, Python", img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { id: 4, title: "Smart Agriculture IoT", year: 2024, type: "iot", desc: "IoT-based monitoring system for precision agriculture with automated irrigation and soil analysis.", tech: "ESP32, Sensors, MQTT, Cloud", img: "https://images.unsplash.com/photo-1586771107445-d3ca888129fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { id: 5, title: "Swarm Robotics", year: 2023, type: "ai", desc: "Coordinated swarm of small robots for collaborative task completion and pattern formation.", tech: "ROS, Zigbee, C++", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            { id: 6, title: "Humanoid Robot", year: 2022, type: "ai", desc: "Bipedal humanoid robot capable of basic human-like movements and voice interaction.", tech: "Servo Motors, Arduino, AI", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
        ];

        function renderProjects(filter = 'all') {
            const container = document.getElementById('projects-grid');
            container.innerHTML = '';
            
            const filteredProjects = filter === 'all' 
                ? projects 
                : projects.filter(p => p.type === filter);
            
            filteredProjects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'card';
                projectCard.innerHTML = `
                    <img src="${project.img}" alt="${project.title}" class="card-img">
                    <div class="card-content">
                        <span class="badge">${project.year}</span>
                        <h3>${project.title}</h3>
                        <p>${project.desc}</p>
                        <p><strong>Technologies:</strong> ${project.tech}</p>
                    </div>
                `;
                container.appendChild(projectCard);
            });
        }

        // Filter projects
        document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn[data-filter]').forEach(b => {
                    b.classList.remove('active');
                });
                this.classList.add('active');
                const filter = this.getAttribute('data-filter');
                renderProjects(filter);
            });
        });

        // Load events
        const upcomingEvents = [
            { title: "Robotics Hackathon 2026", date: "Mar 15-17, 2026", venue: "Main Auditorium", desc: "48-hour hackathon focusing on autonomous drones and swarm robotics.", type: "competition" },
            { title: "ROS Workshop", date: "Feb 22, 2026", venue: "Robotics Lab", desc: "Hands-on workshop on Robot Operating System for beginners.", type: "workshop" },
            { title: "Guest Lecture: AI in Robotics", date: "Feb 10, 2026", venue: "Seminar Hall", desc: "Dr. Anjali Mehta from IIT Delhi will discuss recent advances in AI for robotics.", type: "lecture" },
            { title: "Inter-College Robowars", date: "Apr 5, 2026", venue: "Sports Complex", desc: "Annual robot combat competition open to all engineering colleges.", type: "competition" }
        ];

        const pastEvents = [
            { title: "Arduino Basics Workshop", date: "Nov 2025", img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", desc: "Introduction to Arduino programming and circuit design for beginners." },
            { title: "National Robotics Championship", date: "Oct 2025", img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", desc: "Our team secured 1st prize in the autonomous maze solver category." },
            { title: "Industry Visit to Robotex", date: "Sep 2025", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", desc: "Visit to leading robotics manufacturing company in Bangalore." }
        ];

        function renderEvents() {
            const upcomingContainer = document.getElementById('upcoming-events');
            const pastContainer = document.getElementById('past-events');
            
            // Upcoming events
            upcomingEvents.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.className = 'card';
                eventCard.innerHTML = `
                    <div class="card-content">
                        <span class="badge">${event.type}</span>
                        <h3>${event.title}</h3>
                        <p><strong>Date:</strong> ${event.date}</p>
                        <p><strong>Venue:</strong> ${event.venue}</p>
                        <p>${event.desc}</p>
                        <button class="btn" style="margin-top: 1rem;">Register Interest</button>
                    </div>
                `;
                upcomingContainer.appendChild(eventCard);
            });
            
            // Past events
            pastEvents.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.className = 'card';
                eventCard.innerHTML = `
                    <img src="${event.img}" alt="${event.title}" class="card-img">
                    <div class="card-content">
                        <span class="badge">Past Event</span>
                        <h3>${event.title}</h3>
                        <p><strong>Date:</strong> ${event.date}</p>
                        <p>${event.desc}</p>
                    </div>
                `;
                pastContainer.appendChild(eventCard);
            });
        }

        // Load team members
        const coreTeam = [
            { name: "Rohan Singh", role: "President", contact: { linkedin: "#", github: "#" }, img: "" },
            { name: "Priya Sharma", role: "Vice President", contact: { linkedin: "#", github: "#" }, img: "" },
            { name: "Amit Patel", role: "Technical Coordinator", contact: { linkedin: "#", github: "#" }, img: "" },
            { name: "Sneha Gupta", role: "Operations Coordinator", contact: { linkedin: "#", github: "#" }, img: "" },
            { name: "Karan Verma", role: "Treasurer", contact: { linkedin: "#", github: "#" }, img: "" },
            { name: "Divya Mehta", role: "Outreach Coordinator", contact: { linkedin: "#", github: "#" }, img: "" }
        ];

        function renderTeam() {
            const container = document.getElementById('core-team');
            coreTeam.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.className = 'card';
                memberCard.innerHTML = `
                    <div class="card-content">
                        <div style="width: 80px; height: 80px; border-radius: 50%; overflow: hidden; background: #eee; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: #ccc; margin-bottom: 1rem;">
                            <i class="fas fa-user"></i>
                        </div>
                        <h3>${member.name}</h3>
                        <p><strong>${member.role}</strong></p>
                        <div class="social-icons" style="margin-top: 1rem;">
                            <a href="${member.contact.linkedin}"><i class="fab fa-linkedin"></i></a>
                            <a href="${member.contact.github}"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                `;
                container.appendChild(memberCard);
            });
        }

        // Load news
        const news = [
            { title: "New Robotics Lab Inauguration", date: "Jan 10, 2026", source: "Club News", category: "club", desc: "Our newly expanded robotics lab was inaugurated by the Director of NIT Patna. The lab now features advanced 3D printers and a dedicated AI workstation.", link: "#" },
            { title: "Team Selected for International Competition", date: "Dec 20, 2025", source: "Competition News", category: "competition", desc: "Our team has been selected to represent India at the International Robotics Olympiad in Singapore next month.", link: "#" },
            { title: "Breakthrough in Swarm Robotics", date: "Dec 5, 2025", source: "Tech Journal", category: "tech", desc: "Researchers at MIT have developed a new algorithm that allows drone swarms to navigate complex environments without collisions.", link: "#" },
            { title: "AI Robot Learns to Solve Rubik's Cube", date: "Nov 28, 2025", source: "Research Breakthrough", category: "tech", desc: "OpenAI's robotic hand has learned to solve a Rubik's Cube with one hand, demonstrating advanced dexterity and problem-solving.", link: "#" },
            { title: "Monthly Meeting Summary", date: "Nov 15, 2025", source: "Club News", category: "club", desc: "The November club meeting focused on planning for the upcoming hackathon and reviewing progress on ongoing projects.", link: "#" }
        ];

        function renderNews(filter = 'all') {
            const container = document.getElementById('news-container');
            container.innerHTML = '';
            
            const filteredNews = filter === 'all' 
                ? news 
                : news.filter(n => n.category === filter);
            
            filteredNews.forEach(item => {
                const newsCard = document.createElement('div');
                newsCard.className = 'card';
                newsCard.style.marginBottom = '1.5rem';
                newsCard.innerHTML = `
                    <div class="card-content">
                        <span class="badge">${item.source}</span>
                        <h3>${item.title}</h3>
                        <p><strong>Date:</strong> ${item.date}</p>
                        <p>${item.desc}</p>
                        <a href="${item.link}" class="btn btn-outline" style="margin-top: 1rem;">Read More</a>
                    </div>
                `;
                container.appendChild(newsCard);
            });
        }

        // Filter news
        document.querySelectorAll('.filter-btn[data-news-filter]').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn[data-news-filter]').forEach(b => {
                    b.classList.remove('active');
                });
                this.classList.add('active');
                const filter = this.getAttribute('data-news-filter');
                renderNews(filter);
            });
        });

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! This is a demo form - in a real implementation, this would send your message to the club.');
            this.reset();
        });

        // Initialize page based on hash
        function initPage() {
            const hash = window.location.hash.substring(1) || 'home';
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-page') === hash) {
                    item.classList.add('active');
                }
            });
            
            // Show target page
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(hash).classList.add('active');
        }

        // Initial render
        document.addEventListener('DOMContentLoaded', function() {
            renderProjects();
            renderEvents();
            renderTeam();
            renderNews();
            initPage();
            
            // Handle hash changes
            window.addEventListener('hashchange', initPage);
        });

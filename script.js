// Assessment Questions Data
const assessmentQuestions = [
    {
        id: 1,
        question: "Over the past 2 weeks, how often have you felt little interest or pleasure in doing things?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
        id: 2,
        question: "Over the past 2 weeks, how often have you felt down, depressed, or hopeless?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
        id: 3,
        question: "How often have you had trouble falling or staying asleep, or sleeping too much?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
        id: 4,
        question: "How often have you felt tired or had little energy?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
        id: 5,
        question: "How often have you felt nervous, anxious, or on edge?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    }
];

// Service Details Data
const serviceDetails = {
    therapy: {
        title: "Online Therapy",
        description: "Connect with licensed therapists from the comfort of your home, on your schedule.",
        features: [
            "24/7 chat support",
            "Video sessions with licensed therapists",
            "Personalized treatment plans",
            "Secure and confidential platform",
            "Progress tracking tools"
        ],
        icon: "comments"
    },
    corporate: {
        title: "Corporate Plans",
        description: "Boost team well-being and productivity with tailored mental health solutions for your organization.",
        features: [
            "Custom wellness programs",
            "Employee assistance services",
            "Team workshops and training",
            "Anonymous utilization reporting",
            "Dedicated account manager"
        ],
        icon: "building"
    },
    meditation: {
        title: "Meditation Tools",
        description: "Access a library of guided meditations and mindfulness exercises for daily practice.",
        features: [
            "Guided audio sessions",
            "Sleep stories and relaxation techniques",
            "Breathing exercises",
            "Mood tracking",
            "Progress statistics"
        ],
        icon: "spa"
    },
    vr: {
        title: "VR Therapy",
        description: "Experience therapeutic environments and exposure therapy through immersive virtual reality.",
        features: [
            "Immersive therapeutic environments",
            "Exposure therapy simulations",
            "Relaxation landscapes",
            "Guided VR meditation sessions",
            "Compatible with major VR headsets"
        ],
        icon: "vr-cardboard"
    },
    community: {
        title: "Support Community",
        description: "Join moderated groups to connect with others experiencing similar challenges.",
        features: [
            "Moderated support groups",
            "Topic-specific forums",
            "Peer matching for one-on-one connection",
            "Resource sharing",
            "Community events and challenges"
        ],
        icon: "users"
    }
};

// Resources Data
const resourcesData = {
    therapy: `
        <h3>Online Therapy Resources</h3>
        <p>Explore our curated resources to enhance your therapy experience and mental well-being journey.</p>
        
        <div class="resource-card">
            <div class="resource-image">
                <iframe width="200" height="120" src="https://www.youtube.com/embed/Sxddnugwu-8" title="What to expect in your first therapy session" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="resource-info">
                <h3>What to Expect in Your First Therapy Session</h3>
                <p>Starting therapy can be intimidating. This video guides you through the process and helps ease anxiety about your first session.</p>
                <div class="resource-tags">
                    <span class="resource-tag">Beginner</span>
                    <span class="resource-tag">Video</span>
                </div>
                <div class="resource-actions">
                    <a href="https://www.youtube.com/watch?v=Sxddnugwu-8" target="_blank" class="resource-button">Watch</a>
                    <button class="resource-button outline" onclick="saveResource('therapy-first-session')">Save</button>
                </div>
            </div>
        </div>
        
        <div class="resource-card">
            <div class="resource-image">
                <img src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Therapy journal" loading="lazy">
            </div>
            <div class="resource-info">
                <h3>Therapy Journal Template</h3>
                <p>Journaling between sessions can enhance your therapy experience. Download our template designed by professional therapists to track your progress.</p>
                <div class="resource-tags">
                    <span class="resource-tag">Tool</span>
                    <span class="resource-tag">PDF</span>
                </div>
                <div class="resource-actions">
                    <button class="resource-button">Download PDF</button>
                </div>
            </div>
        </div>
    `,
    meditation: `
        <h3>Meditation & Mindfulness Resources</h3>
        <p>Discover tools and techniques to cultivate mindfulness in your daily life and enhance your meditation practice.</p>
        
        <div class="resource-card">
            <div class="resource-image">
                <iframe width="200" height="120" src="https://www.youtube.com/embed/inpok4MKVLM" title="5-Minute Meditation You Can Do Anywhere" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="resource-info">
                <h3>5-Minute Meditation You Can Do Anywhere</h3>
                <p>A quick guided meditation perfect for beginners or those with busy schedules. Practice mindfulness even with just a few minutes to spare.</p>
                <div class="resource-tags">
                    <span class="resource-tag">Beginner</span>
                    <span class="resource-tag">Guided Practice</span>
                </div>
                <div class="resource-actions">
                    <a href="https://www.youtube.com/watch?v=inpok4MKVLM" target="_blank" class="resource-button">Watch & Practice</a>
                </div>
            </div>
        </div>
    `,
    corporate: `
        <h3>Workplace Wellness Resources</h3>
        <p>Create a mentally healthy workplace with these resources designed for teams and organizations.</p>
        
        <div class="resource-card">
            <div class="resource-image">
                <img src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Team wellness assessment" loading="lazy">
            </div>
            <div class="resource-info">
                <h3>Workplace Wellness Assessment Tool</h3>
                <p>Evaluate your organization's mental health support with our comprehensive assessment. Identify strengths and areas for improvement.</p>
                <div class="resource-tags">
                    <span class="resource-tag">Assessment</span>
                    <span class="resource-tag">Teams</span>
                </div>
                <div class="resource-actions">
                    <button class="resource-button">Download Tool</button>
                </div>
            </div>
        </div>
    `,
    vr: `
        <h3>VR Therapy Resources</h3>
        <p>Explore how virtual reality is revolutionizing mental health treatment through immersive therapeutic experiences.</p>
        
        <div class="resource-card">
            <div class="resource-image">
                <iframe width="200" height="120" src="https://www.youtube.com/embed/GMttQHMjbJo" title="Virtual Reality Therapy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="resource-info">
                <h3>VR Therapy: A New Dimension in Mental Health</h3>
                <p>This introduction to VR therapy explains how immersive environments are being used to treat phobias, anxiety disorders, PTSD, and more.</p>
                <div class="resource-tags">
                    <span class="resource-tag">Educational</span>
                    <span class="resource-tag">Video</span>
                </div>
                <div class="resource-actions">
                    <a href="https://www.youtube.com/watch?v=GMttQHMjbJo" target="_blank" class="resource-button">Watch Video</a>
                </div>
            </div>
        </div>
    `,
    community: `
        <h3>Support Community Resources</h3>
        <p>Resources to help you connect with peers and build your support network for better mental health.</p>
        
        <div class="resource-card">
            <div class="resource-image">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Community guidelines" loading="lazy">
            </div>
            <div class="resource-info">
                <h3>MindEase Community Guidelines</h3>
                <p>Our community values safety, respect, and confidentiality. Read our guidelines to understand how we maintain a supportive environment.</p>
                <div class="resource-tags">
                    <span class="resource-tag">Guidelines</span>
                    <span class="resource-tag">Safety</span>
                </div>
                <div class="resource-actions">
                    <button class="resource-button">Read Guidelines</button>
                </div>
            </div>
        </div>
    `,
    default: `
        <div class="resource-welcome">
            <h3>Welcome to MindEase Resources</h3>
            <p>Select a topic above to explore our curated content, videos, and tools.</p>
        </div>
    `
};

// Global functions
window.saveResource = function(resourceId) {
    // In a real implementation, this would save to localStorage or user account
    alert('Resource saved to your collection!');
};

window.learnMoreAction = function(serviceType) {
    const serviceDetailsElement = document.getElementById('serviceDetails');
    serviceDetailsElement.classList.remove('active');
    document.body.style.overflow = '';
    
    setTimeout(() => {
        const resourcesSection = document.getElementById('resources');
        resourcesSection.scrollIntoView({behavior: 'smooth'});
        displayResources(serviceType);
        resourcesSection.style.display = 'block';
        resourcesSection.classList.add('active');
    }, 300);
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Hero CTA button scroll to services
    document.getElementById('hero-cta').addEventListener('click', function() {
        document.querySelector('#services').scrollIntoView({behavior: 'smooth'});
    });

    // Service card click handler
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceDetailsElement = document.getElementById('serviceDetails');
    const detailsContent = document.querySelector('.details-content');
    const closeDetails = document.querySelector('.close-details');

    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceType = this.dataset.service;
            const service = serviceDetails[serviceType];
            
            if (service) {
                let featuresHTML = service.features.map(feature => 
                    `<li><i class="fas fa-check"></i> ${feature}</li>`
                ).join('');

                detailsContent.innerHTML = `
                    <div class="service-modal-header">
                        <i class="fas fa-${service.icon} modal-icon"></i>
                        <h2>${service.title}</h2>
                    </div>
                    <p>${service.description}</p>
                    <h3>Features</h3>
                    <ul class="service-features">
                        ${featuresHTML}
                    </ul>
                    <button class="cta-button modal-cta" onclick="learnMoreAction('${serviceType}')">Learn More</button>
                `;
                
                serviceDetailsElement.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
        
        // Add keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Close details modal
    if (closeDetails) {
        closeDetails.addEventListener('click', function() {
            serviceDetailsElement.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Also close modal when clicking outside the content
    serviceDetailsElement.addEventListener('click', function(e) {
        if (e.target === serviceDetailsElement) {
            serviceDetailsElement.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Resource tabs functionality
    const resourceTabs = document.querySelectorAll('.resource-tab');
    resourceTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const resourceType = this.dataset.resource;
            displayResources(resourceType);
        });
        
        // Add keyboard support
        tab.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Announcement banner close button
    const closeBanner = document.querySelector('.close-banner');
    if (closeBanner) {
        closeBanner.addEventListener('click', function() {
            document.querySelector('.announcement-banner').style.display = 'none';
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            const subject = `MindEase Contact from ${name}`;
            const mailtoBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage: ${message}`;
            
            window.location.href = `mailto:rohitkrrajak8051@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;
            
            contactForm.reset();
            alert('Thank you for your message! We will get back to you soon.');
        });
    }

    // Scroll animation for elements
    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('appear');
            }
        });
    }

    // Run once on page load for elements that are already visible
    handleScrollAnimation();
    
    // Run on scroll
    window.addEventListener('scroll', handleScrollAnimation);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Testimonials slider functionality
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialIndicators = document.querySelectorAll('.testimonial-indicators .indicator');
    const prevTestimonial = document.querySelector('.prev-testimonial');
    const nextTestimonial = document.querySelector('.next-testimonial');
    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(index) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialIndicators.forEach(indicator => indicator.classList.remove('active'));
        
        testimonialSlides[index].classList.add('active');
        testimonialIndicators[index].classList.add('active');
        currentTestimonial = index;
    }

    function startTestimonialRotation() {
        testimonialInterval = setInterval(() => {
            let nextIndex = currentTestimonial + 1;
            if (nextIndex >= testimonialSlides.length) nextIndex = 0;
            showTestimonial(nextIndex);
        }, 8000);
    }

    if (nextTestimonial) {
        nextTestimonial.addEventListener('click', function() {
            clearInterval(testimonialInterval);
            let nextIndex = currentTestimonial + 1;
            if (nextIndex >= testimonialSlides.length) nextIndex = 0;
            showTestimonial(nextIndex);
            startTestimonialRotation();
        });
    }

    if (prevTestimonial) {
        prevTestimonial.addEventListener('click', function() {
            clearInterval(testimonialInterval);
            let prevIndex = currentTestimonial - 1;
            if (prevIndex < 0) prevIndex = testimonialSlides.length - 1;
            showTestimonial(prevIndex);
            startTestimonialRotation();
        });
    }

    if (testimonialIndicators.length > 0) {
        testimonialIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                clearInterval(testimonialInterval);
                showTestimonial(index);
                startTestimonialRotation();
            });
        });
    
        startTestimonialRotation();
    }

    // Mental Health Assessment functionality
    const startAssessmentBtn = document.querySelector('.start-assessment');
    const assessmentIntro = document.querySelector('.assessment-intro');
    const assessmentQuestionsContainer = document.querySelector('.assessment-questions');
    const assessmentResults = document.querySelector('.assessment-results');
    
    let currentQuestion = 0;
    let userAnswers = [];

    // Start the assessment
    if (startAssessmentBtn) {
        startAssessmentBtn.addEventListener('click', function() {
            currentQuestion = 0;
            userAnswers = [];
            
            assessmentIntro.style.display = 'none';
            assessmentQuestionsContainer.style.display = 'block';
            
            loadQuestion(currentQuestion);
        });
    }

    // Load a question
    function loadQuestion(questionIndex) {
        if (questionIndex >= assessmentQuestions.length) {
            showResults();
            return;
        }
        
        const question = assessmentQuestions[questionIndex];
        let optionsHTML = question.options.map((option, index) => `
            <div class="option" data-value="${index}" tabindex="0">
                ${option}
            </div>
        `).join('');
        
        const navigationHTML = `
            <div class="assessment-navigation">
                ${questionIndex > 0 ? '<button class="prev-question">Previous</button>' : ''}
                <button class="next-question" disabled>Next</button>
            </div>
        `;
        
        assessmentQuestionsContainer.innerHTML = `
            <div class="question">
                <h3>Question ${questionIndex + 1} of ${assessmentQuestions.length}</h3>
                <p>${question.question}</p>
                <div class="options">
                    ${optionsHTML}
                </div>
                ${navigationHTML}
            </div>
        `;
        
        // Add event listeners for options
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', function() {
                selectOption(this);
            });
            
            // Add keyboard support
            option.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectOption(this);
                }
            });
        });
        
        // Next button handler
        const nextBtn = document.querySelector('.next-question');
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                loadQuestion(questionIndex + 1);
            });
        }
        
        // Previous button handler
        const prevBtn = document.querySelector('.prev-question');
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                loadQuestion(questionIndex - 1);
            });
        }
    }

    function selectOption(optionElement) {
        const options = document.querySelectorAll('.option');
        
        // Remove selected class from all options
        options.forEach(opt => opt.classList.remove('selected'));
        
        // Add selected class to clicked option
        optionElement.classList.add('selected');
        
        // Enable next button
        document.querySelector('.next-question').disabled = false;
        
        // Store answer
        userAnswers[currentQuestion] = parseInt(optionElement.dataset.value);
    }

    // Show assessment results
    function showResults() {
        const score = userAnswers.reduce((total, answer) => total + answer, 0);
        
        let resultMessage, resultClass;
        
        if (score <= 3) {
            resultMessage = "Your responses suggest minimal symptoms. Continue practicing self-care and healthy habits.";
            resultClass = "result-minimal";
        } else if (score <= 7) {
            resultMessage = "Your responses suggest mild symptoms. Consider incorporating more self-care strategies into your routine.";
            resultClass = "result-mild";
        } else if (score <= 12) {
            resultMessage = "Your responses suggest moderate symptoms. Consider reaching out to a mental health professional for guidance.";
            resultClass = "result-moderate";
        } else {
            resultMessage = "Your responses suggest significant symptoms. We recommend consulting with a mental health professional soon.";
            resultClass = "result-significant";
        }
        
        assessmentQuestionsContainer.style.display = 'none';
        assessmentResults.style.display = 'block';
        
        assessmentResults.innerHTML = `
            <h3>Your Assessment Results</h3>
            <div class="result-message ${resultClass}">
                ${resultMessage}
            </div>
            <p>This assessment is for informational purposes only and does not constitute a diagnosis or treatment recommendation. Please consult with a qualified mental health professional for proper evaluation.</p>
            <div class="assessment-actions">
                <button class="cta-button restart-assessment">Retake Assessment</button>
                <button class="cta-button find-resources">Explore Resources</button>
            </div>
        `;
        
        // Restart assessment button
        const restartBtn = document.querySelector('.restart-assessment');
        if (restartBtn) {
            restartBtn.addEventListener('click', function() {
                assessmentResults.style.display = 'none';
                assessmentIntro.style.display = 'block';
            });
        }
        
        // Find resources button
        const findResourcesBtn = document.querySelector('.find-resources');
        if (findResourcesBtn) {
            findResourcesBtn.addEventListener('click', function() {
                document.querySelector('#resources').scrollIntoView({behavior: 'smooth'});
                document.querySelector('#resources').style.display = 'block';
                document.querySelector('#resources').classList.add('active');
            });
        }
    }

    // Display resources based on service type
    function displayResources(serviceType) {
        const resourcesSection = document.querySelector('#resources .resources-content');
        resourcesSection.innerHTML = resourcesData[serviceType] || resourcesData['default'];
        
        // Update active resource tab
        const resourceTabs = document.querySelectorAll('.resource-tab');
        resourceTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.resource === serviceType) {
                tab.classList.add('active');
            }
        });
    }
});

// Initialize service details modal when clicking outside
document.addEventListener('click', function(e) {
    const serviceDetailsElement = document.getElementById('serviceDetails');
    if (serviceDetailsElement.classList.contains('active') && e.target === serviceDetailsElement) {
        serviceDetailsElement.classList.remove('active');
        document.body.style.overflow = '';
    }
});

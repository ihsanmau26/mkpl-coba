// Member data with photo support
const members = [
    {
        name: "Fachruddin Ghalibi",
        role: "Fullstack Developer",
        description: "",
        avatar: "F",
        photo: "assets", 
        gradient: "linear-gradient(135deg, #00f5ff, #ff00f5)"
    },
    {
        name: "Muhammad Fadlan",
        role: "Fullstack Developer",
        description: "",
        avatar: "M",
        photo: null, 
        gradient: "linear-gradient(135deg, #ff6b6b, #feca57)"
    },
    {
        name: "Ihsan Maulana",
        role: "Fullstack Developer",
        description: "",
        avatar: "I",
        photo: null, 
        gradient: "linear-gradient(135deg, #48dbfb, #0abde3)"
    },
    {
        name: "Naufal Ajhar El Hafizh",
        role: "Fullstack Developer",
        description: "",
        avatar: "N",
        photo: null, 
        gradient: "linear-gradient(135deg, #ff9ff3, #f368e0)"
    }
];

let currentMember = 0;
let introStarted = false;

// Create background particles
function createParticles() {
    const bgAnimation = document.getElementById('bgAnimation');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        bgAnimation.appendChild(particle);
    }
}

// Start introduction
function startIntroduction() {
    introStarted = true;
    const introScreen = document.getElementById('introScreen');
    const memberScreen = document.getElementById('memberScreen');
    
    // Add glitch effect
    introScreen.classList.add('glitch');
    
    setTimeout(() => {
        introScreen.classList.add('hidden');
        memberScreen.classList.remove('hidden');
        memberScreen.classList.add('fade-in');
        updateMemberDisplay();
        updateProgress();
    }, 300);
}

// Update member display
function updateMemberDisplay() {
    const member = members[currentMember];
    const avatar = document.getElementById('memberAvatar');
    const name = document.getElementById('memberName');
    const role = document.getElementById('memberRole');
    const description = document.getElementById('memberDescription');
    const counter = document.getElementById('memberCounter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Update avatar (photo or text)
    avatar.style.background = member.gradient;
    if (member.photo) {
        avatar.innerHTML = `<img src="${member.photo}" alt="${member.name}" onerror="this.style.display='none'; this.parentNode.innerHTML='${member.avatar}';">`;
    } else {
        avatar.innerHTML = member.avatar;
    }

    // Update content
    name.textContent = member.name;
    role.textContent = member.role;
    description.textContent = member.description;
    counter.textContent = `Member ${currentMember + 1}/4`;

    // Update button visibility
    prevBtn.style.display = currentMember === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = currentMember === members.length - 1 ? 'Selesai' : 'Lanjutkan';

    // Add entrance animation
    const memberScreen = document.getElementById('memberScreen');
    memberScreen.classList.remove('fade-in');
    setTimeout(() => {
        memberScreen.classList.add('fade-in');
    }, 10);
}

// Next member
function nextMember() {
    if (currentMember < members.length - 1) {
        currentMember++;
        updateMemberDisplay();
        updateProgress();
    } else {
        // Show landing page
        showLandingPage();
    }
}

// Previous member
function prevMember() {
    if (currentMember > 0) {
        currentMember--;
        updateMemberDisplay();
        updateProgress();
    }
}

// Update progress bar
function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progress = ((currentMember + 1) / members.length) * 100;
    progressFill.style.width = progress + '%';
}

// Show landing page
function showLandingPage() {
    const memberScreen = document.getElementById('memberScreen');
    const landingPage = document.getElementById('landingPage');
    
    // Hide member screen
    memberScreen.classList.add('hidden');
    
    // Show landing page
    landingPage.classList.remove('hidden');
    landingPage.classList.add('fade-in');
    
    // Generate team grid
    generateTeamGrid();
    
    // Create celebration particles
    createCelebrationEffect();
}

// Generate team grid
function generateTeamGrid() {
    const teamGrid = document.getElementById('teamGrid');
    teamGrid.innerHTML = '';
    
    members.forEach((member, index) => {
        const card = document.createElement('div');
        card.className = 'team-member-card';
        card.style.animationDelay = `${index * 0.2}s`;
        
        const avatarContent = member.photo ? 
            `<img src="${member.photo}" alt="${member.name}" onerror="this.style.display='none'; this.parentNode.innerHTML='${member.avatar}';">` : 
            member.avatar;
        
        card.innerHTML = `
            <div class="card-avatar" style="background: ${member.gradient};">
                ${avatarContent}
            </div>
            <div class="card-name">${member.name}</div>
            <div class="card-role">${member.role}</div>
            <div class="card-description">${member.description}</div>
        `;
        
        teamGrid.appendChild(card);
    });
}

// Reset introduction
function resetIntroduction() {
    currentMember = 0;
    introStarted = false;
    const introScreen = document.getElementById('introScreen');
    const memberScreen = document.getElementById('memberScreen');
    const landingPage = document.getElementById('landingPage');
    
    // Hide current screens
    memberScreen.classList.add('hidden');
    landingPage.classList.add('hidden');
    
    // Show intro screen
    introScreen.classList.remove('hidden');
    introScreen.classList.add('fade-in');
    
    // Reset progress
    document.getElementById('progressFill').style.width = '0%';
}

// Explore more function
function exploreMore() {
    alert('🚀 Terima kasih telah mengenal Tim Default!\n\nKami siap menghadapi tantangan teknologi masa depan dengan inovasi dan kreativitas. Hubungi kami untuk kolaborasi yang menakjubkan!');
}

// Create celebration effect
function createCelebrationEffect() {
    const colors = ['#00f5ff', '#ff00f5', '#f5ff00', '#ff6b6b'];
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = 100 + Math.random() * 100;
        
        particle.animate([
            { 
                transform: 'translate(-50%, -50%) translate(0px, 0px) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(-50%, -50%) translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => particle.remove();
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!introStarted) {
        if (e.key === 'Enter' || e.key === ' ') {
            startIntroduction();
        }
    } else {
        if (e.key === 'ArrowRight' || e.key === 'Enter') {
            nextMember();
        } else if (e.key === 'ArrowLeft') {
            prevMember();
        }
    }
});

// Initialize
createParticles();
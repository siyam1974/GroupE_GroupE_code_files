// Trainers Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Trainer Data
    const trainers = [
      {
        id: 1,
        name: "Alex Johnson",
        specialty: "Strength Training",
        bio: "With over 10 years of experience, Alex specializes in powerlifting and functional strength training.",
        image: "dollar-gill-f9W9svqHpSU-unsplash.jpg",
        badges: ["NASM Certified"],
        social: {
          instagram: "#",
          facebook: "#",
          twitter: "#"
        }
      },
      {
        id: 2,
        name: "Sarah Williams",
        specialty: "Yoga & Flexibility",
        bio: "Sarah brings mindfulness and movement together with her unique approach to yoga and mobility training.",
        image: "hayley-kim-studios-eot-ka5dM7Q-unsplash.jpg",
        badges: ["RYT 500 Certified"],
        social: {
          instagram: "#",
          facebook: "#"
        }
      },
      {
        id: 3,
        name: "Mike Chen",
        specialty: "HIIT & Cardio",
        bio: "Mike's high-energy workouts will push your limits and help you burn maximum calories.",
        image: "total-shape-TY_Ce5d2G-k-unsplash.jpg",
        badges: ["ACE Certified"],
        social: {
          instagram: "#",
          twitter: "#"
        }
      },
      {
        id: 4,
        name: "Emma Rodriguez",
        specialty: "CrossFit",
        bio: "Competitive CrossFit athlete with 5 years of coaching experience.",
        image: "anastase-maragos-HyvE5SiKMUs-unsplash.jpg",
        badges: ["CrossFit L2"],
        social: {
          instagram: "#",
          facebook: "#"
        }
      }
    ];
  
    // DOM Elements
    const trainersGrid = document.querySelector('.trainers-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
  
    // Render Trainers
    function renderTrainers(filter = 'all') {
      trainersGrid.innerHTML = '';
      
      const filteredTrainers = filter === 'all' 
        ? trainers 
        : trainers.filter(trainer => 
            trainer.specialty.toLowerCase().includes(filter.toLowerCase())
          );
      
      filteredTrainers.forEach(trainer => {
        const trainerCard = document.createElement('div');
        trainerCard.className = 'trainer-card';
        trainerCard.innerHTML = `
          <div class="trainer-image">
            <img src="${trainer.image}" alt="${trainer.name}" />
            <span class="trainer-badge">${trainer.badges[0]}</span>
          </div>
          <div class="trainer-info">
            <h3>${trainer.name}</h3>
            <span class="trainer-specialty">${trainer.specialty}</span>
            <p class="trainer-bio">${trainer.bio}</p>
            <div class="trainer-social">
              ${trainer.social.instagram ? `<a href="${trainer.social.instagram}"><i class="fab fa-instagram"></i></a>` : ''}
              ${trainer.social.facebook ? `<a href="${trainer.social.facebook}"><i class="fab fa-facebook"></i></a>` : ''}
              ${trainer.social.twitter ? `<a href="${trainer.social.twitter}"><i class="fab fa-twitter"></i></a>` : ''}
            </div>
          </div>
        `;
        trainersGrid.appendChild(trainerCard);
      });
    }
  
    // Filter Trainers
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderTrainers(button.dataset.filter);
      });
    });
  
    // Initialize
    renderTrainers();
  
    // Trainer Card Click Event
    document.addEventListener('click', function(e) {
      if (e.target.closest('.trainer-card')) {
        const trainerCard = e.target.closest('.trainer-card');
        const trainerName = trainerCard.querySelector('h3').textContent;
        console.log(`Selected trainer: ${trainerName}`);
        // In a complete implementation, this would open a modal or navigate to a detail page
      }
    });
  });
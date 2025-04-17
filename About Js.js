// About Page Specific JavaScript

// Team Member Hover Effect
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
  member.addEventListener('mouseenter', () => {
    member.style.transform = 'scale(1.03)';
    member.style.transition = 'transform 0.3s ease';
  });
  
  member.addEventListener('mouseleave', () => {
    member.style.transform = 'scale(1)';
  });
});

// Animate Values Cards on Scroll
const valuesCards = document.querySelectorAll('.values .card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

valuesCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.5s ease';
  observer.observe(card);
});

// Image Modal for Team Members
teamMembers.forEach(member => {
  const img = member.querySelector('img');
  
  img.addEventListener('click', () => {
    // In a complete implementation, this would open a modal with larger image
    console.log(`Viewing profile of ${member.querySelector('h3').textContent}`);
  });
});
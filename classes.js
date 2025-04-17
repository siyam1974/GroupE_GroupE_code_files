// Classes Page Specific JavaScript

// Class Category Filtering
const categoryTabs = document.querySelectorAll('.category-tab');
const classCards = document.querySelectorAll('.class-card');

categoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Update active tab
    categoryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    const category = tab.dataset.category;
    
    // Filter classes
    classCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Class Schedule Navigation
const prevWeekBtn = document.getElementById('prev-week');
const nextWeekBtn = document.getElementById('next-week');
const weekDisplay = document.getElementById('week-display');
const scheduleTable = document.querySelector('.schedule-table');

let currentWeek = 0;

// Sample schedule data (in a real app, this would come from an API)
const scheduleData = {
  '-1': {
    name: 'Last Week',
    schedule: {
      Monday: {
        '6:00 AM': { name: 'Morning Yoga', trainer: 'Sarah', level: 'All' },
        '7:30 AM': { name: 'HIIT', trainer: 'Mike', level: 'Intermediate' },
        // More classes...
      },
      // More days...
    }
  },
  '0': {
    name: 'Current Week',
    schedule: {
      Monday: {
        '6:00 AM': { name: 'Power Yoga', trainer: 'Emma', level: 'All' },
        '7:30 AM': { name: 'Bootcamp', trainer: 'Alex', level: 'Advanced' },
        // More classes...
      },
      // More days...
    }
  },
  '1': {
    name: 'Next Week',
    schedule: {
      Monday: {
        '6:00 AM': { name: 'Pilates', trainer: 'Lisa', level: 'All' },
        '7:30 AM': { name: 'Cycling', trainer: 'John', level: 'Intermediate' },
        // More classes...
      },
      // More days...
    }
  }
};

function renderSchedule() {
  const weekData = scheduleData[currentWeek];
  weekDisplay.textContent = weekData.name;
  
  // In a real implementation, you would generate the table from the schedule data
  // For this example, we'll just show a placeholder
  scheduleTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="time-slot">6:00 AM</td>
          <td class="class-slot">Power Yoga</td>
          <td class="class-slot">Spin Class</td>
          <td class="class-slot">HIIT</td>
          <td class="class-slot booked">Full (Pilates)</td>
          <td class="class-slot">Bootcamp</td>
          <td class="class-slot">Yoga Flow</td>
          <td></td>
        </tr>
        <!-- More time slots would be here -->
      </tbody>
    </table>
  `;
  
  // Add click handlers to class slots
  document.querySelectorAll('.class-slot:not(.booked)').forEach(slot => {
    slot.addEventListener('click', () => {
      const classTime = slot.parentElement.querySelector('.time-slot').textContent;
      const classDay = slot.cellIndex === 0 ? '' : 
        slot.closest('table').querySelector('th:nth-child(' + (slot.cellIndex + 1) + ')').textContent;
      
      if (classDay && slot.textContent) {
        alert(`You're booking ${slot.textContent} on ${classDay} at ${classTime}`);
      }
    });
  });
}

prevWeekBtn.addEventListener('click', () => {
  currentWeek = Math.max(currentWeek - 1, -1);
  renderSchedule();
});

nextWeekBtn.addEventListener('click', () => {
  currentWeek = Math.min(currentWeek + 1, 1);
  renderSchedule();
});

// Initialize
renderSchedule();

// Class Card Interaction
classCards.forEach(card => {
  card.addEventListener('click', (e) => {
    // Don't trigger if clicking on the Book Now button
    if (!e.target.classList.contains('btn')) {
      const className = card.querySelector('h3').textContent;
      console.log(`Viewing details for ${className}`);
      // In a complete implementation, this would open a modal or navigate to a detail page
    }
  });
});
// Init Github
const github = new Github;
// Initi UI
const ui = new UI;

const searchInput = document.getElementById('search-user');

// Search user
const searchUser = () => {
  const searchValue = searchInput.value;

  if (searchValue !== '') {
    github.getUser(searchValue)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show allert

        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      })
  } else {
    // Clear profile
  }
};

// Event listeners
searchInput.addEventListener('input', searchUser);
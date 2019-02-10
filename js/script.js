function toggleNotificationR(visible) {
  document.querySelector('.notification').classList.toggle('show-on', visible)
};

document.querySelector('.notification-trigger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleNotificationR()
});

document.querySelector('.notification-cross').addEventListener('click', function(e) {
  e.preventDefault();
  toggleNotificationR()
});


function toggleNotificationM(visible) {
  document.querySelector('.notification-dropdown-m').classList.toggle('height-notification', visible)
};

function toggleNotificationRotate(visible) {
  document.querySelector('.notification-arrow-m').classList.toggle('rotate', visible)
};

document.querySelector('.notification-arrow-m').addEventListener('click', function(e) {
  e.preventDefault();
  toggleNotificationM()
  toggleNotificationRotate()
});


function toggleWalletM(visible) {
  document.querySelector('.wallet-dropdown-m').classList.toggle('height', visible)
};

function toggleWalletRotate(visible) {
  document.querySelector('.wallet-mobile-arrow').classList.toggle('rotate', visible)
};

document.querySelector('.wallet-mobile-arrow').addEventListener('click', function(e) {
  e.preventDefault();
  toggleWalletM()
  toggleWalletRotate()
});

function toggleNotification(visible) {
  document.querySelector('.wallet-dropdown').classList.toggle('show-on', visible)
};

document.querySelector('.wallet-dropdown-trigger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleNotification()
});

function toggleNotificationN(visible) {
  document.querySelector('.wallet-dropdown').classList.toggle('show-on', visible)
};

document.querySelector('.wallet-arrow').addEventListener('click', function(e) {
  e.preventDefault();
  toggleNotificationN()
});


function toggleMenuMobile(visible) {
  document.querySelector('.sidebar').classList.toggle('menu-m-active', visible)
}

document.querySelector('#hamburger-mobile').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenuMobile()
});

function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('sidebar-short', visible);
  document.querySelector('.message').classList.toggle('show-off', visible);
  document.querySelector('.message-short').classList.toggle('show-on', visible);
  document.querySelector('.main-content').classList.toggle('main-content-short', visible);
}

document.querySelector('#hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});


if (screen.width < 980 && screen.width > 767) {
    toggleMenu();
}


function closeModal() {
  document.getElementById('overlay').classList.remove('show')
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector(modal).classList.add('show')
}


document.querySelector('.user').addEventListener('click', function(e) {
  openModal('#modalLogin')
});

function toggleNotification() {
  document.querySelector('.notification').classList.toggle('show-on')
};

document.querySelector('.notification-trigger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleNotification()
});

document.querySelector('.notification-cross').addEventListener('click', function(e) {
  e.preventDefault();
  toggleNotification()
});


function toggleNotificationMobile() {
  document.querySelector('.notification-dropdown-m').classList.toggle('height-notification')
};

function toggleNotificationRotate() {
  document.querySelector('.notification-arrow-m').classList.toggle('rotate')
};

document.querySelector('.notification-arrow-m').addEventListener('click', function(e) {
  e.preventDefault();
  toggleNotificationMobile()
  toggleNotificationRotate()
});


function toggleWalletMobile() {
  document.querySelector('.wallet-dropdown-m').classList.toggle('height')
};

function toggleWalletRotate() {
  document.querySelector('.wallet-mobile-arrow').classList.toggle('rotate')
};

document.querySelector('.wallet-mobile-arrow').addEventListener('click', function(e) {
  e.preventDefault();
  toggleWalletMobile()
  toggleWalletRotate()
});

function toggleWallet() {
  document.querySelector('.wallet-dropdown').classList.toggle('show-on')
};

document.querySelector('.wallet-dropdown-trigger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleWallet()
});

document.querySelector('.wallet-arrow').addEventListener('click', function(e) {
  e.preventDefault();
  toggleWallet()
});


function toggleMenuMobile() {
  document.querySelector('.sidebar').classList.toggle('menu-m-active')
}

document.querySelector('#hamburger-mobile').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenuMobile()
});

function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('sidebar-short');
  document.querySelector('.message').classList.toggle('show-off');
  document.querySelector('.message-short').classList.toggle('show-on');
  document.querySelector('.main-content').classList.toggle('main-content-short');
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

document.querySelector('.user-mobile-container').addEventListener('click', function(e) {
  openModal('#modalLogin')
});

document.querySelector('.message').addEventListener('click', function(e) {
  openModal('#modalChat')
});

document.querySelector('.quit').addEventListener('click', function(e) {
  openModal('#modalQuit')
});

document.querySelector('.quit-mobile').addEventListener('click', function(e) {
  openModal('#modalQuit')
});


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
});

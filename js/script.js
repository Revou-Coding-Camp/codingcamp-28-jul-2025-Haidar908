// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navbarMenu = document.getElementById('navbar-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// Smooth scrolling untuk navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Adjust for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

        // Close mobile menu if open
        mobileMenuBtn.classList.remove('active');
        navbarMenu.classList.remove('active');

        // Update active state
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Update active navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Function to get user name and update the greeting
function getUserName() {
    let userName = prompt("Halo! Siapa nama Anda?"); // Meminta nama pengguna
    
    // Memastikan pengguna tidak meninggalkan input kosong
    if (userName === null || userName.trim() === '') {
        userName = "Tamu"; // Nama default jika input kosong
    }
    
    // Mengambil elemen span dengan id 'userName'
    const userNameSpan = document.getElementById('userName');
    
    // Jika elemen ditemukan, update teksnya
    if (userNameSpan) {
        userNameSpan.textContent = userName;
    }
}

// Panggil fungsi saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', getUserName);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            // Mencegah form untuk refresh halaman
            event.preventDefault();

            // Mendapatkan nilai dari input
            const name = document.getElementById('inputName').value;
            const message = document.getElementById('inputMessage').value;

            // Menampilkan hasil input
            document.getElementById('output-name').textContent = 'Nama: ' + name;
            document.getElementById('output-message').textContent = 'Pesan: ' + message;
            
            // Opsional: Mereset form setelah submit
            form.reset();
        });
    }
});
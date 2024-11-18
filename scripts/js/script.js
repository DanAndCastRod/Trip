document.addEventListener('DOMContentLoaded', () => {
    // Piano Generation
    const piano = document.getElementById('piano');
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    
    // Create piano keys
    // for (let i = 0; i < 24; i++) {
    //     const key = document.createElement('div');
    //     const note = notes[i % 12];
    //     key.className = `piano-key ${note.includes('#') ? 'black' : 'white'}`;
    //     key.dataset.note = note;
    //     piano.appendChild(key);
    // }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Play button functionality
    // const playButton = document.getElementById('playButton');
    // let isPlaying = false;

    // playButton.addEventListener('click', () => {
    //     isPlaying = !isPlaying;
    //     playButton.textContent = isPlaying ? '⏸' : '▶';
        
    //     if (isPlaying) {
    //         // Add your music playing logic here
    //         console.log('Music started playing');
    //     } else {
    //         // Add your music pause logic here
    //         console.log('Music paused');
    //     }
    // });

    // Piano key interaction
    // piano.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('piano-key')) {
    //         const note = e.target.dataset.note;
    //         playNote(note);
    //         e.target.style.backgroundColor = '#04D99D';
    //         setTimeout(() => {
    //             e.target.style.backgroundColor = e.target.classList.contains('black') ? 'black' : 'white';
    //         }, 200);
    //     }
    // });

    // function playNote(note) {
    //     // Add your note playing logic here
    //     console.log(`Playing note: ${note}`);
    // }

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
});
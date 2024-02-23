//Intersection Observer für Animationen

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        //sobald Item im Sichtfeld ist
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        //damit Items erneut animiert werden
        } else {
            entry.target.classList.remove('show');
        }
    });
});

//Alle Items mit .animation werden überprüft
const hiddenElements = document.querySelectorAll('.animation');
hiddenElements.forEach((el) => observer.observe(el));


    

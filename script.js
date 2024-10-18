// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth scrolling for contact button
function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
}

window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopBtn.classList.add("visible"); // Dodaj klasę visible
    } else {
      scrollToTopBtn.classList.remove("visible"); // Usuń klasę visible
    }
  }
  
  // Przewiń na górę po kliknięciu
  document.getElementById("scrollToTopBtn").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Płynne przewijanie
    });
  });





// Inicjalizacja EmailJS
emailjs.init('IkNqsu-gXb-TtBMIy');
const serviceID = 'default_service';
const templateID = 'template_2169avn';

// Dodanie event listenera do formularza kontaktowego
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Zapobiega przeładowaniu strony po kliknięciu "Wyślij"

    // Pobieranie elementu formularza
    const form = document.getElementById('contact-form');

    // Użycie funkcji emailjs.sendForm
    emailjs.sendForm(serviceID, templateID, form)
        .then(function() {
            alert('Wiadomość została wysłana pomyślnie!');
        }, function(error) {
            console.error('Błąd:', error);
            alert('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.');
        });
});


// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

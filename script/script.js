function highlightEduc() {
    const header3 = document.getElementById('secEduc')
    header3.classList.toggle('title-sections-highlight')

    setTimeout(() => {
    header3.classList.remove('title-sections-highlight');
  }, 1500);
}

function highlightProj() {
    const header3 = document.getElementById('secProj')
    header3.classList.toggle('title-sections-highlight')

    setTimeout(() => {
    header3.classList.remove('title-sections-highlight');
  }, 1500);
}

function highlightContact() {
    const contact = document.getElementById('contact')
    contact.classList.toggle('contact-glow')

    setTimeout(() => {
    contact.classList.remove('contact-glow');
  }, 800);
}
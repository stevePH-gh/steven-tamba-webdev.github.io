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

function toggleDarkMode() {
  var body = document.body
  var intPanel = document.getElementById("introduction-panel")
  var sections = document.getElementsByClassName("title-sections")
  var header = document.getElementById("home")

  var btn = document.getElementById("toggleButton")

  body.classList.toggle("body-light-mode");
  intPanel.classList.toggle("introduction-panel-light");
  header.classList.toggle("navHdr-light")
  btn.classList.toggle("btnToggle-light")

  for (i = 0; i < sections.length; i++) {
    sections[i].classList.toggle("title-sections-light");
  }

  if (btn.innerHTML === "Light") {
    btn.innerHTML = "Dark"
  } else {
    btn.innerHTML = "Light"
  }
}
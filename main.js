function toggleResumeButton () {
  const resumeBtn = document.getElementById('resume-btn')
  resumeBtn.classList.toggle('d-none')
}

document.getElementById("monBouton").addEventListener("click", function() {
    document.getElementById("message").textContent = "Message affiché !";
});

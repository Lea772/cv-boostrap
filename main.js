function toggleResumeButton () {
  const resumeBtn = document.getElementById('resume-btn')
  resumeBtn.classList.toggle('d-none')
}

const btn = document.getElementById('liveToastBtn');
const toastEl = document.getElementById('liveToast');

btn.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
});

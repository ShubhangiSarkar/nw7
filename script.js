const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

let clickCount = 0;
const maxClicks = 9;

noBtn.addEventListener('click', () => {
  clickCount++;

  if (clickCount >= maxClicks) {
    // Hide the original yes button
    yesBtn.style.display = "none";

    // Turn No into Yes
    noBtn.textContent = "Yes 💖";
    noBtn.style.background = "#23da7f";

    // Move No button into Yes button's position
    const yesRect = yesBtn.getBoundingClientRect();
    noBtn.style.left = yesRect.left + "px";
    noBtn.style.top = yesRect.top + "px";

    // Make No button behave like Yes button (redirect)
    noBtn.onclick = () => {
      window.location.href = "https://shubhangisarkar.github.io/nw2/";
    };

    noBtn.disabled = false; // keep it clickable
  } else {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Keep inside screen
    const maxLeft = window.innerWidth - btnWidth - 20;
    const maxTop = window.innerHeight - btnHeight - 20;

    const newLeft = Math.random() * maxLeft;
    const newTop = Math.random() * maxTop;

    noBtn.style.left = newLeft + "px";
    noBtn.style.top = newTop + "px";
  }
});

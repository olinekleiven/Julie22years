const envelope = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');
const letter = document.querySelector('.letter');
let isHeartClicked = false;

heart.addEventListener('click', () => {
  if (!isHeartClicked) {
    isHeartClicked = true;
    envelope.classList.add('flap');
    setTimeout(() => {
      letter.classList.add('show'); // Add a class to show the letter after a delay
      setTimeout(() => {
        letter.classList.add('zoomed-in'); // Automatically zoom in after showing the letter
      }, 2000); // 2 seconds delay after showing the letter
    }, 1500); // 1.5 seconds delay
  }
});

function handleKeyDown(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    letter.classList.toggle('zoomed-in');
  }
}

document.addEventListener('keydown', handleKeyDown);
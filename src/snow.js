function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.textContent = '❄';

  const size = Math.random() * 20 + 10;
  snowflake.style.fontSize = `${size}px`;
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 5 + 2}s`; // 2s to 7s
  snowflake.style.opacity = Math.random() * 0.5 + 0.5;

  document.getElementById('snow-container').appendChild(snowflake);

  // Remove snowflake after animation ends
  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

// Generate snowflakes continuously
setInterval(createSnowflake, 200);

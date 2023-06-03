const button = document.getElementById("button");

button.addEventListener("click", () => {


  button.animate(
    [
      { opacity: 0, transform: 'scale(0.5)' },
      { opacity: 1, transform: 'scale(1)' }
    ],
    {
      duration: 1000,
      easing: 'ease-in-out',
      fill: 'both'
    }
  );

})
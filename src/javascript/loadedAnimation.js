const applyLoadedAnimation = () => {
    const cards = document.querySelectorAll('.loaded-animation-hidden');
  
    cards.forEach((card) => {
      card.classList.add('loaded-animation-show');
    });
  };
  
  export default applyLoadedAnimation;
  
  // Run the animation immediately when the page loads
  window.addEventListener('DOMContentLoaded', applyLoadedAnimation);
  

const applyScrollAnimation = () => {
  const cards = document.querySelectorAll('.scroll-animation-hidden');

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      card.classList.add('scroll-animation-show');
    } else {
      card.classList.remove('scroll-animation-show');
    }
  });
};

export default applyScrollAnimation;

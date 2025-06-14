const scrollState = {}; // حفظ الحالة حسب كل سكشن

function scrollCards(className, direction) {
  const container = document.querySelector(`.${className}`);
  if (!scrollState[className]) scrollState[className] = 0;

  const pageWidth = container.clientWidth;
  const maxScroll = container.scrollWidth - pageWidth;

  scrollState[className] += direction;
  scrollState[className] = Math.max(0, Math.min(scrollState[className], Math.ceil(maxScroll / pageWidth)));

  const newScrollLeft = scrollState[className] * pageWidth;

  container.scrollTo({
    left: newScrollLeft,
    behavior: 'smooth'
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector('.cards');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  
  // تحديد عرض الكارد
  const cardWidth = cardsContainer.querySelector('.card').offsetWidth;
  
  // تحديد المسافة التي يتحرك بها السلايدر
  const scrollAmount = cardWidth * 3; // كل مرة يتحرك السلايدر لعرض 3 صور
  
  // وظيفة التحريك لليمين
  rightArrow.addEventListener('click', () => {
    // التمرير لليمين
    cardsContainer.scrollBy({
      left: scrollAmount,  // التحرك لليمين
      behavior: 'smooth'
    });
  });
  
  // وظيفة التحريك لليسار
  leftArrow.addEventListener('click', () => {
    // التمرير لليسار
    cardsContainer.scrollBy({
      left: -scrollAmount, // التحرك لليسار
      behavior: 'smooth'
    });
  });
});

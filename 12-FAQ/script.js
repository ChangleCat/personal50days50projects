const btns = document.querySelectorAll('.faq-toggle');
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const faqItem = btn.closest('.faq-item');
    faqItem.classList.toggle('active');
  });
});
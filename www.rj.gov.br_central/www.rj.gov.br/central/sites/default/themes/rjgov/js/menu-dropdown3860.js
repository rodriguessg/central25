const menuRows = document.querySelectorAll('.menu-row');

menuRows.forEach((menuRow) => {
  const h4Elements = menuRow.querySelectorAll('h4');
  const ulElements = menuRow.querySelectorAll('ul');

  h4Elements.forEach((h4) => {
    const ul = h4.nextElementSibling;

    h4.addEventListener('mouseenter', function() {
      ul.classList.add('show');
    });

    h4.addEventListener('mouseleave', function() {
      setTimeout(() => {
        if (!ul.matches(':hover')) {
          ul.classList.remove('show');
        }
      }, 200);
    });
  });

  ulElements.forEach((ul) => {
    ul.addEventListener('mouseleave', function() {
      ul.classList.remove('show');
    });
  });
});

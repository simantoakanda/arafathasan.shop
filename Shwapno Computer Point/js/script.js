document.addEventListener('DOMContentLoaded', function () {
  const filters = document.querySelectorAll('.portfolio-flters li');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filters.forEach(filter => {
    filter.addEventListener('click', function () {
      const filterValue = this.getAttribute('data-filter');
      
      // Hide all portfolio items
      portfolioItems.forEach(item => {
        item.style.display = 'none';
      });

      // Show portfolio items based on the filter
      if (filterValue === '*') {
        portfolioItems.forEach(item => {
          item.style.display = 'block';
        });
      } else {
        const selectedItems = document.querySelectorAll(filterValue);
        selectedItems.forEach(item => {
          item.style.display = 'block';
        });
      }

      // Toggle active class on filters
      filters.forEach(f => {
        f.classList.remove('filter-active');
      });
      this.classList.add('filter-active');
    });
  });
});





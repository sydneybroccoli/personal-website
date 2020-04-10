const navigationRemoveActive = (list_items) => {
  list_items.forEach(element => {
    element.classList.remove('active');
    element.setAttribute('aria-selected', false);
  });
}

const contentRemoveActive = (content_list) => {
  content_list.forEach(content => {
    content.classList.remove('active');
    content.classList.remove('show');
  });
}

const navigationSelector = () => {
  const nav_items = document.querySelectorAll('.nav-link');
  const nav_contents = document.querySelectorAll('.tab-pane');

  nav_items.forEach(element => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      let content = document.getElementById(event.target.attributes['aria-controls'].value);

      // REMOVE ACTIVE CLASSES
      navigationRemoveActive(nav_items);
      contentRemoveActive(nav_contents);

      // ASSIGN ACTIVE TO SELECTED
      event.target.classList.add('active');
      event.target.setAttribute('aria-selected', true);

      content.classList.add('active');
      content.classList.add('show');
    });
  });
}

export { navigationSelector }

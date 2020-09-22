export const headerToggle = ()=> {
  const nav_headerItems = document.querySelectorAll('.header a');
  selectPage( nav_headerItems );
}

// LOCAL FUNCTIONS

const selectPage = ( navItems ) => {
  navItems.forEach( (item) => {
    item.addEventListener('click', (e) => {
      togglePage(`${e.target.id}`);
    });
  })
}

const togglePage = ( navItem ) => {
  const pages = document.querySelectorAll('section');

  // add inactive to all pages
  pages.forEach( (page) => {
    let id = page.id;
    let cls = page.classList;

    switch( true ) {
      case id === navItem && cls.contains('inactive'):
        page.classList.remove('inactive')
        break;
      case !cls.contains('inactive') && id !== navItem:
        page.classList.add('inactive');
        break;
    }
  });
}
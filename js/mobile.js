export default class Mobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.toggle('active');
    this.menuButton.classList.toggle('active');
  }

  closeMenu() {
    this.menuList.classList.remove('active');
    this.menuButton.classList.remove('active');
  }

  addMobileEvents() {
    this.events.forEach((event) =>
      this.menuButton.addEventListener(event, this.openMenu)
    );
  }

  addCloseOnClick() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        setTimeout(() => {
          this.closeMenu();
        }, 400);
      });
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMobileEvents();
      this.addCloseOnClick();
    }
    return this;
  }
}

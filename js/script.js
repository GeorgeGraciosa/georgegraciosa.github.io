class Projetos {
  constructor(slide, description, email, alert) {
    this.slide = document.querySelector(slide);
    this.description = document.querySelector(description);
    this.email = document.querySelector(email);
    this.alert = document.querySelector(alert);
  }

  createSlideArray() {
    this.slideArray = [...this.slide.children];
    this.descriptionArray = [...this.description.children];
  }

  activeSlide(index) {
    this.slideArray.forEach((item) => item.classList.remove('active'));
    this.descriptionArray.forEach((item) => item.classList.remove('active'));

    this.slideArray[index].classList.add('active');
    this.descriptionArray[index].classList.add('active');
  }

  onClick() {
    this.slideArray.forEach((item, index) => {
      item.addEventListener('click', () => this.activeSlide(index));
    });
  }

  copyEmail() {
    this.email.addEventListener('click', () => {
      const emailCopy = 'george.graciosa@gmail.com';

      navigator.clipboard.writeText(emailCopy).then(() => {
        this.alert.classList.add('show');

        setTimeout(() => {
          this.alert.classList.remove('show');
        }, 1500);
      });
    });
  }

  init() {
    this.createSlideArray();
    this.activeSlide(1);
    this.onClick();
    this.copyEmail();
  }
}

const projetos = new Projetos(
  '#slides',
  '#slide-description',
  '#email',
  '#alert'
);
projetos.init();

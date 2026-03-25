export default class Projetos {
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
    this.slideArray.forEach((item) => item.classList.remove("active"));
    this.descriptionArray.forEach((item) => item.classList.remove("active"));

    this.slideArray[index].classList.add("active");
    this.descriptionArray[index].classList.add("active");
  }

  onClick() {
    this.slideArray.forEach((item, index) => {
      item.addEventListener("click", () => this.activeSlide(index));
    });
  }

  init() {
    this.createSlideArray();
    this.activeSlide(0);
    this.onClick();
  }
}

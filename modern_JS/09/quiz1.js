class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    alert(`${this.name} is running`);
  }
}

const pet1 = new Pet("치즈", "노랑");
pet1.run();

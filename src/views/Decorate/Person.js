class Person {

  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(this.name + ' can run');
  }

  say = () => {
    console.log('hello, my name is ' + this.name);
  }
}

export default Person
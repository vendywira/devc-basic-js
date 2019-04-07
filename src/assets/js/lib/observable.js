class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  unsubscribeAll() {
    this.observers = []
  }

  notify() {
    this.observers.forEach(render => render());
  }
}

export default Observable;
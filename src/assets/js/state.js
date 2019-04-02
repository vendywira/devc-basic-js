let State = {
  navigate: {
    data: "",
    setter: data => {
      State.navigate.data = Object.assign(State.navigate.data, data)
    },
    getter: () => {
      return State.navigate.data
    }
  },
  planet: {
    data: "",
    setter: data => {
      State.planet.data = Object.assign(State.planet.data, data)
    },
    getter: () => {
      return State.planet.data
    }
  },
  loading: {
    data: "",
    setter: data => {
      State.loading.data = Object.assign(State.loading.data, data)
    },
    getter: () => {
      return State.loading.data
    }
  }
}

export default State;
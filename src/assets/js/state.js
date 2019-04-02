let State = {
  navigate: {
    data: {
      next: "",
      prev: "",
      posibleNext: true,
      posiblePrev: false,
      filterBy: "",
      searchText: "",
    },
    setter: data => {
      State.navigate.data = Object.assign(State.navigate.data, data)
    },
    getter: () => {
      return State.navigate.data
    }
  },
  planet: {
    data: {
      url: "https://swapi.co/api/planets/?page=1",
      count: 0,
      pageIndex: 0,
      planets: [],
      pages: [],
    },
    setter: data => {
      State.planet.data = Object.assign(State.planet.data, data)
    },
    getter: () => {
      return State.planet.data
    }
  },
  loading: {
    data: {
      isShow: true,
    },
    setter: data => {
      State.loading.data = Object.assign(State.loading.data, data)
    },
    getter: () => {
      return State.loading.data
    }
  }
}

export default State;
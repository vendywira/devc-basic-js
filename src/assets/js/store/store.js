let Store = {
  state: {
    navigate: {
      data: {
        next: "",
        prev: "",
        posibleNext: true,
        posiblePrevious: false,
        pages: [],
        filterBy: "all",
        searchText: "",
      },
      setter: data => {
        $navigate = Object.assign($navigate, data)
      },
      getter: () => {
        return $navigate
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
        $planet = Object.assign($planet, data)
      },
      getter: () => {
        return $planet
      }
    },
    loading: {
      data: {
        isShow: true,
      },
      setter: data => {
        $loading = Object.assign($loading, data)
      },
      getter: () => {
        return $loading
      }
    }
  },

  action: {

  }

}

let $navigate = Store.state.navigate.data
let $planet = Store.state.planet.data
let $loading = Store.state.loading.data

export default Store;
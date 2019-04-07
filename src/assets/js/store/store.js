let Store = {
  state: {
    next: "",
    previous: "",
    enableBtnNext: true,
    enableBtnPrevious: false,
    filterBy: "all",
    searchText: "",
    url: "https://swapi.co/api/planets/?page=1",
    count: 0,
    pageIndex: 0,
    planets: [],
    pages: [],
    isShowLoading: true,
  },
  mutation: {
    change(object) {
      Object.assign(Store.state, object)
    },
    switchLoading(isShow) {
      Object.assign(Store.state, {
        isShowLoading: isShow
      })
    },
    searchText(text) {
      Object.assign(Store.state, {
        searchText: text
      })
    },
    filterBy(filter) {
      Object.assign(Store.state, {
        filterBy: filter
      })
    }
  },
  getter: function () {
    return this.state
  }
}

export default Store;
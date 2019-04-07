import Observable from "../lib/observable.js"

const loadResourceObserver = new Observable()
const loadingObserver = new Observable()
const navigateObserver = new Observable()
const planetRenderObserver = new Observable()

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
  },
  Action: {
    subscriber: {
      navigateRender(f) {
        navigateObserver.subscribe(f)
      },
      LoadResource(f) {
        loadResourceObserver.subscribe(f)
      },
      planetRender(f) {
        planetRenderObserver.subscribe(f)
      },
      loading(f) {
        loadingObserver.subscribe(f)
      }
    },
    unsubscribe: {
      navigate() {
        navigateObserver.unsubscribeAll()
      },
      loadResource() {
        loadResourceObserver.unsubscribeAll()
      },
      planetRender() {
        planetRenderObserver.unsubscribeAll()
      },
      loading() {
        loadingObserver.unsubscribeAll()
      }
    },
    notify: {
      navigate() {
        navigateObserver.notify()
      },
      loadResource() {
        loadResourceObserver.notify()
      },
      planetRender() {
        planetRenderObserver.notify()
      },
      loading() {
        loadingObserver.notify()
      }
    }
  }
}

export default Store;
export const state = () => ({
  sidebarStatus: false,
})

export const mutations = {
  sidebarToggle(state) {
    state.sidebarStatus = !state.sidebarStatus
  },
}
export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    // console.log(req)s
    // if (req.session && req.session.authUser) {
    //   commit("SET_USER", req.session.authUser)
    // }
  },
}
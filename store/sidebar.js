export const state = () => ({
  sidebarStatus: false,
})

export const mutations = {
  sidebarToggle(state) {
    state.sidebarStatus = !state.sidebarStatus
  },
  sidebarOpen(state) {
    state.sidebarStatus = true
  },
}

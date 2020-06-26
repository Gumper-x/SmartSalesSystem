const cookieparser = process.server ? require("cookieparser") : undefined
export const state = () => {
  return {
    token: null,
  }
}
export const mutations = {
  setToken(state, token) {
    state.token = token
  },
}
export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = parsed.accessToken
      } catch (err) {
        // No valid cookie found
        console.log("No valid cookie")
      }
    }
    commit("setToken", auth)
  },
}

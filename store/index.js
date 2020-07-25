const cookieparser = process.server ? require("cookieparser") : undefined
const qs = process.server ? require("qs-stringify") : undefined

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
      // const request = await this.$axios({
      //   method: "POST",
      //   url: `/token`,
      //   data: qs({ token: parsed.accessToken }),
      // })
      // const tokenValid = JSON.parse(request.data.token)
      const tokenValid = true
      try {
        if (tokenValid) {
          auth = parsed.accessToken
        } else {
          throw new Error("No valid cookie")
        }
      } catch (err) {
        // No valid cookie found
      }
    }
    commit("setToken", auth)
  },
}

export default function({ store, redirect, route }) {
  const routeArea = route.name.split("-")[0]

  if (routeArea !== "auth" && !store.state.token) {
    return redirect("/auth/login")
  } else if (store.state.token && routeArea === "auth") {
    return redirect("/")
  }
}

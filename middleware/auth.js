export default function(context) {
  context.$axios
    .$post("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    })
    .then(res => console.log(res))
}

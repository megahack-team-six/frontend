export const isAuthenticated = (to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user'))

  if (user && user.jwt) {
    next()
  } else {
    next({ name: 'Login', query: { redirect_to: to.fullPath } })
  }
}

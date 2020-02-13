const { VUE_APP_API } = process.env

export const getUserCredentials = async ({ email, password }) => {
  try {
    const res = await fetch(`${VUE_APP_API}/usuarios/login.php`, {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })

    return res.json()
  } catch (e) {
    console.log(e)
  }
}

export default {
  getUserCredentials
}

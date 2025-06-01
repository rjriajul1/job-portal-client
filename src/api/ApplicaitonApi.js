export const myApplicationPromise = (email,accessToken) => {
    return fetch(`http://localhost:5000/currentUserApplication?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}
export const myApplicationPromise = (email) => {
    return fetch(`http://localhost:5000/currentUserApplication?email=${email}`)
    .then(res => res.json())
}
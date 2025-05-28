export const myApplicationPromise = (email) => {
    return fetch(`http://localhost:5000/currentUserApplication?email=isrj173@gmail.com`)
    .then(res => res.json())
}
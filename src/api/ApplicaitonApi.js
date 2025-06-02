export const myApplicationPromise = (email,accessToken) => {
    return fetch(`https://job-portal-server-seven-iota.vercel.app/currentUserApplication?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}
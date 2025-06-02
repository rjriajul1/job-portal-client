export const jobsByEmailPromise = (email, accessToken) => {
    return fetch(`https://job-portal-server-seven-iota.vercel.app/jobs/applications?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res=>res.json())
}
export const httpRequest = (url, method, body?) => fetch(url, {
        method: method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: (body || null)
    })
    .then(response => response.json())
    .catch(error => {
        console.error(error);
    });
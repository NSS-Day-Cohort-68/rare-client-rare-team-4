export const createCategory = (category) => {
    return fetch(`http://localhost:8000/categories`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(category),
    })
}
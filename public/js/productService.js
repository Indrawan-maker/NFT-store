export async function getProducts(filters = {}) {
    const queryParams = new URLSearchParams(filters)
    const res = await fetch(`/api/products?${queryParams}`)
    return await res.json()
}

export async function populateGenreSelect() {
    const res = await fetch('/api/products/genres')
    const genres = await res.json()
    const select = document.getElementById('genre-select')

    genres.forEach(genre => {
        const option = document.createElement('option')
        option.value = genre
        option.textContent = genre
        select.appendChild(option)
    })
}
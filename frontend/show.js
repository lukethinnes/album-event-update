let baseURL = 'http://localhost:3000'
let queryParams = new URLSearchParams(window.location.search)
let id = queryParams.get('id')
let nameInput = document.querySelector('#name-input')
let imageInput = document.querySelector('#image-input')
let form = document.querySelector('#edit-form')

fetch(baseURL + `/albums/${id}`)
    .then(response => response.json())
    .then(album => {
        nameInput.value = album.name
        imageInput.value = album.image_url
    })

form.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch(baseURL + `/albums/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            album: {
                name: nameInput.value,
                image_url: imageInput.value
            }
        })
    })
        .then(() => window.location.replace('/'))
})
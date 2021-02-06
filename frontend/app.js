const baseURL = "http://localhost:3000/"
const albumList = document.querySelector('#album-list')

fetch(baseURL + 'albums')
    .then(response => response.json())
    .then(albums => albums.forEach(album => {

        const albumCard = document.createElement('li')
        const albumTitle = document.createElement('h2')
        const albumImage = document.createElement('img')
        const rating = document.createElement('p')

        albumTitle.textContent = album.name
        albumImage.src = album.image_url
        rating.textContent = album.rating

        albumCard.addEventListener('click', () => {
            window.location.href = `show.html?id=${album.id}`
        })

        albumCard.append(albumTitle, albumImage, rating)
        albumList.appendChild(albumCard)
    }

    ))
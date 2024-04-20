const breeds = []
async function getBreeds() {
    console.log('get breeds', breeds.length)
    if(breeds.length) return breeds
    try {
        console.log('get breeds', 'start fetch')
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        const {message} = await response.json()
        // oblicz breeds
        Object.keys(message).forEach(key => {
            if (message[key].length === 0) {
                breeds.push(key)
            } else {
                message[key].forEach(sub => breeds.push(`${sub} ${key}`))
            }
        })
        console.log('get breeds', 'fetch done')
    } catch {
        console.log('Błąd w czasie pobierania danych')
    }
    return breeds
}

// https://dog.ceo/api/breed/   hound/afghan    /images/random
// https://dog.ceo/api/breed/   hound           /images/random

async function getRandomImage(breed){
    try {
        breed = breed.split(' ').reverse().join('/')
        const path = `https://dog.ceo/api/breed/${breed}/images/random`;
        const response = await fetch(path)
        const { message } = await response.json()
        return message
    } catch {
        console.log('Błąd w czasie pobierania danych')
    }
    return ''
}

export {
    getBreeds, getRandomImage
}

async function getBreeds() {
    const breeds = []
    if(breeds.length) return breeds
    try {
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
        const path = breed ? `https://dog.ceo/api/breed/${breed}/images/random` : "https://dog.ceo/api/breeds/image/random"



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
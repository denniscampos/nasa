document.querySelector('button').addEventListener('click', astronomyPhotos)

// my NASA API KEY = 'v4ExVLUhQCDFGaSmP522FUNpAJhjg2Ns8fVdf2M0'


function astronomyPhotos() {

const inputVal = document.querySelector('input').value

const url = "https://api.nasa.gov/planetary/apod?api_key=v4ExVLUhQCDFGaSmP522FUNpAJhjg2Ns8fVdf2M0&date="+inputVal


fetch(url) 
    .then(res => res.json())
    .then(data => {

        document.querySelector('#printDate').innerText = data.date
        document.querySelector('#printTitle').innerText = data.title
        document.querySelector('#printPicture').src = data.hdurl
        document.querySelector('#printExplanation').innerText = data.explanation
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}


time = new Date()
hour = time.getHours()
min = time.getMinutes()
msg = document.getElementById('msg')
img = document.getElementById('img')

if (hour < 10 && min < 10) {
    msg.innerHTML = `Agora são <strong>0${hour}:0${min}</strong>`
} else if (hour < 10) {
    msg.innerHTML = `Agora são <strong>0${hour}:${min}</strong>.`
} else if (min < 10) {
    msg.innerHTML = `Agora são <strong>${hour}:0${min}</strong>.`
} else {
    msg.innerHTML = `Agora são <strong>${hour}:${min}</strong>.`
}

if (hour < 12) {
    //GOOD MORNING
    msg.innerHTML += ' Good morning!'
    img.src = './images/morning.png'
    document.body.style.background = '#e98c3f'
} else if (hour < 18) {
    //GOOD AFTERNOON
    msg.innerHTML += ' Good afternoon!'
    img.src = './images/afternoon.png'
    document.body.style.background = '#d58852'
} else {
    //GOOD NIGHT
    msg.innerHTML += ' Good night!'
    img.src = './images/night.png'
    document.body.style.background = '#0b182a'
}
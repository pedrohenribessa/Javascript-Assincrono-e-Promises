const axios =  require ('axios')

Promise.all([
    axios.get('https://api.github.com/users/pedrohenribessa'),
    axios.get('https://api.github.com/users/pedrohenribessa/repos')
])

.then(responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
})
.catch(err => console.log(err.message))
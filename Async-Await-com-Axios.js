const axios =  require ('axios')

async function fecthRepos() {
try {
        const user = await axios.get('https://api.github.com/users/pedrohenribessa')
        const repos = await axios.get(user.data.repos_url)
        console.log(repos)
    }catch(e) {
    console.log(e)
    }
}

fecthRepos()
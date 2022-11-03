async function start() {
    const response = await fetch("https://api.github.com/users/pedrohenribessa");
    const user = await response.json()
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
}

start()
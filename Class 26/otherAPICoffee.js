
    
    var headers = { mode: 'no-cors', cache: 'no-cache' }
    
    fetch(`https://coffee.alexflipnote.dev/random`, headers)
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    });


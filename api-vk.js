function getPosts (callback) {
    fetch('http://26.223.83.180/API/news')
        .then((response) => response.json())
        .then(callback);
}

getPosts((posts) => {
    console.log(posts);
});

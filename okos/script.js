document.getElementById("fetch-posts").onclick=function(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=> response.json())
    .then((data) => {
        let posts=data;
        let postListHtml=""
        for (const post of posts) {
            postListHtml +=  `<p>${post.title}</p><small>${post.body}</small>`
        }
        document.getElementById("post-list-container").innerHTML="";
    })

}
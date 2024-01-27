export default async function PostsPage () { // START of default function PostsPage // This time function is async, so that makes a component async :) .//


    // Creating below a variable which will be used to fetch data //

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();    // need to make it await response //
    console.log(posts);


return ( // START of returning //

<div>
    <h2> My cheeky posts: </h2>
    {posts.map((post) => {
        return (
        <div key = {post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
        );
    })}
</div>

) // END of returning // 

} // END of a default function PostsPage //
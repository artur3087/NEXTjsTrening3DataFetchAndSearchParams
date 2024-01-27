



export default async function SinglePostPage ( {params} ) { // START of default function //

    console.log(params);

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await response.json();

return ( // START of returning ... // 

<div>
    <h2>
        {post.title}
    </h2>
    <p>
        {post.body}
    </p>
</div>



); // END of returning ... //







} // END of a default function //

import Link from "next/link";



export default async function PostsPage () { // START of default function PostsPage // This time function is async, so that makes a component async :) .//



    // Creating below a variable which will be used to fetch data //

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();    // need to make it await response //
    console.log(posts);


return ( // START of returning //

<div>
    <h2> My cheeky posts: </h2>
    {posts.map((post) => {     // By adding to {posts.map... } "splice" we can choose a shorter number of data from API. Syntax for it below:
    // {posts.splice(0, 10).map((post) => {  // Assuming that we want only 10 objects from API, which is jsonplaceholder here //
        // return //  ...  and like below...  
    // })}
        return (
        <div key = {post.id}>
            <Link href = {`/posts/${post.id}`}>{post.title}</Link>

        </div>
        );

        })}

</div>

); // END of returning //  





    }; // END of default function PostsPage //

            //  <h3>{post.title}</h3> This is the original content I turned into comments in order to make a new functionality per LINK thing :) 
        // <p>{post.body}</p> */}
        // </div>
//         );
//     })}
// </div>


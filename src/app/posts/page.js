
import Link from "next/link";



export default async function PostsPage ( {searchParams} ) { // START of default function PostsPage // This time function is async, so that makes a component async :) .//



    // Creating below a variable which will be used to fetch data //

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();    // need to make it await response //
    console.log(posts);

   

    // if the user want only to show where the userID is = to specific number (for example 10) he can use this:
    // /posts?user=10 //
    // We need to code searchParams into PostsPage above (PostsPage (searchParams)) // 

    if (searchParams.user) {
        posts = posts.filter((post) => post.userId == searchParams.user);
    } // This allows to find a specific user's posts by their ID number //

    // if the user wants to sort posts in for example descending way we write:
    // sort=desc // We use below:

    if(searchParams.sort) {
        posts.reverse();
    }

    // if user wants to combine it and show specific user's posts by their ID and make it descending:
    // localhost:3000/posts?sort=desc&user=x, where x is a number of user //


return ( // START of returning //

<div>
    <h2> My cheeky posts: </h2>
    {posts.map((post) => {     // By adding to {posts.map... } "splice" we can choose a shorter number of data from API. Syntax for it below:
    // {posts.splice(0, 10).map((post) => {  // Assuming that we want only 10 objects from API, which is jsonplaceholder here //
        // return //  ...  and like below...  
    // })}
        return (
        <div key = {post.id}>
            <Link href = {`/posts/${post.id}`}>
                {post.title} {post.userId}  {/* by adding {post.userId} i can see now ID of posts next to them */}


            </Link>

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


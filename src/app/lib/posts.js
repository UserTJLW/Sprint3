export async function getStaticPaths() {
    const res = await fetch ('https://api.example.com/posts');
    const posts = await res.json ();

    const paths = posts.map ((post) => ({
        params: {id: post.id.toString()},
    }));

    return { paths, fallback: false};
}

export async function getStaticProps ({ params }) {
    const res = await fetch ('https://api.example.com/posts/${params.id}');
    const post = await res.json ();

    return { props: { post }};
}

export default  function Post ({ post }) { 
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export async function fetchPostIds() {
    const res = await fetch('https://api.example.com/posts');
    const posts = await res.json();
    return posts.map((post) => ({
      params: { id: post.id.toString() },
    }));
  }
  
  export async function fetchPostData(id) {
    const res = await fetch('https://api.example.com/posts/${id}');
    const post = await res.json();
    return post;
  }

  
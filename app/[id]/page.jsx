import React from 'react'


const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

const Page = ({params}) => {

    const data = fetchPosts();

    console.log(data, "paramssss");
  return (

    <div>page</div>
  )
}

export default Page

export async function getStaticProps() {
    const data = await fetchPosts();
    return postMessage.map((post) => ({id: post.id.toString()}))
}
import Posts from '../../../data.json'

export default function handlerId(req, res) {
    const {method, cookies, query} = req;

    const {id} = query;
    console.log(id, "id");

    const post = Posts.posts.find(ps => ps.id.toString() === id.toString());

    if(!post) {
        res.status(404).json({message: `Post with id ${id} not found`})
    }

    res.status(200).json(post)

   
}
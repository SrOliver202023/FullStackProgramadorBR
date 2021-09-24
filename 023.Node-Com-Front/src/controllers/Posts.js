const PostMain = {
    posts: [],
    getAll(){
        return this.posts;
    },
    newPost(title, description){
        this.posts.push({ id: this.generateID(), title: `${title} [${this.posts.length + 1}]`, description });
    },
    generateID(){
        return Math.random().toString(36).substring(2)
    },
    deletePost(id){
        this.posts = this.posts.filter(post => post.id != id);
    }
}
module.exports = {
    async new(req, res){
        PostMain.newPost(req.body.title, req.body.description);
    },
    async show(req, res){
        res.json(JSON.stringify(PostMain.getAll()));
    },
    async delete(req, res){
        PostMain.deletePost(req.params.id);
        res.json(JSON.stringify(PostMain.posts));
    }
}

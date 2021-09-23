const PostMain = {
    // async index(req, res){
    //     res.send('Hello Index!');
    // }
    posts: [
        {
            id: "21sdf342",
            title: "Teste do Mural [1]",
            description: "Descrição do mural."
        },
        {
            id: "fsdaf",
            title: "Teste do Mural [2]",
            description: "Descrição do mural."
        }
    ],
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
        let viewFilter = this.posts.filter(post => post.id === id);
        if(viewFilter[0]) this.posts.pop(viewFilter[0]);

        console.log(`${JSON.stringify(viewFilter[0])} foi deletado!`);
        console.log(`${JSON.stringify(this.posts)} posts atualizados!\n[${this.posts.length}] posts restantes`);
    }
}
module.exports = {
    async new(req, res){
        let title = req.body.title;
        let description = req.body.description;
        res.send(`${title} , ${description}`);
        PostMain.newPost(title, description);
        console.log(PostMain.posts);
    },
    async show(req, res){
        res.json(JSON.stringify(PostMain.posts));
        console.log(PostMain.posts);
    },
    async delete(req, res){
        PostMain.deletePost(req.params.id);
        res.send(PostMain.posts);
    }
}

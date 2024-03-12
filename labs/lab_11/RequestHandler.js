const Post = require('./Post');
const { sendRequest } = require('../lab_9/RequestHelper');
//const url = 'https://jsonplaceholder.typicode.com/posts'
class RequestHandler {
    async getTargetPost(userId, postId, url) {
        const filteredPosts = await this._getAllPosts(userId, url);
        const targetPost = filteredPosts.filter(function (post) {
            return (post.id === postId);
        })[0]
        if (targetPost) {
            console.log(targetPost);
        } else {
            console.log(`The post ID: ${postId} is not existing for the user ${userId}`);
        }
    }

    async getAllPosts(userId, url) {
        const allPosts = await this._getAllPosts(userId, url);
        if (allPosts.length != 0) {
            for (const post of allPosts) {
                console.log(post.body);
            }
        } else {
            console.log('Dont have the post with userId: ${userId}');
        }
    }

    async _getAllPosts(userId, url) {
        const posts = await sendRequest(url);
        return posts.filter(function (post) {
            return (post.userId === userId);
        })
    }
}

module.exports = RequestHandler;
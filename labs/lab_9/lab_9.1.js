/**
 * General info:
url: https://jsonplaceholder.typicode.com
Library: fetch
slugs:
GET	/posts
9.1
Please using PROMISE and thenable to solve this
Allow user to input an userid and postId, print out that post content
Print all posts for that user
 */

const {sendRequest} = require('./RequestHelper');
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';
let url = `${BASE_URL}${SLUG}`

const response = fetch(url).then(function(resolvedData){
    return resolvedData;
})


/**
 * 1. userId, postId -> post's content
 */
const userId = 1;
const postId = 2;

printTargetPost(userId, postId);

/**
 * 2. Print all posts
 */
printAllPosts(userId);

function printTargetPost(userId, postId){
    _getAllPosts(userId).then(function (filteredPosts) {
        const targetPost = filteredPosts.filter(function (post) {
            return (post.id === postId);
        })[0]
        if(targetPost) {
            console.log(targetPost);
        } else {
            console.log(`The post ID: ${postId} is not existing for the user ${userId}`);
        }
    })
}

function printAllPosts(userId){
    _getAllPosts(userId).then(function (filteredPosts){
        console.log(filteredPosts);
    });
}

function _getAllPosts(userId) {
    return sendRequest(url).then(function (posts) {
        return posts.filter(function (post) {
            return (post.userId === userId)
        })
    });
}
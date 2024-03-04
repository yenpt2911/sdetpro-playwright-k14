/**
 * General info:
url: https://jsonplaceholder.typicode.com
Library: fetch
slugs:
GET	/posts
9.2.
Please using PROMISE and ASYNC/AWAIT to solve this
Allow user to input an userid and postId, print out that post content
Print all posts for that user
 */
const readline = require('readline-sync');
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
let userId = readline.question("Please input userId: ");
userId=Number(userId);
let postId = readline.question("Please input postId: ");
postId=Number(postId);

printTargetPost(userId, postId);

/**
 * 2. Print all posts
 */
printAllPosts(userId);

async function printTargetPost(userId, postId){
    const filteredPosts = await _getAllPosts(userId);
    const targetPost = filteredPosts.filter(function (post) {
        return (post.id === postId);
    })[0]
    if(targetPost) {
        console.log(targetPost);
    } else {
        console.log(`The post ID: ${postId} is not existing for the user ${userId}`);
    }
}

async function printAllPosts(userId){
    const allPosts = await _getAllPosts(userId);
    if(allPosts.length != 0 ){
        for(const post of allPosts){
            console.log(post.body);
        }
    } else {
        console.log('Dont have the post with userId: ${userId}');
    } 
}

async function _getAllPosts(userId) {
    const posts = await sendRequest(url);
    return posts.filter(function (post){
        return (post.userId === userId);
    })
}
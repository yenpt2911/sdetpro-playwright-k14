const RequestHandler = require("./RequestHandler");

// Execution
lab11();

// Function Declaration
async function lab11() {

    const readline = require('readline-sync');
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const SLUG = '/posts';
    const url = `${BASE_URL}${SLUG}`

    // Given params
    let userId = readline.question("Please input userId: ");
    userId = Number(userId);
    let postId = readline.question("Please input postId: ");
    postId = Number(postId);

    const requestHandler = new RequestHandler();
    const post = await requestHandler.getTargetPost(userId, postId, url);
    const allPost = await requestHandler.getAllPosts(userId, url);
}

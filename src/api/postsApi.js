async function fetchPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const response = await fetch(url);
    const result = await response.json();
    return result;
}

export default fetchPosts;
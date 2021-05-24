import { useState } from "react";
import "./App.css";
import { Configuration, Post, PostsApi } from "./generated-sources/openapi";

const configuration = new Configuration({
  basePath: window.location.origin,
});

const postsApi = new PostsApi(configuration);

const App = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  const onClick = async () => {
    const loadedPosts = await postsApi.getPosts();
    setPosts(loadedPosts);
  };

  return (
    <div className="App">
      <button onClick={onClick}>Get Posts</button>
      {posts && <PostsTable posts={posts} />}
    </div>
  );
};

const PostsTable = ({ posts }: { posts: Post[] }) => (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>userId</th>
        <th>title</th>
        <th>completed</th>
      </tr>
    </thead>
    <tbody>
      {posts.map(({ id, userId, title, completed }) => (
        <tr>
          <td>{id}</td>
          <td>{userId}</td>
          <td>{title}</td>
          <td>{completed}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default App;

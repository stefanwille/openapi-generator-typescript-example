import "./App.css";
import { Configuration, PostsApi } from "./generated-sources/openapi";

const configuration = new Configuration({
  basePath: window.location.origin,
  credentials: "same-origin",
});

const postsApi = new PostsApi(configuration);

const App = () => {
  const onClick = () => {
    postsApi.getPosts();
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClick}>Get Posts</button>
      </header>
    </div>
  );
};

export default App;

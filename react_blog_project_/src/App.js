import "./App.css";
import PostList from "./Components/PostList";
import AddPost from "./Components/AddPost";
function App() {
  return (
    <>
      <main className="App">
        <AddPost />
        <PostList />
      </main>
    </>
  );
}

export default App;

import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import PostList from "./Components/PostList";
import AddPost from "./Components/AddPost";
function App() {
  const dispatch = useDispatch();

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

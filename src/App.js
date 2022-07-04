import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.component";
import Feed from "./components/feed/Feed.component";
import Widgets from "./components/widgets/Widgets.component";

function App() {
  return (
    <div className={"app"}>
      <Sidebar />

      <Feed />
      <Widgets />
    </div>
  );
}

export default App;

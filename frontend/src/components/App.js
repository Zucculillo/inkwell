import "../index.css";
import Toolbar from "./Toolbar";
import Editor from "./Editor";
import Preview from "./Preview";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="h-10 bg-red-600">header</header>
      <main className="grow h-10 bg-green-600 flex flex-col">
        <Toolbar />
        <div className="flex flex-row space-x-1 p-4 w-full h-full">
          <Editor />
          <Preview />
        </div>
      </main>
      <footer className="h-10 bg-blue-600">footer</footer>
    </div>
  );
}

export default App;

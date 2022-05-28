import logo from "./logo.svg";
import "./App.css";
import Chat from "./components/Chat";
import MessageList from "./components/MessageList";

function App() {
  return (
    <div className="App">
      <MessageList />
      <Chat />
    </div>
  );
}

export default App;

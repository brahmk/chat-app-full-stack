import {useEffect,useState} from 'react'
import "./App.css";
import Chat from "./components/Chat";
import MessageList from "./components/MessageList";


function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://chat-app-api-bk.web.app/messages")
      .then((res) => res.json())
      .then(setMessages)
     
      .catch(console.error);
  }, [messages]);

  return (
    <div className="App">
      <div className='Scrollbox'>
      <MessageList messages={messages} />
      </div>
      <Chat />
      
    </div>
  );
}

export default App;

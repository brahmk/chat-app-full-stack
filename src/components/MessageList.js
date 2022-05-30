import { React } from "react";

export default function MessageList({ messages }) {
  const sortedMessages = messages.sort(function (a,b){
    return a.id - b.id
  })
  return (
    <>
      <div>
        
        {sortedMessages.map((item) => {
          const { message, id } = item;
          
          return <div className="msgbox"> <p className="msgbox" key={id}>{message}</p> </div>;
        })}
      </div>
    </>
  );
}

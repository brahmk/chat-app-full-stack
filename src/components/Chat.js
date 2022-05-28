import { React, useState } from "react";
import Input from "antd/lib/input/Input";
import { Button, Form } from "antd";



export default function Chat() {
  
  const [newMessage, setNewMessage] = useState({ message: '' });
 

  // function handleSubmit(newMessage){

  //     fetch(`https://chat-app-api-bk.web-app/messages/post`,{
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({message: newMessage}),
  //     })
  //     .then(res => res.json())
  //     .then(console.log ) //dont need current msg but maybe function to reload messages
  //     .catch(console.error)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://chat-app-api-bk.web.app/messages/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage)
      //body: JSON.stringify({message: 'My mesage'})
    })
      .then((data) => console.log(data))
      .catch(console.error);
  };

  const handleChange = (e) => {
    setNewMessage({message:e.target.value}) 
    console.log(newMessage)
}

  return (
    <>
      <p></p>
      <Form onSubmit={handleSubmit}>
        <Form.Item
          name="messageBox"
          value={newMessage.message}
          onChange={handleChange}
          rules={[{ required: true, message: "enter a message" }]}
        >
          <Input placeholder="Say hi"></Input>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick = {handleSubmit} htmlType="submit">
            send
          </Button>
        </Form.Item>
      </Form>
    </>
  );
} 

import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

const container = document.querySelector('#app');

let messages = ['Привет', 'React'];



const MessageComponent = (props) => <div className="message-item"><span>{props.text}</span></div>;
const Button = (props) => <button onClick={addMessage}>отправить</button>;

const MessageField = (props) => {
	return props.messages.map(message => <MessageComponent text={message} />);
};












function addMessage() {
	// messages.push(userText.value);
	messages.push('hello');
	ReactDom.render(
		<div className="chat">
			<MessageField messages={messages} />
			<Button></Button>
		</div>
		, container);
};




function rend() {

};
ReactDom.render(
	<div className="chat">
		<MessageField messages={messages} />
		<Button></Button>
	</div>

	, container);
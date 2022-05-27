import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import reportWebVitals from './reportWebVitals';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I\'m Learning React!',
  author: {
    name: 'Sup Doggy',
    avatarUrl: 'https://placedog.net/500'
  }
};

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

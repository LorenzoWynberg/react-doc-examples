function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function App(props) {
  return (
    <h1>Hello, {formatName(props.user)}</h1>
  );
}

export default App;

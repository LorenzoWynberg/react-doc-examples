function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function App(props) {
  return (
    <div className="App">
      <h1>Hello, {formatName(props.user)}</h1>
    </div>
  );
}

export default App;

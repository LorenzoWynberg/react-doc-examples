function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Lorenzo',
  lastName: 'Wynberg'
};

function App() {
  return (
    <div className="App">
      <h1>Hello, {formatName(user)}</h1>
    </div>
  );
}

export default App;

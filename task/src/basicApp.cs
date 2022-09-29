import './App.css';

function App() {
    const name = "glwec"
    const x = true
  return (
    <div className="App" >
      <h1>Hello World</h1>
      <p>This is static text </p>
      <input type="text" name="name"/>
      <button>Click me !!!</button>
      <h2>Welcome {x ? name : "Unknown" }</h2>
    </div>
  );
}

export default App;

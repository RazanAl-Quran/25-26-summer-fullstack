function App() {
  const pet = "sherry";
  const element = <h1>Hello, world!</h1>;
  // const element = React.createElement('h1', null, 'Hello, world!');

  const name = "Student";
  const greeting = <h2>Hello, {name} 👋</h2>;
  const year = new Date().getFullYear();


  return (
    <>
      <h1>{pet}</h1>
      {element}

      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>🎓 Welcome to My React App</h1>
        {greeting}
        <p>This is a simple JSX example with no state or props.</p>
        <ul style={{ listStyle: "none" }}>
          <li>✔ JSX uses JavaScript expressions inside {"{}"}</li>
          <li>✔ You can embed variables and functions</li>
          <li>✔ All tags must be closed properly</li>
        </ul>
        <footer style={{ marginTop: "40px", fontSize: "14px", color: "#555" }}>
          &copy; {year} My React Classroom
        </footer>
      </div>
    </>
  )
}

export default App

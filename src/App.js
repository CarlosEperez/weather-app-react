
const api = {
  key: "a2bccdf9c4169bc31e1c5a990099b287",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search..."></input>
        </div>
      </main>
    </div>
  );
}

export default App;

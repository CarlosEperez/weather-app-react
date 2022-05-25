
const api = {
  key: "a2bccdf9c4169bc31e1c5a990099b287",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  
  const dateBuilder = (date) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let myDay = days[date.getDay()];
    let myDate = date.getDate();
    let myMonth = months[date.getMonth()];
    let myYear = date.getFullYear();
    return `${myDay} ${myDate} ${myMonth} ${myYear}`
  }


  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search..." />
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>

        </div>
      </main>
    </div>
  );
}

export default App;

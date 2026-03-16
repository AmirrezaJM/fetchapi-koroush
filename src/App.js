import './App.css';
import Swr from './swr';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <main className="App-main">
        main section
        <Swr />
      </main>
      <footer className="App-footer">
        footer
      </footer>
    </div>
  );
}

export default App;



  // GET
  // useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then((data) => {
    //   console.log(data)
    //   setData(data)
    //   setLoading(false)
    // }).catch((error) => {
    //   console.log(error)
    //   setLoading(false)
    // })
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //   setData(response.data)
    //   setLoading(false)
    // }).catch((error) => {
    //   console.log(error)
    //   setLoading(false)
    // })
  // },[])
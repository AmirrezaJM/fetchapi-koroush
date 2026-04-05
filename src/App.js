import { Suspense } from 'react';
import './App.css';
import Swr from './swr';
import { ErrorBoundary } from 'react-error-boundary';
import Posts from './tanstackQuery';
import ErrorFallback from './error';
import Loading from './loading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <main className="App-main">
        {/* <h2>SWR</h2>
        <Swr /> */}
        <h2>TanStack Query fetching</h2>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<Loading />}>
            <Posts />
          </Suspense>
        </ErrorBoundary>
        {/* <HydrationBoundary>

        </HydrationBoundary> */}
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
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then(res => res.json());
const Swr = () => {
    const {
        data: swrData,
        error,
        isLoading,
    } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)


    if(error) return <div>failed to load</div>
    if(isLoading) return <div>loading...</div>

    
return (
    <div>
        {swrData.map((item) => (
            <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
            </div>
        ))}
    </div>
)};

export default Swr;
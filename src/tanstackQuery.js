import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    return res.json();
};

const Posts = () => {
    const { data } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        suspense: true,
    });

    return (
    <div>
        Posts: {data.length}
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    </div>
    )
}


export default Posts;
// const TanstackQuery = () => {
//     const {
//         data,
//         error,
//         isLoading,
//     } = useQuery({
//         queryKey: ["posts"],
//         queryFn: fetchPosts,
//     });

//     if (error) return <div>failed to load: {error.message}</div>;
//     if (isLoading) return <div>loading...</div>;

//     return (
//         <div>
//             {data.map((item) => (
//                 <div key={item.id}>
//                     <h1>{item.title}</h1>
//                     <p>{item.body}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

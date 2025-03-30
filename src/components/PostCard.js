export default function PostCard({post}) {
  return (
    <div className="bg-gray-100 p-5 mb-10">
      <h1 className="font-bold text-2xl mb-2">{post.title}</h1>
        <p className="my-3">{post.body}</p>
        <div class="flex justify-between items-center">
          <div className="flex">{post.date}</div>
          <button className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded">Read More...</button>
        </div>
    </div>
    );
  };
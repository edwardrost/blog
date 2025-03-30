export default function Header() {
    return (
      <header className="flex justify-between items-center px-4 w-auto h-14 bg-purple-900 text-white font-semibold">
        <div className="white">MY BLOG</div>
        <a href="#" className="bg-indigo-500 hover:text-indigo-500 hover:bg-white py-1 px-3">
          <li class="list-none">Sign In</li>
        </a>
      </header>
    );
  }
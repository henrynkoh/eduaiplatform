import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl">EduAI Platform</span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Home
              </Link>
              <Link href="/courses" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Courses
              </Link>
              <Link href="/workflows" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Workflows
              </Link>
              <Link href="/profile" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
import Link from 'next/link';
import Image from 'next/image';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  level: string;
}

const CourseCard = ({ id, title, description, image, category, level }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={image || 'https://via.placeholder.com/400x200/0070f3/ffffff?text=Course'}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {category}
          </span>
          <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {level}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link
          href={`/courses/${id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 inline-block"
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard; 
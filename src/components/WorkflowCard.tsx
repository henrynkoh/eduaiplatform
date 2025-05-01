import Link from 'next/link';

interface WorkflowCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  complexity: string;
}

const WorkflowCard = ({ id, title, description, category, complexity }: WorkflowCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {category}
        </span>
        <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {complexity}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
      <div className="flex space-x-3">
        <Link
          href={`/workflows/${id}`}
          className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 inline-block"
        >
          View Details
        </Link>
        <button className="border border-green-600 text-green-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-green-50 inline-block">
          Clone Workflow
        </button>
      </div>
    </div>
  );
};

export default WorkflowCard; 
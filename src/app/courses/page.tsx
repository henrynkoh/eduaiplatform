import Link from 'next/link'

export default function Courses() {
  const courses = [
    {
      id: 'github-essentials',
      title: 'Git & GitHub Essentials',
      description: 'Master version control, pull requests, and collaboration with Github Copilot.',
      level: 'Beginner',
      duration: '4 weeks',
      category: 'Development',
    },
    {
      id: 'n8n-automation',
      title: 'Workflow Automation with n8n',
      description: 'Build powerful automated workflows for education and development.',
      level: 'Intermediate',
      duration: '3 weeks',
      category: 'Automation',
    },
    {
      id: 'mcp-integration',
      title: 'AI Integration with MCP',
      description: 'Connect AI models to external tools using Model Context Protocol.',
      level: 'Advanced',
      duration: '5 weeks',
      category: 'AI',
    },
    {
      id: 'zapier-nocode',
      title: 'No-Code Automation with Zapier',
      description: 'Create powerful automations without writing code using Zapier.',
      level: 'Beginner',
      duration: '2 weeks',
      category: 'Automation',
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Courses</h1>
        <div className="flex space-x-2">
          <select className="border rounded px-3 py-2">
            <option>All Categories</option>
            <option>Development</option>
            <option>Automation</option>
            <option>AI</option>
          </select>
          <select className="border rounded px-3 py-2">
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="card border hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                {course.level}
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {course.category}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{course.duration}</span>
              <Link href={`/courses/${course.id}`} className="btn-primary text-sm">
                Enroll Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
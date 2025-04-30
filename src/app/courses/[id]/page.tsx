export default function CourseDetail({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from an API
  // For now, we'll use hardcoded data based on the course ID
  const courseData: Record<string, any> = {
    'github-essentials': {
      title: 'Git & GitHub Essentials',
      description: 'Master version control, pull requests, and collaboration with Github Copilot. Learn how to effectively use Git for project management and collaboration.',
      level: 'Beginner',
      duration: '4 weeks',
      instructor: 'Alex Johnson',
      rating: 4.8,
      studentsEnrolled: 1250,
      modules: [
        {
          title: 'Introduction to Version Control',
          lessons: [
            'What is Git?',
            'Setting up Git locally',
            'Basic commands: git init, add, commit',
            'Understanding the staging area',
          ]
        },
        {
          title: 'Working with GitHub',
          lessons: [
            'Creating a GitHub account',
            'Creating and cloning repositories',
            'README and documentation',
            'Working with remote repositories',
          ]
        },
        {
          title: 'Branching and Merging',
          lessons: [
            'Creating and switching branches',
            'Merging changes',
            'Resolving merge conflicts',
            'Git workflow strategies',
          ]
        },
        {
          title: 'Pull Requests and Collaboration',
          lessons: [
            'Creating pull requests',
            'Code reviews',
            'Addressing feedback',
            'Collaborative development practices',
          ]
        },
        {
          title: 'GitHub Copilot Integration',
          lessons: [
            'Setting up GitHub Copilot',
            'Using Copilot for code suggestions',
            'Pair programming with AI',
            'Best practices for AI-assisted coding',
          ]
        },
      ]
    },
    'n8n-automation': {
      title: 'Workflow Automation with n8n',
      description: 'Build powerful automated workflows for education and development. Learn how to connect different services and automate repetitive tasks using n8n.',
      level: 'Intermediate',
      duration: '3 weeks',
      instructor: 'Maria Garcia',
      rating: 4.7,
      studentsEnrolled: 876,
      modules: [
        {
          title: 'Introduction to n8n',
          lessons: [
            'What is n8n?',
            'Setting up your n8n environment',
            'Understanding the n8n interface',
            'Your first workflow',
          ]
        },
        {
          title: 'Working with Nodes',
          lessons: [
            'HTTP Request nodes',
            'GitHub integration',
            'Slack and communication nodes',
            'Database operations',
          ]
        },
        {
          title: 'Advanced Workflows',
          lessons: [
            'Conditional logic',
            'Error handling',
            'Scheduling and triggers',
            'Data transformation',
          ]
        },
        {
          title: 'Educational Automation',
          lessons: [
            'Student progress tracking',
            'Assignment submission automation',
            'Feedback collection workflows',
            'Course content generation',
          ]
        },
      ]
    },
  }

  const course = courseData[params.id] || {
    title: 'Course Not Found',
    description: 'The requested course could not be found.',
    level: '',
    duration: '',
    instructor: '',
    rating: 0,
    studentsEnrolled: 0,
    modules: [],
  }

  return (
    <div className="space-y-8">
      {/* Course Header */}
      <div className="bg-gray-50 p-6 rounded-lg border">
        <h1 className="text-3xl font-bold mb-3">{course.title}</h1>
        <p className="text-gray-600 mb-6">{course.description}</p>
        <div className="flex flex-wrap gap-4 mb-6">
          {course.level && (
            <div className="flex items-center">
              <span className="font-semibold mr-2">Level:</span>
              <span>{course.level}</span>
            </div>
          )}
          {course.duration && (
            <div className="flex items-center">
              <span className="font-semibold mr-2">Duration:</span>
              <span>{course.duration}</span>
            </div>
          )}
          {course.instructor && (
            <div className="flex items-center">
              <span className="font-semibold mr-2">Instructor:</span>
              <span>{course.instructor}</span>
            </div>
          )}
          {course.rating > 0 && (
            <div className="flex items-center">
              <span className="font-semibold mr-2">Rating:</span>
              <span>{course.rating}/5</span>
            </div>
          )}
          {course.studentsEnrolled > 0 && (
            <div className="flex items-center">
              <span className="font-semibold mr-2">Students:</span>
              <span>{course.studentsEnrolled.toLocaleString()}</span>
            </div>
          )}
        </div>
        <button className="btn-primary">Enroll in Course</button>
      </div>

      {/* Course Content */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Course Content</h2>
        {course.modules.length > 0 ? (
          <div className="space-y-4">
            {course.modules.map((module: any, index: number) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-3">
                  Module {index + 1}: {module.title}
                </h3>
                <ul className="space-y-2">
                  {module.lessons.map((lesson: string, lessonIndex: number) => (
                    <li key={lessonIndex} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-primary text-white rounded-full text-sm mr-3">
                        {lessonIndex + 1}
                      </span>
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No content available for this course.</p>
        )}
      </div>

      {/* Related Tools */}
      {params.id === 'github-essentials' && (
        <div className="card bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Related Tools & Integrations</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border">
              <h3 className="font-semibold mb-2">GitHub Copilot</h3>
              <p className="text-sm text-gray-600 mb-2">
                AI-powered code suggestions that help you write code faster and with fewer errors.
              </p>
              <a href="https://github.com/features/copilot" className="text-primary text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                Learn more →
              </a>
            </div>
            <div className="p-4 bg-white rounded-lg border">
              <h3 className="font-semibold mb-2">n8n GitHub Integration</h3>
              <p className="text-sm text-gray-600 mb-2">
                Automate GitHub workflows including PR reviews, issue management, and repository updates.
              </p>
              <a href="https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.github/" className="text-primary text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      )}

      {params.id === 'n8n-automation' && (
        <div className="card bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Related Tools & Integrations</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border">
              <h3 className="font-semibold mb-2">n8n Platform</h3>
              <p className="text-sm text-gray-600 mb-2">
                Open-source workflow automation tool with 400+ integrations.
              </p>
              <a href="https://n8n.io/" className="text-primary text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                Learn more →
              </a>
            </div>
            <div className="p-4 bg-white rounded-lg border">
              <h3 className="font-semibold mb-2">MCP Integration</h3>
              <p className="text-sm text-gray-600 mb-2">
                Connect AI models to n8n workflows using Model Context Protocol.
              </p>
              <a href="https://github.com/modelcontextprotocol/servers" className="text-primary text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 
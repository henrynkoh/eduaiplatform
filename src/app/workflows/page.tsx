import Link from 'next/link'

export default function Workflows() {
  const workflows = [
    {
      id: 'github-pr-review',
      title: 'GitHub PR Review Automation',
      description: 'Automatically analyze pull requests and provide AI-powered feedback.',
      platforms: ['n8n', 'GitHub', 'OpenAI'],
      complexity: 'Medium',
    },
    {
      id: 'course-completion-notification',
      title: 'Course Completion Notifications',
      description: 'Send notifications to students and instructors when courses are completed.',
      platforms: ['n8n', 'Slack', 'Email'],
      complexity: 'Low',
    },
    {
      id: 'content-generator',
      title: 'Educational Content Generator',
      description: 'Generate quizzes and learning materials using AI and MCP.',
      platforms: ['n8n', 'MCP', 'Notion'],
      complexity: 'High',
    },
    {
      id: 'progress-tracker',
      title: 'Student Progress Tracker',
      description: 'Track and visualize student progress across multiple courses.',
      platforms: ['Zapier', 'Google Sheets', 'Airtable'],
      complexity: 'Medium',
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Automated Workflows</h1>
        <p className="text-gray-600">
          Our platform integrates with n8n, Zapier, and MCP to create powerful educational workflows.
          These pre-built templates help you automate repetitive tasks and enhance your learning experience.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h2 className="text-xl font-semibold mb-3">What are Educational Workflows?</h2>
        <p className="mb-4">
          Educational workflows automate tasks like feedback collection, progress tracking, and content generation,
          allowing you to focus on learning rather than administration.
        </p>
        <div className="flex space-x-4">
          <Link href="/courses/n8n-automation" className="text-primary hover:underline">
            Learn more about n8n →
          </Link>
          <Link href="/courses/zapier-nocode" className="text-primary hover:underline">
            Explore Zapier integration →
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {workflows.map((workflow) => (
          <div key={workflow.id} className="card border hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">{workflow.title}</h3>
            <p className="text-gray-600 mb-4">{workflow.description}</p>
            <div className="mb-4">
              <div className="text-sm text-gray-700 mb-1">Platforms:</div>
              <div className="flex flex-wrap gap-2">
                {workflow.platforms.map((platform) => (
                  <span key={platform} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Complexity: {workflow.complexity}
              </span>
              <Link href={`/workflows/${workflow.id}`} className="btn-primary text-sm">
                View Workflow
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
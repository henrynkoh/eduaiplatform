export default function WorkflowDetail({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from an API
  // For now, we'll use hardcoded data based on the workflow ID
  const workflowData: Record<string, any> = {
    'github-pr-review': {
      title: 'GitHub PR Review Automation',
      description: 'Automatically analyze pull requests and provide AI-powered feedback.',
      platforms: ['n8n', 'GitHub', 'OpenAI'],
      complexity: 'Medium',
      creator: 'EduAI Team',
      lastUpdated: 'April 15, 2023',
      steps: [
        {
          name: 'GitHub Trigger',
          description: 'Triggers when a new pull request is opened or updated.',
          platform: 'n8n',
          configOptions: ['Repository', 'Event Type', 'Labels', 'Branches'],
        },
        {
          name: 'Get PR Content',
          description: 'Fetches the content of the pull request including changed files.',
          platform: 'GitHub API',
          configOptions: ['PR Number', 'Include Diffs', 'Max Files'],
        },
        {
          name: 'AI Analysis',
          description: 'Uses OpenAI API to analyze code changes and generate feedback.',
          platform: 'OpenAI',
          configOptions: ['Model', 'Temperature', 'Max Tokens', 'Prompt Template'],
        },
        {
          name: 'Post Comment',
          description: 'Adds the AI-generated feedback as a comment on the pull request.',
          platform: 'GitHub API',
          configOptions: ['PR Number', 'Comment Format', 'Include Suggestions'],
        },
        {
          name: 'Notification',
          description: 'Sends a notification to the team about the analyzed PR.',
          platform: 'Slack',
          configOptions: ['Channel', 'Message Template', 'Include Link'],
        },
      ],
      benefits: [
        'Save time on manual code reviews',
        'Provide consistent feedback across all PRs',
        'Help students learn best practices',
        'Identify common issues automatically',
        'Integrate AI with existing GitHub workflows',
      ],
      requiredAccess: [
        'GitHub API access with PR read/write permissions',
        'OpenAI API key',
        'n8n instance with GitHub nodes',
        'Slack workspace (optional)',
      ],
    },
    'course-completion-notification': {
      title: 'Course Completion Notifications',
      description: 'Send notifications to students and instructors when courses are completed.',
      platforms: ['n8n', 'Slack', 'Email'],
      complexity: 'Low',
      creator: 'EduAI Team',
      lastUpdated: 'March 3, 2023',
      steps: [
        {
          name: 'Webhook Trigger',
          description: 'Receives course completion event from learning management system.',
          platform: 'n8n',
          configOptions: ['Event Type', 'Authentication', 'Payload Schema'],
        },
        {
          name: 'User Lookup',
          description: 'Retrieves student and instructor information from database.',
          platform: 'Database',
          configOptions: ['Course ID', 'User IDs', 'Required Fields'],
        },
        {
          name: 'Email Notification',
          description: 'Sends a congratulatory email to the student with certificate.',
          platform: 'Email',
          configOptions: ['Template', 'Attachments', 'CC Options'],
        },
        {
          name: 'Slack Notification',
          description: 'Posts a message to the course channel about the completion.',
          platform: 'Slack',
          configOptions: ['Channel', 'Message Format', 'Mention Options'],
        },
        {
          name: 'Update Records',
          description: 'Updates completion records in the database and analytics system.',
          platform: 'Database',
          configOptions: ['Timestamp', 'Status Update', 'Certificate ID'],
        },
      ],
      benefits: [
        'Automate notification process across multiple channels',
        'Ensure consistent communication with students',
        'Keep instructors informed of student progress',
        'Maintain accurate completion records',
        'Celebrate student achievements',
      ],
      requiredAccess: [
        'Email sending capabilities (SMTP or service)',
        'Slack workspace and API token',
        'Database access for student records',
        'Webhook URL for LMS integration',
      ],
    },
  }

  const workflow = workflowData[params.id] || {
    title: 'Workflow Not Found',
    description: 'The requested workflow could not be found.',
    platforms: [],
    complexity: '',
    creator: '',
    lastUpdated: '',
    steps: [],
    benefits: [],
    requiredAccess: [],
  }

  return (
    <div className="space-y-8">
      {/* Workflow Header */}
      <div className="bg-gray-50 p-6 rounded-lg border">
        <h1 className="text-3xl font-bold mb-3">{workflow.title}</h1>
        <p className="text-gray-600 mb-6">{workflow.description}</p>
        <div className="flex flex-wrap gap-4 mb-6">
          {workflow.platforms.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="font-semibold mr-2">Platforms:</span>
              {workflow.platforms.map((platform: string) => (
                <span key={platform} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {platform}
                </span>
              ))}
            </div>
          )}
          {workflow.complexity && (
            <div className="flex items-center">
              <span className="font-semibold mr-2">Complexity:</span>
              <span>{workflow.complexity}</span>
            </div>
          )}
          {workflow.creator && (
            <div className="flex items-center">
              <span className="font-semibold mr-2">Creator:</span>
              <span>{workflow.creator}</span>
            </div>
          )}
          {workflow.lastUpdated && (
            <div className="flex items-center">
              <span className="font-semibold mr-2">Last Updated:</span>
              <span>{workflow.lastUpdated}</span>
            </div>
          )}
        </div>
        <button className="btn-primary">Clone Workflow</button>
      </div>

      {/* Workflow Steps */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Workflow Steps</h2>
        {workflow.steps.length > 0 ? (
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
            
            <div className="space-y-6">
              {workflow.steps.map((step: any, index: number) => (
                <div key={index} className="relative pl-14">
                  {/* Step number circle */}
                  <div className="absolute left-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  
                  <div className="card">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{step.name}</h3>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {step.platform}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    {step.configOptions && step.configOptions.length > 0 && (
                      <div>
                        <h4 className="font-medium text-sm text-gray-700 mb-2">Configuration Options:</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.configOptions.map((option: string, optIndex: number) => (
                            <span key={optIndex} className="bg-gray-50 text-gray-600 text-xs px-2 py-1 rounded border">
                              {option}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No steps available for this workflow.</p>
        )}
      </div>

      {/* Benefits and Requirements */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Benefits</h2>
          {workflow.benefits.length > 0 ? (
            <ul className="list-disc list-inside space-y-2">
              {workflow.benefits.map((benefit: string, index: number) => (
                <li key={index} className="text-gray-700">{benefit}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No benefits listed.</p>
          )}
        </div>
        
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Required Access</h2>
          {workflow.requiredAccess.length > 0 ? (
            <ul className="list-disc list-inside space-y-2">
              {workflow.requiredAccess.map((item: string, index: number) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No requirements listed.</p>
          )}
        </div>
      </div>

      {/* Visual Workflow Designer */}
      <div className="card border-t-4 border-primary">
        <h2 className="text-xl font-bold mb-4">Visual Workflow</h2>
        <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-lg">
          <p className="text-gray-500">n8n Workflow Visualization</p>
          {/* In a real app, this would be an embedded n8n workflow viewer or diagram */}
        </div>
        <div className="mt-4 flex justify-end">
          <button className="btn-primary">Open in n8n Editor</button>
        </div>
      </div>
    </div>
  )
} 
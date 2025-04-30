import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Educational Automation <span className="text-primary">Reimagined</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Combine the power of workflow automation, GitHub integration, and AI to create
          practical, effective educational experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/courses" className="btn-primary">
            Explore Courses
          </Link>
          <Link href="/workflows" className="btn-secondary">
            Discover Workflows
          </Link>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="card">
          <h3 className="text-xl font-bold mb-3">n8n Integration</h3>
          <p className="text-gray-600 mb-4">
            Automate educational workflows and connect with 400+ services including GitHub, Slack, and AI tools.
          </p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold mb-3">GitHub Collaboration</h3>
          <p className="text-gray-600 mb-4">
            Learn Git workflows, create PRs, and collaborate with real-world coding projects.
          </p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold mb-3">AI-Powered Learning</h3>
          <p className="text-gray-600 mb-4">
            Personalize your learning experience with Model Context Protocol (MCP) and LLM integrations.
          </p>
        </div>
      </section>

      {/* Latest Courses */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Latest Courses</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card border-t-4 border-primary">
            <h3 className="text-xl font-bold mb-2">Git & GitHub Essentials</h3>
            <p className="text-gray-600 mb-4">
              Master version control, pull requests, and collaboration with Github Copilot.
            </p>
            <Link href="/courses/github-essentials" className="text-primary hover:underline">
              View Course →
            </Link>
          </div>
          <div className="card border-t-4 border-secondary">
            <h3 className="text-xl font-bold mb-2">Workflow Automation with n8n</h3>
            <p className="text-gray-600 mb-4">
              Build powerful automated workflows for education and development.
            </p>
            <Link href="/courses/n8n-automation" className="text-primary hover:underline">
              View Course →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 
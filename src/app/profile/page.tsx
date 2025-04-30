export default function Profile() {
  const user = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Student',
    joined: 'January 2023',
    progress: {
      coursesCompleted: 3,
      coursesInProgress: 2,
      certificatesEarned: 2,
      totalHours: 45,
    },
    enrolledCourses: [
      { id: 'github-essentials', title: 'Git & GitHub Essentials', progress: 75 },
      { id: 'n8n-automation', title: 'Workflow Automation with n8n', progress: 30 },
    ],
    certificates: [
      { id: 'cert-1', title: 'JavaScript Fundamentals', issued: 'March 2023' },
      { id: 'cert-2', title: 'React Development', issued: 'June 2023' },
    ],
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* User Info */}
        <div className="md:w-1/3">
          <div className="card">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-gray-500">{user.name.charAt(0)}</span>
              </div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <div className="flex justify-center space-x-2 mt-2">
                <span className="bg-primary text-white text-xs px-2.5 py-0.5 rounded">
                  {user.role}
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded">
                  Member since {user.joined}
                </span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-lg font-semibold mb-4">Learning Progress</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{user.progress.coursesCompleted}</p>
                  <p className="text-sm text-gray-600">Courses Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{user.progress.coursesInProgress}</p>
                  <p className="text-sm text-gray-600">In Progress</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{user.progress.certificatesEarned}</p>
                  <p className="text-sm text-gray-600">Certificates</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{user.progress.totalHours}</p>
                  <p className="text-sm text-gray-600">Total Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-2/3 space-y-6">
          {/* Enrolled Courses */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Enrolled Courses</h3>
            {user.enrolledCourses.map((course) => (
              <div key={course.id} className="mb-4 last:mb-0">
                <div className="flex justify-between mb-2">
                  <p className="font-medium">{course.title}</p>
                  <p className="text-sm text-gray-600">{course.progress}% complete</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Certificates</h3>
            {user.certificates.map((cert) => (
              <div key={cert.id} className="flex justify-between items-center mb-3 last:mb-0">
                <div>
                  <p className="font-medium">{cert.title}</p>
                  <p className="text-sm text-gray-600">Issued: {cert.issued}</p>
                </div>
                <button className="text-primary hover:underline text-sm">
                  Download
                </button>
              </div>
            ))}
          </div>

          {/* GitHub Integration */}
          <div className="card bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">GitHub Integration</h3>
              <button className="btn-primary text-sm">Connect GitHub</button>
            </div>
            <p className="text-gray-600 mb-4">
              Connect your GitHub account to track your progress on coding projects,
              submit assignments through pull requests, and receive automated feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
# EduAI Platform

![EduAI Platform](https://via.placeholder.com/1200x600/0070f3/ffffff?text=EduAI+Platform)

EduAI Platform is an AI-powered educational automation platform that integrates workflow automation (n8n), GitHub collaboration, and AI tools using Model Context Protocol (MCP) to create effective, practical educational experiences.

## 🚀 Features

- **Customized Educational Courses**: Learn Git, GitHub, n8n, and more through structured courses
- **Workflow Automation**: Create and use n8n workflows for educational tasks
- **GitHub Integration**: Practice real-world Git workflows, PRs, and collaboration
- **AI-Powered Learning**: Personalized recommendations and content using MCP
- **Progress Tracking**: Monitor your learning journey with detailed analytics

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+, TypeScript, Tailwind CSS
- **APIs**: axios for API integration
- **State Management**: React Query, Zustand
- **AI Integration**: LangChain, Model Context Protocol (MCP)
- **Automation**: n8n integration for workflows

## 🏁 Quick Start

```bash
# Clone repository
git clone https://github.com/your-username/eduaiplatform.git
cd eduaiplatform

# Install dependencies
npm install

# Configure environment (create .env.local with required APIs)
cp .env.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the platform in action.

## 📚 Documentation

For comprehensive documentation, see:
- [User Manual](docs/MANUAL.md)
- [Tutorial Guide](docs/TUTORIAL.md)
- [Quick Start Guide](docs/QUICKSTART.md)
- [API Documentation](docs/API.md)

## 🔌 Integrations

### n8n Workflow Automation

The platform uses n8n for powerful workflow automation:
- PR review automation
- Course completion notifications
- Content generation
- Progress tracking

### GitHub Collaboration

Practice real-world development with:
- PR workflows
- Code reviews
- Repository management
- GitHub Copilot integration

### MCP (Model Context Protocol)

Leverage AI capabilities with:
- Personalized learning paths
- Automated quizzes
- Course content recommendations
- Code analysis

## 📋 Requirements

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- Docker (optional, for running n8n)

## 🗂️ Project Structure

```
eduaiplatform/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js app router pages
│   │   ├── courses/     # Course-related pages
│   │   ├── workflows/   # Workflow-related pages
│   │   ├── profile/     # User profile page
│   │   ├── layout.tsx   # Root layout component
│   │   └── page.tsx     # Homepage
│   ├── components/      # Reusable UI components
│   ├── lib/             # Utility libraries
│   │   ├── api.ts       # API client
│   │   ├── mcp.ts       # MCP integration
│   │   ├── n8n.ts       # n8n integration
│   │   └── github.ts    # GitHub integration
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Helper utilities
├── docs/                # Documentation
├── .gitignore           # Git ignore file
├── package.json         # Project dependencies
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 📖 Usage

1. **Explore Courses**: Browse the catalog of available courses on Git, GitHub, n8n, and more
2. **Enroll in Courses**: Start your learning journey with structured content
3. **Discover Workflows**: Access pre-built automation templates for educational tasks
4. **Track Progress**: Monitor your advancement through the interactive dashboard
5. **Connect GitHub**: Practice real-world development workflows

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 🔧 Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Why EduAI Platform?

- **Learn by Doing**: Practical, hands-on educational experiences
- **AI-Enhanced Learning**: Personalized paths and recommendations
- **Real-world Skills**: Industry-relevant tools and workflows
- **Automation-First**: Focus on learning, not repetitive tasks
- **Community-Driven**: Build on the work of top engineers worldwide

## 🙏 Acknowledgments

- Inspired by n8n, GitHub Copilot, and Model Context Protocol
- Built with Next.js and modern web technologies
- Focused on practical, effective educational experiences 
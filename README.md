# EduAI Platform

EduAI Platform is an AI-powered educational automation platform that integrates workflow automation (n8n), GitHub collaboration, and AI tools using Model Context Protocol (MCP) to create effective, practical educational experiences.

## Features

- **Customized Educational Courses**: Learn Git, GitHub, n8n, and more through structured courses
- **Workflow Automation**: Create and use n8n workflows for educational tasks
- **GitHub Integration**: Practice real-world Git workflows, PRs, and collaboration
- **AI-Powered Learning**: Personalized recommendations and content using MCP
- **Progress Tracking**: Monitor your learning journey with detailed analytics

## Tech Stack

- **Frontend**: Next.js 14+, TypeScript, Tailwind CSS
- **APIs**: axios for API integration
- **State Management**: React Query, Zustand
- **AI Integration**: LangChain, Model Context Protocol (MCP)
- **Automation**: n8n integration for workflows

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/eduaiplatform.git
cd eduaiplatform
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_GITHUB_CLIENT_ID=your_github_client_id
MCP_API_KEY=your_mcp_api_key
N8N_API_URL=http://localhost:5678/api/v1
N8N_API_KEY=your_n8n_api_key
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

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
├── .gitignore           # Git ignore file
├── package.json         # Project dependencies
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Integration Guides

### n8n Integration

The platform integrates with n8n to create automated workflows:

1. Install n8n: `docker run -p 5678:5678 n8nio/n8n`
2. Visit `http://localhost:5678` to set up n8n
3. Use the templates in the platform to create educational workflows

### GitHub Integration

1. Create a GitHub OAuth App at [GitHub Developer Settings](https://github.com/settings/developers)
2. Set the Authorization callback URL to `http://localhost:3000/api/auth/github/callback`
3. Update your `.env.local` file with the Client ID

### MCP Integration

1. Install MCP server: `npm install -g @modelcontextprotocol/server-filesystem`
2. Run the MCP server: `mcp-server --dir ./mcp-data`
3. Update your `.env.local` file with the MCP API key

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by n8n, GitHub Copilot, and Model Context Protocol
- Built with Next.js and modern web technologies
- Focused on practical, effective educational experiences 
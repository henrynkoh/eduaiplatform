/**
 * GitHub Integration Utilities
 * 
 * This file contains utilities for integrating with GitHub, including
 * repository management, pull requests, issue tracking, and GitHub Copilot.
 */

import axios from 'axios';

// Types for GitHub configuration
export interface GitHubConfig {
  accessToken: string;
  username?: string;
  baseUrl?: string;
}

// Types for GitHub repository
export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  private: boolean;
  fork: boolean;
  html_url: string;
  default_branch: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

// Types for GitHub pull request
export interface PullRequest {
  id: number;
  number: number;
  title: string;
  body: string;
  state: 'open' | 'closed';
  html_url: string;
  created_at: string;
  updated_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
  head: {
    ref: string;
    sha: string;
  };
  base: {
    ref: string;
    sha: string;
  };
}

// Types for GitHub issue
export interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  state: 'open' | 'closed';
  html_url: string;
  created_at: string;
  updated_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
  labels: Array<{
    name: string;
    color: string;
  }>;
}

/**
 * GitHub API client
 */
export class GitHubClient {
  private config: GitHubConfig;
  private apiClient: ReturnType<typeof axios.create>;

  constructor(config: GitHubConfig) {
    this.config = {
      accessToken: config.accessToken,
      username: config.username,
      baseUrl: config.baseUrl || 'https://api.github.com',
    };
    
    // Create API client
    this.apiClient = axios.create({
      baseURL: this.config.baseUrl,
      headers: {
        Authorization: `Bearer ${this.config.accessToken}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  /**
   * Get user information
   */
  async getUser(): Promise<any> {
    try {
      const response = await this.apiClient.get('/user');
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }

  /**
   * Get repositories for the authenticated user
   */
  async getRepositories(): Promise<Repository[]> {
    try {
      // In a real implementation, this would use the actual GitHub API
      // const response = await this.apiClient.get('/user/repos');
      // return response.data;
      
      // Mock response for demonstration
      return [
        {
          id: 1,
          name: 'react-project',
          full_name: 'username/react-project',
          description: 'A React project for learning',
          private: false,
          fork: false,
          html_url: 'https://github.com/username/react-project',
          default_branch: 'main',
          owner: {
            login: 'username',
            avatar_url: 'https://github.com/username.png',
          },
        },
        {
          id: 2,
          name: 'nodejs-api',
          full_name: 'username/nodejs-api',
          description: 'Node.js API with Express',
          private: true,
          fork: false,
          html_url: 'https://github.com/username/nodejs-api',
          default_branch: 'main',
          owner: {
            login: 'username',
            avatar_url: 'https://github.com/username.png',
          },
        },
      ];
    } catch (error) {
      console.error('Error fetching repositories:', error);
      return [];
    }
  }

  /**
   * Create a repository
   */
  async createRepository(name: string, options: {
    description?: string;
    private?: boolean;
    auto_init?: boolean;
  } = {}): Promise<Repository | null> {
    try {
      // In a real implementation, this would use the actual GitHub API
      // const response = await this.apiClient.post('/user/repos', {
      //   name,
      //   description: options.description || '',
      //   private: options.private || false,
      //   auto_init: options.auto_init || true,
      // });
      // return response.data;
      
      // Mock response for demonstration
      return {
        id: 3,
        name,
        full_name: `username/${name}`,
        description: options.description || '',
        private: options.private || false,
        fork: false,
        html_url: `https://github.com/username/${name}`,
        default_branch: 'main',
        owner: {
          login: 'username',
          avatar_url: 'https://github.com/username.png',
        },
      };
    } catch (error) {
      console.error('Error creating repository:', error);
      return null;
    }
  }

  /**
   * Fork a repository
   */
  async forkRepository(owner: string, repo: string): Promise<Repository | null> {
    try {
      // In a real implementation, this would use the actual GitHub API
      // const response = await this.apiClient.post(`/repos/${owner}/${repo}/forks`);
      // return response.data;
      
      // Mock response for demonstration
      return {
        id: 4,
        name: repo,
        full_name: `username/${repo}`,
        description: 'Forked from ' + owner + '/' + repo,
        private: false,
        fork: true,
        html_url: `https://github.com/username/${repo}`,
        default_branch: 'main',
        owner: {
          login: 'username',
          avatar_url: 'https://github.com/username.png',
        },
      };
    } catch (error) {
      console.error('Error forking repository:', error);
      return null;
    }
  }

  /**
   * Create a pull request
   */
  async createPullRequest(
    owner: string,
    repo: string,
    options: {
      title: string;
      body: string;
      head: string;
      base: string;
    }
  ): Promise<PullRequest | null> {
    try {
      // In a real implementation, this would use the actual GitHub API
      // const response = await this.apiClient.post(`/repos/${owner}/${repo}/pulls`, options);
      // return response.data;
      
      // Mock response for demonstration
      return {
        id: 1,
        number: 1,
        title: options.title,
        body: options.body,
        state: 'open',
        html_url: `https://github.com/${owner}/${repo}/pull/1`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        user: {
          login: 'username',
          avatar_url: 'https://github.com/username.png',
        },
        head: {
          ref: options.head,
          sha: 'abc123',
        },
        base: {
          ref: options.base,
          sha: 'def456',
        },
      };
    } catch (error) {
      console.error('Error creating pull request:', error);
      return null;
    }
  }

  /**
   * Create an issue
   */
  async createIssue(
    owner: string,
    repo: string,
    options: {
      title: string;
      body: string;
      labels?: string[];
    }
  ): Promise<Issue | null> {
    try {
      // In a real implementation, this would use the actual GitHub API
      // const response = await this.apiClient.post(`/repos/${owner}/${repo}/issues`, options);
      // return response.data;
      
      // Mock response for demonstration
      return {
        id: 1,
        number: 1,
        title: options.title,
        body: options.body,
        state: 'open',
        html_url: `https://github.com/${owner}/${repo}/issues/1`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        user: {
          login: 'username',
          avatar_url: 'https://github.com/username.png',
        },
        labels: options.labels?.map(label => ({
          name: label,
          color: '0366d6',
        })) || [],
      };
    } catch (error) {
      console.error('Error creating issue:', error);
      return null;
    }
  }
}

/**
 * Initialize GitHub client
 */
export const initGitHubClient = (config: GitHubConfig): GitHubClient => {
  return new GitHubClient(config);
};

/**
 * GitHub OAuth utilities
 */
export const gitHubOAuth = {
  /**
   * Get OAuth URL for GitHub authentication
   */
  getAuthUrl(clientId: string, redirectUri: string, scopes: string[] = ['repo', 'user']): string {
    const scope = scopes.join(' ');
    const url = new URL('https://github.com/login/oauth/authorize');
    url.searchParams.append('client_id', clientId);
    url.searchParams.append('redirect_uri', redirectUri);
    url.searchParams.append('scope', scope);
    url.searchParams.append('state', Math.random().toString(36).substring(7));
    
    return url.toString();
  },
  
  /**
   * Exchange code for access token (this should be done server-side)
   */
  async getAccessToken(
    code: string,
    clientId: string,
    clientSecret: string
  ): Promise<string | null> {
    try {
      // This should be implemented on the server side to keep clientSecret secure
      // For demonstration only
      console.log('Would exchange code for token with:', { code, clientId, clientSecret });
      return 'mock_access_token';
    } catch (error) {
      console.error('Error getting access token:', error);
      return null;
    }
  },
};

export default initGitHubClient; 
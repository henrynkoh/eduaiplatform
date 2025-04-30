/**
 * n8n Integration Utilities
 * 
 * This file contains utilities for integrating with n8n, an open-source
 * workflow automation tool that can connect with 400+ services including
 * GitHub, Slack, OpenAI, etc.
 */

import axios from 'axios';

// Types for n8n configuration
export interface N8nConfig {
  baseUrl: string;
  apiKey: string;
}

// Types for workflow execution
export interface WorkflowExecutionData {
  workflowId: string;
  data?: Record<string, any>;
}

// Types for workflow data
export interface Workflow {
  id: string;
  name: string;
  active: boolean;
  nodes: WorkflowNode[];
  connections: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface WorkflowNode {
  id: string;
  name: string;
  type: string;
  parameters: Record<string, any>;
  position: [number, number];
}

/**
 * n8n API client for workflow automation
 */
export class N8nClient {
  private config: N8nConfig;
  private apiClient: ReturnType<typeof axios.create>;

  constructor(config: N8nConfig) {
    this.config = {
      baseUrl: config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`,
      apiKey: config.apiKey,
    };
    
    // Create API client
    this.apiClient = axios.create({
      baseURL: this.config.baseUrl,
      headers: {
        'X-N8N-API-KEY': this.config.apiKey,
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Get all workflows
   */
  async getWorkflows(): Promise<Workflow[]> {
    try {
      // In a real implementation, this would make an API call to n8n
      // const response = await this.apiClient.get('workflows');
      // return response.data.data;
      
      // Mock response for demonstration
      return [
        {
          id: 'github-pr-review',
          name: 'GitHub PR Review Automation',
          active: true,
          nodes: [
            { id: 'node1', name: 'GitHub Trigger', type: 'n8n-nodes-base.github', parameters: {}, position: [100, 100] },
            { id: 'node2', name: 'OpenAI', type: 'n8n-nodes-base.openAi', parameters: {}, position: [300, 100] },
          ],
          connections: {},
          createdAt: '2023-04-15T12:00:00.000Z',
          updatedAt: '2023-04-15T14:30:00.000Z',
        },
        {
          id: 'course-completion-notification',
          name: 'Course Completion Notifications',
          active: true,
          nodes: [
            { id: 'node1', name: 'Webhook', type: 'n8n-nodes-base.webhook', parameters: {}, position: [100, 100] },
            { id: 'node2', name: 'Slack', type: 'n8n-nodes-base.slack', parameters: {}, position: [300, 100] },
          ],
          connections: {},
          createdAt: '2023-03-03T09:00:00.000Z',
          updatedAt: '2023-03-03T10:15:00.000Z',
        },
      ];
    } catch (error) {
      console.error('Error fetching workflows:', error);
      throw error;
    }
  }

  /**
   * Get a workflow by ID
   */
  async getWorkflow(id: string): Promise<Workflow | null> {
    try {
      // In a real implementation, this would make an API call to n8n
      // const response = await this.apiClient.get(`workflows/${id}`);
      // return response.data;
      
      // Mock response for demonstration
      const workflows = await this.getWorkflows();
      return workflows.find(workflow => workflow.id === id) || null;
    } catch (error) {
      console.error(`Error fetching workflow ${id}:`, error);
      return null;
    }
  }

  /**
   * Execute a workflow by ID with optional data
   */
  async executeWorkflow(execution: WorkflowExecutionData): Promise<any> {
    try {
      // In a real implementation, this would make an API call to n8n
      // const response = await this.apiClient.post(`workflows/${execution.workflowId}/execute`, {
      //   data: execution.data || {},
      // });
      // return response.data;
      
      // Mock response for demonstration
      console.log(`Executing workflow ${execution.workflowId} with data:`, execution.data);
      return {
        executionId: `exec-${Date.now()}`,
        status: 'success',
        data: {
          result: `Mocked result for workflow ${execution.workflowId}`,
          timestamp: new Date().toISOString(),
        },
      };
    } catch (error) {
      console.error(`Error executing workflow ${execution.workflowId}:`, error);
      throw error;
    }
  }

  /**
   * Activate a workflow
   */
  async activateWorkflow(id: string): Promise<boolean> {
    try {
      // In a real implementation, this would make an API call to n8n
      // await this.apiClient.post(`workflows/${id}/activate`);
      
      // Mock response for demonstration
      console.log(`Activating workflow ${id}`);
      return true;
    } catch (error) {
      console.error(`Error activating workflow ${id}:`, error);
      return false;
    }
  }

  /**
   * Deactivate a workflow
   */
  async deactivateWorkflow(id: string): Promise<boolean> {
    try {
      // In a real implementation, this would make an API call to n8n
      // await this.apiClient.post(`workflows/${id}/deactivate`);
      
      // Mock response for demonstration
      console.log(`Deactivating workflow ${id}`);
      return true;
    } catch (error) {
      console.error(`Error deactivating workflow ${id}:`, error);
      return false;
    }
  }

  /**
   * Create a new workflow
   */
  async createWorkflow(workflow: Partial<Workflow>): Promise<Workflow | null> {
    try {
      // In a real implementation, this would make an API call to n8n
      // const response = await this.apiClient.post('workflows', workflow);
      // return response.data;
      
      // Mock response for demonstration
      console.log('Creating new workflow:', workflow.name);
      return {
        id: `workflow-${Date.now()}`,
        name: workflow.name || 'New Workflow',
        active: false,
        nodes: workflow.nodes || [],
        connections: workflow.connections || {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Error creating workflow:', error);
      return null;
    }
  }
}

/**
 * Initialize n8n client with configuration
 */
export const initN8nClient = (config: N8nConfig): N8nClient => {
  return new N8nClient(config);
};

/**
 * Example workflow templates for educational platform
 */
export const workflowTemplates = {
  // GitHub PR Review workflow template
  githubPrReview: {
    name: 'GitHub PR Review',
    nodes: [
      {
        id: 'node1',
        name: 'GitHub Trigger',
        type: 'n8n-nodes-base.githubTrigger',
        parameters: {
          events: ['pull_request.opened', 'pull_request.synchronize'],
          owner: '${GITHUB_OWNER}',
          repository: '${GITHUB_REPO}',
        },
        position: [100, 100],
      },
      {
        id: 'node2',
        name: 'Get PR Content',
        type: 'n8n-nodes-base.github',
        parameters: {
          resource: 'pullRequest',
          operation: 'get',
          owner: '=${$node["GitHub Trigger"].json.repository.owner.login}',
          repository: '=${$node["GitHub Trigger"].json.repository.name}',
          pullRequestNumber: '=${$node["GitHub Trigger"].json.pull_request.number}',
        },
        position: [300, 100],
      },
      {
        id: 'node3',
        name: 'Code Analysis',
        type: 'n8n-nodes-base.openAi',
        parameters: {
          resource: 'chat',
          prompt: '=${`Please review this code:\n\n${$node["Get PR Content"].json.body}\n\nProvide feedback on:`}',
          model: 'gpt-4',
        },
        position: [500, 100],
      },
      {
        id: 'node4',
        name: 'Post Comment',
        type: 'n8n-nodes-base.github',
        parameters: {
          resource: 'issue',
          operation: 'createComment',
          owner: '=${$node["GitHub Trigger"].json.repository.owner.login}',
          repository: '=${$node["GitHub Trigger"].json.repository.name}',
          issueNumber: '=${$node["GitHub Trigger"].json.pull_request.number}',
          body: '=${$node["Code Analysis"].json.response}',
        },
        position: [700, 100],
      },
    ],
    connections: {
      'GitHub Trigger': {
        main: [
          [
            {
              node: 'Get PR Content',
              type: 'main',
              index: 0,
            },
          ],
        ],
      },
      'Get PR Content': {
        main: [
          [
            {
              node: 'Code Analysis',
              type: 'main',
              index: 0,
            },
          ],
        ],
      },
      'Code Analysis': {
        main: [
          [
            {
              node: 'Post Comment',
              type: 'main',
              index: 0,
            },
          ],
        ],
      },
    },
  },
  
  // Course Completion Notification workflow template
  courseCompletionNotification: {
    name: 'Course Completion Notification',
    nodes: [
      {
        id: 'node1',
        name: 'Webhook',
        type: 'n8n-nodes-base.webhook',
        parameters: {
          path: 'course-completion',
          responseMode: 'onReceived',
          responseData: 'success',
        },
        position: [100, 100],
      },
      {
        id: 'node2',
        name: 'Format Message',
        type: 'n8n-nodes-base.function',
        parameters: {
          functionCode: `
            const data = items[0].json;
            return [{
              json: {
                studentName: data.studentName,
                courseTitle: data.courseTitle,
                completionDate: new Date().toLocaleDateString(),
                message: \`Congratulations \${data.studentName} on completing \${data.courseTitle}!\`,
              }
            }];
          `,
        },
        position: [300, 100],
      },
      {
        id: 'node3',
        name: 'Send Email',
        type: 'n8n-nodes-base.emailSend',
        parameters: {
          from: 'education@example.com',
          to: '=${$node["Webhook"].json.studentEmail}',
          subject: '=${`Course Completion: ${$node["Webhook"].json.courseTitle}`}',
          text: '=${$node["Format Message"].json.message}',
        },
        position: [500, 100],
      },
      {
        id: 'node4',
        name: 'Slack Notification',
        type: 'n8n-nodes-base.slack',
        parameters: {
          resource: 'message',
          channel: 'course-completions',
          text: '=${$node["Format Message"].json.message}',
        },
        position: [500, 250],
      },
    ],
    connections: {
      'Webhook': {
        main: [
          [
            {
              node: 'Format Message',
              type: 'main',
              index: 0,
            },
          ],
        ],
      },
      'Format Message': {
        main: [
          [
            {
              node: 'Send Email',
              type: 'main',
              index: 0,
            },
            {
              node: 'Slack Notification',
              type: 'main',
              index: 0,
            },
          ],
        ],
      },
    },
  },
};

export default initN8nClient; 
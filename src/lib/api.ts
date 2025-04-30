import axios from 'axios';

// Base API client with default configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Types for API responses
export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  instructor: string;
  rating: number;
  studentsEnrolled: number;
  progress?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  joined: string;
  progress: {
    coursesCompleted: number;
    coursesInProgress: number;
    certificatesEarned: number;
    totalHours: number;
  };
}

export interface Workflow {
  id: string;
  title: string;
  description: string;
  platforms: string[];
  complexity: string;
  creator: string;
  lastUpdated: string;
}

// Course API functions
export const fetchCourses = async (): Promise<Course[]> => {
  try {
    const response = await api.get('/courses');
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
};

export const fetchCourseById = async (courseId: string): Promise<Course | null> => {
  try {
    const response = await api.get(`/courses/${courseId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching course ${courseId}:`, error);
    return null;
  }
};

export const enrollInCourse = async (courseId: string, userId: string): Promise<boolean> => {
  try {
    await api.post('/enrollments', { courseId, userId });
    return true;
  } catch (error) {
    console.error('Error enrolling in course:', error);
    return false;
  }
};

// User API functions
export const fetchUserProfile = async (userId: string): Promise<User | null> => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user ${userId}:`, error);
    return null;
  }
};

export const updateUserProgress = async (
  userId: string, 
  courseId: string, 
  progress: number
): Promise<boolean> => {
  try {
    await api.put(`/users/${userId}/progress`, { courseId, progress });
    return true;
  } catch (error) {
    console.error('Error updating progress:', error);
    return false;
  }
};

// n8n Integration API functions
export const fetchWorkflows = async (): Promise<Workflow[]> => {
  try {
    const response = await api.get('/workflows');
    return response.data;
  } catch (error) {
    console.error('Error fetching workflows:', error);
    return [];
  }
};

export const fetchWorkflowById = async (workflowId: string): Promise<Workflow | null> => {
  try {
    const response = await api.get(`/workflows/${workflowId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching workflow ${workflowId}:`, error);
    return null;
  }
};

export const executeWorkflow = async (
  workflowId: string, 
  data: Record<string, any>
): Promise<any> => {
  try {
    const response = await api.post(`/workflows/${workflowId}/execute`, data);
    return response.data;
  } catch (error) {
    console.error(`Error executing workflow ${workflowId}:`, error);
    throw error;
  }
};

// MCP (Model Context Protocol) API functions
export const queryMCPAgent = async (
  prompt: string, 
  context?: Record<string, any>
): Promise<any> => {
  try {
    const response = await api.post('/mcp/query', { 
      prompt, 
      context: context || {} 
    });
    return response.data;
  } catch (error) {
    console.error('Error querying MCP agent:', error);
    throw error;
  }
};

export const generateCourseContent = async (
  topic: string,
  level: string = 'beginner',
  format: string = 'modules'
): Promise<any> => {
  try {
    const response = await api.post('/mcp/generate-content', {
      topic,
      level, 
      format
    });
    return response.data;
  } catch (error) {
    console.error('Error generating course content:', error);
    throw error;
  }
};

// GitHub integration APIs
export const connectGitHubAccount = async (
  code: string
): Promise<boolean> => {
  try {
    await api.post('/github/connect', { code });
    return true;
  } catch (error) {
    console.error('Error connecting GitHub account:', error);
    return false;
  }
};

export const fetchGitHubRepos = async (): Promise<any[]> => {
  try {
    const response = await api.get('/github/repos');
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};

export const createPullRequest = async (
  repoName: string,
  base: string,
  head: string,
  title: string,
  body: string
): Promise<any> => {
  try {
    const response = await api.post('/github/create-pr', {
      repoName,
      base,
      head,
      title,
      body
    });
    return response.data;
  } catch (error) {
    console.error('Error creating pull request:', error);
    throw error;
  }
};

export default api; 
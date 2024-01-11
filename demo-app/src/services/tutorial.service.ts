import axios from 'axios';
import ITutorialData from "../types/tutorial.type";

const API_BASE_URL = 'http://localhost:3000'; // Set your Rails API base URL here

const ApiService = {
  getAllTutorials: async (): Promise<Array<ITutorialData>> => {
    try {
      const response = await axios.get<Array<ITutorialData>>(`${API_BASE_URL}/users`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Error fetching tutorials:', error);
      throw error;
    }
  },

  getTutorialById: async (id: string): Promise<ITutorialData> => {
    try {
      const response = await axios.get<ITutorialData>(`${API_BASE_URL}/users/${id}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error(`Error fetching tutorial with ID ${id}:`, error);
      throw error;
    }
  },

  createTutorial: async (data: ITutorialData): Promise<ITutorialData> => {
    try {
      const response = await axios.post<ITutorialData>(`${API_BASE_URL}/users`, data, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Error creating tutorial:', error);
      throw error;
    }
  },

  updateTutorial: async (id: string, data: ITutorialData): Promise<void> => {
    try {
      await axios.put(`${API_BASE_URL}/users/${id}`, data, { withCredentials: true });
    } catch (error) {
      console.error(`Error updating tutorial with ID ${id}:`, error);
      throw error;
    }
  },

  deleteTutorial: async (id: string): Promise<void> => {
    try {
      await axios.delete(`${API_BASE_URL}/users/${id}`, { withCredentials: true });
    } catch (error) {
      console.error(`Error deleting tutorial with ID ${id}:`, error);
      throw error;
    }
  },

  deleteAllTutorials: async (): Promise<void> => {
    try {
      await axios.delete(`${API_BASE_URL}/users`, { withCredentials: true });
    } catch (error) {
      console.error('Error deleting all tutorials:', error);
      throw error;
    }
  },

  findByTitle: async (title: string): Promise<Array<ITutorialData>> => {
    try {
      const response = await axios.get<Array<ITutorialData>>(`${API_BASE_URL}/users?title=${title}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error(`Error fetching tutorials with title ${title}:`, error);
      throw error;
    }
  },
};

export default ApiService;

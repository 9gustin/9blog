import { ApisauceInstance, create } from "apisauce";

import { ACTIONS, ACTIONTYPES, API_URL, CATEGORIES, POSTS, PROFILES } from "./config";

class HttpClient {
  static instance: ApisauceInstance | null = null;

  private static createInstance(): ApisauceInstance {
    const httpClient = create({
      baseURL: API_URL,
    });

    return httpClient;
  }

  static getInstance(): ApisauceInstance {
    if (!HttpClient.instance) {
      HttpClient.instance = HttpClient.createInstance();
    }
    return HttpClient.instance;
  }

  static async getAll(
    type: typeof POSTS | typeof PROFILES | typeof CATEGORIES | typeof ACTIONS | typeof ACTIONTYPES,
  ): Promise<any | [] | null> {
    const response = await HttpClient.getInstance().get(type);

    if (response.ok) return response.data;

    return null;
  }
}

export default HttpClient;

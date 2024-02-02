import { Axios } from 'axios';
export declare class BaseAPIClient {
    apiKey?: string;
    apiBaseURL: string;
    httpClient: Axios;
    headers: any;
    constructor(apiBaseURL: string, apiKeyValue?: string, apiKeyName?: string);
    _get(path: string, params: Record<string, string>): Promise<any>;
    _post<T>(path: string, payload: T): Promise<any>;
    _handleResponse(resp: any): Promise<any>;
}

export interface Result {
    code: number;
    error: string;
    data: any;
}
export declare class MakeResult {
    static success(data?: any): Result;
    static fail(error?: string, data?: null): Result;
    static err(code?: number, error?: string, data?: null): Result;
}

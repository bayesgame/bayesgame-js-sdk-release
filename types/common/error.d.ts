import { CustomError } from "ts-custom-error";
export declare const ERRCODE: {
    success: number;
    fail: number;
    notfound: number;
    handled: number;
    existed: number;
    invalid: number;
    process: number;
    parameter: number;
    unknown: number;
    except: number;
};
export declare function errmsg(code?: number): string;
export declare class AppError extends CustomError {
    code: number;
    constructor(code: number, message?: string);
}

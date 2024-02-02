import type { TransactionMethods, ContractMethodReturnType } from './types';
export declare const getTransactionMethods: <T extends Contract, U extends keyof T["functions"]>(contract: T, method: U, args: Parameters<T["functions"][U]>) => TransactionMethods<Awaited<ReturnType<T["callStatic"][U]>>>;

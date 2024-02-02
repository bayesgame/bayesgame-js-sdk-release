import { Contract } from 'ethers';
import { Chain } from './chain';
import type { FunctionFragment, Interface, Result } from '@ethersproject/abi';
import { BigNumber } from '@ethersproject/bignumber';
export type MethodArg = string | number | BigNumber;
export type MethodArgs = Array<MethodArg | MethodArg[]>;
export declare function isMethodArg(x: any): x is MethodArg;
export declare function isValidMethodArgs(x: any): x is MethodArgs | undefined;
export type CallTyped = {
    target: string;
    gasLimit: number;
    callData: string | undefined;
};
export type CallResult = {
    valid: boolean;
    result: Result;
};
export type CallState = {
    valid: boolean;
    result: Result | undefined;
    error: boolean;
};
export declare function useSingleContractWithCallData(chain: Chain, contract: Contract, callData: any[], options?: any): Promise<CallState[]>;
export declare function useMultipleContractSingleData(chain: Chain, addresses: (string | undefined)[], contractInterface: Interface, methodName: string, callInputs?: (string | number | import('ethers').BigNumber | MethodArg[] | undefined)[] | undefined, options?: any): Promise<CallState[]>;
export declare function multicall(chain: Chain, callData: CallTyped[]): Promise<string[]>;
export declare function decodeCall(data: string, contractInterface: Interface, fragment: FunctionFragment | string): CallState;

import type { ERC20 as ERC20Contract } from './common/typechain/ERC20';
import type { TransactionMethods, ContractMethodReturnType, TypedTokenInfo } from './common/types';
import { Chain } from './chain';
import { BaseContract } from './contract';
export declare class ERC20 extends BaseContract {
    maxAllowanced: string;
    constructor(chain: Chain, contractAddress: string);
    approve(spender: string, amount?: string): TransactionMethods<ContractMethodReturnType<ERC20Contract, 'approve'>>;
    transfer(to: string, amount: string): TransactionMethods<ContractMethodReturnType<ERC20Contract, 'transfer'>>;
    transferFrom(from: string, to: string, amount: string): TransactionMethods<ContractMethodReturnType<ERC20Contract, 'transferFrom'>>;
    info(): Promise<TypedTokenInfo>;
    name(): Promise<string>;
    symbol(): Promise<string>;
    decimals(): Promise<number>;
    balanceOf(address: string): Promise<string>;
    allowance(owner: string, spender: string): Promise<string>;
    private _info;
    getTransferEvent(fromBlock: string | number, toBlock?: string | number): Promise<any>;
    approveEncodeFunction(spender: string, amount: string): import("./common/types").TypedFunctionData;
    transferEncodeFunction(to: string, amount: string): import("./common/types").TypedFunctionData;
    transferFromEncodeFunction(from: string, to: string, amount: string): import("./common/types").TypedFunctionData;
    balanceOfEncodeFunction(address: string): any;
    allowanceEncodeFunction(owner: string, spender: string): any;
}
export declare function getERC20(chain: Chain, address: string): ERC20;

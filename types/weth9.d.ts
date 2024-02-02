import type { WETH9 as WETH9Contract } from './common/typechain/WETH9';
import { Chain } from './chain';
import { BaseContract } from './contract';
import type { TransactionMethods, ContractMethodReturnType, TypedTokenInfo, TypedCallParameter } from './common/types';
export declare class WETH9 extends BaseContract {
    maxAllowanced: string;
    constructor(chain: Chain, contractAddress: string);
    deposit(value: string): TransactionMethods<ContractMethodReturnType<WETH9Contract, 'deposit'>>;
    withdraw(amount: string): TransactionMethods<ContractMethodReturnType<WETH9Contract, 'withdraw'>>;
    approve(spender: string, amount?: string): TransactionMethods<ContractMethodReturnType<WETH9Contract, 'approve'>>;
    transfer(to: string, amount: string): TransactionMethods<ContractMethodReturnType<WETH9Contract, 'transfer'>>;
    transferFrom(from: string, to: string, amount: string): TransactionMethods<ContractMethodReturnType<WETH9Contract, 'transferFrom'>>;
    info(): Promise<TypedTokenInfo>;
    name(): Promise<string>;
    symbol(): Promise<string>;
    decimals(): Promise<number>;
    balanceOf(address: string): Promise<string>;
    allowance(owner: string, spender: string): Promise<string>;
    private _info;
    getTransferEvent(fromBlock: string | number, toBlock?: string | number): Promise<any>;
    balanceOfEncodeFunction(address: string): any;
    allowanceEncodeFunction(owner: string, spender: string): any;
    callDeposit(value: string): TypedCallParameter;
    callWithdraw(value: string): TypedCallParameter;
}

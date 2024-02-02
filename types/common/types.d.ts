import { BigNumber, BigNumberish, BytesLike, Contract, ContractTransaction, ethers, Overrides, PopulatedTransaction } from 'ethers';
import { ItemType } from '../constants';
import type { ERC721 } from './typechain/ERC721';
import type { ERC20 } from './typechain/ERC20';
export type Result = {
    code: number;
    msg: string;
    data: any;
};
export type TypedDataDomain = {
    name?: string;
    version?: string;
    chainId?: BigNumberish;
    verifyingContract?: string;
    salt?: BytesLike;
};
export type TypedDataField = {
    name: string;
    type: string;
};
export type Signer = ethers.Signer & {
    _signTypedData(domain: TypedDataDomain, types: Record<string, Array<TypedDataField>>, value: Record<string, any>): Promise<string>;
};
export type ContractMethodReturnType<T extends Contract, U extends keyof T['callStatic']> = Awaited<ReturnType<T['callStatic'][U]>>;
export type TransactionMethods<T = unknown> = {
    encodeFunction: (overrides?: Overrides) => TypedFunctionData;
    buildTransaction: (overrides?: Overrides) => Promise<PopulatedTransaction>;
    callStatic: (overrides?: Overrides) => Promise<T>;
    estimateGas: (overrides?: Overrides) => Promise<BigNumber>;
    transact: (overrides?: Overrides) => Promise<ContractTransaction>;
};
export type ApprovalAction = {
    type: 'approval';
    token: string;
    identifierOrCriteria: string;
    itemType: ItemType;
    operator: string;
    transactionMethods: TransactionMethods<ContractMethodReturnType<ERC721, 'setApprovalForAll'>> | TransactionMethods<ContractMethodReturnType<ERC20, 'approve'>>;
};
export type Item = {
    itemType: ItemType;
    token: string;
    identifierOrCriteria: string;
};
export type Items = Item[];
export type InputCriteria = {
    identifier: string;
    proof: string[];
};
export type TypedTokenInfo = {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    standard?: string;
};
export type TypedFunctionData = {
    value: BigNumberish;
    data: BytesLike;
};
export type AccessList = Array<{
    address: string;
    storageKeys: Array<string>;
}>;
export type AccessListish = AccessList | Array<[string, Array<string>]> | Record<string, Array<string>>;
export type TransactionRequest = {
    to?: string;
    from?: string;
    nonce?: BigNumberish;
    gasLimit?: BigNumberish;
    gasPrice?: BigNumberish;
    data?: BytesLike;
    value?: BigNumberish;
    chainId?: number;
    type?: number;
    accessList?: AccessListish;
    maxPriorityFeePerGas?: BigNumberish;
    maxFeePerGas?: BigNumberish;
    customData?: Record<string, any>;
    ccipReadEnabled?: boolean;
};
export type TypedCallParameter = {
    address: string;
    calldata: string;
    value: string;
};
export type TypedAsset = {
    tokenId: string;
    tokenAddress: string;
    schemaName?: string;
    name?: string;
    decimals?: number;
};

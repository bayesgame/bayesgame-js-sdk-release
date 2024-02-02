import { ethers, Wallet } from 'ethers';
import { Filter } from '@ethersproject/abstract-provider';
import { BaseContract } from './contract';
import type { Signer, TypedTokenInfo, TypedDataDomain, TypedDataField, TransactionRequest } from './common/types';
export type ProviderOrSigner = ethers.providers.JsonRpcProvider | Signer;
export declare class Chain {
    provider: ProviderOrSigner;
    signer?: Signer;
    chainId: number;
    contracts: BaseContract[];
    contractmaps: Record<string, BaseContract>;
    tokens: Record<string, TypedTokenInfo>;
    cache: boolean;
    setProvider(providerOrSigner: ProviderOrSigner): void;
    setOutProvider(provider_: any): void;
    register(contract: BaseContract): void;
    clean(): void;
    connectContract(signer?: Signer): void;
    zeroSymbol(): string;
    wSymbol(): string;
    isZeroAddress(address: string): boolean;
    isZero(v: any): boolean;
    setToken(address: string, token: TypedTokenInfo): void;
    getToken(address: string): TypedTokenInfo;
    getTokenAddr(name: string): any;
    getWethAddr(): any;
    getNativeAddr(): string;
    getProvider(): any;
    getBlockNumber(): Promise<any>;
    getBlock(blockTag: string | number): Promise<any>;
    getGasPrice(): Promise<any>;
    estimateGas(transaction: TransactionRequest): Promise<string>;
    getBalance(address?: string): Promise<string>;
    getTransactionReceipt(transactionHash: any): Promise<any>;
    getSigner(addressOrIndex?: string | number): Signer;
    getAccount(): Promise<string>;
    sendTransaction(transaction: TransactionRequest): Promise<import("@ethersproject/abstract-provider").TransactionResponse>;
    signTransaction(transaction: TransactionRequest): Promise<string>;
    sendSignedTx(signedTx: any): Promise<any>;
    signMessage(message: string): Promise<string>;
    signTypedMessage(domain: TypedDataDomain, types: Record<string, Array<TypedDataField>>, values: Record<string, any>): Promise<string>;
    getLogs(filter: Filter): Promise<any>;
    getEthLogs(filter: {
        address?: string | string[];
        topics?: string[];
        fromBlock: string | number;
        toBlock: string | number;
    }): Promise<any>;
}
export declare class LocalChain extends Chain {
    constructor(chainId: number, rpc?: string);
    connect(wallet: Wallet): void;
}
export declare class BrowserChain extends Chain {
}
export declare function getChain(chainId: number): LocalChain;

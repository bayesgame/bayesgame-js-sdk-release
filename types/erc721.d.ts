import type { ERC721 as ERC721Contract } from './common/typechain/ERC721';
import type { TransactionMethods, ContractMethodReturnType, TypedTokenInfo } from './common/types';
import { Chain } from './chain';
import { BaseContract } from './contract';
export declare class ERC721 extends BaseContract {
    constructor(chain: Chain, contractAddress: string, abi?: any);
    transferFrom(from: string, to: string, tokenId: number | string): TransactionMethods<ContractMethodReturnType<ERC721Contract, 'transferFrom'>>;
    approve(operator: string, tokenId: number | string): TransactionMethods<ContractMethodReturnType<ERC721Contract, 'approve'>>;
    setApprovalForAll(operator: string, approved: boolean): TransactionMethods<ContractMethodReturnType<ERC721Contract, 'setApprovalForAll'>>;
    isApprovedForAll(owner: string, operator: string): Promise<boolean>;
    info(): Promise<TypedTokenInfo>;
    name(): Promise<string>;
    symbol(): Promise<string>;
    balanceOf(address: string): Promise<string>;
    tokenURI(tokenId: number | string): Promise<string>;
    ownerOf(tokenId: number | string): Promise<string>;
    private _info;
    getTransferEvent(fromBlock: string | number, toBlock?: string | number): Promise<any>;
    approveEncodeFunction(operator: string, tokenId: number | string): import("./common/types").TypedFunctionData;
    setApprovalForAllEncodeFunction(operator: string, approved: boolean): import("./common/types").TypedFunctionData;
    transferFromEncodeFunction(from: string, to: string, tokenId: number | string): import("./common/types").TypedFunctionData;
    ownerOfEncodeFunction(tokenId: number | string): any;
    isApprovedForAllEncodeFunction(owner: string, operator: string): any;
}
export declare function getERC721(chain: Chain, address: string): ERC721;

import { providers as multicallProviders } from '@0xsequence/multicall';
import { Contract, ethers } from 'ethers';
import { Chain } from './chain';
declare class BaseContract {
    contract: Contract;
    address: string;
    chain: Chain;
    provider: ethers.providers.Provider;
    multicallProvider: multicallProviders.MulticallProvider;
    constructor(chain: Chain, address: string, abi: any);
}
export declare class ERC165 extends BaseContract {
    constructor(chain: Chain, contractAddress: string);
    supportsInterface(interfaceId: string): Promise<string>;
}
export declare function getERC165(chain: Chain, address: string): ERC165;
export {};

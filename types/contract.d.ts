import { providers as multicallProviders } from '@0xsequence/multicall';
import { Contract, ethers } from 'ethers';
import type { Signer } from './common/types';
import { Chain } from './chain';
export declare class BaseContract {
    contract: Contract;
    address: string;
    chain: Chain;
    provider: ethers.providers.Provider;
    multicallProvider: multicallProviders.MulticallProvider;
    constructor(chain: Chain, address: string, abi: any);
    connect(signer?: Signer): this;
    _getSigner(addressOrIndex?: string | number): Signer;
    getEvent(fromBlock: string | number, toBlock?: string | number): Promise<any>;
}

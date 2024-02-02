import { BigNumberish, BytesLike, Wallet } from 'ethers';
import type { Ticket as TicketContract } from './typechain/Ticket';
import type { TransactionMethods, ContractMethodReturnType } from '../common/types';
import { TypedDataDomain } from '@ethersproject/abstract-signer';
import { Chain } from '../chain';
import { ERC721 } from '../erc721';
import { NetworkMeta } from './network';
export declare class Ticket extends ERC721 {
    networkMeta: NetworkMeta;
    domain: TypedDataDomain | undefined;
    signer: Wallet | undefined;
    constructor(chain: Chain, contractAddress?: string);
    mint(_sn: BytesLike, _expired: BigNumberish, _signature: BytesLike): TransactionMethods<ContractMethodReturnType<TicketContract, 'mint'>>;
    exists(_tokenId: BigNumberish): Promise<any>;
    getFormatCode(_tokenId: BigNumberish): Promise<any>;
    getFormatCodes(_tokenIds: BigNumberish[]): Promise<any>;
    getUserTokens(_user: string): Promise<any>;
    pageUserTokens(_user: string, _cursor: BigNumberish, _size: BigNumberish): Promise<any>;
    setSigner(_signer: Wallet): void;
}
export declare function getTicket(chain: Chain, address?: string): Ticket;

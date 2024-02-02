import { BigNumberish, BytesLike, Wallet } from 'ethers';
import type { LottoNumbers as LottoNumbersContract } from './typechain/LottoNumbers';
import type { TransactionMethods, ContractMethodReturnType } from '../common/types';
import { TypedDataDomain } from '@ethersproject/abstract-signer';
import { Chain } from '../chain';
import { ERC1155 } from '../erc1155';
import { NetworkMeta } from './network';
export declare class LottoNumbers extends ERC1155 {
    networkMeta: NetworkMeta;
    domain: TypedDataDomain | undefined;
    signer: Wallet | undefined;
    constructor(chain: Chain, contractAddress?: string);
    mint(_sn: BytesLike, _expired: BigNumberish, _signature: BytesLike): TransactionMethods<ContractMethodReturnType<LottoNumbersContract, 'mint'>>;
    exists(_tokenId: BigNumberish): Promise<any>;
    getFormatCode(_tokenId: BigNumberish): Promise<any>;
    getFormatCodes(_tokenIds: BigNumberish[]): Promise<any>;
    getUserTokens(_user: string): Promise<any>;
    pageUserTokens(_user: string, _cursor: BigNumberish, _size: BigNumberish): Promise<any>;
    setSigner(_signer: Wallet): void;
}
export declare function getLottoNumbers(chain: Chain, address?: string): LottoNumbers;

import { BigNumberish, Wallet } from 'ethers';
import { TypedDataDomain } from '@ethersproject/abstract-signer';
import { Chain } from '../chain';
import { ERC721 } from '../erc721';
import { NetworkMeta } from './network';
export declare class Ticket extends ERC721 {
    networkMeta: NetworkMeta;
    domain: TypedDataDomain | undefined;
    signer: Wallet | undefined;
    constructor(chain: Chain, contractAddress?: string);
    checkTransfer(_from: string, _to: string): Promise<any>;
    exists(_tokenId: BigNumberish): Promise<any>;
    /**
     * @notice Decodes and retrieves the serial number, the block number and a sequence of numbers for a specific token ID
     * @param _tokenId The token ID to retrieve the decoded data for
     * @return sn the Serial number encoded into the tokenId
     * @return blockNumber The block number encoded into the tokenId at the time of minting
     * @return numbers An array of uint8 representing additional numbers encoded in the tokenId
     */
    decode(_tokenId: BigNumberish): Promise<any>;
    /**
     * @notice Decodes and retrieves the serial numbers, the block numbers and sequences of numbers for multiple token IDs
     * @param _tokenIds An array of token IDs to retrieve the decoded data for
     * @return result An array of `TicketData` structs, each containing a serial number, a block number and an array of numbers corresponding to each token ID
     */
    decodeBatch(_tokenIds: BigNumberish[]): Promise<any>;
    /**
     * @notice Retrieves the tokens owned by a specific account
     * @dev Iterates through the tokens that belong to an account address
     * @param _account The address to query the tokens of
     * @return A uint256 array containing token IDs owned by the passed account
     */
    getUserTokens(_user: string): Promise<any>;
    /**
     * @notice Retrieves a paginated list of tokens owned by a specific account
     * @dev Provides a way to paginate through the tokens of an owner to avoid high gas costs
     * @param _user The address to query the tokens of
     * @param _cursor The index of the first token to start retrieving from
     * @param _size The number of tokens to retrieve in this batch
     * @return A tuple containing an array of token IDs, the next cursor position, and the total count of tokens
     */
    pageUserTokens(_user: string, _cursor: BigNumberish, _size: BigNumberish): Promise<any>;
    /**
     * @notice Retrieves a paginated list of tokens owned by a specific account in reverse order
     * @dev Provides a way to paginate through the tokens of an owner backwards to avoid high gas costs.
     * The `_cursor` should be set to `balanceOf(_user)` for the initial call and will be decremented with each call.
     * @param _user The address to query the tokens of
     * @param _cursor The end index for paging, exclusive. Use `balanceOf(_user)` for the initial call.
     * @param _size The number of tokens to retrieve in this batch
     * @return A tuple containing an array of token IDs, the next cursor position, and the total count of tokens
     */
    pageUserTokensReverse(_user: string, _cursor: BigNumberish, _size: BigNumberish): Promise<any>;
    setSigner(_signer: Wallet): void;
}
export declare function getTicket(chain: Chain, address?: string): Ticket;

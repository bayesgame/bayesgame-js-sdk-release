import { BigNumberish, Wallet } from 'ethers';
import { TypedDataDomain } from '@ethersproject/abstract-signer';
import { Chain } from '../chain';
import { ERC1155 } from '../erc1155';
import { NetworkMeta } from './network';
export declare class LottoNumbers extends ERC1155 {
    networkMeta: NetworkMeta;
    domain: TypedDataDomain | undefined;
    signer: Wallet | undefined;
    constructor(chain: Chain, contractAddress?: string);
    /**
     * @notice Retrieves the balances of all possible token types for a given account.
     * @dev The function creates an array representing all token IDs from 1 to maxId.
     * It then queries the balance of each token ID for the specified account and
     * stores it in the corresponding position of the array. This provides a complete
     * snapshot of the user's holdings across all token types managed by the contract.
     * @param _account The address of the user whose token balances are to be retrieved.
     * @return tokens An array where the index corresponds to the token ID (starting from 1)
     * and the value at each index is the balance of that token ID for the given account.
     */
    getUserTokens(_user: string): Promise<any>;
    /**
     * @notice Retrieves the total supply of all token types managed by the contract.
     * @dev This function iterates over all possible token IDs from 1 to maxId and
     * queries the total supply of each. It stores these values in an array,
     * providing a complete overview of the number of each token type that exists.
     * @return tokens An array indexed by token ID where each value is the total supply
     * of that token ID. The index starts from 1 and goes up to maxId inclusive.
     */
    getTotalSupplies(): Promise<any>;
    totalSupply(_id: BigNumberish): Promise<any>;
    maxId(): Promise<any>;
    setSigner(_signer: Wallet): void;
}
export declare function getLottoNumbers(chain: Chain, address?: string): LottoNumbers;

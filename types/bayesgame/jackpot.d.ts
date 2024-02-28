import { BigNumberish, Wallet } from 'ethers';
import type { Jackpot as JackpotContract } from './typechain/Jackpot';
import type { TransactionMethods, ContractMethodReturnType } from '../common/types';
import { Chain } from '../chain';
import { BaseContract } from '../contract';
import { NetworkMeta } from './network';
export declare class Jackpot extends BaseContract {
    networkMeta: NetworkMeta;
    signer: Wallet | undefined;
    constructor(chain: Chain, contractAddress?: string);
    /**
     * @notice Allows a user to join a jackpot pool by transferring a ticket token to the contract.
     * @param _tokenId The ID of the ticket token to be transferred.
     */
    join(_tokenId: BigNumberish): TransactionMethods<ContractMethodReturnType<JackpotContract, 'join'>>;
    /**
     * @notice Allows a user to batch join multiple jackpot pools by transferring multiple ticket tokens.
     * @param _tokenIds An array containing the IDs of ticket tokens to be transferred.
     */
    batchJoin(_tokenIds: BigNumberish[]): TransactionMethods<ContractMethodReturnType<JackpotContract, 'batchJoin'>>;
    /**
     * @notice Initiates the clearing process for a specific round and token ID.
     * @dev Only callable when the contract is enabled. It calculates the clearing fee,
     *      awards the bonuses, and increments the totalPool counter for the next pool.
     * @param _round The round number to clear.
     * @param _tokenId The ticket token ID associated with the clearing.
     */
    clearing(_round: BigNumberish, _tokenId: BigNumberish): TransactionMethods<ContractMethodReturnType<JackpotContract, 'clearing'>>;
    /**
     * @notice Performs the clearing process and then claims the bonuses for the user in one transaction.
     * @param _round The round number to clear.
     * @param _tokenId The ticket token ID associated with the clearing.
     */
    clearingAndClaim(_round: BigNumberish, _tokenId: BigNumberish): TransactionMethods<ContractMethodReturnType<JackpotContract, 'clearingAndClaim'>>;
    /**
     * @notice Allows a user to claim their share of bonuses from a particular pool.
     * @param _poolId The ID of the pool from which to claim bonuses.
     */
    claimBonuses(_poolId: BigNumberish): TransactionMethods<ContractMethodReturnType<JackpotContract, 'claimBonuses'>>;
    /**
     * @notice Allows a user to batch claim bonuses from multiple pools.
     * @param _poolIds An array of pool IDs from which to claim bonuses.
     */
    batchClaimBonuses(_poolIds: BigNumberish[]): TransactionMethods<ContractMethodReturnType<JackpotContract, 'batchClaimBonuses'>>;
    totalPool(): Promise<any>;
    clearingFeeRate(): Promise<any>;
    /**
     * @notice Provides information about the potential clearing data for a given round and token ID.
     * @dev Useful for determining the potential clearing fee and user bonuses for a token before actual clearing.
     * @param _round The round number for the query.
     * @param _tokenId The ticket token ID for the query.
     * @return A `ClearingData` struct containing the calculated clearing fee and user bonuses.
     */
    queryClearing(_round: BigNumberish, _tokenId: BigNumberish): Promise<any>;
    /**
     * @notice Batch queries the potential clearing data for multiple rounds and token IDs.
     * @param _rounds An array of round numbers for the queries.
     * @param _tokenIds An array of ticket token IDs for the queries.
     * @return An array of `ClearingData` structs for each provided round and token ID pair.
     */
    batchQueryClearing(_rounds: BigNumberish[], _tokenIds: BigNumberish[]): Promise<any>;
    /**
     * @notice Queries the bonus amount a user can claim from a specific pool.
     * @dev Calculates the user's share of the pool based on the number of tickets they hold.
     * @param _user The user address for the query.
     * @param _poolId The pool ID from which to query bonuses.
     * @return The amount of bonuses available to the user for claiming.
     */
    queryBonuses(_user: string, _poolId: BigNumberish): Promise<any>;
    /**
     * @notice Batch queries the bonus amounts a user can claim from multiple pools.
     * @param _user The user address for the queries.
     * @param _poolIds An array of pool IDs from which to query bonuses.
     * @return An array of bonus amounts available to the user across all specified pools.
     */
    batchQueryBonuses(_user: string, _poolIds: BigNumberish[]): Promise<any>;
    /**
     * @notice Gets the balance of the specified token or ETH within the contract.
     * @dev If checking for ETH, supply the zero address.
     * @param _token The address of the token contract (zero address for ETH)
     * @return The balance of the token or ETH
     */
    getBalance(_token: string): Promise<any>;
    setSigner(_signer: Wallet): void;
}
export declare function getJackpot(chain: Chain, address?: string): Jackpot;
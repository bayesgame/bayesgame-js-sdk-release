import { BigNumber, BigNumberish, BytesLike, Wallet } from 'ethers';
import type { Portal as PortalContract } from './typechain/Portal';
import type { TransactionMethods, ContractMethodReturnType } from '../common/types';
import { TypedDataDomain } from '@ethersproject/abstract-signer';
import { Chain } from '../chain';
import { BaseContract } from '../contract';
import { NetworkMeta } from './network';
export declare class Portal extends BaseContract {
    networkMeta: NetworkMeta;
    domain: TypedDataDomain | undefined;
    signer: Wallet | undefined;
    constructor(chain: Chain, contractAddress?: string);
    /**
     * @notice Registers a new user with an inviter using a unique serial number (sn)
     * @dev It validates the signature from the registered signer and sets up the relationship between user and inviter.
     * @param _inviter Address of the person who invited the new user
     * @param _sn Unique serial number for registration
     * @param _expired Timestamp until when the registration request is valid
     * @param _signature Signature provided for verification
     */
    register(_inviter: string, _sn: string, _expired: BigNumberish, _signature: BytesLike): Promise<TransactionMethods<ContractMethodReturnType<PortalContract, 'register'>>>;
    /**
     * @notice Mints a new lottery key for the sender based on a random seed
     * @dev Requires the sender to pay `keyPrice`. Records the transaction with a unique serial number.
     * @param _amount Amount for pay
     * @param _random Random seed for key generation
     * @param _sn Unique serial number for recording the minting
     * @param _expired Timestamp until when the minting request is valid
     * @param _signature Signature provided for verification
     */
    mintKey(_amount: BigNumberish, _random: BigNumberish, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike): TransactionMethods<ContractMethodReturnType<PortalContract, 'mintKey'>>;
    /**
     * @notice Mints multiple new lottery keys for the sender based on an array of random seeds.
     * @dev Requires the sender to pay `keyPrice` multiplied by the number of keys. Records the transaction with a unique serial number.
     * @param _amount Amount for pay
     * @param _randoms An array of random seeds used for key generation
     * @param _sn Unique serial number for recording the minting
     * @param _expired Timestamp until when the minting request is valid
     * @param _signature Signature provided for verification
     */
    mintKeys(_amount: BigNumberish, _randoms: BigNumberish[], _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike): TransactionMethods<ContractMethodReturnType<PortalContract, 'mintKeys'>>;
    /**
     * @notice Creates a ticket from a set of keys.
     * @dev Burns the corresponding lotto numbers and mints a ticket token for the sender.
     * @param _keys An array of keys to form a ticket
     */
    makeTicket(_keys: BigNumberish[]): TransactionMethods<ContractMethodReturnType<PortalContract, 'makeTicket'>>;
    /**
     * @notice Creates multiple tickets from arrays of keys.
     * @dev Burns the corresponding lotto numbers in batch and mints ticket tokens for the sender.
     * @param _keys An array of key sets, each representing a ticket
     */
    makeTickets(_keys: BigNumberish[][]): TransactionMethods<ContractMethodReturnType<PortalContract, 'makeTickets'>>;
    /**
     * @notice Claims winnings for a specific round and ticket ID.
     * @dev Can only be called by the ticket owner. Burns the ticket upon claiming bonuses.
     * @param _round The round number for which the bonuses are claimed
     * @param _tokenId The ID of the ticket
     */
    claimBonuses(_round: BigNumberish, _tokenId: BigNumberish): TransactionMethods<ContractMethodReturnType<PortalContract, 'claimBonuses'>>;
    /**
     * @notice Claims winnings for multiple rounds and ticket IDs in batch.
     * @dev Can only be called by the ticket owner. Burns the tickets upon claiming bonuses.
     * @param _rounds An array of round numbers for which the bonuses are claimed
     * @param _tokenIds An array of ticket IDs
     */
    batchClaimBonuses(_rounds: BigNumberish[], _tokenIds: BigNumberish[]): TransactionMethods<ContractMethodReturnType<PortalContract, 'batchClaimBonuses'>>;
    /**
     * Retrieves the user's relationships from the contract or defaults to the connected account.
     * @param user Optional. The address of the user to retrieve relationships for. If not provided, defaults to the connected account.
     * @returns A Promise that resolves with the relationships data from the contract.
     */
    relationships(user?: string): Promise<any>;
    /**
     * Gets the size of a key from the lottery.
     */
    keySize(): Promise<any>;
    /**
     * Fetches the price of a key.
     */
    keyPrice(): Promise<any>;
    /**
     * Retrieves the rate of bonuses for an inviter.
     */
    inviterBonusesRate(): Promise<any>;
    /**
     * Obtains the prize rates.
     */
    getPrizeRates(): Promise<number[]>;
    /**
     * Checks whether a specific round has expired based on block numbers.
     * @param _round The round number to check.
     */
    checkRound(_round: BigNumberish): Promise<any>;
    /**
     * @notice Matches a ticket's level by comparing its keys with the lottery keys of a round.
     * @dev Determines how many keys match and if the special key is included.
     * @param _round The round number against which the ticket's keys are matched
     * @param _tokenId ID of the ticket being checked
     * @return The level that the ticket matches, 0: is not match
     */
    matchLevel(_round: BigNumberish, _tokenId: BigNumberish): Promise<any>;
    /**
     * @notice Queries the potential bonuses for a given round and ticket ID.
     * @dev Does not actually claim the bonuses, only computes the possible winnings.
     * @param _round The round number for which the bonuses are queried
     * @param _tokenId The ID of the ticket
     * @return A struct containing the matched level and user amount for the ticket
     */
    queryBonuses(_round: BigNumberish, _tokenId: BigNumberish): Promise<any>;
    /**
     * @notice Batch queries the potential bonuses for multiple rounds and ticket IDs.
     * @dev Computes the possible winnings without claiming them.
     * @param _rounds An array of round numbers for which the bonuses are queried
     * @param _tokenIds An array of ticket IDs
     * @return A two-dimensional array of structs containing matched levels and user amounts for each ticket
     */
    batchQueryBonuses(_rounds: BigNumberish[], _tokenIds: BigNumberish[]): Promise<any>;
    /**
     * @notice Retrieves the round data information for a range of rounds.
     * @dev Provides the round data including the code and block number for each round in the range.
     * @param _start The starting round number
     * @param _end The ending round number (inclusive)
     * @return An array of RoundData structs and the current block number
     */
    getCodes(_start: BigNumberish, _end: BigNumberish): Promise<any>;
    /**
     * @notice Retrieves the formatted code for a round.
     * @dev Deserializes the encoded codes for easier understanding and display.
     * @param _round The round number
     * @return A RoundFormatData containing decoded code and the current block number
     */
    getFormatCode(_round: BigNumberish): Promise<any>;
    /**
     * @notice Retrieves the formatted codes for a range of rounds as arrays of bytes.
     * @dev Deserializes the encoded codes for easier understanding and display.
     * @param _start The starting round number
     * @param _end The ending round number (inclusive)
     * @return An array of RoundFormatData containing decoded codes and the current block number
     */
    getFormatCodes(_start: BigNumberish, _end: BigNumberish): Promise<any>;
    /**
     * @notice Gets the balance of the specified token or ETH within the contract.
     * @dev If checking for ETH, supply the zero address.
     * @param _token The address of the token contract (zero address for ETH)
     * @return The balance of the token or ETH
     */
    getBalance(_token: string): Promise<any>;
    getRecord(_sn: string): Promise<any>;
    getRecords(_sns: string[]): Promise<any>;
    setSigner(_signer: Wallet): void;
    signRegisterData(inviter: string, sn: string, expired: string | number | BigNumber, user?: string, domain?: TypedDataDomain): Promise<any>;
    signMintKeyData(random: string | number | BigNumber, sn: string, expired: string | number | BigNumber, user?: string, domain?: TypedDataDomain): Promise<any>;
    signMintKeysData(randoms: string[] | number[] | BigNumber[], sn: string, expired: string | number | BigNumber, user?: string, domain?: TypedDataDomain): Promise<any>;
}
export declare function getPortal(chain: Chain, address?: string): Portal;

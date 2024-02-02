import { providers as multicallProviders } from '@0xsequence/multicall';
import { Signer } from 'ethers';
import type { ApprovalAction, Item } from './types';
import type { InsufficientApprovals, BalancesAndApprovals } from './balanceAndApprovalCheck';
export declare const approvedItemAmount: (owner: string, item: Item, operator: string, multicallProvider: multicallProviders.MulticallProvider) => Promise<any>;
/**
 * Get approval actions given a list of insufficent approvals.
 */
export declare function getApprovalActions(insufficientApprovals: InsufficientApprovals, signer: Signer): Promise<ApprovalAction[]>;
export declare function approvals(insufficientApprovals: InsufficientApprovals, signer: Signer): Promise<void>;
export declare function approvalByBalancesAndApprovals(items: BalancesAndApprovals, operator: string, signer: Signer): Promise<void>;

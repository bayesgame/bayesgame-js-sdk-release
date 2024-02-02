import { providers as multicallProviders } from '@0xsequence/multicall';
import { BigNumber } from 'ethers';
import { ItemType } from '../constants';
import type { Item } from './types';
export type BalancesAndApprovals = {
    token: string;
    identifierOrCriteria: string;
    balance: BigNumber;
    approvedAmount: BigNumber;
    itemType: ItemType;
}[];
export type InsufficientBalances = {
    token: string;
    identifierOrCriteria: string;
    requiredAmount: BigNumber;
    amountHave: BigNumber;
    itemType: ItemType;
}[];
export type InsufficientApprovals = {
    token: string;
    identifierOrCriteria: string;
    approvedAmount?: BigNumber;
    requiredApprovedAmount?: BigNumber;
    operator: string;
    itemType: ItemType;
}[];
export declare const getBalancesAndApprovals: ({ owner, items, operator, multicallProvider, }: {
    owner: string;
    items: Item[];
    operator: string;
    multicallProvider: multicallProviders.MulticallProvider;
}) => Promise<BalancesAndApprovals>;

import { BigNumberish } from 'ethers';
import { TransactionMethods, ContractMethodReturnType, ApprovalAction } from '../common/types';
export type Account = {
    available: string;
    frozen: string;
};
export type AssetAccount = {
    token: string;
    available: string;
    frozen: string;
};
export type DetailedAccount = {
    account: string;
    token: string;
    available: string;
    frozen: string;
};
export type TransferData = {
    token: string;
    from: string;
    to: string;
    available: BigNumberish;
    frozen: BigNumberish;
    amount: BigNumberish;
    fee: BigNumberish;
};
export type TradeData = {
    account: string;
    token: string;
    amount: BigNumberish;
    fee: BigNumberish;
};
export type { TransactionMethods, ContractMethodReturnType, ApprovalAction };

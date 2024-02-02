import { BrowserChain } from './index';
export interface FuncHandleAccounts {
    (accounts: any[]): any;
}
export interface FuncHandleChainId {
    (chainId: any): any;
}
export interface FuncHandleChainStatus {
    (status: any): any;
}
export declare class LocalWallet {
    static fromPrivateKey(key: string): any;
}
export declare class ChainWallet extends BrowserChain {
    private tryCount;
    ethereum: any;
    chainInstalled: boolean;
    private chainStatusHandles;
    private chainHandles;
    private accountsHandles;
    connector: any;
    accounts: never[];
    account: string;
    private chainIdWhiteList;
    constructor();
    setSession(key: string, val: any): void;
    getSession(key: string): string | null;
    isConnected(): boolean;
    onChainStatus(_handleChainStatus: FuncHandleChainStatus): void;
    onAccountsChanged(_handleNewAccounts: FuncHandleAccounts): void;
    onChainChanged(handleChain: FuncHandleChainId): void;
    connect(to?: any, chainIdWhiteList?: number[]): any;
    disconnect(): Promise<unknown>;
    connectWalletConnect(): any;
    connectMetamask(): void;
    connectTokenPocket(): void;
    connectOKX(): void;
    connectBinance(): void;
    connectOnto(): void;
    addToken(address: any, symbol: string, decimals: number): Promise<unknown>;
    switchNetwork(chainId: number): Promise<boolean>;
    _chainConnected(ethereum?: any): void;
    _handleNewChain(chainId: any): void;
    _handleChainStatus(status: any): void;
    _handleNewAccounts(newAccounts: any): void;
}
export declare const chainWallet: ChainWallet;

export type NetworkMeta = {
    id: number;
    rpcUrl: string;
    Portal: string;
    LottoNumbers: string;
    Ticket: string;
    Jackpot: string;
};
export declare const getNetworkMeta: (network: number) => NetworkMeta;

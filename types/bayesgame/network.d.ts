export type NetworkMeta = {
    id: number;
    rpcUrl: string;
    Portal: string;
    LottoNumbers: string;
    Ticket: string;
};
export declare const getNetworkMeta: (network: number) => NetworkMeta;

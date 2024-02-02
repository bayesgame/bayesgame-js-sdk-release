import { BigNumber } from 'ethers';
declare const CONF: any;
export declare const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
declare const CHAIN_RPC: any;
export declare const CHAIN_BROWSER: any;
export declare const CHAIN_NAME: any;
export declare const CHAIN_SYMBOL: any;
export declare const CHAIN_TOKENS: any;
export declare const CHAIN_CONTRACTS: any;
export declare enum TokenType {
    NATIVE = "NATIVE",
    ERC20 = "ERC20",
    ERC721 = "ERC721",
    ERC1155 = "ERC1155"
}
export declare enum ItemType {
    NATIVE = 0,
    ERC20 = 1,
    ERC721 = 2,
    ERC1155 = 3,
    ERC721_WITH_CRITERIA = 4,
    ERC1155_WITH_CRITERIA = 5
}
export declare const MAX_INT: BigNumber;
export declare const get_env: (name: string, def?: string) => string;
export { CONF, CHAIN_RPC };

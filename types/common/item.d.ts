import type { Item } from "./types";
export declare const isCurrencyItem: ({ itemType }: Item) => boolean;
export declare const isNativeCurrencyItem: ({ itemType }: Item) => boolean;
export declare const isErc20Item: (itemType: Item["itemType"]) => boolean;
export declare const isErc721Item: (itemType: Item["itemType"]) => boolean;
export declare const isErc1155Item: (itemType: Item["itemType"]) => boolean;
export declare const isCriteriaItem: (itemType: Item["itemType"]) => boolean;
export declare const toItem: (item: any) => Item;

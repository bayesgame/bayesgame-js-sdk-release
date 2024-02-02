import { BigNumber } from 'ethers';
import BN from 'bignumber.js';
export declare function bnWithoutDecimals(bn: string | BigNumber | BN, decimals: number): string;
export declare function bnWithDecimals(bn: string | number, decimals: number): string;
export declare function toHexZeroPad32(val: string | number): any;
export declare function fromHexZeroPad32(hexVal: string): string;

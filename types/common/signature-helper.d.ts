import { BigNumberish } from 'ethers';
import { TypedDataDomain } from '@ethersproject/abstract-signer';
import { Signature } from '@ethersproject/bytes';
export declare const getSignature: (signer: Wallet, types: string[], values: any[], domain?: TypedDataDomain) => Promise<String>;
export declare const signData: (signer: Wallet, types: string[], values: (BigNumberish | boolean)[], domain?: TypedDataDomain) => Promise<Signature>;
export declare const signTypedData: (signer: Wallet, types: string[], values: (BigNumberish | boolean)[], domain: TypedDataDomain) => Promise<Signature>;
export declare const computeDomainSeparator: (domain: TypedDataDomain) => string;

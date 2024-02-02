import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from 'ethers';
import { FunctionFragment, Result } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../../libs/seaport1.1/typechain/common';
export interface EIP1271InterfaceInterface extends utils.Interface {
    contractName: 'EIP1271Interface';
    functions: {
        'isValidSignature(bytes32,bytes)': FunctionFragment;
    };
    encodeFunctionData(functionFragment: 'isValidSignature', values: [BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: 'isValidSignature', data: BytesLike): Result;
    events: {};
}
export interface EIP1271Interface extends BaseContract {
    contractName: 'EIP1271Interface';
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EIP1271InterfaceInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        isValidSignature(digest: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<[string]>;
    };
    isValidSignature(digest: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        isValidSignature(digest: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        isValidSignature(digest: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isValidSignature(digest: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

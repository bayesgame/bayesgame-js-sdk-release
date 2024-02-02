import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, Contract, ContractTransaction, Overrides, PayableOverrides, CallOverrides } from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';
interface WETH9Interface extends ethers.utils.Interface {
    functions: {
        'allowance(address,address)': FunctionFragment;
        'approve(address,uint256)': FunctionFragment;
        'balanceOf(address)': FunctionFragment;
        'decimals()': FunctionFragment;
        'deposit()': FunctionFragment;
        'name()': FunctionFragment;
        'symbol()': FunctionFragment;
        'totalSupply()': FunctionFragment;
        'transfer(address,uint256)': FunctionFragment;
        'transferFrom(address,address,uint256)': FunctionFragment;
        'withdraw(uint256)': FunctionFragment;
    };
    encodeFunctionData(functionFragment: 'allowance', values: [string, string]): string;
    encodeFunctionData(functionFragment: 'approve', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
    encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
    encodeFunctionData(functionFragment: 'deposit', values?: undefined): string;
    encodeFunctionData(functionFragment: 'name', values?: undefined): string;
    encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
    encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
    encodeFunctionData(functionFragment: 'transfer', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'transferFrom', values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'withdraw', values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
    events: {
        'Approval(address,address,uint256)': EventFragment;
        'Deposit(address,uint256)': EventFragment;
        'Transfer(address,address,uint256)': EventFragment;
        'Withdrawal(address,uint256)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Withdrawal'): EventFragment;
}
export interface WETH9 extends Contract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    listeners<EventArgsArray extends Array<any>, EventArgsObject>(eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>): Array<TypedListener<EventArgsArray, EventArgsObject>>;
    off<EventArgsArray extends Array<any>, EventArgsObject>(eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>, listener: TypedListener<EventArgsArray, EventArgsObject>): this;
    on<EventArgsArray extends Array<any>, EventArgsObject>(eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>, listener: TypedListener<EventArgsArray, EventArgsObject>): this;
    once<EventArgsArray extends Array<any>, EventArgsObject>(eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>, listener: TypedListener<EventArgsArray, EventArgsObject>): this;
    removeListener<EventArgsArray extends Array<any>, EventArgsObject>(eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>, listener: TypedListener<EventArgsArray, EventArgsObject>): this;
    removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>): this;
    listeners(eventName?: string): Array<Listener>;
    off(eventName: string, listener: Listener): this;
    on(eventName: string, listener: Listener): this;
    once(eventName: string, listener: Listener): this;
    removeListener(eventName: string, listener: Listener): this;
    removeAllListeners(eventName?: string): this;
    queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(event: TypedEventFilter<EventArgsArray, EventArgsObject>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;
    interface: WETH9Interface;
    functions: {
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        'allowance(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'approve(address,uint256)'(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        'balanceOf(address)'(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        'decimals()'(overrides?: CallOverrides): Promise<[number]>;
        deposit(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'deposit()'(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        'name()'(overrides?: CallOverrides): Promise<[string]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        'symbol()'(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        'totalSupply()'(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'transfer(address,uint256)'(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'transferFrom(address,address,uint256)'(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdraw(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'withdraw(uint256)'(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    'allowance(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(guy: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'approve(address,uint256)'(guy: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    'balanceOf(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    'decimals()'(overrides?: CallOverrides): Promise<number>;
    deposit(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'deposit()'(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    'name()'(overrides?: CallOverrides): Promise<string>;
    symbol(overrides?: CallOverrides): Promise<string>;
    'symbol()'(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(dst: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'transfer(address,uint256)'(dst: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'transferFrom(address,address,uint256)'(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdraw(wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'withdraw(uint256)'(wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        'allowance(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(guy: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        'approve(address,uint256)'(guy: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        'balanceOf(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        'decimals()'(overrides?: CallOverrides): Promise<number>;
        deposit(overrides?: CallOverrides): Promise<void>;
        'deposit()'(overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        'name()'(overrides?: CallOverrides): Promise<string>;
        symbol(overrides?: CallOverrides): Promise<string>;
        'symbol()'(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        'transfer(address,uint256)'(dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        'transferFrom(address,address,uint256)'(src: string, dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        withdraw(wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        'withdraw(uint256)'(wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        Approval(src: string | null, guy: string | null, wad: null): TypedEventFilter<[string, string, BigNumber], {
            src: string;
            guy: string;
            wad: BigNumber;
        }>;
        Deposit(dst: string | null, wad: null): TypedEventFilter<[string, BigNumber], {
            dst: string;
            wad: BigNumber;
        }>;
        Transfer(src: string | null, dst: string | null, wad: null): TypedEventFilter<[string, string, BigNumber], {
            src: string;
            dst: string;
            wad: BigNumber;
        }>;
        Withdrawal(src: string | null, wad: null): TypedEventFilter<[string, BigNumber], {
            src: string;
            wad: BigNumber;
        }>;
    };
    estimateGas: {
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        'allowance(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'approve(address,uint256)'(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        'balanceOf(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        'decimals()'(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'deposit()'(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        'name()'(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        'symbol()'(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'transfer(address,uint256)'(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'transferFrom(address,address,uint256)'(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdraw(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'withdraw(uint256)'(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'allowance(address,address)'(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'approve(address,uint256)'(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'balanceOf(address)'(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'decimals()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'deposit()'(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'name()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'symbol()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'totalSupply()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'transfer(address,uint256)'(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'transferFrom(address,address,uint256)'(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'withdraw(uint256)'(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
export {};

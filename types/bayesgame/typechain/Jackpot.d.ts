import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, Contract, ContractTransaction, Overrides, CallOverrides } from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';
interface JackpotInterface extends ethers.utils.Interface {
    functions: {
        'admin()': FunctionFragment;
        'batchClaimBonuses(uint256[])': FunctionFragment;
        'batchJoin(uint256[])': FunctionFragment;
        'batchQueryBonuses(address,uint256[])': FunctionFragment;
        'batchQueryClearing(uint256[],uint256[])': FunctionFragment;
        'changeOwner(address)': FunctionFragment;
        'claimBonuses(uint256)': FunctionFragment;
        'clearing(uint256,uint256)': FunctionFragment;
        'clearingAndClaim(uint256,uint256)': FunctionFragment;
        'clearingFeeRate()': FunctionFragment;
        'config()': FunctionFragment;
        'currency()': FunctionFragment;
        'dev()': FunctionFragment;
        'enabled()': FunctionFragment;
        'getBalance(address)': FunctionFragment;
        'initialize(address)': FunctionFragment;
        'join(uint256)': FunctionFragment;
        'onERC721Received(address,address,uint256,bytes)': FunctionFragment;
        'owner()': FunctionFragment;
        'poolsBonuses(uint256)': FunctionFragment;
        'poolsTicketAmount(uint256)': FunctionFragment;
        'portal()': FunctionFragment;
        'queryBonuses(address,uint256)': FunctionFragment;
        'queryClearing(uint256,uint256)': FunctionFragment;
        'setClearingFeeRate(uint256)': FunctionFragment;
        'setEnabled(bool)': FunctionFragment;
        'setupConfig(address)': FunctionFragment;
        'totalPool()': FunctionFragment;
        'usersClaimedAmount(address,uint256)': FunctionFragment;
        'usersTitcketAmount(address,uint256)': FunctionFragment;
    };
    encodeFunctionData(functionFragment: 'admin', values?: undefined): string;
    encodeFunctionData(functionFragment: 'batchClaimBonuses', values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'batchJoin', values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'batchQueryBonuses', values: [string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'batchQueryClearing', values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'changeOwner', values: [string]): string;
    encodeFunctionData(functionFragment: 'claimBonuses', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'clearing', values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'clearingAndClaim', values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'clearingFeeRate', values?: undefined): string;
    encodeFunctionData(functionFragment: 'config', values?: undefined): string;
    encodeFunctionData(functionFragment: 'currency', values?: undefined): string;
    encodeFunctionData(functionFragment: 'dev', values?: undefined): string;
    encodeFunctionData(functionFragment: 'enabled', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getBalance', values: [string]): string;
    encodeFunctionData(functionFragment: 'initialize', values: [string]): string;
    encodeFunctionData(functionFragment: 'join', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'onERC721Received', values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'poolsBonuses', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'poolsTicketAmount', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'portal', values?: undefined): string;
    encodeFunctionData(functionFragment: 'queryBonuses', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'queryClearing', values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setClearingFeeRate', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setEnabled', values: [boolean]): string;
    encodeFunctionData(functionFragment: 'setupConfig', values: [string]): string;
    encodeFunctionData(functionFragment: 'totalPool', values?: undefined): string;
    encodeFunctionData(functionFragment: 'usersClaimedAmount', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'usersTitcketAmount', values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: 'admin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchClaimBonuses', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchJoin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchQueryBonuses', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchQueryClearing', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'changeOwner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'claimBonuses', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'clearing', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'clearingAndClaim', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'clearingFeeRate', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'config', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'currency', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'dev', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'enabled', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getBalance', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'join', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'onERC721Received', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'poolsBonuses', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'poolsTicketAmount', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'portal', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'queryBonuses', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'queryClearing', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setClearingFeeRate', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setEnabled', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setupConfig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalPool', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'usersClaimedAmount', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'usersTitcketAmount', data: BytesLike): Result;
    events: {
        'ClaimBonusesLog(uint256,address,uint256)': EventFragment;
        'ClearingFeeRateLog(uint256,uint256)': EventFragment;
        'ClearingLog(uint256,uint256,uint256,address,uint256,uint256)': EventFragment;
        'ConfigChanged(address,address,address)': EventFragment;
        'JoinLog(address,uint256,uint256)': EventFragment;
        'OwnerChanged(address,address,address)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'ClaimBonusesLog'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ClearingFeeRateLog'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ClearingLog'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ConfigChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'JoinLog'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
}
export interface Jackpot extends Contract {
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
    interface: JackpotInterface;
    functions: {
        admin(overrides?: CallOverrides): Promise<[string]>;
        'admin()'(overrides?: CallOverrides): Promise<[string]>;
        batchClaimBonuses(_poolIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'batchClaimBonuses(uint256[])'(_poolIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchJoin(_tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'batchJoin(uint256[])'(_tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchQueryBonuses(_user: string, _poolIds: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        'batchQueryBonuses(address,uint256[])'(_user: string, _poolIds: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        batchQueryClearing(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<[
            ([BigNumber, BigNumber] & {
                clearingFee: BigNumber;
                usersBonuses: BigNumber;
            })[]
        ]>;
        'batchQueryClearing(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<[
            ([BigNumber, BigNumber] & {
                clearingFee: BigNumber;
                usersBonuses: BigNumber;
            })[]
        ]>;
        changeOwner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'changeOwner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimBonuses(_poolId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'claimBonuses(uint256)'(_poolId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        clearing(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'clearing(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        clearingAndClaim(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'clearingAndClaim(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        clearingFeeRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        'clearingFeeRate()'(overrides?: CallOverrides): Promise<[BigNumber]>;
        config(overrides?: CallOverrides): Promise<[string]>;
        'config()'(overrides?: CallOverrides): Promise<[string]>;
        currency(overrides?: CallOverrides): Promise<[string]>;
        'currency()'(overrides?: CallOverrides): Promise<[string]>;
        dev(overrides?: CallOverrides): Promise<[string]>;
        'dev()'(overrides?: CallOverrides): Promise<[string]>;
        enabled(overrides?: CallOverrides): Promise<[boolean]>;
        'enabled()'(overrides?: CallOverrides): Promise<[boolean]>;
        getBalance(_token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        'getBalance(address)'(_token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_portal: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'initialize(address)'(_portal: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        join(_tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'join(uint256)'(_tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: string, _from: string, _tokenId: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'onERC721Received(address,address,uint256,bytes)'(arg0: string, _from: string, _tokenId: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        'owner()'(overrides?: CallOverrides): Promise<[string]>;
        poolsBonuses(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        'poolsBonuses(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        poolsTicketAmount(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        'poolsTicketAmount(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        portal(overrides?: CallOverrides): Promise<[string]>;
        'portal()'(overrides?: CallOverrides): Promise<[string]>;
        queryBonuses(_user: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        'queryBonuses(address,uint256)'(_user: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        queryClearing(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
            [
                BigNumber,
                BigNumber
            ] & {
                clearingFee: BigNumber;
                usersBonuses: BigNumber;
            }
        ]>;
        'queryClearing(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
            [
                BigNumber,
                BigNumber
            ] & {
                clearingFee: BigNumber;
                usersBonuses: BigNumber;
            }
        ]>;
        setClearingFeeRate(_rate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setClearingFeeRate(uint256)'(_rate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setEnabled(_enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setEnabled(bool)'(_enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setupConfig(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setupConfig(address)'(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalPool(overrides?: CallOverrides): Promise<[BigNumber]>;
        'totalPool()'(overrides?: CallOverrides): Promise<[BigNumber]>;
        usersClaimedAmount(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        'usersClaimedAmount(address,uint256)'(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        usersTitcketAmount(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        'usersTitcketAmount(address,uint256)'(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    admin(overrides?: CallOverrides): Promise<string>;
    'admin()'(overrides?: CallOverrides): Promise<string>;
    batchClaimBonuses(_poolIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'batchClaimBonuses(uint256[])'(_poolIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchJoin(_tokenIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'batchJoin(uint256[])'(_tokenIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchQueryBonuses(_user: string, _poolIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    'batchQueryBonuses(address,uint256[])'(_user: string, _poolIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    batchQueryClearing(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<([BigNumber, BigNumber] & {
        clearingFee: BigNumber;
        usersBonuses: BigNumber;
    })[]>;
    'batchQueryClearing(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<([BigNumber, BigNumber] & {
        clearingFee: BigNumber;
        usersBonuses: BigNumber;
    })[]>;
    changeOwner(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'changeOwner(address)'(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimBonuses(_poolId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'claimBonuses(uint256)'(_poolId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    clearing(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'clearing(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    clearingAndClaim(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'clearingAndClaim(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    clearingFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
    'clearingFeeRate()'(overrides?: CallOverrides): Promise<BigNumber>;
    config(overrides?: CallOverrides): Promise<string>;
    'config()'(overrides?: CallOverrides): Promise<string>;
    currency(overrides?: CallOverrides): Promise<string>;
    'currency()'(overrides?: CallOverrides): Promise<string>;
    dev(overrides?: CallOverrides): Promise<string>;
    'dev()'(overrides?: CallOverrides): Promise<string>;
    enabled(overrides?: CallOverrides): Promise<boolean>;
    'enabled()'(overrides?: CallOverrides): Promise<boolean>;
    getBalance(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
    'getBalance(address)'(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_portal: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'initialize(address)'(_portal: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    join(_tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'join(uint256)'(_tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: string, _from: string, _tokenId: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'onERC721Received(address,address,uint256,bytes)'(arg0: string, _from: string, _tokenId: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    'owner()'(overrides?: CallOverrides): Promise<string>;
    poolsBonuses(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    'poolsBonuses(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    poolsTicketAmount(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    'poolsTicketAmount(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    portal(overrides?: CallOverrides): Promise<string>;
    'portal()'(overrides?: CallOverrides): Promise<string>;
    queryBonuses(_user: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    'queryBonuses(address,uint256)'(_user: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    queryClearing(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        clearingFee: BigNumber;
        usersBonuses: BigNumber;
    }>;
    'queryClearing(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        clearingFee: BigNumber;
        usersBonuses: BigNumber;
    }>;
    setClearingFeeRate(_rate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setClearingFeeRate(uint256)'(_rate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setEnabled(_enabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setEnabled(bool)'(_enabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setupConfig(_config: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setupConfig(address)'(_config: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalPool(overrides?: CallOverrides): Promise<BigNumber>;
    'totalPool()'(overrides?: CallOverrides): Promise<BigNumber>;
    usersClaimedAmount(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    'usersClaimedAmount(address,uint256)'(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    usersTitcketAmount(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    'usersTitcketAmount(address,uint256)'(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        admin(overrides?: CallOverrides): Promise<string>;
        'admin()'(overrides?: CallOverrides): Promise<string>;
        batchClaimBonuses(_poolIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        'batchClaimBonuses(uint256[])'(_poolIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        batchJoin(_tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
        'batchJoin(uint256[])'(_tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
        batchQueryBonuses(_user: string, _poolIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        'batchQueryBonuses(address,uint256[])'(_user: string, _poolIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        batchQueryClearing(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<([BigNumber, BigNumber] & {
            clearingFee: BigNumber;
            usersBonuses: BigNumber;
        })[]>;
        'batchQueryClearing(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<([BigNumber, BigNumber] & {
            clearingFee: BigNumber;
            usersBonuses: BigNumber;
        })[]>;
        changeOwner(_user: string, overrides?: CallOverrides): Promise<void>;
        'changeOwner(address)'(_user: string, overrides?: CallOverrides): Promise<void>;
        claimBonuses(_poolId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'claimBonuses(uint256)'(_poolId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        clearing(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            poolId: BigNumber;
            clearingFee: BigNumber;
        }>;
        'clearing(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            poolId: BigNumber;
            clearingFee: BigNumber;
        }>;
        clearingAndClaim(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'clearingAndClaim(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        clearingFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
        'clearingFeeRate()'(overrides?: CallOverrides): Promise<BigNumber>;
        config(overrides?: CallOverrides): Promise<string>;
        'config()'(overrides?: CallOverrides): Promise<string>;
        currency(overrides?: CallOverrides): Promise<string>;
        'currency()'(overrides?: CallOverrides): Promise<string>;
        dev(overrides?: CallOverrides): Promise<string>;
        'dev()'(overrides?: CallOverrides): Promise<string>;
        enabled(overrides?: CallOverrides): Promise<boolean>;
        'enabled()'(overrides?: CallOverrides): Promise<boolean>;
        getBalance(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
        'getBalance(address)'(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_portal: string, overrides?: CallOverrides): Promise<void>;
        'initialize(address)'(_portal: string, overrides?: CallOverrides): Promise<void>;
        join(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        'join(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        onERC721Received(arg0: string, _from: string, _tokenId: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        'onERC721Received(address,address,uint256,bytes)'(arg0: string, _from: string, _tokenId: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        'owner()'(overrides?: CallOverrides): Promise<string>;
        poolsBonuses(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'poolsBonuses(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        poolsTicketAmount(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'poolsTicketAmount(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        portal(overrides?: CallOverrides): Promise<string>;
        'portal()'(overrides?: CallOverrides): Promise<string>;
        queryBonuses(_user: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'queryBonuses(address,uint256)'(_user: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        queryClearing(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            clearingFee: BigNumber;
            usersBonuses: BigNumber;
        }>;
        'queryClearing(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            clearingFee: BigNumber;
            usersBonuses: BigNumber;
        }>;
        setClearingFeeRate(_rate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        'setClearingFeeRate(uint256)'(_rate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setEnabled(_enabled: boolean, overrides?: CallOverrides): Promise<void>;
        'setEnabled(bool)'(_enabled: boolean, overrides?: CallOverrides): Promise<void>;
        setupConfig(_config: string, overrides?: CallOverrides): Promise<void>;
        'setupConfig(address)'(_config: string, overrides?: CallOverrides): Promise<void>;
        totalPool(overrides?: CallOverrides): Promise<BigNumber>;
        'totalPool()'(overrides?: CallOverrides): Promise<BigNumber>;
        usersClaimedAmount(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'usersClaimedAmount(address,uint256)'(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        usersTitcketAmount(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'usersTitcketAmount(address,uint256)'(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        ClaimBonusesLog(poolId: BigNumberish | null, user: string | null, userAmount: BigNumberish | null): TypedEventFilter<[BigNumber, string, BigNumber], {
            poolId: BigNumber;
            user: string;
            userAmount: BigNumber;
        }>;
        ClearingFeeRateLog(oldValue: BigNumberish | null, newValue: BigNumberish | null): TypedEventFilter<[BigNumber, BigNumber], {
            oldValue: BigNumber;
            newValue: BigNumber;
        }>;
        ClearingLog(poolId: BigNumberish | null, round: BigNumberish | null, tokenId: BigNumberish | null, user: null, clearingFee: null, amount: null): TypedEventFilter<[
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            BigNumber,
            BigNumber
        ], {
            poolId: BigNumber;
            round: BigNumber;
            tokenId: BigNumber;
            user: string;
            clearingFee: BigNumber;
            amount: BigNumber;
        }>;
        ConfigChanged(_user: string | null, _old: string | null, _new: string | null): TypedEventFilter<[string, string, string], {
            _user: string;
            _old: string;
            _new: string;
        }>;
        JoinLog(user: string | null, tokenId: BigNumberish | null, poolId: BigNumberish | null): TypedEventFilter<[string, BigNumber, BigNumber], {
            user: string;
            tokenId: BigNumber;
            poolId: BigNumber;
        }>;
        OwnerChanged(_user: string | null, _old: string | null, _new: string | null): TypedEventFilter<[string, string, string], {
            _user: string;
            _old: string;
            _new: string;
        }>;
    };
    estimateGas: {
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        'admin()'(overrides?: CallOverrides): Promise<BigNumber>;
        batchClaimBonuses(_poolIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'batchClaimBonuses(uint256[])'(_poolIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchJoin(_tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'batchJoin(uint256[])'(_tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchQueryBonuses(_user: string, _poolIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        'batchQueryBonuses(address,uint256[])'(_user: string, _poolIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        batchQueryClearing(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        'batchQueryClearing(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        changeOwner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'changeOwner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimBonuses(_poolId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'claimBonuses(uint256)'(_poolId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        clearing(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'clearing(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        clearingAndClaim(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'clearingAndClaim(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        clearingFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
        'clearingFeeRate()'(overrides?: CallOverrides): Promise<BigNumber>;
        config(overrides?: CallOverrides): Promise<BigNumber>;
        'config()'(overrides?: CallOverrides): Promise<BigNumber>;
        currency(overrides?: CallOverrides): Promise<BigNumber>;
        'currency()'(overrides?: CallOverrides): Promise<BigNumber>;
        dev(overrides?: CallOverrides): Promise<BigNumber>;
        'dev()'(overrides?: CallOverrides): Promise<BigNumber>;
        enabled(overrides?: CallOverrides): Promise<BigNumber>;
        'enabled()'(overrides?: CallOverrides): Promise<BigNumber>;
        getBalance(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
        'getBalance(address)'(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_portal: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'initialize(address)'(_portal: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        join(_tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'join(uint256)'(_tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC721Received(arg0: string, _from: string, _tokenId: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'onERC721Received(address,address,uint256,bytes)'(arg0: string, _from: string, _tokenId: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        'owner()'(overrides?: CallOverrides): Promise<BigNumber>;
        poolsBonuses(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'poolsBonuses(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        poolsTicketAmount(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'poolsTicketAmount(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        portal(overrides?: CallOverrides): Promise<BigNumber>;
        'portal()'(overrides?: CallOverrides): Promise<BigNumber>;
        queryBonuses(_user: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'queryBonuses(address,uint256)'(_user: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        queryClearing(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'queryClearing(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setClearingFeeRate(_rate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setClearingFeeRate(uint256)'(_rate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setEnabled(_enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setEnabled(bool)'(_enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setupConfig(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setupConfig(address)'(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalPool(overrides?: CallOverrides): Promise<BigNumber>;
        'totalPool()'(overrides?: CallOverrides): Promise<BigNumber>;
        usersClaimedAmount(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'usersClaimedAmount(address,uint256)'(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        usersTitcketAmount(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'usersTitcketAmount(address,uint256)'(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'admin()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchClaimBonuses(_poolIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'batchClaimBonuses(uint256[])'(_poolIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchJoin(_tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'batchJoin(uint256[])'(_tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchQueryBonuses(_user: string, _poolIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'batchQueryBonuses(address,uint256[])'(_user: string, _poolIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchQueryClearing(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'batchQueryClearing(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeOwner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'changeOwner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimBonuses(_poolId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'claimBonuses(uint256)'(_poolId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        clearing(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'clearing(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        clearingAndClaim(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'clearingAndClaim(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        clearingFeeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'clearingFeeRate()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        config(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'config()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currency(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'currency()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dev(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'dev()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'enabled()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBalance(_token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'getBalance(address)'(_token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_portal: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'initialize(address)'(_portal: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        join(_tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'join(uint256)'(_tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: string, _from: string, _tokenId: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'onERC721Received(address,address,uint256,bytes)'(arg0: string, _from: string, _tokenId: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolsBonuses(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'poolsBonuses(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolsTicketAmount(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'poolsTicketAmount(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        portal(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'portal()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryBonuses(_user: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'queryBonuses(address,uint256)'(_user: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryClearing(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'queryClearing(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setClearingFeeRate(_rate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setClearingFeeRate(uint256)'(_rate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setEnabled(_enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setEnabled(bool)'(_enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setupConfig(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setupConfig(address)'(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'totalPool()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        usersClaimedAmount(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'usersClaimedAmount(address,uint256)'(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        usersTitcketAmount(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'usersTitcketAmount(address,uint256)'(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
export {};

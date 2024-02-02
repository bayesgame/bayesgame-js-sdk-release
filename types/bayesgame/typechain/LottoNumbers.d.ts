import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, Contract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";
interface LottoNumbersInterface extends ethers.utils.Interface {
    functions: {
        "admin()": FunctionFragment;
        "approveMiner(address)": FunctionFragment;
        "balanceOf(address,uint256)": FunctionFragment;
        "balanceOfBatch(address[],uint256[])": FunctionFragment;
        "burn(address,uint256,uint256)": FunctionFragment;
        "burnBatch(address,uint256[],uint256[])": FunctionFragment;
        "changeOwner(address)": FunctionFragment;
        "config()": FunctionFragment;
        "dev()": FunctionFragment;
        "exists(uint256)": FunctionFragment;
        "getUserTokens(address)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "maxId()": FunctionFragment;
        "miner()": FunctionFragment;
        "mint(address,uint256,uint256)": FunctionFragment;
        "mintBatch(address,uint256[],uint256[])": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setMaxId(uint256)": FunctionFragment;
        "setMiner(address)": FunctionFragment;
        "setURI(string,string)": FunctionFragment;
        "setupConfig(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply(uint256)": FunctionFragment;
        "uri(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "approveMiner", values: [string]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOfBatch", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "burn", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "burnBatch", values: [string, BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "changeOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "config", values?: undefined): string;
    encodeFunctionData(functionFragment: "dev", values?: undefined): string;
    encodeFunctionData(functionFragment: "exists", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getUserTokens", values: [string]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "maxId", values?: undefined): string;
    encodeFunctionData(functionFragment: "miner", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintBatch", values: [string, BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeBatchTransferFrom", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setMaxId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMiner", values: [string]): string;
    encodeFunctionData(functionFragment: "setURI", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setupConfig", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveMiner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dev", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "miner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeBatchTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMiner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setupConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
    events: {
        "ApprovalForAll(address,address,bool)": EventFragment;
        "ConfigChanged(address,address,address)": EventFragment;
        "OwnerChanged(address,address,address)": EventFragment;
        "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
        "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
        "URI(string,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConfigChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}
export interface LottoNumbers extends Contract {
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
    interface: LottoNumbersInterface;
    functions: {
        admin(overrides?: CallOverrides): Promise<[string]>;
        "admin()"(overrides?: CallOverrides): Promise<[string]>;
        approveMiner(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "approveMiner(address)"(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "balanceOf(address,uint256)"(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        "balanceOfBatch(address[],uint256[])"(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        burn(_account: string, _id: BigNumberish, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "burn(address,uint256,uint256)"(_account: string, _id: BigNumberish, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burnBatch(_account: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "burnBatch(address,uint256[],uint256[])"(_account: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        changeOwner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "changeOwner(address)"(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        config(overrides?: CallOverrides): Promise<[string]>;
        "config()"(overrides?: CallOverrides): Promise<[string]>;
        dev(overrides?: CallOverrides): Promise<[string]>;
        "dev()"(overrides?: CallOverrides): Promise<[string]>;
        exists(id: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        "exists(uint256)"(id: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        getUserTokens(_account: string, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        "getUserTokens(address)"(_account: string, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        "isApprovedForAll(address,address)"(account: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        maxId(overrides?: CallOverrides): Promise<[BigNumber]>;
        "maxId()"(overrides?: CallOverrides): Promise<[BigNumber]>;
        miner(overrides?: CallOverrides): Promise<[string]>;
        "miner()"(overrides?: CallOverrides): Promise<[string]>;
        mint(_to: string, _id: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "mint(address,uint256,uint256)"(_to: string, _id: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintBatch(_to: string, _ids: BigNumberish[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "mintBatch(address,uint256[],uint256[])"(_to: string, _ids: BigNumberish[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        "name()"(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        "owner()"(overrides?: CallOverrides): Promise<[string]>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,uint256,bytes)"(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "setApprovalForAll(address,bool)"(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxId(_maxId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "setMaxId(uint256)"(_maxId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMiner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "setMiner(address)"(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setURI(_base_uri: string, _suffix: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "setURI(string,string)"(_base_uri: string, _suffix: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setupConfig(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "setupConfig(address)"(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        "supportsInterface(bytes4)"(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        "symbol()"(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "totalSupply(uint256)"(id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        uri(_id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "uri(uint256)"(_id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    admin(overrides?: CallOverrides): Promise<string>;
    "admin()"(overrides?: CallOverrides): Promise<string>;
    approveMiner(_account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "approveMiner(address)"(_account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "balanceOf(address,uint256)"(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    "balanceOfBatch(address[],uint256[])"(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    burn(_account: string, _id: BigNumberish, _value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "burn(address,uint256,uint256)"(_account: string, _id: BigNumberish, _value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burnBatch(_account: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "burnBatch(address,uint256[],uint256[])"(_account: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    changeOwner(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "changeOwner(address)"(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    config(overrides?: CallOverrides): Promise<string>;
    "config()"(overrides?: CallOverrides): Promise<string>;
    dev(overrides?: CallOverrides): Promise<string>;
    "dev()"(overrides?: CallOverrides): Promise<string>;
    exists(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    "exists(uint256)"(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    getUserTokens(_account: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    "getUserTokens(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    "isApprovedForAll(address,address)"(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    maxId(overrides?: CallOverrides): Promise<BigNumber>;
    "maxId()"(overrides?: CallOverrides): Promise<BigNumber>;
    miner(overrides?: CallOverrides): Promise<string>;
    "miner()"(overrides?: CallOverrides): Promise<string>;
    mint(_to: string, _id: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "mint(address,uint256,uint256)"(_to: string, _id: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintBatch(_to: string, _ids: BigNumberish[], _amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "mintBatch(address,uint256[],uint256[])"(_to: string, _ids: BigNumberish[], _amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    "name()"(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    "owner()"(overrides?: CallOverrides): Promise<string>;
    safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,uint256,bytes)"(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "setApprovalForAll(address,bool)"(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxId(_maxId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "setMaxId(uint256)"(_maxId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMiner(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "setMiner(address)"(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setURI(_base_uri: string, _suffix: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "setURI(string,string)"(_base_uri: string, _suffix: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setupConfig(_config: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "setupConfig(address)"(_config: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    "supportsInterface(bytes4)"(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    "symbol()"(overrides?: CallOverrides): Promise<string>;
    totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "totalSupply(uint256)"(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    uri(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "uri(uint256)"(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        admin(overrides?: CallOverrides): Promise<string>;
        "admin()"(overrides?: CallOverrides): Promise<string>;
        approveMiner(_account: string, overrides?: CallOverrides): Promise<void>;
        "approveMiner(address)"(_account: string, overrides?: CallOverrides): Promise<void>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "balanceOf(address,uint256)"(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        "balanceOfBatch(address[],uint256[])"(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        burn(_account: string, _id: BigNumberish, _value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "burn(address,uint256,uint256)"(_account: string, _id: BigNumberish, _value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        burnBatch(_account: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        "burnBatch(address,uint256[],uint256[])"(_account: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        changeOwner(_user: string, overrides?: CallOverrides): Promise<void>;
        "changeOwner(address)"(_user: string, overrides?: CallOverrides): Promise<void>;
        config(overrides?: CallOverrides): Promise<string>;
        "config()"(overrides?: CallOverrides): Promise<string>;
        dev(overrides?: CallOverrides): Promise<string>;
        "dev()"(overrides?: CallOverrides): Promise<string>;
        exists(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        "exists(uint256)"(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        getUserTokens(_account: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        "getUserTokens(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        "isApprovedForAll(address,address)"(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        maxId(overrides?: CallOverrides): Promise<BigNumber>;
        "maxId()"(overrides?: CallOverrides): Promise<BigNumber>;
        miner(overrides?: CallOverrides): Promise<string>;
        "miner()"(overrides?: CallOverrides): Promise<string>;
        mint(_to: string, _id: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "mint(address,uint256,uint256)"(_to: string, _id: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mintBatch(_to: string, _ids: BigNumberish[], _amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        "mintBatch(address,uint256[],uint256[])"(_to: string, _ids: BigNumberish[], _amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        "name()"(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        "owner()"(overrides?: CallOverrides): Promise<string>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: CallOverrides): Promise<void>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,uint256,bytes)"(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        "setApprovalForAll(address,bool)"(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        setMaxId(_maxId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "setMaxId(uint256)"(_maxId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMiner(_user: string, overrides?: CallOverrides): Promise<void>;
        "setMiner(address)"(_user: string, overrides?: CallOverrides): Promise<void>;
        setURI(_base_uri: string, _suffix: string, overrides?: CallOverrides): Promise<void>;
        "setURI(string,string)"(_base_uri: string, _suffix: string, overrides?: CallOverrides): Promise<void>;
        setupConfig(_config: string, overrides?: CallOverrides): Promise<void>;
        "setupConfig(address)"(_config: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        "supportsInterface(bytes4)"(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        "symbol()"(overrides?: CallOverrides): Promise<string>;
        totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "totalSupply(uint256)"(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        uri(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "uri(uint256)"(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        ApprovalForAll(account: string | null, operator: string | null, approved: null): TypedEventFilter<[
            string,
            string,
            boolean
        ], {
            account: string;
            operator: string;
            approved: boolean;
        }>;
        ConfigChanged(_user: string | null, _old: string | null, _new: string | null): TypedEventFilter<[
            string,
            string,
            string
        ], {
            _user: string;
            _old: string;
            _new: string;
        }>;
        OwnerChanged(_user: string | null, _old: string | null, _new: string | null): TypedEventFilter<[
            string,
            string,
            string
        ], {
            _user: string;
            _old: string;
            _new: string;
        }>;
        TransferBatch(operator: string | null, from: string | null, to: string | null, ids: null, values: null): TypedEventFilter<[
            string,
            string,
            string,
            BigNumber[],
            BigNumber[]
        ], {
            operator: string;
            from: string;
            to: string;
            ids: BigNumber[];
            values: BigNumber[];
        }>;
        TransferSingle(operator: string | null, from: string | null, to: string | null, id: null, value: null): TypedEventFilter<[
            string,
            string,
            string,
            BigNumber,
            BigNumber
        ], {
            operator: string;
            from: string;
            to: string;
            id: BigNumber;
            value: BigNumber;
        }>;
        URI(value: null, id: BigNumberish | null): TypedEventFilter<[string, BigNumber], {
            value: string;
            id: BigNumber;
        }>;
    };
    estimateGas: {
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        "admin()"(overrides?: CallOverrides): Promise<BigNumber>;
        approveMiner(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "approveMiner(address)"(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "balanceOf(address,uint256)"(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        "balanceOfBatch(address[],uint256[])"(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        burn(_account: string, _id: BigNumberish, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "burn(address,uint256,uint256)"(_account: string, _id: BigNumberish, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burnBatch(_account: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "burnBatch(address,uint256[],uint256[])"(_account: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        changeOwner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "changeOwner(address)"(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        config(overrides?: CallOverrides): Promise<BigNumber>;
        "config()"(overrides?: CallOverrides): Promise<BigNumber>;
        dev(overrides?: CallOverrides): Promise<BigNumber>;
        "dev()"(overrides?: CallOverrides): Promise<BigNumber>;
        exists(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "exists(uint256)"(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getUserTokens(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "getUserTokens(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        "isApprovedForAll(address,address)"(account: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxId(overrides?: CallOverrides): Promise<BigNumber>;
        "maxId()"(overrides?: CallOverrides): Promise<BigNumber>;
        miner(overrides?: CallOverrides): Promise<BigNumber>;
        "miner()"(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_to: string, _id: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "mint(address,uint256,uint256)"(_to: string, _id: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintBatch(_to: string, _ids: BigNumberish[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "mintBatch(address,uint256[],uint256[])"(_to: string, _ids: BigNumberish[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        "name()"(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        "owner()"(overrides?: CallOverrides): Promise<BigNumber>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,uint256,bytes)"(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "setApprovalForAll(address,bool)"(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxId(_maxId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "setMaxId(uint256)"(_maxId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMiner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "setMiner(address)"(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setURI(_base_uri: string, _suffix: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "setURI(string,string)"(_base_uri: string, _suffix: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setupConfig(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "setupConfig(address)"(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "supportsInterface(bytes4)"(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "totalSupply(uint256)"(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        uri(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "uri(uint256)"(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "admin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approveMiner(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "approveMiner(address)"(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "balanceOf(address,uint256)"(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "balanceOfBatch(address[],uint256[])"(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(_account: string, _id: BigNumberish, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "burn(address,uint256,uint256)"(_account: string, _id: BigNumberish, _value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burnBatch(_account: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "burnBatch(address,uint256[],uint256[])"(_account: string, _ids: BigNumberish[], _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        changeOwner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "changeOwner(address)"(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        config(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "config()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dev(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "dev()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exists(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "exists(uint256)"(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserTokens(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getUserTokens(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isApprovedForAll(address,address)"(account: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "maxId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        miner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "miner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(_to: string, _id: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "mint(address,uint256,uint256)"(_to: string, _id: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintBatch(_to: string, _ids: BigNumberish[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "mintBatch(address,uint256[],uint256[])"(_to: string, _ids: BigNumberish[], _amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,uint256,bytes)"(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "setApprovalForAll(address,bool)"(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxId(_maxId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "setMaxId(uint256)"(_maxId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMiner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "setMiner(address)"(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setURI(_base_uri: string, _suffix: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "setURI(string,string)"(_base_uri: string, _suffix: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setupConfig(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "setupConfig(address)"(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "supportsInterface(bytes4)"(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "totalSupply(uint256)"(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uri(_id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "uri(uint256)"(_id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
export {};

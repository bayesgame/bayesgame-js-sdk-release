import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, Contract, ContractTransaction, Overrides, CallOverrides } from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';
interface TicketInterface extends ethers.utils.Interface {
    functions: {
        'admin()': FunctionFragment;
        'approve(address,uint256)': FunctionFragment;
        'approveMiner(address)': FunctionFragment;
        'balanceOf(address)': FunctionFragment;
        'burn(uint256)': FunctionFragment;
        'changeOwner(address)': FunctionFragment;
        'checkTransfer(address,address)': FunctionFragment;
        'config()': FunctionFragment;
        'decode(uint256)': FunctionFragment;
        'decodeBatch(uint256[])': FunctionFragment;
        'dev()': FunctionFragment;
        'exists(uint256)': FunctionFragment;
        'getApproved(uint256)': FunctionFragment;
        'getUserTokens(address)': FunctionFragment;
        'isApprovedForAll(address,address)': FunctionFragment;
        'miner()': FunctionFragment;
        'mint(address,uint8[])': FunctionFragment;
        'mintTotal()': FunctionFragment;
        'name()': FunctionFragment;
        'owner()': FunctionFragment;
        'ownerOf(uint256)': FunctionFragment;
        'pageUserTokens(address,uint256,uint256)': FunctionFragment;
        'pageUserTokensReverse(address,uint256,uint256)': FunctionFragment;
        'safeTransferFrom(address,address,uint256)': FunctionFragment;
        'setApprovalForAll(address,bool)': FunctionFragment;
        'setMiner(address)': FunctionFragment;
        'setURI(string,string)': FunctionFragment;
        'setWhiteList(address[])': FunctionFragment;
        'setupConfig(address)': FunctionFragment;
        'supportsInterface(bytes4)': FunctionFragment;
        'symbol()': FunctionFragment;
        'tokenByIndex(uint256)': FunctionFragment;
        'tokenOfOwnerByIndex(address,uint256)': FunctionFragment;
        'tokenURI(uint256)': FunctionFragment;
        'totalSupply()': FunctionFragment;
        'transferFrom(address,address,uint256)': FunctionFragment;
        'whiteList(uint256)': FunctionFragment;
    };
    encodeFunctionData(functionFragment: 'admin', values?: undefined): string;
    encodeFunctionData(functionFragment: 'approve', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'approveMiner', values: [string]): string;
    encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
    encodeFunctionData(functionFragment: 'burn', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'changeOwner', values: [string]): string;
    encodeFunctionData(functionFragment: 'checkTransfer', values: [string, string]): string;
    encodeFunctionData(functionFragment: 'config', values?: undefined): string;
    encodeFunctionData(functionFragment: 'decode', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'decodeBatch', values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'dev', values?: undefined): string;
    encodeFunctionData(functionFragment: 'exists', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getApproved', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getUserTokens', values: [string]): string;
    encodeFunctionData(functionFragment: 'isApprovedForAll', values: [string, string]): string;
    encodeFunctionData(functionFragment: 'miner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'mint', values: [string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'mintTotal', values?: undefined): string;
    encodeFunctionData(functionFragment: 'name', values?: undefined): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'ownerOf', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'pageUserTokens', values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'pageUserTokensReverse', values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'safeTransferFrom', values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setApprovalForAll', values: [string, boolean]): string;
    encodeFunctionData(functionFragment: 'setMiner', values: [string]): string;
    encodeFunctionData(functionFragment: 'setURI', values: [string, string]): string;
    encodeFunctionData(functionFragment: 'setWhiteList', values: [string[]]): string;
    encodeFunctionData(functionFragment: 'setupConfig', values: [string]): string;
    encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
    encodeFunctionData(functionFragment: 'tokenByIndex', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'tokenOfOwnerByIndex', values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'tokenURI', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
    encodeFunctionData(functionFragment: 'transferFrom', values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'whiteList', values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: 'admin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'approveMiner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'changeOwner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'checkTransfer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'config', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'decode', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'decodeBatch', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'dev', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'exists', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getApproved', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getUserTokens', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isApprovedForAll', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'miner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'mintTotal', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'ownerOf', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'pageUserTokens', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'pageUserTokensReverse', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'safeTransferFrom', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setApprovalForAll', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setMiner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setURI', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setWhiteList', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setupConfig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'tokenByIndex', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'tokenOfOwnerByIndex', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'tokenURI', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'whiteList', data: BytesLike): Result;
    events: {
        'Approval(address,address,uint256)': EventFragment;
        'ApprovalForAll(address,address,bool)': EventFragment;
        'ConfigChanged(address,address,address)': EventFragment;
        'OwnerChanged(address,address,address)': EventFragment;
        'Transfer(address,address,uint256)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ConfigChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
}
export interface Ticket extends Contract {
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
    interface: TicketInterface;
    functions: {
        admin(overrides?: CallOverrides): Promise<[string]>;
        'admin()'(overrides?: CallOverrides): Promise<[string]>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'approve(address,uint256)'(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approveMiner(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'approveMiner(address)'(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        'balanceOf(address)'(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(_tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'burn(uint256)'(_tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        changeOwner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'changeOwner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        checkTransfer(from: string, to: string, overrides?: CallOverrides): Promise<[boolean]>;
        'checkTransfer(address,address)'(from: string, to: string, overrides?: CallOverrides): Promise<[boolean]>;
        config(overrides?: CallOverrides): Promise<[string]>;
        'config()'(overrides?: CallOverrides): Promise<[string]>;
        decode(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number[]
        ] & {
            sn: BigNumber;
            blockNumber: BigNumber;
            numbers: number[];
        }>;
        'decode(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number[]
        ] & {
            sn: BigNumber;
            blockNumber: BigNumber;
            numbers: number[];
        }>;
        decodeBatch(_tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<[
            ([BigNumber, BigNumber, number[]] & {
                sn: BigNumber;
                blockNumber: BigNumber;
                numbers: number[];
            })[]
        ] & {
            result: ([BigNumber, BigNumber, number[]] & {
                sn: BigNumber;
                blockNumber: BigNumber;
                numbers: number[];
            })[];
        }>;
        'decodeBatch(uint256[])'(_tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<[
            ([BigNumber, BigNumber, number[]] & {
                sn: BigNumber;
                blockNumber: BigNumber;
                numbers: number[];
            })[]
        ] & {
            result: ([BigNumber, BigNumber, number[]] & {
                sn: BigNumber;
                blockNumber: BigNumber;
                numbers: number[];
            })[];
        }>;
        dev(overrides?: CallOverrides): Promise<[string]>;
        'dev()'(overrides?: CallOverrides): Promise<[string]>;
        exists(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        'exists(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        'getApproved(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getUserTokens(_account: string, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        'getUserTokens(address)'(_account: string, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        'isApprovedForAll(address,address)'(owner: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        miner(overrides?: CallOverrides): Promise<[string]>;
        'miner()'(overrides?: CallOverrides): Promise<[string]>;
        mint(_to: string, _keys: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'mint(address,uint8[])'(_to: string, _keys: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintTotal(overrides?: CallOverrides): Promise<[BigNumber]>;
        'mintTotal()'(overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        'name()'(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        'owner()'(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        'ownerOf(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        pageUserTokens(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber,
            BigNumber
        ] & {
            tokens: BigNumber[];
            cursor: BigNumber;
            count: BigNumber;
        }>;
        'pageUserTokens(address,uint256,uint256)'(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber,
            BigNumber
        ] & {
            tokens: BigNumber[];
            cursor: BigNumber;
            count: BigNumber;
        }>;
        pageUserTokensReverse(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber,
            BigNumber
        ] & {
            tokens: BigNumber[];
            newCursor: BigNumber;
            count: BigNumber;
        }>;
        'pageUserTokensReverse(address,uint256,uint256)'(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber,
            BigNumber
        ] & {
            tokens: BigNumber[];
            newCursor: BigNumber;
            count: BigNumber;
        }>;
        'safeTransferFrom(address,address,uint256)'(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'safeTransferFrom(address,address,uint256,bytes)'(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setApprovalForAll(address,bool)'(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMiner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setMiner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setURI(_base_uri: string, _suffix: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setURI(string,string)'(_base_uri: string, _suffix: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWhiteList(_whiteList: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setWhiteList(address[])'(_whiteList: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setupConfig(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setupConfig(address)'(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        'supportsInterface(bytes4)'(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        'symbol()'(overrides?: CallOverrides): Promise<[string]>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        'tokenByIndex(uint256)'(index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        'tokenOfOwnerByIndex(address,uint256)'(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        'tokenURI(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        'totalSupply()'(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'transferFrom(address,address,uint256)'(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whiteList(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        'whiteList(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    admin(overrides?: CallOverrides): Promise<string>;
    'admin()'(overrides?: CallOverrides): Promise<string>;
    approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'approve(address,uint256)'(to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approveMiner(_account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'approveMiner(address)'(_account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    'balanceOf(address)'(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(_tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'burn(uint256)'(_tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    changeOwner(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'changeOwner(address)'(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    checkTransfer(from: string, to: string, overrides?: CallOverrides): Promise<boolean>;
    'checkTransfer(address,address)'(from: string, to: string, overrides?: CallOverrides): Promise<boolean>;
    config(overrides?: CallOverrides): Promise<string>;
    'config()'(overrides?: CallOverrides): Promise<string>;
    decode(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        number[]
    ] & {
        sn: BigNumber;
        blockNumber: BigNumber;
        numbers: number[];
    }>;
    'decode(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        number[]
    ] & {
        sn: BigNumber;
        blockNumber: BigNumber;
        numbers: number[];
    }>;
    decodeBatch(_tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<([BigNumber, BigNumber, number[]] & {
        sn: BigNumber;
        blockNumber: BigNumber;
        numbers: number[];
    })[]>;
    'decodeBatch(uint256[])'(_tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<([BigNumber, BigNumber, number[]] & {
        sn: BigNumber;
        blockNumber: BigNumber;
        numbers: number[];
    })[]>;
    dev(overrides?: CallOverrides): Promise<string>;
    'dev()'(overrides?: CallOverrides): Promise<string>;
    exists(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    'exists(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    'getApproved(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getUserTokens(_account: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    'getUserTokens(address)'(_account: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    'isApprovedForAll(address,address)'(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    miner(overrides?: CallOverrides): Promise<string>;
    'miner()'(overrides?: CallOverrides): Promise<string>;
    mint(_to: string, _keys: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'mint(address,uint8[])'(_to: string, _keys: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintTotal(overrides?: CallOverrides): Promise<BigNumber>;
    'mintTotal()'(overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    'name()'(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    'owner()'(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    'ownerOf(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    pageUserTokens(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber[],
        BigNumber,
        BigNumber
    ] & {
        tokens: BigNumber[];
        cursor: BigNumber;
        count: BigNumber;
    }>;
    'pageUserTokens(address,uint256,uint256)'(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber[],
        BigNumber,
        BigNumber
    ] & {
        tokens: BigNumber[];
        cursor: BigNumber;
        count: BigNumber;
    }>;
    pageUserTokensReverse(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber[],
        BigNumber,
        BigNumber
    ] & {
        tokens: BigNumber[];
        newCursor: BigNumber;
        count: BigNumber;
    }>;
    'pageUserTokensReverse(address,uint256,uint256)'(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber[],
        BigNumber,
        BigNumber
    ] & {
        tokens: BigNumber[];
        newCursor: BigNumber;
        count: BigNumber;
    }>;
    'safeTransferFrom(address,address,uint256)'(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'safeTransferFrom(address,address,uint256,bytes)'(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setApprovalForAll(address,bool)'(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMiner(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setMiner(address)'(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setURI(_base_uri: string, _suffix: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setURI(string,string)'(_base_uri: string, _suffix: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWhiteList(_whiteList: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setWhiteList(address[])'(_whiteList: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setupConfig(_config: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setupConfig(address)'(_config: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    'supportsInterface(bytes4)'(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    'symbol()'(overrides?: CallOverrides): Promise<string>;
    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    'tokenByIndex(uint256)'(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    'tokenOfOwnerByIndex(address,uint256)'(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    'tokenURI(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'transferFrom(address,address,uint256)'(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whiteList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    'whiteList(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        admin(overrides?: CallOverrides): Promise<string>;
        'admin()'(overrides?: CallOverrides): Promise<string>;
        approve(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        'approve(address,uint256)'(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        approveMiner(_account: string, overrides?: CallOverrides): Promise<void>;
        'approveMiner(address)'(_account: string, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        'balanceOf(address)'(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        'burn(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        changeOwner(_user: string, overrides?: CallOverrides): Promise<void>;
        'changeOwner(address)'(_user: string, overrides?: CallOverrides): Promise<void>;
        checkTransfer(from: string, to: string, overrides?: CallOverrides): Promise<boolean>;
        'checkTransfer(address,address)'(from: string, to: string, overrides?: CallOverrides): Promise<boolean>;
        config(overrides?: CallOverrides): Promise<string>;
        'config()'(overrides?: CallOverrides): Promise<string>;
        decode(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number[]
        ] & {
            sn: BigNumber;
            blockNumber: BigNumber;
            numbers: number[];
        }>;
        'decode(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number[]
        ] & {
            sn: BigNumber;
            blockNumber: BigNumber;
            numbers: number[];
        }>;
        decodeBatch(_tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<([BigNumber, BigNumber, number[]] & {
            sn: BigNumber;
            blockNumber: BigNumber;
            numbers: number[];
        })[]>;
        'decodeBatch(uint256[])'(_tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<([BigNumber, BigNumber, number[]] & {
            sn: BigNumber;
            blockNumber: BigNumber;
            numbers: number[];
        })[]>;
        dev(overrides?: CallOverrides): Promise<string>;
        'dev()'(overrides?: CallOverrides): Promise<string>;
        exists(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        'exists(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        'getApproved(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getUserTokens(_account: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        'getUserTokens(address)'(_account: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        'isApprovedForAll(address,address)'(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        miner(overrides?: CallOverrides): Promise<string>;
        'miner()'(overrides?: CallOverrides): Promise<string>;
        mint(_to: string, _keys: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        'mint(address,uint8[])'(_to: string, _keys: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        mintTotal(overrides?: CallOverrides): Promise<BigNumber>;
        'mintTotal()'(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        'name()'(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        'owner()'(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        'ownerOf(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        pageUserTokens(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber,
            BigNumber
        ] & {
            tokens: BigNumber[];
            cursor: BigNumber;
            count: BigNumber;
        }>;
        'pageUserTokens(address,uint256,uint256)'(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber,
            BigNumber
        ] & {
            tokens: BigNumber[];
            cursor: BigNumber;
            count: BigNumber;
        }>;
        pageUserTokensReverse(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber,
            BigNumber
        ] & {
            tokens: BigNumber[];
            newCursor: BigNumber;
            count: BigNumber;
        }>;
        'pageUserTokensReverse(address,uint256,uint256)'(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber,
            BigNumber
        ] & {
            tokens: BigNumber[];
            newCursor: BigNumber;
            count: BigNumber;
        }>;
        'safeTransferFrom(address,address,uint256)'(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        'safeTransferFrom(address,address,uint256,bytes)'(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        'setApprovalForAll(address,bool)'(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        setMiner(_user: string, overrides?: CallOverrides): Promise<void>;
        'setMiner(address)'(_user: string, overrides?: CallOverrides): Promise<void>;
        setURI(_base_uri: string, _suffix: string, overrides?: CallOverrides): Promise<void>;
        'setURI(string,string)'(_base_uri: string, _suffix: string, overrides?: CallOverrides): Promise<void>;
        setWhiteList(_whiteList: string[], overrides?: CallOverrides): Promise<void>;
        'setWhiteList(address[])'(_whiteList: string[], overrides?: CallOverrides): Promise<void>;
        setupConfig(_config: string, overrides?: CallOverrides): Promise<void>;
        'setupConfig(address)'(_config: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        'supportsInterface(bytes4)'(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        'symbol()'(overrides?: CallOverrides): Promise<string>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'tokenByIndex(uint256)'(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'tokenOfOwnerByIndex(address,uint256)'(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        'tokenURI(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        'transferFrom(address,address,uint256)'(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        whiteList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        'whiteList(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        Approval(owner: string | null, approved: string | null, tokenId: BigNumberish | null): TypedEventFilter<[string, string, BigNumber], {
            owner: string;
            approved: string;
            tokenId: BigNumber;
        }>;
        ApprovalForAll(owner: string | null, operator: string | null, approved: null): TypedEventFilter<[string, string, boolean], {
            owner: string;
            operator: string;
            approved: boolean;
        }>;
        ConfigChanged(_user: string | null, _old: string | null, _new: string | null): TypedEventFilter<[string, string, string], {
            _user: string;
            _old: string;
            _new: string;
        }>;
        OwnerChanged(_user: string | null, _old: string | null, _new: string | null): TypedEventFilter<[string, string, string], {
            _user: string;
            _old: string;
            _new: string;
        }>;
        Transfer(from: string | null, to: string | null, tokenId: BigNumberish | null): TypedEventFilter<[string, string, BigNumber], {
            from: string;
            to: string;
            tokenId: BigNumber;
        }>;
    };
    estimateGas: {
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        'admin()'(overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'approve(address,uint256)'(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approveMiner(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'approveMiner(address)'(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        'balanceOf(address)'(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'burn(uint256)'(_tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        changeOwner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'changeOwner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        checkTransfer(from: string, to: string, overrides?: CallOverrides): Promise<BigNumber>;
        'checkTransfer(address,address)'(from: string, to: string, overrides?: CallOverrides): Promise<BigNumber>;
        config(overrides?: CallOverrides): Promise<BigNumber>;
        'config()'(overrides?: CallOverrides): Promise<BigNumber>;
        decode(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'decode(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        decodeBatch(_tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        'decodeBatch(uint256[])'(_tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        dev(overrides?: CallOverrides): Promise<BigNumber>;
        'dev()'(overrides?: CallOverrides): Promise<BigNumber>;
        exists(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'exists(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'getApproved(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getUserTokens(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        'getUserTokens(address)'(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        'isApprovedForAll(address,address)'(owner: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        miner(overrides?: CallOverrides): Promise<BigNumber>;
        'miner()'(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_to: string, _keys: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'mint(address,uint8[])'(_to: string, _keys: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintTotal(overrides?: CallOverrides): Promise<BigNumber>;
        'mintTotal()'(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        'name()'(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        'owner()'(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'ownerOf(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        pageUserTokens(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'pageUserTokens(address,uint256,uint256)'(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        pageUserTokensReverse(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'pageUserTokensReverse(address,uint256,uint256)'(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'safeTransferFrom(address,address,uint256)'(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'safeTransferFrom(address,address,uint256,bytes)'(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setApprovalForAll(address,bool)'(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMiner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setMiner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setURI(_base_uri: string, _suffix: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setURI(string,string)'(_base_uri: string, _suffix: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWhiteList(_whiteList: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setWhiteList(address[])'(_whiteList: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setupConfig(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setupConfig(address)'(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        'supportsInterface(bytes4)'(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        'symbol()'(overrides?: CallOverrides): Promise<BigNumber>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'tokenByIndex(uint256)'(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'tokenOfOwnerByIndex(address,uint256)'(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'tokenURI(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'transferFrom(address,address,uint256)'(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whiteList(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'whiteList(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'admin()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'approve(address,uint256)'(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approveMiner(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'approveMiner(address)'(_account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'balanceOf(address)'(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(_tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'burn(uint256)'(_tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        changeOwner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'changeOwner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        checkTransfer(from: string, to: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'checkTransfer(address,address)'(from: string, to: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        config(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'config()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'decode(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decodeBatch(_tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'decodeBatch(uint256[])'(_tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dev(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'dev()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exists(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'exists(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'getApproved(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserTokens(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'getUserTokens(address)'(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'isApprovedForAll(address,address)'(owner: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        miner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'miner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(_to: string, _keys: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'mint(address,uint8[])'(_to: string, _keys: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintTotal(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'mintTotal()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'name()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'ownerOf(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pageUserTokens(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'pageUserTokens(address,uint256,uint256)'(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pageUserTokensReverse(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'pageUserTokensReverse(address,uint256,uint256)'(_user: string, _cursor: BigNumberish, _size: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'safeTransferFrom(address,address,uint256)'(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'safeTransferFrom(address,address,uint256,bytes)'(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setApprovalForAll(address,bool)'(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMiner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setMiner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setURI(_base_uri: string, _suffix: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setURI(string,string)'(_base_uri: string, _suffix: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWhiteList(_whiteList: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setWhiteList(address[])'(_whiteList: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setupConfig(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setupConfig(address)'(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'supportsInterface(bytes4)'(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'symbol()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'tokenByIndex(uint256)'(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'tokenOfOwnerByIndex(address,uint256)'(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'tokenURI(uint256)'(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'totalSupply()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'transferFrom(address,address,uint256)'(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whiteList(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'whiteList(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
export {};

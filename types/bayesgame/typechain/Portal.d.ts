import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, Contract, ContractTransaction, Overrides, PayableOverrides, CallOverrides } from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';
interface PortalInterface extends ethers.utils.Interface {
    functions: {
        'admin()': FunctionFragment;
        'batchClaimBonuses(uint256[],uint256[])': FunctionFragment;
        'batchQueryBonuses(uint256[],uint256[])': FunctionFragment;
        'changeOwner(address)': FunctionFragment;
        'checkKeys(uint8[])': FunctionFragment;
        'checkRound(uint256)': FunctionFragment;
        'claimBonuses(uint256,uint256)': FunctionFragment;
        'config()': FunctionFragment;
        'currency()': FunctionFragment;
        'dev()': FunctionFragment;
        'enabled()': FunctionFragment;
        'getBalance(address)': FunctionFragment;
        'getCodes(uint256,uint256)': FunctionFragment;
        'getFormatCode(uint256)': FunctionFragment;
        'getFormatCodes(uint256,uint256)': FunctionFragment;
        'getPrizeRates()': FunctionFragment;
        'getRecords(bytes32[])': FunctionFragment;
        'initialize(address)': FunctionFragment;
        'inviterBonusesRate()': FunctionFragment;
        'keyPrice()': FunctionFragment;
        'keyPriceChange()': FunctionFragment;
        'keyPriceNext()': FunctionFragment;
        'keySize()': FunctionFragment;
        'lottoNumbers()': FunctionFragment;
        'makeTicket(uint8[])': FunctionFragment;
        'makeTickets(uint8[][])': FunctionFragment;
        'matchLevel(uint256,uint256)': FunctionFragment;
        'maxMintRang()': FunctionFragment;
        'maxMintSize()': FunctionFragment;
        'mintKey(uint256,bytes32,uint256,bytes)': FunctionFragment;
        'mintKeys(uint256[],bytes32,uint256,bytes)': FunctionFragment;
        'owner()': FunctionFragment;
        'prizeRates(uint256)': FunctionFragment;
        'queryBonuses(uint256,uint256)': FunctionFragment;
        'records(bytes32)': FunctionFragment;
        'register(address,bytes32,uint256,bytes)': FunctionFragment;
        'relationships(address)': FunctionFragment;
        'roundCodes(uint256)': FunctionFragment;
        'roundExpired()': FunctionFragment;
        'setBonusesRate(uint256,uint256)': FunctionFragment;
        'setBusinessContracts(address,address)': FunctionFragment;
        'setEnabled(bool)': FunctionFragment;
        'setKeyPrice(bool,uint256)': FunctionFragment;
        'setMaxMintSize(uint256)': FunctionFragment;
        'setPrizeRates(uint256[])': FunctionFragment;
        'setRoundExpired(uint256)': FunctionFragment;
        'setSigner(address)': FunctionFragment;
        'setSignerContract(address,bytes32)': FunctionFragment;
        'setTreasury(address)': FunctionFragment;
        'setupConfig(address)': FunctionFragment;
        'signer()': FunctionFragment;
        'ticket()': FunctionFragment;
        'totalRound()': FunctionFragment;
        'treasury()': FunctionFragment;
        'treasuryBonusesRate()': FunctionFragment;
        'verifyMessage(bytes32,bytes)': FunctionFragment;
    };
    encodeFunctionData(functionFragment: 'admin', values?: undefined): string;
    encodeFunctionData(functionFragment: 'batchClaimBonuses', values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'batchQueryBonuses', values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'changeOwner', values: [string]): string;
    encodeFunctionData(functionFragment: 'checkKeys', values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'checkRound', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'claimBonuses', values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'config', values?: undefined): string;
    encodeFunctionData(functionFragment: 'currency', values?: undefined): string;
    encodeFunctionData(functionFragment: 'dev', values?: undefined): string;
    encodeFunctionData(functionFragment: 'enabled', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getBalance', values: [string]): string;
    encodeFunctionData(functionFragment: 'getCodes', values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getFormatCode', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getFormatCodes', values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getPrizeRates', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getRecords', values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: 'initialize', values: [string]): string;
    encodeFunctionData(functionFragment: 'inviterBonusesRate', values?: undefined): string;
    encodeFunctionData(functionFragment: 'keyPrice', values?: undefined): string;
    encodeFunctionData(functionFragment: 'keyPriceChange', values?: undefined): string;
    encodeFunctionData(functionFragment: 'keyPriceNext', values?: undefined): string;
    encodeFunctionData(functionFragment: 'keySize', values?: undefined): string;
    encodeFunctionData(functionFragment: 'lottoNumbers', values?: undefined): string;
    encodeFunctionData(functionFragment: 'makeTicket', values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'makeTickets', values: [BigNumberish[][]]): string;
    encodeFunctionData(functionFragment: 'matchLevel', values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'maxMintRang', values?: undefined): string;
    encodeFunctionData(functionFragment: 'maxMintSize', values?: undefined): string;
    encodeFunctionData(functionFragment: 'mintKey', values: [BigNumberish, BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'mintKeys', values: [BigNumberish[], BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'prizeRates', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'queryBonuses', values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'records', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'register', values: [string, BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'relationships', values: [string]): string;
    encodeFunctionData(functionFragment: 'roundCodes', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'roundExpired', values?: undefined): string;
    encodeFunctionData(functionFragment: 'setBonusesRate', values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setBusinessContracts', values: [string, string]): string;
    encodeFunctionData(functionFragment: 'setEnabled', values: [boolean]): string;
    encodeFunctionData(functionFragment: 'setKeyPrice', values: [boolean, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setMaxMintSize', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setPrizeRates', values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'setRoundExpired', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setSigner', values: [string]): string;
    encodeFunctionData(functionFragment: 'setSignerContract', values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: 'setTreasury', values: [string]): string;
    encodeFunctionData(functionFragment: 'setupConfig', values: [string]): string;
    encodeFunctionData(functionFragment: 'signer', values?: undefined): string;
    encodeFunctionData(functionFragment: 'ticket', values?: undefined): string;
    encodeFunctionData(functionFragment: 'totalRound', values?: undefined): string;
    encodeFunctionData(functionFragment: 'treasury', values?: undefined): string;
    encodeFunctionData(functionFragment: 'treasuryBonusesRate', values?: undefined): string;
    encodeFunctionData(functionFragment: 'verifyMessage', values: [BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: 'admin', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchClaimBonuses', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'batchQueryBonuses', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'changeOwner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'checkKeys', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'checkRound', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'claimBonuses', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'config', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'currency', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'dev', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'enabled', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getBalance', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getCodes', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getFormatCode', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getFormatCodes', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getPrizeRates', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getRecords', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'inviterBonusesRate', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'keyPrice', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'keyPriceChange', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'keyPriceNext', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'keySize', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'lottoNumbers', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'makeTicket', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'makeTickets', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'matchLevel', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'maxMintRang', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'maxMintSize', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'mintKey', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'mintKeys', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'prizeRates', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'queryBonuses', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'records', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'register', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'relationships', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'roundCodes', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'roundExpired', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setBonusesRate', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setBusinessContracts', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setEnabled', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setKeyPrice', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setMaxMintSize', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setPrizeRates', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setRoundExpired', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setSigner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setSignerContract', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setTreasury', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setupConfig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'signer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'ticket', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalRound', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'treasury', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'treasuryBonusesRate', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'verifyMessage', data: BytesLike): Result;
    events: {
        'ClaimBonusesLog(uint256,uint256,address,address,address,uint256,uint256,uint256,uint256)': EventFragment;
        'ConfigChanged(address,address,address)': EventFragment;
        'KeyPriceLog(uint256,uint256)': EventFragment;
        'LotteryLog(address,uint256,uint256)': EventFragment;
        'MakeTicketLog(address,uint256)': EventFragment;
        'MintKeyLog(bytes32,address,uint8[])': EventFragment;
        'OwnerChanged(address,address,address)': EventFragment;
        'RegisterLog(bytes32,address,address)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'ClaimBonusesLog'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ConfigChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'KeyPriceLog'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'LotteryLog'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'MakeTicketLog'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'MintKeyLog'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'RegisterLog'): EventFragment;
}
export interface Portal extends Contract {
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
    interface: PortalInterface;
    functions: {
        admin(overrides?: CallOverrides): Promise<[string]>;
        'admin()'(overrides?: CallOverrides): Promise<[string]>;
        batchClaimBonuses(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'batchClaimBonuses(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchQueryBonuses(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<[
            ([BigNumber, BigNumber] & {
                level: BigNumber;
                userAmount: BigNumber;
            })[][]
        ] & {
            result: ([BigNumber, BigNumber] & {
                level: BigNumber;
                userAmount: BigNumber;
            })[][];
        }>;
        'batchQueryBonuses(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<[
            ([BigNumber, BigNumber] & {
                level: BigNumber;
                userAmount: BigNumber;
            })[][]
        ] & {
            result: ([BigNumber, BigNumber] & {
                level: BigNumber;
                userAmount: BigNumber;
            })[][];
        }>;
        changeOwner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'changeOwner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        checkKeys(_keys: BigNumberish[], overrides?: CallOverrides): Promise<[boolean]>;
        'checkKeys(uint8[])'(_keys: BigNumberish[], overrides?: CallOverrides): Promise<[boolean]>;
        checkRound(_round: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        'checkRound(uint256)'(_round: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        claimBonuses(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'claimBonuses(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
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
        getCodes(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[], BigNumber] & {
            result: BigNumber[];
            blockNumber: BigNumber;
        }>;
        'getCodes(uint256,uint256)'(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[], BigNumber] & {
            result: BigNumber[];
            blockNumber: BigNumber;
        }>;
        getFormatCode(_round: BigNumberish, overrides?: CallOverrides): Promise<[
            [
                BigNumber,
                number[],
                BigNumber
            ] & {
                round: BigNumber;
                code: number[];
                blockNumber: BigNumber;
            }
        ]>;
        'getFormatCode(uint256)'(_round: BigNumberish, overrides?: CallOverrides): Promise<[
            [
                BigNumber,
                number[],
                BigNumber
            ] & {
                round: BigNumber;
                code: number[];
                blockNumber: BigNumber;
            }
        ]>;
        getFormatCodes(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[
            ([BigNumber, number[], BigNumber] & {
                round: BigNumber;
                code: number[];
                blockNumber: BigNumber;
            })[],
            BigNumber
        ] & {
            result: ([BigNumber, number[], BigNumber] & {
                round: BigNumber;
                code: number[];
                blockNumber: BigNumber;
            })[];
            blockNumber: BigNumber;
        }>;
        'getFormatCodes(uint256,uint256)'(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[
            ([BigNumber, number[], BigNumber] & {
                round: BigNumber;
                code: number[];
                blockNumber: BigNumber;
            })[],
            BigNumber
        ] & {
            result: ([BigNumber, number[], BigNumber] & {
                round: BigNumber;
                code: number[];
                blockNumber: BigNumber;
            })[];
            blockNumber: BigNumber;
        }>;
        getPrizeRates(overrides?: CallOverrides): Promise<[BigNumber[]]>;
        'getPrizeRates()'(overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getRecords(_sns: BytesLike[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            result: BigNumber[];
        }>;
        'getRecords(bytes32[])'(_sns: BytesLike[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            result: BigNumber[];
        }>;
        initialize(_currency: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'initialize(address)'(_currency: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        inviterBonusesRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        'inviterBonusesRate()'(overrides?: CallOverrides): Promise<[BigNumber]>;
        keyPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        'keyPrice()'(overrides?: CallOverrides): Promise<[BigNumber]>;
        keyPriceChange(overrides?: CallOverrides): Promise<[boolean]>;
        'keyPriceChange()'(overrides?: CallOverrides): Promise<[boolean]>;
        keyPriceNext(overrides?: CallOverrides): Promise<[BigNumber]>;
        'keyPriceNext()'(overrides?: CallOverrides): Promise<[BigNumber]>;
        keySize(overrides?: CallOverrides): Promise<[BigNumber]>;
        'keySize()'(overrides?: CallOverrides): Promise<[BigNumber]>;
        lottoNumbers(overrides?: CallOverrides): Promise<[string]>;
        'lottoNumbers()'(overrides?: CallOverrides): Promise<[string]>;
        makeTicket(_keys: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'makeTicket(uint8[])'(_keys: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        makeTickets(_keys: BigNumberish[][], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'makeTickets(uint8[][])'(_keys: BigNumberish[][], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        matchLevel(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        'matchLevel(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxMintRang(overrides?: CallOverrides): Promise<[BigNumber]>;
        'maxMintRang()'(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxMintSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        'maxMintSize()'(overrides?: CallOverrides): Promise<[BigNumber]>;
        mintKey(_random: BigNumberish, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'mintKey(uint256,bytes32,uint256,bytes)'(_random: BigNumberish, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintKeys(_randoms: BigNumberish[], _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'mintKeys(uint256[],bytes32,uint256,bytes)'(_randoms: BigNumberish[], _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        'owner()'(overrides?: CallOverrides): Promise<[string]>;
        prizeRates(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        'prizeRates(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        queryBonuses(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[[BigNumber, BigNumber] & {
            level: BigNumber;
            userAmount: BigNumber;
        }]>;
        'queryBonuses(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[[BigNumber, BigNumber] & {
            level: BigNumber;
            userAmount: BigNumber;
        }]>;
        records(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        'records(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        register(_inviter: string, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'register(address,bytes32,uint256,bytes)'(_inviter: string, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        relationships(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        'relationships(address)'(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        roundCodes(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        'roundCodes(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        roundExpired(overrides?: CallOverrides): Promise<[BigNumber]>;
        'roundExpired()'(overrides?: CallOverrides): Promise<[BigNumber]>;
        setBonusesRate(_inviterBonusesRate: BigNumberish, _treasuryBonusesRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setBonusesRate(uint256,uint256)'(_inviterBonusesRate: BigNumberish, _treasuryBonusesRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBusinessContracts(_ticket: string, _lottoNumbers: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setBusinessContracts(address,address)'(_ticket: string, _lottoNumbers: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setEnabled(_enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setEnabled(bool)'(_enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setKeyPrice(_keyPriceChange: boolean, _keyPriceNext: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setKeyPrice(bool,uint256)'(_keyPriceChange: boolean, _keyPriceNext: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxMintSize(_size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setMaxMintSize(uint256)'(_size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPrizeRates(_rates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setPrizeRates(uint256[])'(_rates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRoundExpired(_expired: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setRoundExpired(uint256)'(_expired: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSigner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setSigner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSignerContract(_signer: string, _hash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setSignerContract(address,bytes32)'(_signer: string, _hash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTreasury(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setTreasury(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setupConfig(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'setupConfig(address)'(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        signer(overrides?: CallOverrides): Promise<[string]>;
        'signer()'(overrides?: CallOverrides): Promise<[string]>;
        ticket(overrides?: CallOverrides): Promise<[string]>;
        'ticket()'(overrides?: CallOverrides): Promise<[string]>;
        totalRound(overrides?: CallOverrides): Promise<[BigNumber]>;
        'totalRound()'(overrides?: CallOverrides): Promise<[BigNumber]>;
        treasury(overrides?: CallOverrides): Promise<[string]>;
        'treasury()'(overrides?: CallOverrides): Promise<[string]>;
        treasuryBonusesRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        'treasuryBonusesRate()'(overrides?: CallOverrides): Promise<[BigNumber]>;
        verifyMessage(_messageHash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        'verifyMessage(bytes32,bytes)'(_messageHash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    admin(overrides?: CallOverrides): Promise<string>;
    'admin()'(overrides?: CallOverrides): Promise<string>;
    batchClaimBonuses(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'batchClaimBonuses(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchQueryBonuses(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<([BigNumber, BigNumber] & {
        level: BigNumber;
        userAmount: BigNumber;
    })[][]>;
    'batchQueryBonuses(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<([BigNumber, BigNumber] & {
        level: BigNumber;
        userAmount: BigNumber;
    })[][]>;
    changeOwner(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'changeOwner(address)'(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    checkKeys(_keys: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
    'checkKeys(uint8[])'(_keys: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
    checkRound(_round: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    'checkRound(uint256)'(_round: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    claimBonuses(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'claimBonuses(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
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
    getCodes(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[], BigNumber] & {
        result: BigNumber[];
        blockNumber: BigNumber;
    }>;
    'getCodes(uint256,uint256)'(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[], BigNumber] & {
        result: BigNumber[];
        blockNumber: BigNumber;
    }>;
    getFormatCode(_round: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        number[],
        BigNumber
    ] & {
        round: BigNumber;
        code: number[];
        blockNumber: BigNumber;
    }>;
    'getFormatCode(uint256)'(_round: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        number[],
        BigNumber
    ] & {
        round: BigNumber;
        code: number[];
        blockNumber: BigNumber;
    }>;
    getFormatCodes(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[
        ([BigNumber, number[], BigNumber] & {
            round: BigNumber;
            code: number[];
            blockNumber: BigNumber;
        })[],
        BigNumber
    ] & {
        result: ([BigNumber, number[], BigNumber] & {
            round: BigNumber;
            code: number[];
            blockNumber: BigNumber;
        })[];
        blockNumber: BigNumber;
    }>;
    'getFormatCodes(uint256,uint256)'(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[
        ([BigNumber, number[], BigNumber] & {
            round: BigNumber;
            code: number[];
            blockNumber: BigNumber;
        })[],
        BigNumber
    ] & {
        result: ([BigNumber, number[], BigNumber] & {
            round: BigNumber;
            code: number[];
            blockNumber: BigNumber;
        })[];
        blockNumber: BigNumber;
    }>;
    getPrizeRates(overrides?: CallOverrides): Promise<BigNumber[]>;
    'getPrizeRates()'(overrides?: CallOverrides): Promise<BigNumber[]>;
    getRecords(_sns: BytesLike[], overrides?: CallOverrides): Promise<BigNumber[]>;
    'getRecords(bytes32[])'(_sns: BytesLike[], overrides?: CallOverrides): Promise<BigNumber[]>;
    initialize(_currency: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'initialize(address)'(_currency: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    inviterBonusesRate(overrides?: CallOverrides): Promise<BigNumber>;
    'inviterBonusesRate()'(overrides?: CallOverrides): Promise<BigNumber>;
    keyPrice(overrides?: CallOverrides): Promise<BigNumber>;
    'keyPrice()'(overrides?: CallOverrides): Promise<BigNumber>;
    keyPriceChange(overrides?: CallOverrides): Promise<boolean>;
    'keyPriceChange()'(overrides?: CallOverrides): Promise<boolean>;
    keyPriceNext(overrides?: CallOverrides): Promise<BigNumber>;
    'keyPriceNext()'(overrides?: CallOverrides): Promise<BigNumber>;
    keySize(overrides?: CallOverrides): Promise<BigNumber>;
    'keySize()'(overrides?: CallOverrides): Promise<BigNumber>;
    lottoNumbers(overrides?: CallOverrides): Promise<string>;
    'lottoNumbers()'(overrides?: CallOverrides): Promise<string>;
    makeTicket(_keys: BigNumberish[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'makeTicket(uint8[])'(_keys: BigNumberish[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    makeTickets(_keys: BigNumberish[][], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'makeTickets(uint8[][])'(_keys: BigNumberish[][], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    matchLevel(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    'matchLevel(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    maxMintRang(overrides?: CallOverrides): Promise<BigNumber>;
    'maxMintRang()'(overrides?: CallOverrides): Promise<BigNumber>;
    maxMintSize(overrides?: CallOverrides): Promise<BigNumber>;
    'maxMintSize()'(overrides?: CallOverrides): Promise<BigNumber>;
    mintKey(_random: BigNumberish, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'mintKey(uint256,bytes32,uint256,bytes)'(_random: BigNumberish, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintKeys(_randoms: BigNumberish[], _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'mintKeys(uint256[],bytes32,uint256,bytes)'(_randoms: BigNumberish[], _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    'owner()'(overrides?: CallOverrides): Promise<string>;
    prizeRates(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    'prizeRates(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    queryBonuses(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        level: BigNumber;
        userAmount: BigNumber;
    }>;
    'queryBonuses(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        level: BigNumber;
        userAmount: BigNumber;
    }>;
    records(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    'records(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    register(_inviter: string, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'register(address,bytes32,uint256,bytes)'(_inviter: string, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    relationships(arg0: string, overrides?: CallOverrides): Promise<string>;
    'relationships(address)'(arg0: string, overrides?: CallOverrides): Promise<string>;
    roundCodes(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    'roundCodes(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    roundExpired(overrides?: CallOverrides): Promise<BigNumber>;
    'roundExpired()'(overrides?: CallOverrides): Promise<BigNumber>;
    setBonusesRate(_inviterBonusesRate: BigNumberish, _treasuryBonusesRate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setBonusesRate(uint256,uint256)'(_inviterBonusesRate: BigNumberish, _treasuryBonusesRate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBusinessContracts(_ticket: string, _lottoNumbers: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setBusinessContracts(address,address)'(_ticket: string, _lottoNumbers: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setEnabled(_enabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setEnabled(bool)'(_enabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setKeyPrice(_keyPriceChange: boolean, _keyPriceNext: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setKeyPrice(bool,uint256)'(_keyPriceChange: boolean, _keyPriceNext: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxMintSize(_size: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setMaxMintSize(uint256)'(_size: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPrizeRates(_rates: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setPrizeRates(uint256[])'(_rates: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRoundExpired(_expired: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setRoundExpired(uint256)'(_expired: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSigner(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setSigner(address)'(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSignerContract(_signer: string, _hash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setSignerContract(address,bytes32)'(_signer: string, _hash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTreasury(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setTreasury(address)'(_user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setupConfig(_config: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'setupConfig(address)'(_config: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    ticket(overrides?: CallOverrides): Promise<string>;
    'ticket()'(overrides?: CallOverrides): Promise<string>;
    totalRound(overrides?: CallOverrides): Promise<BigNumber>;
    'totalRound()'(overrides?: CallOverrides): Promise<BigNumber>;
    treasury(overrides?: CallOverrides): Promise<string>;
    'treasury()'(overrides?: CallOverrides): Promise<string>;
    treasuryBonusesRate(overrides?: CallOverrides): Promise<BigNumber>;
    'treasuryBonusesRate()'(overrides?: CallOverrides): Promise<BigNumber>;
    verifyMessage(_messageHash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    'verifyMessage(bytes32,bytes)'(_messageHash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        admin(overrides?: CallOverrides): Promise<string>;
        'admin()'(overrides?: CallOverrides): Promise<string>;
        batchClaimBonuses(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        'batchClaimBonuses(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        batchQueryBonuses(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<([BigNumber, BigNumber] & {
            level: BigNumber;
            userAmount: BigNumber;
        })[][]>;
        'batchQueryBonuses(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<([BigNumber, BigNumber] & {
            level: BigNumber;
            userAmount: BigNumber;
        })[][]>;
        changeOwner(_user: string, overrides?: CallOverrides): Promise<void>;
        'changeOwner(address)'(_user: string, overrides?: CallOverrides): Promise<void>;
        checkKeys(_keys: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
        'checkKeys(uint8[])'(_keys: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
        checkRound(_round: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        'checkRound(uint256)'(_round: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        claimBonuses(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'claimBonuses(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
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
        getCodes(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[], BigNumber] & {
            result: BigNumber[];
            blockNumber: BigNumber;
        }>;
        'getCodes(uint256,uint256)'(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[], BigNumber] & {
            result: BigNumber[];
            blockNumber: BigNumber;
        }>;
        getFormatCode(_round: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            number[],
            BigNumber
        ] & {
            round: BigNumber;
            code: number[];
            blockNumber: BigNumber;
        }>;
        'getFormatCode(uint256)'(_round: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            number[],
            BigNumber
        ] & {
            round: BigNumber;
            code: number[];
            blockNumber: BigNumber;
        }>;
        getFormatCodes(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[
            ([BigNumber, number[], BigNumber] & {
                round: BigNumber;
                code: number[];
                blockNumber: BigNumber;
            })[],
            BigNumber
        ] & {
            result: ([BigNumber, number[], BigNumber] & {
                round: BigNumber;
                code: number[];
                blockNumber: BigNumber;
            })[];
            blockNumber: BigNumber;
        }>;
        'getFormatCodes(uint256,uint256)'(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[
            ([BigNumber, number[], BigNumber] & {
                round: BigNumber;
                code: number[];
                blockNumber: BigNumber;
            })[],
            BigNumber
        ] & {
            result: ([BigNumber, number[], BigNumber] & {
                round: BigNumber;
                code: number[];
                blockNumber: BigNumber;
            })[];
            blockNumber: BigNumber;
        }>;
        getPrizeRates(overrides?: CallOverrides): Promise<BigNumber[]>;
        'getPrizeRates()'(overrides?: CallOverrides): Promise<BigNumber[]>;
        getRecords(_sns: BytesLike[], overrides?: CallOverrides): Promise<BigNumber[]>;
        'getRecords(bytes32[])'(_sns: BytesLike[], overrides?: CallOverrides): Promise<BigNumber[]>;
        initialize(_currency: string, overrides?: CallOverrides): Promise<void>;
        'initialize(address)'(_currency: string, overrides?: CallOverrides): Promise<void>;
        inviterBonusesRate(overrides?: CallOverrides): Promise<BigNumber>;
        'inviterBonusesRate()'(overrides?: CallOverrides): Promise<BigNumber>;
        keyPrice(overrides?: CallOverrides): Promise<BigNumber>;
        'keyPrice()'(overrides?: CallOverrides): Promise<BigNumber>;
        keyPriceChange(overrides?: CallOverrides): Promise<boolean>;
        'keyPriceChange()'(overrides?: CallOverrides): Promise<boolean>;
        keyPriceNext(overrides?: CallOverrides): Promise<BigNumber>;
        'keyPriceNext()'(overrides?: CallOverrides): Promise<BigNumber>;
        keySize(overrides?: CallOverrides): Promise<BigNumber>;
        'keySize()'(overrides?: CallOverrides): Promise<BigNumber>;
        lottoNumbers(overrides?: CallOverrides): Promise<string>;
        'lottoNumbers()'(overrides?: CallOverrides): Promise<string>;
        makeTicket(_keys: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
        'makeTicket(uint8[])'(_keys: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
        makeTickets(_keys: BigNumberish[][], overrides?: CallOverrides): Promise<boolean>;
        'makeTickets(uint8[][])'(_keys: BigNumberish[][], overrides?: CallOverrides): Promise<boolean>;
        matchLevel(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'matchLevel(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        maxMintRang(overrides?: CallOverrides): Promise<BigNumber>;
        'maxMintRang()'(overrides?: CallOverrides): Promise<BigNumber>;
        maxMintSize(overrides?: CallOverrides): Promise<BigNumber>;
        'maxMintSize()'(overrides?: CallOverrides): Promise<BigNumber>;
        mintKey(_random: BigNumberish, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        'mintKey(uint256,bytes32,uint256,bytes)'(_random: BigNumberish, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        mintKeys(_randoms: BigNumberish[], _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        'mintKeys(uint256[],bytes32,uint256,bytes)'(_randoms: BigNumberish[], _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        'owner()'(overrides?: CallOverrides): Promise<string>;
        prizeRates(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'prizeRates(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        queryBonuses(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            level: BigNumber;
            userAmount: BigNumber;
        }>;
        'queryBonuses(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            level: BigNumber;
            userAmount: BigNumber;
        }>;
        records(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        'records(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        register(_inviter: string, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        'register(address,bytes32,uint256,bytes)'(_inviter: string, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        relationships(arg0: string, overrides?: CallOverrides): Promise<string>;
        'relationships(address)'(arg0: string, overrides?: CallOverrides): Promise<string>;
        roundCodes(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'roundCodes(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        roundExpired(overrides?: CallOverrides): Promise<BigNumber>;
        'roundExpired()'(overrides?: CallOverrides): Promise<BigNumber>;
        setBonusesRate(_inviterBonusesRate: BigNumberish, _treasuryBonusesRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        'setBonusesRate(uint256,uint256)'(_inviterBonusesRate: BigNumberish, _treasuryBonusesRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setBusinessContracts(_ticket: string, _lottoNumbers: string, overrides?: CallOverrides): Promise<void>;
        'setBusinessContracts(address,address)'(_ticket: string, _lottoNumbers: string, overrides?: CallOverrides): Promise<void>;
        setEnabled(_enabled: boolean, overrides?: CallOverrides): Promise<void>;
        'setEnabled(bool)'(_enabled: boolean, overrides?: CallOverrides): Promise<void>;
        setKeyPrice(_keyPriceChange: boolean, _keyPriceNext: BigNumberish, overrides?: CallOverrides): Promise<void>;
        'setKeyPrice(bool,uint256)'(_keyPriceChange: boolean, _keyPriceNext: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxMintSize(_size: BigNumberish, overrides?: CallOverrides): Promise<void>;
        'setMaxMintSize(uint256)'(_size: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPrizeRates(_rates: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        'setPrizeRates(uint256[])'(_rates: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        setRoundExpired(_expired: BigNumberish, overrides?: CallOverrides): Promise<void>;
        'setRoundExpired(uint256)'(_expired: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setSigner(_user: string, overrides?: CallOverrides): Promise<void>;
        'setSigner(address)'(_user: string, overrides?: CallOverrides): Promise<void>;
        setSignerContract(_signer: string, _hash: BytesLike, overrides?: CallOverrides): Promise<void>;
        'setSignerContract(address,bytes32)'(_signer: string, _hash: BytesLike, overrides?: CallOverrides): Promise<void>;
        setTreasury(_user: string, overrides?: CallOverrides): Promise<void>;
        'setTreasury(address)'(_user: string, overrides?: CallOverrides): Promise<void>;
        setupConfig(_config: string, overrides?: CallOverrides): Promise<void>;
        'setupConfig(address)'(_config: string, overrides?: CallOverrides): Promise<void>;
        signer(overrides?: CallOverrides): Promise<string>;
        'signer()'(overrides?: CallOverrides): Promise<string>;
        ticket(overrides?: CallOverrides): Promise<string>;
        'ticket()'(overrides?: CallOverrides): Promise<string>;
        totalRound(overrides?: CallOverrides): Promise<BigNumber>;
        'totalRound()'(overrides?: CallOverrides): Promise<BigNumber>;
        treasury(overrides?: CallOverrides): Promise<string>;
        'treasury()'(overrides?: CallOverrides): Promise<string>;
        treasuryBonusesRate(overrides?: CallOverrides): Promise<BigNumber>;
        'treasuryBonusesRate()'(overrides?: CallOverrides): Promise<BigNumber>;
        verifyMessage(_messageHash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        'verifyMessage(bytes32,bytes)'(_messageHash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        ClaimBonusesLog(round: BigNumberish | null, tokenId: BigNumberish | null, user: null, inviter: null, treasury: null, level: null, userAmount: null, inviterAmount: null, treasuryAmount: null): TypedEventFilter<[
            BigNumber,
            BigNumber,
            string,
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ], {
            round: BigNumber;
            tokenId: BigNumber;
            user: string;
            inviter: string;
            treasury: string;
            level: BigNumber;
            userAmount: BigNumber;
            inviterAmount: BigNumber;
            treasuryAmount: BigNumber;
        }>;
        ConfigChanged(_user: string | null, _old: string | null, _new: string | null): TypedEventFilter<[string, string, string], {
            _user: string;
            _old: string;
            _new: string;
        }>;
        KeyPriceLog(oldPrice: BigNumberish | null, newPrice: BigNumberish | null): TypedEventFilter<[BigNumber, BigNumber], {
            oldPrice: BigNumber;
            newPrice: BigNumber;
        }>;
        LotteryLog(user: string | null, round: BigNumberish | null, code: null): TypedEventFilter<[string, BigNumber, BigNumber], {
            user: string;
            round: BigNumber;
            code: BigNumber;
        }>;
        MakeTicketLog(user: string | null, tokenId: BigNumberish | null): TypedEventFilter<[string, BigNumber], {
            user: string;
            tokenId: BigNumber;
        }>;
        MintKeyLog(sn: BytesLike | null, user: string | null, numbers: null): TypedEventFilter<[string, string, number[]], {
            sn: string;
            user: string;
            numbers: number[];
        }>;
        OwnerChanged(_user: string | null, _old: string | null, _new: string | null): TypedEventFilter<[string, string, string], {
            _user: string;
            _old: string;
            _new: string;
        }>;
        RegisterLog(sn: BytesLike | null, user: string | null, inviter: string | null): TypedEventFilter<[string, string, string], {
            sn: string;
            user: string;
            inviter: string;
        }>;
    };
    estimateGas: {
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        'admin()'(overrides?: CallOverrides): Promise<BigNumber>;
        batchClaimBonuses(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'batchClaimBonuses(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchQueryBonuses(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        'batchQueryBonuses(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        changeOwner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'changeOwner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        checkKeys(_keys: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        'checkKeys(uint8[])'(_keys: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        checkRound(_round: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'checkRound(uint256)'(_round: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claimBonuses(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'claimBonuses(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
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
        getCodes(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'getCodes(uint256,uint256)'(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getFormatCode(_round: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'getFormatCode(uint256)'(_round: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getFormatCodes(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'getFormatCodes(uint256,uint256)'(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPrizeRates(overrides?: CallOverrides): Promise<BigNumber>;
        'getPrizeRates()'(overrides?: CallOverrides): Promise<BigNumber>;
        getRecords(_sns: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        'getRecords(bytes32[])'(_sns: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_currency: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'initialize(address)'(_currency: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        inviterBonusesRate(overrides?: CallOverrides): Promise<BigNumber>;
        'inviterBonusesRate()'(overrides?: CallOverrides): Promise<BigNumber>;
        keyPrice(overrides?: CallOverrides): Promise<BigNumber>;
        'keyPrice()'(overrides?: CallOverrides): Promise<BigNumber>;
        keyPriceChange(overrides?: CallOverrides): Promise<BigNumber>;
        'keyPriceChange()'(overrides?: CallOverrides): Promise<BigNumber>;
        keyPriceNext(overrides?: CallOverrides): Promise<BigNumber>;
        'keyPriceNext()'(overrides?: CallOverrides): Promise<BigNumber>;
        keySize(overrides?: CallOverrides): Promise<BigNumber>;
        'keySize()'(overrides?: CallOverrides): Promise<BigNumber>;
        lottoNumbers(overrides?: CallOverrides): Promise<BigNumber>;
        'lottoNumbers()'(overrides?: CallOverrides): Promise<BigNumber>;
        makeTicket(_keys: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'makeTicket(uint8[])'(_keys: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        makeTickets(_keys: BigNumberish[][], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'makeTickets(uint8[][])'(_keys: BigNumberish[][], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        matchLevel(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'matchLevel(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        maxMintRang(overrides?: CallOverrides): Promise<BigNumber>;
        'maxMintRang()'(overrides?: CallOverrides): Promise<BigNumber>;
        maxMintSize(overrides?: CallOverrides): Promise<BigNumber>;
        'maxMintSize()'(overrides?: CallOverrides): Promise<BigNumber>;
        mintKey(_random: BigNumberish, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'mintKey(uint256,bytes32,uint256,bytes)'(_random: BigNumberish, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintKeys(_randoms: BigNumberish[], _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'mintKeys(uint256[],bytes32,uint256,bytes)'(_randoms: BigNumberish[], _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        'owner()'(overrides?: CallOverrides): Promise<BigNumber>;
        prizeRates(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'prizeRates(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        queryBonuses(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'queryBonuses(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        records(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        'records(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        register(_inviter: string, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'register(address,bytes32,uint256,bytes)'(_inviter: string, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        relationships(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        'relationships(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        roundCodes(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'roundCodes(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        roundExpired(overrides?: CallOverrides): Promise<BigNumber>;
        'roundExpired()'(overrides?: CallOverrides): Promise<BigNumber>;
        setBonusesRate(_inviterBonusesRate: BigNumberish, _treasuryBonusesRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setBonusesRate(uint256,uint256)'(_inviterBonusesRate: BigNumberish, _treasuryBonusesRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBusinessContracts(_ticket: string, _lottoNumbers: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setBusinessContracts(address,address)'(_ticket: string, _lottoNumbers: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setEnabled(_enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setEnabled(bool)'(_enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setKeyPrice(_keyPriceChange: boolean, _keyPriceNext: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setKeyPrice(bool,uint256)'(_keyPriceChange: boolean, _keyPriceNext: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxMintSize(_size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setMaxMintSize(uint256)'(_size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPrizeRates(_rates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setPrizeRates(uint256[])'(_rates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRoundExpired(_expired: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setRoundExpired(uint256)'(_expired: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSigner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setSigner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSignerContract(_signer: string, _hash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setSignerContract(address,bytes32)'(_signer: string, _hash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTreasury(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setTreasury(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setupConfig(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'setupConfig(address)'(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        signer(overrides?: CallOverrides): Promise<BigNumber>;
        'signer()'(overrides?: CallOverrides): Promise<BigNumber>;
        ticket(overrides?: CallOverrides): Promise<BigNumber>;
        'ticket()'(overrides?: CallOverrides): Promise<BigNumber>;
        totalRound(overrides?: CallOverrides): Promise<BigNumber>;
        'totalRound()'(overrides?: CallOverrides): Promise<BigNumber>;
        treasury(overrides?: CallOverrides): Promise<BigNumber>;
        'treasury()'(overrides?: CallOverrides): Promise<BigNumber>;
        treasuryBonusesRate(overrides?: CallOverrides): Promise<BigNumber>;
        'treasuryBonusesRate()'(overrides?: CallOverrides): Promise<BigNumber>;
        verifyMessage(_messageHash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        'verifyMessage(bytes32,bytes)'(_messageHash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'admin()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchClaimBonuses(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'batchClaimBonuses(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchQueryBonuses(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'batchQueryBonuses(uint256[],uint256[])'(_rounds: BigNumberish[], _tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeOwner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'changeOwner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        checkKeys(_keys: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'checkKeys(uint8[])'(_keys: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkRound(_round: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'checkRound(uint256)'(_round: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimBonuses(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'claimBonuses(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
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
        getCodes(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'getCodes(uint256,uint256)'(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFormatCode(_round: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'getFormatCode(uint256)'(_round: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFormatCodes(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'getFormatCodes(uint256,uint256)'(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrizeRates(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'getPrizeRates()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRecords(_sns: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'getRecords(bytes32[])'(_sns: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_currency: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'initialize(address)'(_currency: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        inviterBonusesRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'inviterBonusesRate()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        keyPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'keyPrice()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        keyPriceChange(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'keyPriceChange()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        keyPriceNext(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'keyPriceNext()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        keySize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'keySize()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lottoNumbers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'lottoNumbers()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        makeTicket(_keys: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'makeTicket(uint8[])'(_keys: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        makeTickets(_keys: BigNumberish[][], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'makeTickets(uint8[][])'(_keys: BigNumberish[][], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        matchLevel(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'matchLevel(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxMintRang(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'maxMintRang()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxMintSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'maxMintSize()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintKey(_random: BigNumberish, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'mintKey(uint256,bytes32,uint256,bytes)'(_random: BigNumberish, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintKeys(_randoms: BigNumberish[], _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'mintKeys(uint256[],bytes32,uint256,bytes)'(_randoms: BigNumberish[], _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        prizeRates(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'prizeRates(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryBonuses(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'queryBonuses(uint256,uint256)'(_round: BigNumberish, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        records(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'records(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        register(_inviter: string, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'register(address,bytes32,uint256,bytes)'(_inviter: string, _sn: BytesLike, _expired: BigNumberish, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        relationships(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'relationships(address)'(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        roundCodes(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'roundCodes(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        roundExpired(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'roundExpired()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setBonusesRate(_inviterBonusesRate: BigNumberish, _treasuryBonusesRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setBonusesRate(uint256,uint256)'(_inviterBonusesRate: BigNumberish, _treasuryBonusesRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBusinessContracts(_ticket: string, _lottoNumbers: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setBusinessContracts(address,address)'(_ticket: string, _lottoNumbers: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setEnabled(_enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setEnabled(bool)'(_enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setKeyPrice(_keyPriceChange: boolean, _keyPriceNext: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setKeyPrice(bool,uint256)'(_keyPriceChange: boolean, _keyPriceNext: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxMintSize(_size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setMaxMintSize(uint256)'(_size: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPrizeRates(_rates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setPrizeRates(uint256[])'(_rates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRoundExpired(_expired: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setRoundExpired(uint256)'(_expired: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSigner(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setSigner(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSignerContract(_signer: string, _hash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setSignerContract(address,bytes32)'(_signer: string, _hash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTreasury(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setTreasury(address)'(_user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setupConfig(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'setupConfig(address)'(_config: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        signer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'signer()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ticket(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'ticket()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalRound(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'totalRound()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'treasury()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        treasuryBonusesRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'treasuryBonusesRate()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyMessage(_messageHash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'verifyMessage(bytes32,bytes)'(_messageHash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
export {};

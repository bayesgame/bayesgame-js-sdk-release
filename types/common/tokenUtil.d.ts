import { Chain } from '../chain';
import type { TypedTokenInfo } from '../common/types';
export declare class TokenUtil {
    chain: Chain;
    constructor(chain: Chain);
    getTokenStandard(addr: string): Promise<"erc721" | "erc1155">;
    infoForERC20(tokenAddr: string): Promise<TypedTokenInfo>;
    infoForERC20s(tokenAddrs: string[]): Promise<Record<string, TypedTokenInfo>>;
    allownceForERC20s(tokenAddrs: string[], user: string, operator: string, operatorName?: string): Promise<Record<string, string>>;
    balanceForERC20s(tokenAddrs: string[], user: string): Promise<Record<string, string>>;
    balanceInfoForERC1155(tokenAddrs: string[], tokenIds: string[] | number[], users: string[]): Promise<Record<string, string>>;
    ownerOfInfoForERC721(tokenAddrs: string[], tokenIds: string[] | number[], users: string[]): Promise<Record<string, boolean>>;
    estimateGasApproveForERC20(tokenAddr: string, operator: string): Promise<string>;
    estimateGasApproveForERC20s(tokenAddrs: string[], operator: string): Promise<Record<string, string>>;
    _wrapAllownceInfoForERC20CallData(tokenAddr: string, user: string, operator: string): Promise<{
        target: string;
        gasLimit: number;
        callData: any;
    }>;
    _wrapBalanceInfoForERC20CallData(user: string, tokenAddr: string): Promise<{
        target: string;
        gasLimit: number;
        callData: any;
    }>;
    _wrapBalanceInfoForERC1155CallData(user: string, tokenAddr: string, tokenId: string | number): Promise<{
        target: string;
        gasLimit: number;
        callData: any;
    }>;
    _wrapOwnerOfInfoForERC721CallData(tokenAddr: string, tokenId: string | number): Promise<{
        target: string;
        gasLimit: number;
        callData: any;
    }>;
}

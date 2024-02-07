"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("ethers"),e=require("./constants.js");class t{constructor(){this.chainId=0,this.contracts=[],this.contractmaps={},this.tokens={},this.cache=!0}setProvider(r){this.provider=r,this.signer=r._isSigner?r:void 0}setOutProvider(r){this.setProvider(r)}register(r){this.contracts.push(r),this.contractmaps[r.address]=r}clean(){this.contracts.splice(0,this.contracts.length)}connectContract(r){this.contracts.forEach((e=>{e.connect(r)}))}zeroSymbol(){return e.CHAIN_SYMBOL.ZeroToken[this.chainId]}wSymbol(){return e.CHAIN_SYMBOL.WToken[this.chainId]}isZeroAddress(r){return r===e.ZERO_ADDRESS}isZero(e){return 0===r.BigNumber.from(e).toNumber()}setToken(r,e){this.cache&&(this.tokens[r.toLowerCase()]=e)}getToken(r){return this.tokens[r.toLowerCase()]}getTokenAddr(r){const t=e.CHAIN_TOKENS;try{return t[this.chainId][r]}catch{throw new Error("getTokenAddr not found")}}getWethAddr(){return this.getTokenAddr(this.wSymbol())}getNativeAddr(){return e.ZERO_ADDRESS}getProvider(){return this.provider instanceof r.ethers.providers.Provider?this.provider:this.provider.provider}async getBlockNumber(){const e=this.provider instanceof r.ethers.providers.Provider?this.provider:this.provider.provider;if(!e)throw new Error("no provider");return await e.getBlockNumber()}async getBlock(e){const t=this.provider instanceof r.ethers.providers.Provider?this.provider:this.provider.provider;if(!t)throw new Error("no provider");return await t.getBlock(e)}async getGasPrice(){const r=this.getProvider();if(!r)throw new Error("no provider");return(await r.getGasPrice()).toString()}async estimateGas(r){return(await this.getSigner(0).estimateGas(r)).toString()}async getBalance(r){r||(r=await this.getAccount());return(await this.provider.getBalance(r)).toString()}async getTransactionReceipt(r){const e=this.getProvider();if(!e)throw new Error("no provider");return await e.getTransactionReceipt(r)}getSigner(e){if(this.signer)return this.signer;if(!(this.provider instanceof r.ethers.providers.JsonRpcProvider))throw new Error("Either signer or a JsonRpcProvider must be provided");return this.provider.getSigner(e)}async getAccount(){return await this.getSigner(0).getAddress()}async sendTransaction(r){if(r?.value&&this.isZero(r.value)&&delete r.value,!r?.gasLimit){let e=await this.getSigner(0).estimateGas(r);r.gasLimit=e.mul(120).div(100)}return await this.getSigner(0).sendTransaction(r)}async signTransaction(r){const e=this.getSigner(0),t=await e.populateTransaction(r);return await e.signTransaction(t)}async sendSignedTx(r){return await this.provider.sendTransaction(r)}async signMessage(r){const e=this.getSigner(0);return await e.signMessage(r)}async signTypedMessage(r,e,t){const i=this.getSigner(0);return await i._signTypedData(r,e,t)}async getLogs(e){const t=this.provider instanceof r.ethers.providers.Provider?this.provider:this.provider.provider;if(!t)throw new Error("no provider");return await t.getLogs(e)}async getEthLogs(e){const t=this.provider instanceof r.ethers.providers.Provider?this.provider:null;if(!t)throw new Error("no provider");return await t.send("eth_getLogs",[e])}}class i extends t{constructor(t,i=""){super(),i||(i=e.CHAIN_RPC[t]),console.log("chain rpc",i);const s=new r.ethers.providers.JsonRpcProvider(e.CHAIN_RPC[t]);this.setProvider(s),this.chainId=t;const n=new r.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80");this.connect(n)}connect(r){this.signer=r.connect(this.provider),this.connectContract(this.signer)}}let s={};exports.BrowserChain=class extends t{},exports.Chain=t,exports.LocalChain=i,exports.getChain=function(r,e=""){return s[r]&&!e||(s[r]=new i(r,e)),s[r]};

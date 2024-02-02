"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("ethers"),a=require("./common/abi/WETH9.js"),e=require("./contract.js"),r=require("./common/transaction.js");class s extends e.BaseContract{constructor(e,r){super(e,r,a.WETH9ABI),this.maxAllowanced=t.BigNumber.from(10).pow(64).toString(),this.contract=this.contract}deposit(t){return r.getTransactionMethods(this.contract,"deposit",[{value:t}])}withdraw(t){return r.getTransactionMethods(this.contract,"withdraw",[t])}approve(t,a){return a||(a=this.maxAllowanced),r.getTransactionMethods(this.contract,"approve",[t,a])}transfer(t,a){return r.getTransactionMethods(this.contract,"transfer",[t,a])}transferFrom(t,a,e){return r.getTransactionMethods(this.contract,"transferFrom",[t,a,e])}async info(){let t=this.chain.getToken(this.address);return t||(t=await this._info()),t}async name(){return(await this.info()).name}async symbol(){return(await this.info()).symbol}async decimals(){return(await this.info()).decimals}async balanceOf(t){if(this.chain.isZeroAddress(this.address)){return(await this.provider.getBalance(t)).toString()}return(await this.contract.balanceOf(t)).toString()}async allowance(a,e){if(this.chain.isZeroAddress(this.address))return t.BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").toString();return(await this.contract.allowance(a,e)).toString()}async _info(){const t={address:this.address,name:this.chain.zeroSymbol(),symbol:this.chain.zeroSymbol(),decimals:18};if(!this.chain.isZeroAddress(this.address)){const[a,e,r]=await Promise.all([this.contract.name(),this.contract.symbol(),this.contract.decimals()]);t.name=a,t.symbol=e,t.decimals=r}return this.chain.setToken(this.address,t),t}async getTransferEvent(t,a="latest"){const e=this.contract.filters.Transfer();return await this.contract.queryFilter(e,t,a)}balanceOfEncodeFunction(t){return this.contract.interface.encodeFunctionData("balanceOf",[t])}allowanceEncodeFunction(t,a){return this.contract.interface.encodeFunctionData("allowance",[t,a])}callDeposit(t){const a=this.deposit(t).encodeFunction();return{address:this.address,calldata:a.data.toString(),value:t}}callWithdraw(t){const a=this.withdraw(t).encodeFunction();return{address:this.address,calldata:a.data.toString(),value:"0"}}}exports.WETH9=s;

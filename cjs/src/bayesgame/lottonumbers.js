"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./abi/LottoNumbers.json.js"),e=require("../erc1155.js"),r=require("./network.js");class o extends e.ERC1155{constructor(e,o){const s=r.getNetworkMeta(e.chainId);super(e,null!=o?o:s.LottoNumbers,t.default),this.contract=this.contract,this.networkMeta=s}async getUserTokens(t){return(await this.contract.getUserTokens(t)).map((t=>t.toString()))}async getTotalSupplies(){return(await this.contract.getTotalSupplies()).map((t=>t.toString()))}async totalSupply(t){return(await this.contract.totalSupply(t)).toString()}setSigner(t){this.signer=t}}exports.LottoNumbers=o,exports.getLottoNumbers=function(t,e){const s=r.getNetworkMeta(t.chainId);return e||(e=s.LottoNumbers.toLowerCase()),t.contractmaps[e.toLowerCase()]||new o(t,e),t.contractmaps[e.toLowerCase()]};

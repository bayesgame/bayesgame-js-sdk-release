"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("ethers");exports.getTransactionMethods=(t,a,r)=>{const n=r[r.length-1];let s;return(e=>{const t=["gasLimit","gasPrice","maxFeePerGas","maxPriorityFeePerGas","nonce","type","accessList","customData","ccipReadEnabled","value","blockTag","CallOverrides"];return void 0===e||Object.keys(e).every((e=>t.includes(e)))})(n)&&(s=n,r.pop()),{callStatic:e=>{const n={...s,...e};return t.callStatic[a](...r,n)},estimateGas:e=>{const n={...s,...e};return t.estimateGas[a](...r,n)},transact:e=>{const n={...s,...e};return t[a](...r,n)},buildTransaction:e=>{const n={...s,...e};return t.populateTransaction[a](...r,n)},encodeFunction:n=>{const c={...s,...n};let o=e.BigNumber.from("0");return(null==c?void 0:c.value)&&(o=e.BigNumber.from(c.value)),{to:t.address,value:o,data:t.interface.encodeFunctionData(a,r)}}}};

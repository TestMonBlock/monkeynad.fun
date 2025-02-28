import {
    d as M,
    g as nn
} from "./index-BqZK2AWy.js";
import {
    j as rn,
    s as sn,
    r as vt,
    a as _t,
    b as an,
    c as on
} from "./hooks.module-fcHOub_5.js";
var Et = {},
    te = {},
    me = {};
Object.defineProperty(me, "__esModule", {
    value: !0
});
me.walletLogo = void 0;
const cn = (n, e) => {
    let t;
    switch (n) {
        case "standard":
            return t = e, `data:image/svg+xml,%3Csvg width='${e}' height='${t}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
        case "circle":
            return t = e, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${t}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
        case "text":
            return t = (.1 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${t}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
        case "textWithLogo":
            return t = (.25 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${t}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        case "textLight":
            return t = (.1 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${t}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
        case "textWithLogoLight":
            return t = (.25 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${t}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        default:
            return t = e, `data:image/svg+xml,%3Csvg width='${e}' height='${t}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
    }
};
me.walletLogo = cn;
var be = {},
    j = {},
    U = {};
Object.defineProperty(U, "__esModule", {
    value: !0
});
U.errorValues = U.standardErrorCodes = void 0;
U.standardErrorCodes = {
    rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901,
        unsupportedChain: 4902
    }
};
U.errorValues = {
    "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
    },
    "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
    },
    "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
    },
    "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
    },
    "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
    },
    "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
    },
    "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
    },
    "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
    },
    "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
    },
    4001: {
        standard: "EIP-1193",
        message: "User rejected the request."
    },
    4100: {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
    },
    4900: {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
    },
    4901: {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
    },
    4902: {
        standard: "EIP-3085",
        message: "Unrecognized chain ID."
    }
};
var ye = {},
    $e = {};
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.serialize = n.getErrorCode = n.isValidCode = n.getMessageFromCode = n.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    const e = U,
        t = "Unspecified error message.";
    n.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";

    function r(d, p = t) {
        if (d && Number.isInteger(d)) {
            const m = d.toString();
            if (h(e.errorValues, m)) return e.errorValues[m].message;
            if (c(d)) return n.JSON_RPC_SERVER_ERROR_MESSAGE
        }
        return p
    }
    n.getMessageFromCode = r;

    function s(d) {
        if (!Number.isInteger(d)) return !1;
        const p = d.toString();
        return !!(e.errorValues[p] || c(d))
    }
    n.isValidCode = s;

    function a(d) {
        var p;
        if (typeof d == "number") return d;
        if (i(d)) return (p = d.code) !== null && p !== void 0 ? p : d.errorCode
    }
    n.getErrorCode = a;

    function i(d) {
        return typeof d == "object" && d !== null && (typeof d.code == "number" || typeof d.errorCode == "number")
    }

    function o(d, {
        shouldIncludeStack: p = !1
    } = {}) {
        const m = {};
        if (d && typeof d == "object" && !Array.isArray(d) && h(d, "code") && s(d.code)) {
            const B = d;
            m.code = B.code, B.message && typeof B.message == "string" ? (m.message = B.message, h(B, "data") && (m.data = B.data)) : (m.message = r(m.code), m.data = {
                originalError: l(d)
            })
        } else m.code = e.standardErrorCodes.rpc.internal, m.message = f(d, "message") ? d.message : t, m.data = {
            originalError: l(d)
        };
        return p && (m.stack = f(d, "stack") ? d.stack : void 0), m
    }
    n.serialize = o;

    function c(d) {
        return d >= -32099 && d <= -32e3
    }

    function l(d) {
        return d && typeof d == "object" && !Array.isArray(d) ? Object.assign({}, d) : d
    }

    function h(d, p) {
        return Object.prototype.hasOwnProperty.call(d, p)
    }

    function f(d, p) {
        return typeof d == "object" && d !== null && p in d && typeof d[p] == "string"
    }
})($e);
Object.defineProperty(ye, "__esModule", {
    value: !0
});
ye.standardErrors = void 0;
const v = U,
    St = $e;
ye.standardErrors = {
    rpc: {
        parse: n => C(v.standardErrorCodes.rpc.parse, n),
        invalidRequest: n => C(v.standardErrorCodes.rpc.invalidRequest, n),
        invalidParams: n => C(v.standardErrorCodes.rpc.invalidParams, n),
        methodNotFound: n => C(v.standardErrorCodes.rpc.methodNotFound, n),
        internal: n => C(v.standardErrorCodes.rpc.internal, n),
        server: n => {
            if (!n || typeof n != "object" || Array.isArray(n)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
            const {
                code: e
            } = n;
            if (!Number.isInteger(e) || e > -32005 || e < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return C(e, n)
        },
        invalidInput: n => C(v.standardErrorCodes.rpc.invalidInput, n),
        resourceNotFound: n => C(v.standardErrorCodes.rpc.resourceNotFound, n),
        resourceUnavailable: n => C(v.standardErrorCodes.rpc.resourceUnavailable, n),
        transactionRejected: n => C(v.standardErrorCodes.rpc.transactionRejected, n),
        methodNotSupported: n => C(v.standardErrorCodes.rpc.methodNotSupported, n),
        limitExceeded: n => C(v.standardErrorCodes.rpc.limitExceeded, n)
    },
    provider: {
        userRejectedRequest: n => $(v.standardErrorCodes.provider.userRejectedRequest, n),
        unauthorized: n => $(v.standardErrorCodes.provider.unauthorized, n),
        unsupportedMethod: n => $(v.standardErrorCodes.provider.unsupportedMethod, n),
        disconnected: n => $(v.standardErrorCodes.provider.disconnected, n),
        chainDisconnected: n => $(v.standardErrorCodes.provider.chainDisconnected, n),
        unsupportedChain: n => $(v.standardErrorCodes.provider.unsupportedChain, n),
        custom: n => {
            if (!n || typeof n != "object" || Array.isArray(n)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
            const {
                code: e,
                message: t,
                data: r
            } = n;
            if (!t || typeof t != "string") throw new Error('"message" must be a nonempty string');
            return new It(e, t, r)
        }
    }
};

function C(n, e) {
    const [t, r] = Ct(e);
    return new kt(n, t || (0, St.getMessageFromCode)(n), r)
}

function $(n, e) {
    const [t, r] = Ct(e);
    return new It(n, t || (0, St.getMessageFromCode)(n), r)
}

function Ct(n) {
    if (n) {
        if (typeof n == "string") return [n];
        if (typeof n == "object" && !Array.isArray(n)) {
            const {
                message: e,
                data: t
            } = n;
            if (e && typeof e != "string") throw new Error("Must specify string message.");
            return [e || void 0, t]
        }
    }
    return []
}
class kt extends Error {
    constructor(e, t, r) {
        if (!Number.isInteger(e)) throw new Error('"code" must be an integer.');
        if (!t || typeof t != "string") throw new Error('"message" must be a nonempty string.');
        super(t), this.code = e, r !== void 0 && (this.data = r)
    }
}
class It extends kt {
    constructor(e, t, r) {
        if (!dn(e)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        super(e, t, r)
    }
}

function dn(n) {
    return Number.isInteger(n) && n >= 1e3 && n <= 4999
}(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.standardErrors = n.standardErrorCodes = void 0;
    var e = U;
    Object.defineProperty(n, "standardErrorCodes", {
        enumerable: !0,
        get: function() {
            return e.standardErrorCodes
        }
    });
    var t = ye;
    Object.defineProperty(n, "standardErrors", {
        enumerable: !0,
        get: function() {
            return t.standardErrors
        }
    })
})(j);
var we = {},
    Q = {};
Object.defineProperty(Q, "__esModule", {
    value: !0
});
Q.isErrorResponse = void 0;

function ln(n) {
    return n.errorMessage !== void 0
}
Q.isErrorResponse = ln;
var K = {};
Object.defineProperty(K, "__esModule", {
    value: !0
});
K.LIB_VERSION = void 0;
K.LIB_VERSION = "4.0.3";
Object.defineProperty(we, "__esModule", {
    value: !0
});
we.serializeError = void 0;
const un = Q,
    hn = K,
    gn = U,
    pn = $e;

function fn(n, e) {
    const t = (0, pn.serialize)(mn(n), {
            shouldIncludeStack: !0
        }),
        r = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
    r.searchParams.set("version", hn.LIB_VERSION), r.searchParams.set("code", t.code.toString());
    const s = bn(t.data, e);
    return s && r.searchParams.set("method", s), r.searchParams.set("message", t.message), Object.assign(Object.assign({}, t), {
        docUrl: r.href
    })
}
we.serializeError = fn;

function mn(n) {
    return typeof n == "string" ? {
        message: n,
        code: gn.standardErrorCodes.rpc.internal
    } : (0, un.isErrorResponse)(n) ? Object.assign(Object.assign({}, n), {
        message: n.errorMessage,
        code: n.errorCode,
        data: {
            method: n.method
        }
    }) : n
}

function bn(n, e) {
    const t = n == null ? void 0 : n.method;
    if (t) return t;
    if (e !== void 0) {
        if (typeof e == "string") return e;
        if (Array.isArray(e)) {
            if (e.length > 0) return e[0].method
        } else return e.method
    }
}
var _ = {};
Object.defineProperty(_, "__esModule", {
    value: !0
});
_.RegExpString = _.IntNumber = _.BigIntString = _.AddressString = _.HexString = _.OpaqueType = void 0;

function ne() {
    return n => n
}
_.OpaqueType = ne;
_.HexString = ne();
_.AddressString = ne();
_.BigIntString = ne();

function yn(n) {
    return Math.floor(n)
}
_.IntNumber = yn;
_.RegExpString = ne();
var u = {};
Object.defineProperty(u, "__esModule", {
    value: !0
});
u.areAddressArraysEqual = u.getFavicon = u.range = u.isBigNumber = u.ensureParsedJSONObject = u.ensureBigInt = u.ensureRegExpString = u.ensureIntNumber = u.ensureBuffer = u.ensureAddressString = u.ensureEvenLengthHexString = u.ensureHexString = u.isHexString = u.prepend0x = u.strip0x = u.has0xPrefix = u.hexStringFromIntNumber = u.intNumberFromHexString = u.bigIntStringFromBigInt = u.hexStringFromBuffer = u.hexStringToUint8Array = u.uint8ArrayToHex = u.randomBytesHex = void 0;
const q = j,
    I = _,
    Mt = /^[0-9]*$/,
    Lt = /^[a-f0-9]*$/;

function wn(n) {
    return At(crypto.getRandomValues(new Uint8Array(n)))
}
u.randomBytesHex = wn;

function At(n) {
    return [...n].map(e => e.toString(16).padStart(2, "0")).join("")
}
u.uint8ArrayToHex = At;

function vn(n) {
    return new Uint8Array(n.match(/.{1,2}/g).map(e => parseInt(e, 16)))
}
u.hexStringToUint8Array = vn;

function _n(n, e = !1) {
    const t = n.toString("hex");
    return (0, I.HexString)(e ? `0x${t}` : t)
}
u.hexStringFromBuffer = _n;

function En(n) {
    return (0, I.BigIntString)(n.toString(10))
}
u.bigIntStringFromBigInt = En;

function Sn(n) {
    return (0, I.IntNumber)(Number(BigInt(se(n, !0))))
}
u.intNumberFromHexString = Sn;

function Cn(n) {
    return (0, I.HexString)(`0x${BigInt(n).toString(16)}`)
}
u.hexStringFromIntNumber = Cn;

function Fe(n) {
    return n.startsWith("0x") || n.startsWith("0X")
}
u.has0xPrefix = Fe;

function ve(n) {
    return Fe(n) ? n.slice(2) : n
}
u.strip0x = ve;

function Rt(n) {
    return Fe(n) ? `0x${n.slice(2)}` : `0x${n}`
}
u.prepend0x = Rt;

function re(n) {
    if (typeof n != "string") return !1;
    const e = ve(n).toLowerCase();
    return Lt.test(e)
}
u.isHexString = re;

function xt(n, e = !1) {
    if (typeof n == "string") {
        const t = ve(n).toLowerCase();
        if (Lt.test(t)) return (0, I.HexString)(e ? `0x${t}` : t)
    }
    throw q.standardErrors.rpc.invalidParams(`"${String(n)}" is not a hexadecimal string`)
}
u.ensureHexString = xt;

function se(n, e = !1) {
    let t = xt(n, !1);
    return t.length % 2 === 1 && (t = (0, I.HexString)(`0${t}`)), e ? (0, I.HexString)(`0x${t}`) : t
}
u.ensureEvenLengthHexString = se;

function kn(n) {
    if (typeof n == "string") {
        const e = ve(n).toLowerCase();
        if (re(e) && e.length === 40) return (0, I.AddressString)(Rt(e))
    }
    throw q.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(n)}`)
}
u.ensureAddressString = kn;

function In(n) {
    if (Buffer.isBuffer(n)) return n;
    if (typeof n == "string") {
        if (re(n)) {
            const e = se(n, !1);
            return Buffer.from(e, "hex")
        }
        return Buffer.from(n, "utf8")
    }
    throw q.standardErrors.rpc.invalidParams(`Not binary data: ${String(n)}`)
}
u.ensureBuffer = In;

function Pt(n) {
    if (typeof n == "number" && Number.isInteger(n)) return (0, I.IntNumber)(n);
    if (typeof n == "string") {
        if (Mt.test(n)) return (0, I.IntNumber)(Number(n));
        if (re(n)) return (0, I.IntNumber)(Number(BigInt(se(n, !0))))
    }
    throw q.standardErrors.rpc.invalidParams(`Not an integer: ${String(n)}`)
}
u.ensureIntNumber = Pt;

function Mn(n) {
    if (n instanceof RegExp) return (0, I.RegExpString)(n.toString());
    throw q.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(n)}`)
}
u.ensureRegExpString = Mn;

function Ln(n) {
    if (n !== null && (typeof n == "bigint" || Nt(n))) return BigInt(n.toString(10));
    if (typeof n == "number") return BigInt(Pt(n));
    if (typeof n == "string") {
        if (Mt.test(n)) return BigInt(n);
        if (re(n)) return BigInt(se(n, !0))
    }
    throw q.standardErrors.rpc.invalidParams(`Not an integer: ${String(n)}`)
}
u.ensureBigInt = Ln;

function An(n) {
    if (typeof n == "string") return JSON.parse(n);
    if (typeof n == "object") return n;
    throw q.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(n)}`)
}
u.ensureParsedJSONObject = An;

function Nt(n) {
    if (n == null || typeof n.constructor != "function") return !1;
    const {
        constructor: e
    } = n;
    return typeof e.config == "function" && typeof e.EUCLID == "number"
}
u.isBigNumber = Nt;

function Rn(n, e) {
    return Array.from({
        length: e - n
    }, (t, r) => n + r)
}
u.range = Rn;

function xn() {
    const n = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'),
        {
            protocol: e,
            host: t
        } = document.location,
        r = n ? n.getAttribute("href") : null;
    return !r || r.startsWith("javascript:") || r.startsWith("vbscript:") ? null : r.startsWith("http://") || r.startsWith("https://") || r.startsWith("data:") ? r : r.startsWith("//") ? e + r : `${e}//${t}${r}`
}
u.getFavicon = xn;

function Pn(n, e) {
    return n.length === e.length && n.every((t, r) => t === e[r])
}
u.areAddressArraysEqual = Pn;
var P = {},
    _e = {},
    Ee = {},
    y = {};
Object.defineProperty(y, "__esModule", {
    value: !0
});
y.decryptContent = y.encryptContent = y.importKeyFromHexString = y.exportKeyToHexString = y.decrypt = y.encrypt = y.deriveSharedSecret = y.generateKeyPair = void 0;
const Tt = u;
async function Nn() {
    return crypto.subtle.generateKey({
        name: "ECDH",
        namedCurve: "P-256"
    }, !0, ["deriveKey"])
}
y.generateKeyPair = Nn;
async function Tn(n, e) {
    return crypto.subtle.deriveKey({
        name: "ECDH",
        public: e
    }, n, {
        name: "AES-GCM",
        length: 256
    }, !1, ["encrypt", "decrypt"])
}
y.deriveSharedSecret = Tn;
async function jt(n, e) {
    const t = crypto.getRandomValues(new Uint8Array(12)),
        r = await crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: t
        }, n, new TextEncoder().encode(e));
    return {
        iv: t,
        cipherText: r
    }
}
y.encrypt = jt;
async function Ot(n, {
    iv: e,
    cipherText: t
}) {
    const r = await crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: e
    }, n, t);
    return new TextDecoder().decode(r)
}
y.decrypt = Ot;

function Dt(n) {
    switch (n) {
        case "public":
            return "spki";
        case "private":
            return "pkcs8"
    }
}
async function jn(n, e) {
    const t = Dt(n),
        r = await crypto.subtle.exportKey(t, e);
    return (0, Tt.uint8ArrayToHex)(new Uint8Array(r))
}
y.exportKeyToHexString = jn;
async function On(n, e) {
    const t = Dt(n),
        r = (0, Tt.hexStringToUint8Array)(e).buffer;
    return await crypto.subtle.importKey(t, r, {
        name: "ECDH",
        namedCurve: "P-256"
    }, !0, n === "private" ? ["deriveKey"] : [])
}
y.importKeyFromHexString = On;
async function Dn(n, e) {
    const t = JSON.stringify(n, (r, s) => {
        if (!(s instanceof Error)) return s;
        const a = s;
        return Object.assign(Object.assign({}, a.code ? {
            code: a.code
        } : {}), {
            message: a.message
        })
    });
    return jt(e, t)
}
y.encryptContent = Dn;
async function Wn(n, e) {
    return JSON.parse(await Ot(e, n))
}
y.decryptContent = Wn;
var O = {};
Object.defineProperty(O, "__esModule", {
    value: !0
});
O.ScopedLocalStorage = void 0;
class fe {
    constructor(e, t) {
        this.scope = e, this.module = t
    }
    setItem(e, t) {
        localStorage.setItem(this.scopedKey(e), t)
    }
    getItem(e) {
        return localStorage.getItem(this.scopedKey(e))
    }
    removeItem(e) {
        localStorage.removeItem(this.scopedKey(e))
    }
    clear() {
        const e = this.scopedKey(""),
            t = [];
        for (let r = 0; r < localStorage.length; r++) {
            const s = localStorage.key(r);
            typeof s == "string" && s.startsWith(e) && t.push(s)
        }
        t.forEach(r => localStorage.removeItem(r))
    }
    scopedKey(e) {
        return `-${this.scope}${this.module?`:${this.module}`:""}:${e}`
    }
    static clearAll() {
        new fe("CBWSDK").clear(), new fe("walletlink").clear()
    }
}
O.ScopedLocalStorage = fe;
Object.defineProperty(Ee, "__esModule", {
    value: !0
});
Ee.SCWKeyManager = void 0;
const oe = y,
    Un = O,
    De = {
        storageKey: "ownPrivateKey",
        keyType: "private"
    },
    We = {
        storageKey: "ownPublicKey",
        keyType: "public"
    },
    Ue = {
        storageKey: "peerPublicKey",
        keyType: "public"
    };
class Bn {
    constructor() {
        this.storage = new Un.ScopedLocalStorage("CBWSDK", "SCWKeyManager"), this.ownPrivateKey = null, this.ownPublicKey = null, this.peerPublicKey = null, this.sharedSecret = null
    }
    async getOwnPublicKey() {
        return await this.loadKeysIfNeeded(), this.ownPublicKey
    }
    async getSharedSecret() {
        return await this.loadKeysIfNeeded(), this.sharedSecret
    }
    async setPeerPublicKey(e) {
        this.sharedSecret = null, this.peerPublicKey = e, await this.storeKey(Ue, e), await this.loadKeysIfNeeded()
    }
    async clear() {
        this.ownPrivateKey = null, this.ownPublicKey = null, this.peerPublicKey = null, this.sharedSecret = null, this.storage.removeItem(We.storageKey), this.storage.removeItem(De.storageKey), this.storage.removeItem(Ue.storageKey)
    }
    async generateKeyPair() {
        const e = await (0, oe.generateKeyPair)();
        this.ownPrivateKey = e.privateKey, this.ownPublicKey = e.publicKey, await this.storeKey(De, e.privateKey), await this.storeKey(We, e.publicKey)
    }
    async loadKeysIfNeeded() {
        if (this.ownPrivateKey === null && (this.ownPrivateKey = await this.loadKey(De)), this.ownPublicKey === null && (this.ownPublicKey = await this.loadKey(We)), (this.ownPrivateKey === null || this.ownPublicKey === null) && await this.generateKeyPair(), this.peerPublicKey === null && (this.peerPublicKey = await this.loadKey(Ue)), this.sharedSecret === null) {
            if (this.ownPrivateKey === null || this.peerPublicKey === null) return;
            this.sharedSecret = await (0, oe.deriveSharedSecret)(this.ownPrivateKey, this.peerPublicKey)
        }
    }
    async loadKey(e) {
        const t = this.storage.getItem(e.storageKey);
        return t ? (0, oe.importKeyFromHexString)(e.keyType, t) : null
    }
    async storeKey(e, t) {
        const r = await (0, oe.exportKeyToHexString)(e.keyType, t);
        this.storage.setItem(e.storageKey, r)
    }
}
Ee.SCWKeyManager = Bn;
var Se = {};
Object.defineProperty(Se, "__esModule", {
    value: !0
});
Se.SCWStateManager = void 0;
const Hn = O,
    Qe = "accounts",
    Xe = "activeChain",
    et = "availableChains",
    tt = "walletCapabilities";
class Kn {
    get accounts() {
        return this._accounts
    }
    get activeChain() {
        return this._activeChain
    }
    get walletCapabilities() {
        return this._walletCapabilities
    }
    constructor(e) {
        var t, r;
        this.storage = new Hn.ScopedLocalStorage("CBWSDK", "SCWStateManager"), this.updateListener = e.updateListener, this.availableChains = this.loadItemFromStorage(et), this._walletCapabilities = this.loadItemFromStorage(tt);
        const s = this.loadItemFromStorage(Qe),
            a = this.loadItemFromStorage(Xe);
        s && this.updateListener.onAccountsUpdate({
            accounts: s,
            source: "storage"
        }), a && this.updateListener.onChainUpdate({
            chain: a,
            source: "storage"
        }), this._accounts = s || [], this._activeChain = a || {
            id: (r = (t = e.appChainIds) === null || t === void 0 ? void 0 : t[0]) !== null && r !== void 0 ? r : 1
        }
    }
    updateAccounts(e) {
        this._accounts = e, this.storeItemToStorage(Qe, e), this.updateListener.onAccountsUpdate({
            accounts: e,
            source: "wallet"
        })
    }
    switchChain(e) {
        var t;
        const r = (t = this.availableChains) === null || t === void 0 ? void 0 : t.find(s => s.id === e);
        return r ? (r === this._activeChain || (this._activeChain = r, this.storeItemToStorage(Xe, r), this.updateListener.onChainUpdate({
            chain: r,
            source: "wallet"
        })), !0) : !1
    }
    updateAvailableChains(e) {
        if (!e || Object.keys(e).length === 0) return;
        const t = Object.entries(e).map(([r, s]) => ({
            id: Number(r),
            rpcUrl: s
        }));
        this.availableChains = t, this.storeItemToStorage(et, t), this.switchChain(this._activeChain.id)
    }
    updateWalletCapabilities(e) {
        this._walletCapabilities = e, this.storeItemToStorage(tt, e)
    }
    storeItemToStorage(e, t) {
        this.storage.setItem(e, JSON.stringify(t))
    }
    loadItemFromStorage(e) {
        const t = this.storage.getItem(e);
        return t ? JSON.parse(t) : void 0
    }
    clear() {
        this.storage.clear()
    }
}
Se.SCWStateManager = Kn;
Object.defineProperty(_e, "__esModule", {
    value: !0
});
_e.SCWSigner = void 0;
const qn = Ee,
    $n = Se,
    ce = j,
    nt = u,
    de = y;
class Fn {
    constructor(e) {
        this.metadata = e.metadata, this.communicator = e.communicator, this.keyManager = new qn.SCWKeyManager, this.stateManager = new $n.SCWStateManager({
            appChainIds: this.metadata.appChainIds,
            updateListener: e.updateListener
        }), this.handshake = this.handshake.bind(this), this.request = this.request.bind(this), this.createRequestMessage = this.createRequestMessage.bind(this), this.decryptResponseMessage = this.decryptResponseMessage.bind(this)
    }
    async handshake() {
        const e = await this.createRequestMessage({
                handshake: {
                    method: "eth_requestAccounts",
                    params: this.metadata
                }
            }),
            t = await this.communicator.postRequestAndWaitForResponse(e);
        if ("failure" in t.content) throw t.content.failure;
        const r = await (0, de.importKeyFromHexString)("public", t.sender);
        await this.keyManager.setPeerPublicKey(r);
        const s = await this.decryptResponseMessage(t);
        this.updateInternalState({
            method: "eth_requestAccounts"
        }, s);
        const a = s.result;
        if ("error" in a) throw a.error;
        return this.stateManager.accounts
    }
    async request(e) {
        const t = this.tryLocalHandling(e);
        if (t !== void 0) {
            if (t instanceof Error) throw t;
            return t
        }
        await this.communicator.waitForPopupLoaded();
        const r = await this.sendEncryptedRequest(e),
            s = await this.decryptResponseMessage(r);
        this.updateInternalState(e, s);
        const a = s.result;
        if ("error" in a) throw a.error;
        return a.value
    }
    async disconnect() {
        this.stateManager.clear(), await this.keyManager.clear()
    }
    tryLocalHandling(e) {
        var t;
        switch (e.method) {
            case "wallet_switchEthereumChain":
                {
                    const r = e.params;
                    if (!r || !(!((t = r[0]) === null || t === void 0) && t.chainId)) throw ce.standardErrors.rpc.invalidParams();
                    const s = (0, nt.ensureIntNumber)(r[0].chainId);
                    return this.stateManager.switchChain(s) ? null : void 0
                }
            case "wallet_getCapabilities":
                {
                    const r = this.stateManager.walletCapabilities;
                    if (!r) throw ce.standardErrors.provider.unauthorized("No wallet capabilities found, please disconnect and reconnect");
                    return r
                }
            default:
                return
        }
    }
    async sendEncryptedRequest(e) {
        const t = await this.keyManager.getSharedSecret();
        if (!t) throw ce.standardErrors.provider.unauthorized("No valid session found, try requestAccounts before other methods");
        const r = await (0, de.encryptContent)({
                action: e,
                chainId: this.stateManager.activeChain.id
            }, t),
            s = await this.createRequestMessage({
                encrypted: r
            });
        return this.communicator.postRequestAndWaitForResponse(s)
    }
    async createRequestMessage(e) {
        const t = await (0, de.exportKeyToHexString)("public", await this.keyManager.getOwnPublicKey());
        return {
            id: crypto.randomUUID(),
            sender: t,
            content: e,
            timestamp: new Date
        }
    }
    async decryptResponseMessage(e) {
        const t = e.content;
        if ("failure" in t) throw t.failure;
        const r = await this.keyManager.getSharedSecret();
        if (!r) throw ce.standardErrors.provider.unauthorized("Invalid session");
        return (0, de.decryptContent)(t.encrypted, r)
    }
    updateInternalState(e, t) {
        var r, s;
        const a = (r = t.data) === null || r === void 0 ? void 0 : r.chains;
        a && this.stateManager.updateAvailableChains(a);
        const i = (s = t.data) === null || s === void 0 ? void 0 : s.capabilities;
        i && this.stateManager.updateWalletCapabilities(i);
        const o = t.result;
        if (!("error" in o)) switch (e.method) {
            case "eth_requestAccounts":
                {
                    const c = o.value;this.stateManager.updateAccounts(c);
                    break
                }
            case "wallet_switchEthereumChain":
                {
                    if (o.value !== null) return;
                    const c = e.params,
                        l = (0, nt.ensureIntNumber)(c[0].chainId);this.stateManager.switchChain(l);
                    break
                }
        }
    }
}
_e.SCWSigner = Fn;
var Ce = {};
const Vn = rn;

function Wt(n) {
    return Buffer.allocUnsafe(n).fill(0)
}

function zn(n) {
    return n.toString(2).length
}

function Ut(n, e) {
    let t = n.toString(16);
    t.length % 2 !== 0 && (t = "0" + t);
    const r = t.match(/.{1,2}/g).map(s => parseInt(s, 16));
    for (; r.length < e;) r.unshift(0);
    return Buffer.from(r)
}

function Zn(n, e) {
    const t = n < 0 n;
    let r;
    if (t) {
        const s = (1 n << BigInt(e)) - 1 n;
        r = (~n & s) + 1 n
    } else r = n;
    return r &= (1 n << BigInt(e)) - 1 n, r
}

function Bt(n, e, t) {
    const r = Wt(e);
    return n = ke(n), t ? n.length < e ? (n.copy(r), r) : n.slice(0, e) : n.length < e ? (n.copy(r, e - n.length), r) : n.slice(-e)
}

function Gn(n, e) {
    return Bt(n, e, !0)
}

function ke(n) {
    if (!Buffer.isBuffer(n))
        if (Array.isArray(n)) n = Buffer.from(n);
        else if (typeof n == "string") Ht(n) ? n = Buffer.from(Qn(Kt(n)), "hex") : n = Buffer.from(n);
    else if (typeof n == "number") n = intToBuffer(n);
    else if (n == null) n = Buffer.allocUnsafe(0);
    else if (typeof n == "bigint") n = Ut(n);
    else if (n.toArray) n = Buffer.from(n.toArray());
    else throw new Error("invalid type");
    return n
}

function Yn(n) {
    return n = ke(n), "0x" + n.toString("hex")
}

function Jn(n, e) {
    return n = ke(n), e || (e = 256), Vn("keccak" + e).update(n).digest()
}

function Qn(n) {
    return n.length % 2 ? "0" + n : n
}

function Ht(n) {
    return typeof n == "string" && n.match(/^0x[0-9A-Fa-f]*$/)
}

function Kt(n) {
    return typeof n == "string" && n.startsWith("0x") ? n.slice(2) : n
}
var qt = {
    zeros: Wt,
    setLength: Bt,
    setLengthRight: Gn,
    isHexString: Ht,
    stripHexPrefix: Kt,
    toBuffer: ke,
    bufferToHex: Yn,
    keccak: Jn,
    bitLengthFromBigInt: zn,
    bufferBEFromBigInt: Ut,
    twosFromBigInt: Zn
};
const E = qt;

function $t(n) {
    return n.startsWith("int[") ? "int256" + n.slice(3) : n === "int" ? "int256" : n.startsWith("uint[") ? "uint256" + n.slice(4) : n === "uint" ? "uint256" : n.startsWith("fixed[") ? "fixed128x128" + n.slice(5) : n === "fixed" ? "fixed128x128" : n.startsWith("ufixed[") ? "ufixed128x128" + n.slice(6) : n === "ufixed" ? "ufixed128x128" : n
}

function G(n) {
    return parseInt(/^\D+(\d+)$/.exec(n)[1], 10)
}

function rt(n) {
    var e = /^\D+(\d+)x(\d+)$/.exec(n);
    return [parseInt(e[1], 10), parseInt(e[2], 10)]
}

function Ft(n) {
    var e = n.match(/(.*)\[(.*?)\]$/);
    return e ? e[2] === "" ? "dynamic" : parseInt(e[2], 10) : null
}

function H(n) {
    var e = typeof n;
    if (e === "string" || e === "number") return BigInt(n);
    if (e === "bigint") return n;
    throw new Error("Argument is not a number")
}

function R(n, e) {
    var t, r, s, a;
    if (n === "address") return R("uint160", H(e));
    if (n === "bool") return R("uint8", e ? 1 : 0);
    if (n === "string") return R("bytes", new Buffer(e, "utf8"));
    if (er(n)) {
        if (typeof e.length > "u") throw new Error("Not an array?");
        if (t = Ft(n), t !== "dynamic" && t !== 0 && e.length > t) throw new Error("Elements exceed array size: " + t);
        s = [], n = n.slice(0, n.lastIndexOf("[")), typeof e == "string" && (e = JSON.parse(e));
        for (a in e) s.push(R(n, e[a]));
        if (t === "dynamic") {
            var i = R("uint256", e.length);
            s.unshift(i)
        }
        return Buffer.concat(s)
    } else {
        if (n === "bytes") return e = new Buffer(e), s = Buffer.concat([R("uint256", e.length), e]), e.length % 32 !== 0 && (s = Buffer.concat([s, E.zeros(32 - e.length % 32)])), s;
        if (n.startsWith("bytes")) {
            if (t = G(n), t < 1 || t > 32) throw new Error("Invalid bytes<N> width: " + t);
            return E.setLengthRight(e, 32)
        } else if (n.startsWith("uint")) {
            if (t = G(n), t % 8 || t < 8 || t > 256) throw new Error("Invalid uint<N> width: " + t);
            r = H(e);
            const o = E.bitLengthFromBigInt(r);
            if (o > t) throw new Error("Supplied uint exceeds width: " + t + " vs " + o);
            if (r < 0) throw new Error("Supplied uint is negative");
            return E.bufferBEFromBigInt(r, 32)
        } else if (n.startsWith("int")) {
            if (t = G(n), t % 8 || t < 8 || t > 256) throw new Error("Invalid int<N> width: " + t);
            r = H(e);
            const o = E.bitLengthFromBigInt(r);
            if (o > t) throw new Error("Supplied int exceeds width: " + t + " vs " + o);
            const c = E.twosFromBigInt(r, 256);
            return E.bufferBEFromBigInt(c, 32)
        } else if (n.startsWith("ufixed")) {
            if (t = rt(n), r = H(e), r < 0) throw new Error("Supplied ufixed is negative");
            return R("uint256", r * BigInt(2) ** BigInt(t[1]))
        } else if (n.startsWith("fixed")) return t = rt(n), R("int256", H(e) * BigInt(2) ** BigInt(t[1]))
    }
    throw new Error("Unsupported or invalid type: " + n)
}

function Xn(n) {
    return n === "string" || n === "bytes" || Ft(n) === "dynamic"
}

function er(n) {
    return n.lastIndexOf("]") === n.length - 1
}

function tr(n, e) {
    var t = [],
        r = [],
        s = 32 * n.length;
    for (var a in n) {
        var i = $t(n[a]),
            o = e[a],
            c = R(i, o);
        Xn(i) ? (t.push(R("uint256", s)), r.push(c), s += c.length) : t.push(c)
    }
    return Buffer.concat(t.concat(r))
}

function Vt(n, e) {
    if (n.length !== e.length) throw new Error("Number of types are not matching the values");
    for (var t, r, s = [], a = 0; a < n.length; a++) {
        var i = $t(n[a]),
            o = e[a];
        if (i === "bytes") s.push(o);
        else if (i === "string") s.push(new Buffer(o, "utf8"));
        else if (i === "bool") s.push(new Buffer(o ? "01" : "00", "hex"));
        else if (i === "address") s.push(E.setLength(o, 20));
        else if (i.startsWith("bytes")) {
            if (t = G(i), t < 1 || t > 32) throw new Error("Invalid bytes<N> width: " + t);
            s.push(E.setLengthRight(o, t))
        } else if (i.startsWith("uint")) {
            if (t = G(i), t % 8 || t < 8 || t > 256) throw new Error("Invalid uint<N> width: " + t);
            r = H(o);
            const c = E.bitLengthFromBigInt(r);
            if (c > t) throw new Error("Supplied uint exceeds width: " + t + " vs " + c);
            s.push(E.bufferBEFromBigInt(r, t / 8))
        } else if (i.startsWith("int")) {
            if (t = G(i), t % 8 || t < 8 || t > 256) throw new Error("Invalid int<N> width: " + t);
            r = H(o);
            const c = E.bitLengthFromBigInt(r);
            if (c > t) throw new Error("Supplied int exceeds width: " + t + " vs " + c);
            const l = E.twosFromBigInt(r, t);
            s.push(E.bufferBEFromBigInt(l, t / 8))
        } else throw new Error("Unsupported or invalid type: " + i)
    }
    return Buffer.concat(s)
}

function nr(n, e) {
    return E.keccak(Vt(n, e))
}
var rr = {
    rawEncode: tr,
    solidityPack: Vt,
    soliditySHA3: nr
};
const A = qt,
    ee = rr,
    zt = {
        type: "object",
        properties: {
            types: {
                type: "object",
                additionalProperties: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            name: {
                                type: "string"
                            },
                            type: {
                                type: "string"
                            }
                        },
                        required: ["name", "type"]
                    }
                }
            },
            primaryType: {
                type: "string"
            },
            domain: {
                type: "object"
            },
            message: {
                type: "object"
            }
        },
        required: ["types", "primaryType", "domain", "message"]
    },
    Be = {
        encodeData(n, e, t, r = !0) {
            const s = ["bytes32"],
                a = [this.hashType(n, t)];
            if (r) {
                const i = (o, c, l) => {
                    if (t[c] !== void 0) return ["bytes32", l == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : A.keccak(this.encodeData(c, l, t, r))];
                    if (l === void 0) throw new Error(`missing value for field ${o} of type ${c}`);
                    if (c === "bytes") return ["bytes32", A.keccak(l)];
                    if (c === "string") return typeof l == "string" && (l = Buffer.from(l, "utf8")), ["bytes32", A.keccak(l)];
                    if (c.lastIndexOf("]") === c.length - 1) {
                        const h = c.slice(0, c.lastIndexOf("[")),
                            f = l.map(d => i(o, h, d));
                        return ["bytes32", A.keccak(ee.rawEncode(f.map(([d]) => d), f.map(([, d]) => d)))]
                    }
                    return [c, l]
                };
                for (const o of t[n]) {
                    const [c, l] = i(o.name, o.type, e[o.name]);
                    s.push(c), a.push(l)
                }
            } else
                for (const i of t[n]) {
                    let o = e[i.name];
                    if (o !== void 0)
                        if (i.type === "bytes") s.push("bytes32"), o = A.keccak(o), a.push(o);
                        else if (i.type === "string") s.push("bytes32"), typeof o == "string" && (o = Buffer.from(o, "utf8")), o = A.keccak(o), a.push(o);
                    else if (t[i.type] !== void 0) s.push("bytes32"), o = A.keccak(this.encodeData(i.type, o, t, r)), a.push(o);
                    else {
                        if (i.type.lastIndexOf("]") === i.type.length - 1) throw new Error("Arrays currently unimplemented in encodeData");
                        s.push(i.type), a.push(o)
                    }
                }
            return ee.rawEncode(s, a)
        },
        encodeType(n, e) {
            let t = "",
                r = this.findTypeDependencies(n, e).filter(s => s !== n);
            r = [n].concat(r.sort());
            for (const s of r) {
                if (!e[s]) throw new Error("No type definition specified: " + s);
                t += s + "(" + e[s].map(({
                    name: i,
                    type: o
                }) => o + " " + i).join(",") + ")"
            }
            return t
        },
        findTypeDependencies(n, e, t = []) {
            if (n = n.match(/^\w*/)[0], t.includes(n) || e[n] === void 0) return t;
            t.push(n);
            for (const r of e[n])
                for (const s of this.findTypeDependencies(r.type, e, t)) !t.includes(s) && t.push(s);
            return t
        },
        hashStruct(n, e, t, r = !0) {
            return A.keccak(this.encodeData(n, e, t, r))
        },
        hashType(n, e) {
            return A.keccak(this.encodeType(n, e))
        },
        sanitizeData(n) {
            const e = {};
            for (const t in zt.properties) n[t] && (e[t] = n[t]);
            return e.types && (e.types = Object.assign({
                EIP712Domain: []
            }, e.types)), e
        },
        hash(n, e = !0) {
            const t = this.sanitizeData(n),
                r = [Buffer.from("1901", "hex")];
            return r.push(this.hashStruct("EIP712Domain", t.domain, t.types, e)), t.primaryType !== "EIP712Domain" && r.push(this.hashStruct(t.primaryType, t.message, t.types, e)), A.keccak(Buffer.concat(r))
        }
    };
var sr = {
    TYPED_MESSAGE_SCHEMA: zt,
    TypedDataUtils: Be,
    hashForSignTypedDataLegacy: function(n) {
        return ir(n.data)
    },
    hashForSignTypedData_v3: function(n) {
        return Be.hash(n.data, !1)
    },
    hashForSignTypedData_v4: function(n) {
        return Be.hash(n.data)
    }
};

function ir(n) {
    const e = new Error("Expect argument to be non-empty array");
    if (typeof n != "object" || !n.length) throw e;
    const t = n.map(function(a) {
            return a.type === "bytes" ? A.toBuffer(a.value) : a.value
        }),
        r = n.map(function(a) {
            return a.type
        }),
        s = n.map(function(a) {
            if (!a.name) throw e;
            return a.type + " " + a.name
        });
    return ee.soliditySHA3(["bytes32", "bytes32"], [ee.soliditySHA3(new Array(n.length).fill("string"), s), ee.soliditySHA3(r, t)])
}
var N = {};
Object.defineProperty(N, "__esModule", {
    value: !0
});
N.APP_VERSION_KEY = N.LOCAL_STORAGE_ADDRESSES_KEY = N.WALLET_USER_NAME_KEY = void 0;
N.WALLET_USER_NAME_KEY = "walletUsername";
N.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
N.APP_VERSION_KEY = "AppVersion";
var ie = {};
Object.defineProperty(ie, "__esModule", {
    value: !0
});
ie.RelayEventManager = void 0;
const ar = u;
class or {
    constructor() {
        this._nextRequestId = 0, this.callbacks = new Map
    }
    makeRequestId() {
        this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
        const e = this._nextRequestId,
            t = (0, ar.prepend0x)(e.toString(16));
        return this.callbacks.get(t) && this.callbacks.delete(t), e
    }
}
ie.RelayEventManager = or;
var Ie = {},
    Me = {},
    Le = {};
Object.defineProperty(Le, "__esModule", {
    value: !0
});
Le.WalletLinkCipher = void 0;
const le = u;
class cr {
    constructor(e) {
        this.secret = e
    }
    async encrypt(e) {
        const t = this.secret;
        if (t.length !== 64) throw Error("secret must be 256 bits");
        const r = crypto.getRandomValues(new Uint8Array(12)),
            s = await crypto.subtle.importKey("raw", (0, le.hexStringToUint8Array)(t), {
                name: "aes-gcm"
            }, !1, ["encrypt", "decrypt"]),
            a = new TextEncoder,
            i = await window.crypto.subtle.encrypt({
                name: "AES-GCM",
                iv: r
            }, s, a.encode(e)),
            o = 16,
            c = i.slice(i.byteLength - o),
            l = i.slice(0, i.byteLength - o),
            h = new Uint8Array(c),
            f = new Uint8Array(l),
            d = new Uint8Array([...r, ...h, ...f]);
        return (0, le.uint8ArrayToHex)(d)
    }
    async decrypt(e) {
        const t = this.secret;
        if (t.length !== 64) throw Error("secret must be 256 bits");
        return new Promise((r, s) => {
            (async function() {
                const a = await crypto.subtle.importKey("raw", (0, le.hexStringToUint8Array)(t), {
                        name: "aes-gcm"
                    }, !1, ["encrypt", "decrypt"]),
                    i = (0, le.hexStringToUint8Array)(e),
                    o = i.slice(0, 12),
                    c = i.slice(12, 28),
                    l = i.slice(28),
                    h = new Uint8Array([...l, ...c]),
                    f = {
                        name: "AES-GCM",
                        iv: new Uint8Array(o)
                    };
                try {
                    const d = await window.crypto.subtle.decrypt(f, a, h),
                        p = new TextDecoder;
                    r(p.decode(d))
                } catch (d) {
                    s(d)
                }
            })()
        })
    }
}
Le.WalletLinkCipher = cr;
var Ae = {};
Object.defineProperty(Ae, "__esModule", {
    value: !0
});
Ae.WalletLinkHTTP = void 0;
class dr {
    constructor(e, t, r) {
        this.linkAPIUrl = e, this.sessionId = t;
        const s = `${t}:${r}`;
        this.auth = `Basic ${btoa(s)}`
    }
    async markUnseenEventsAsSeen(e) {
        return Promise.all(e.map(t => fetch(`${this.linkAPIUrl}/events/${t.eventId}/seen`, {
            method: "POST",
            headers: {
                Authorization: this.auth
            }
        }))).catch(t => console.error("Unabled to mark event as failed:", t))
    }
    async fetchUnseenEvents() {
        var e;
        const t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: {
                Authorization: this.auth
            }
        });
        if (t.ok) {
            const {
                events: r,
                error: s
            } = await t.json();
            if (s) throw new Error(`Check unseen events failed: ${s}`);
            const a = (e = r == null ? void 0 : r.filter(i => i.event === "Web3Response").map(i => ({
                type: "Event",
                sessionId: this.sessionId,
                eventId: i.id,
                event: i.event,
                data: i.data
            }))) !== null && e !== void 0 ? e : [];
            return this.markUnseenEventsAsSeen(a), a
        }
        throw new Error(`Check unseen events failed: ${t.status}`)
    }
}
Ae.WalletLinkHTTP = dr;
var Y = {};
Object.defineProperty(Y, "__esModule", {
    value: !0
});
Y.WalletLinkWebSocket = Y.ConnectionState = void 0;
var Z;
(function(n) {
    n[n.DISCONNECTED = 0] = "DISCONNECTED", n[n.CONNECTING = 1] = "CONNECTING", n[n.CONNECTED = 2] = "CONNECTED"
})(Z || (Y.ConnectionState = Z = {}));
class lr {
    setConnectionStateListener(e) {
        this.connectionStateListener = e
    }
    setIncomingDataListener(e) {
        this.incomingDataListener = e
    }
    constructor(e, t = WebSocket) {
        this.WebSocketClass = t, this.webSocket = null, this.pendingData = [], this.url = e.replace(/^http/, "ws")
    }
    async connect() {
        if (this.webSocket) throw new Error("webSocket object is not null");
        return new Promise((e, t) => {
            var r;
            let s;
            try {
                this.webSocket = s = new this.WebSocketClass(this.url)
            } catch (a) {
                t(a);
                return
            }(r = this.connectionStateListener) === null || r === void 0 || r.call(this, Z.CONNECTING), s.onclose = a => {
                var i;
                this.clearWebSocket(), t(new Error(`websocket error ${a.code}: ${a.reason}`)), (i = this.connectionStateListener) === null || i === void 0 || i.call(this, Z.DISCONNECTED)
            }, s.onopen = a => {
                var i;
                e(), (i = this.connectionStateListener) === null || i === void 0 || i.call(this, Z.CONNECTED), this.pendingData.length > 0 && ([...this.pendingData].forEach(c => this.sendData(c)), this.pendingData = [])
            }, s.onmessage = a => {
                var i, o;
                if (a.data === "h")(i = this.incomingDataListener) === null || i === void 0 || i.call(this, {
                    type: "Heartbeat"
                });
                else try {
                    const c = JSON.parse(a.data);
                    (o = this.incomingDataListener) === null || o === void 0 || o.call(this, c)
                } catch {}
            }
        })
    }
    disconnect() {
        var e;
        const {
            webSocket: t
        } = this;
        if (t) {
            this.clearWebSocket(), (e = this.connectionStateListener) === null || e === void 0 || e.call(this, Z.DISCONNECTED), this.connectionStateListener = void 0, this.incomingDataListener = void 0;
            try {
                t.close()
            } catch {}
        }
    }
    sendData(e) {
        const {
            webSocket: t
        } = this;
        if (!t) {
            this.pendingData.push(e), this.connect();
            return
        }
        t.send(e)
    }
    clearWebSocket() {
        const {
            webSocket: e
        } = this;
        e && (this.webSocket = null, e.onclose = null, e.onerror = null, e.onmessage = null, e.onopen = null)
    }
}
Y.WalletLinkWebSocket = lr;
Object.defineProperty(Me, "__esModule", {
    value: !0
});
Me.WalletLinkConnection = void 0;
const st = N,
    ur = Le,
    hr = Ae,
    ue = Y,
    F = _,
    it = 1e4,
    gr = 6e4;
class pr {
    constructor({
        session: e,
        linkAPIUrl: t,
        listener: r,
        WebSocketClass: s = WebSocket
    }) {
        this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, F.IntNumber)(1), this._connected = !1, this._linked = !1, this.shouldFetchUnseenEventsOnConnect = !1, this.requestResolutions = new Map, this.handleSessionMetadataUpdated = i => {
            if (!i) return;
            new Map([
                ["__destroyed", this.handleDestroyed],
                ["EthereumAddress", this.handleAccountUpdated],
                ["WalletUsername", this.handleWalletUsernameUpdated],
                ["AppVersion", this.handleAppVersionUpdated],
                ["ChainId", c => i.JsonRpcUrl && this.handleChainUpdated(c, i.JsonRpcUrl)]
            ]).forEach((c, l) => {
                const h = i[l];
                h !== void 0 && c(h)
            })
        }, this.handleDestroyed = i => {
            var o;
            i === "1" && ((o = this.listener) === null || o === void 0 || o.resetAndReload())
        }, this.handleAccountUpdated = async i => {
            var o; {
                const c = await this.cipher.decrypt(i);
                (o = this.listener) === null || o === void 0 || o.accountUpdated(c)
            }
        }, this.handleMetadataUpdated = async (i, o) => {
            var c; {
                const l = await this.cipher.decrypt(o);
                (c = this.listener) === null || c === void 0 || c.metadataUpdated(i, l)
            }
        }, this.handleWalletUsernameUpdated = async i => {
            this.handleMetadataUpdated(st.WALLET_USER_NAME_KEY, i)
        }, this.handleAppVersionUpdated = async i => {
            this.handleMetadataUpdated(st.APP_VERSION_KEY, i)
        }, this.handleChainUpdated = async (i, o) => {
            var c; {
                const l = await this.cipher.decrypt(i),
                    h = await this.cipher.decrypt(o);
                (c = this.listener) === null || c === void 0 || c.chainUpdated(l, h)
            }
        }, this.session = e, this.cipher = new ur.WalletLinkCipher(e.secret), this.listener = r;
        const a = new ue.WalletLinkWebSocket(`${t}/rpc`, s);
        a.setConnectionStateListener(async i => {
            let o = !1;
            switch (i) {
                case ue.ConnectionState.DISCONNECTED:
                    if (!this.destroyed) {
                        const c = async () => {
                            await new Promise(l => setTimeout(l, 5e3)), this.destroyed || a.connect().catch(() => {
                                c()
                            })
                        };
                        c()
                    }
                    break;
                case ue.ConnectionState.CONNECTED:
                    try {
                        await this.authenticate(), this.sendIsLinked(), this.sendGetSessionConfig(), o = !0
                    } catch {}
                    this.updateLastHeartbeat(), setInterval(() => {
                        this.heartbeat()
                    }, it), this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
                    break;
                case ue.ConnectionState.CONNECTING:
                    break
            }
            this.connected !== o && (this.connected = o)
        }), a.setIncomingDataListener(i => {
            var o;
            switch (i.type) {
                case "Heartbeat":
                    this.updateLastHeartbeat();
                    return;
                case "IsLinkedOK":
                case "Linked":
                    {
                        const c = i.type === "IsLinkedOK" ? i.linked : void 0;this.linked = c || i.onlineGuests > 0;
                        break
                    }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                    {
                        this.handleSessionMetadataUpdated(i.metadata);
                        break
                    }
                case "Event":
                    {
                        this.handleIncomingEvent(i);
                        break
                    }
            }
            i.id !== void 0 && ((o = this.requestResolutions.get(i.id)) === null || o === void 0 || o(i))
        }), this.ws = a, this.http = new hr.WalletLinkHTTP(t, e.id, e.key)
    }
    connect() {
        if (this.destroyed) throw new Error("instance is destroyed");
        this.ws.connect()
    }
    destroy() {
        this.destroyed = !0, this.ws.disconnect(), this.listener = void 0
    }
    get isDestroyed() {
        return this.destroyed
    }
    get connected() {
        return this._connected
    }
    set connected(e) {
        var t;
        this._connected = e, e && ((t = this.onceConnected) === null || t === void 0 || t.call(this))
    }
    setOnceConnected(e) {
        return new Promise(t => {
            this.connected ? e().then(t) : this.onceConnected = () => {
                e().then(t), this.onceConnected = void 0
            }
        })
    }
    get linked() {
        return this._linked
    }
    set linked(e) {
        var t, r;
        this._linked = e, e && ((t = this.onceLinked) === null || t === void 0 || t.call(this)), (r = this.listener) === null || r === void 0 || r.linkedUpdated(e)
    }
    setOnceLinked(e) {
        return new Promise(t => {
            this.linked ? e().then(t) : this.onceLinked = () => {
                e().then(t), this.onceLinked = void 0
            }
        })
    }
    async handleIncomingEvent(e) {
        var t;
        if (!(e.type !== "Event" || e.event !== "Web3Response")) {
            const r = await this.cipher.decrypt(e.data),
                s = JSON.parse(r);
            if (s.type !== "WEB3_RESPONSE") return;
            (t = this.listener) === null || t === void 0 || t.handleWeb3ResponseMessage(s)
        }
    }
    async checkUnseenEvents() {
        if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return
        }
        await new Promise(e => setTimeout(e, 250));
        try {
            await this.fetchUnseenEventsAPI()
        } catch (e) {
            console.error("Unable to check for unseen events", e)
        }
    }
    async fetchUnseenEventsAPI() {
        this.shouldFetchUnseenEventsOnConnect = !1, (await this.http.fetchUnseenEvents()).forEach(t => this.handleIncomingEvent(t))
    }
    async setSessionMetadata(e, t) {
        const r = {
            type: "SetSessionConfig",
            id: (0, F.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
            metadata: {
                [e]: t
            }
        };
        return this.setOnceConnected(async () => {
            const s = await this.makeRequest(r);
            if (s.type === "Fail") throw new Error(s.error || "failed to set session metadata")
        })
    }
    async publishEvent(e, t, r = !1) {
        const s = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, t), {
                origin: location.origin,
                relaySource: "coinbaseWalletExtension" in window && window.coinbaseWalletExtension ? "injected_sdk" : "sdk"
            }))),
            a = {
                type: "PublishEvent",
                id: (0, F.IntNumber)(this.nextReqId++),
                sessionId: this.session.id,
                event: e,
                data: s,
                callWebhook: r
            };
        return this.setOnceLinked(async () => {
            const i = await this.makeRequest(a);
            if (i.type === "Fail") throw new Error(i.error || "failed to publish event");
            return i.eventId
        })
    }
    sendData(e) {
        this.ws.sendData(JSON.stringify(e))
    }
    updateLastHeartbeat() {
        this.lastHeartbeatResponse = Date.now()
    }
    heartbeat() {
        if (Date.now() - this.lastHeartbeatResponse > it * 2) {
            this.ws.disconnect();
            return
        }
        try {
            this.ws.sendData("h")
        } catch {}
    }
    async makeRequest(e, t = gr) {
        const r = e.id;
        this.sendData(e);
        let s;
        return Promise.race([new Promise((a, i) => {
            s = window.setTimeout(() => {
                i(new Error(`request ${r} timed out`))
            }, t)
        }), new Promise(a => {
            this.requestResolutions.set(r, i => {
                clearTimeout(s), a(i), this.requestResolutions.delete(r)
            })
        })])
    }
    async authenticate() {
        const e = {
                type: "HostSession",
                id: (0, F.IntNumber)(this.nextReqId++),
                sessionId: this.session.id,
                sessionKey: this.session.key
            },
            t = await this.makeRequest(e);
        if (t.type === "Fail") throw new Error(t.error || "failed to authenticate")
    }
    sendIsLinked() {
        const e = {
            type: "IsLinked",
            id: (0, F.IntNumber)(this.nextReqId++),
            sessionId: this.session.id
        };
        this.sendData(e)
    }
    sendGetSessionConfig() {
        const e = {
            type: "GetSessionConfig",
            id: (0, F.IntNumber)(this.nextReqId++),
            sessionId: this.session.id
        };
        this.sendData(e)
    }
}
Me.WalletLinkConnection = pr;
var Re = {};
Object.defineProperty(Re, "__esModule", {
    value: !0
});
Re.WalletLinkSession = void 0;
const fr = sn,
    at = u,
    ot = "session:id",
    ct = "session:secret",
    dt = "session:linked";
class Ve {
    constructor(e, t, r, s) {
        this._storage = e, this._id = t || (0, at.randomBytesHex)(16), this._secret = r || (0, at.randomBytesHex)(32), this._key = new fr.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex"), this._linked = !!s
    }
    static load(e) {
        const t = e.getItem(ot),
            r = e.getItem(dt),
            s = e.getItem(ct);
        return t && s ? new Ve(e, t, s, r === "1") : null
    }
    get id() {
        return this._id
    }
    get secret() {
        return this._secret
    }
    get key() {
        return this._key
    }
    get linked() {
        return this._linked
    }
    set linked(e) {
        this._linked = e, this.persistLinked()
    }
    save() {
        return this._storage.setItem(ot, this._id), this._storage.setItem(ct, this._secret), this.persistLinked(), this
    }
    persistLinked() {
        this._storage.setItem(dt, this._linked ? "1" : "0")
    }
}
Re.WalletLinkSession = Ve;
var S = {};
Object.defineProperty(S, "__esModule", {
    value: !0
});
S.isDarkMode = S.isMobileWeb = S.getLocation = S.createQrUrl = void 0;

function mr(n, e, t, r, s, a) {
    const i = r ? "parent-id" : "id",
        o = new URLSearchParams({
            [i]: n,
            secret: e,
            server: t,
            v: s,
            chainId: a.toString()
        }).toString();
    return `${t}/#/link?${o}`
}
S.createQrUrl = mr;

function br() {
    try {
        return window.frameElement !== null
    } catch {
        return !1
    }
}

function yr() {
    try {
        return br() && window.top ? window.top.location : window.location
    } catch {
        return window.location
    }
}
S.getLocation = yr;

function wr() {
    var n;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((n = window == null ? void 0 : window.navigator) === null || n === void 0 ? void 0 : n.userAgent)
}
S.isMobileWeb = wr;

function vr() {
    var n, e;
    return (e = (n = window == null ? void 0 : window.matchMedia) === null || n === void 0 ? void 0 : n.call(window, "(prefers-color-scheme: dark)").matches) !== null && e !== void 0 ? e : !1
}
S.isDarkMode = vr;
var xe = {},
    ae = {},
    ze = {};
Object.defineProperty(ze, "__esModule", {
    value: !0
});
ze.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
var _r = M && M.__importDefault || function(n) {
    return n && n.__esModule ? n : {
        default: n
    }
};
Object.defineProperty(ae, "__esModule", {
    value: !0
});
ae.injectCssReset = void 0;
const Er = _r(ze);

function Sr() {
    const n = document.createElement("style");
    n.type = "text/css", n.appendChild(document.createTextNode(Er.default)), document.documentElement.appendChild(n)
}
ae.injectCssReset = Sr;
var Ze = {},
    Ge = {};
Object.defineProperty(Ge, "__esModule", {
    value: !0
});
Ge.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
(function(n) {
    var e = M && M.__importDefault || function(d) {
        return d && d.__esModule ? d : {
            default: d
        }
    };
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.SnackbarInstance = n.SnackbarContainer = n.Snackbar = void 0;
    const t = e(vt),
        r = _t,
        s = an,
        a = S,
        i = e(Ge),
        o = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
        c = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
    class l {
        constructor() {
            this.items = new Map, this.nextItemKey = 0, this.root = null, this.darkMode = (0, a.isDarkMode)()
        }
        attach(p) {
            this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", p.appendChild(this.root), this.render()
        }
        presentItem(p) {
            const m = this.nextItemKey++;
            return this.items.set(m, p), this.render(), () => {
                this.items.delete(m), this.render()
            }
        }
        clear() {
            this.items.clear(), this.render()
        }
        render() {
            this.root && (0, r.render)((0, r.h)("div", null, (0, r.h)(n.SnackbarContainer, {
                darkMode: this.darkMode
            }, Array.from(this.items.entries()).map(([p, m]) => (0, r.h)(n.SnackbarInstance, Object.assign({}, m, {
                key: p
            }))))), this.root)
        }
    }
    n.Snackbar = l;
    const h = d => (0, r.h)("div", {
        class: (0, t.default)("-cbwsdk-snackbar-container")
    }, (0, r.h)("style", null, i.default), (0, r.h)("div", {
        class: "-cbwsdk-snackbar"
    }, d.children));
    n.SnackbarContainer = h;
    const f = ({
        autoExpand: d,
        message: p,
        menuItems: m
    }) => {
        const [B, Xt] = (0, s.useState)(!0), [Oe, Je] = (0, s.useState)(d ? ? !1);
        (0, s.useEffect)(() => {
            const L = [window.setTimeout(() => {
                Xt(!1)
            }, 1), window.setTimeout(() => {
                Je(!0)
            }, 1e4)];
            return () => {
                L.forEach(window.clearTimeout)
            }
        });
        const en = () => {
            Je(!Oe)
        };
        return (0, r.h)("div", {
            class: (0, t.default)("-cbwsdk-snackbar-instance", B && "-cbwsdk-snackbar-instance-hidden", Oe && "-cbwsdk-snackbar-instance-expanded")
        }, (0, r.h)("div", {
            class: "-cbwsdk-snackbar-instance-header",
            onClick: en
        }, (0, r.h)("img", {
            src: o,
            class: "-cbwsdk-snackbar-instance-header-cblogo"
        }), " ", (0, r.h)("div", {
            class: "-cbwsdk-snackbar-instance-header-message"
        }, p), (0, r.h)("div", {
            class: "-gear-container"
        }, !Oe && (0, r.h)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, (0, r.h)("circle", {
            cx: "12",
            cy: "12",
            r: "12",
            fill: "#F5F7F8"
        })), (0, r.h)("img", {
            src: c,
            class: "-gear-icon",
            title: "Expand"
        }))), m && m.length > 0 && (0, r.h)("div", {
            class: "-cbwsdk-snackbar-instance-menu"
        }, m.map((L, tn) => (0, r.h)("div", {
            class: (0, t.default)("-cbwsdk-snackbar-instance-menu-item", L.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"),
            onClick: L.onClick,
            key: tn
        }, (0, r.h)("svg", {
            width: L.svgWidth,
            height: L.svgHeight,
            viewBox: "0 0 10 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, (0, r.h)("path", {
            "fill-rule": L.defaultFillRule,
            "clip-rule": L.defaultClipRule,
            d: L.path,
            fill: "#AAAAAA"
        })), (0, r.h)("span", {
            class: (0, t.default)("-cbwsdk-snackbar-instance-menu-item-info", L.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red")
        }, L.info)))))
    };
    n.SnackbarInstance = f
})(Ze);
Object.defineProperty(xe, "__esModule", {
    value: !0
});
xe.WalletLinkRelayUI = void 0;
const Cr = ae,
    kr = Ze;
class Ir {
    constructor() {
        this.attached = !1, this.snackbar = new kr.Snackbar
    }
    attach() {
        if (this.attached) throw new Error("Coinbase Wallet SDK UI is already attached");
        const e = document.documentElement,
            t = document.createElement("div");
        t.className = "-cbwsdk-css-reset", e.appendChild(t), this.snackbar.attach(t), this.attached = !0, (0, Cr.injectCssReset)()
    }
    showConnecting(e) {
        let t;
        return e.isUnlinkedErrorState ? t = {
            autoExpand: !0,
            message: "Connection lost",
            menuItems: [{
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: e.onResetConnection
            }]
        } : t = {
            message: "Confirm on phone",
            menuItems: [{
                isRed: !0,
                info: "Cancel transaction",
                svgWidth: "11",
                svgHeight: "11",
                path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                defaultFillRule: "inherit",
                defaultClipRule: "inherit",
                onClick: e.onCancel
            }, {
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: e.onResetConnection
            }]
        }, this.snackbar.presentItem(t)
    }
}
xe.WalletLinkRelayUI = Ir;
var Pe = {},
    Ne = {},
    Ye = {};
Object.defineProperty(Ye, "__esModule", {
    value: !0
});
Ye.default = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}";
var Zt = M && M.__importDefault || function(n) {
    return n && n.__esModule ? n : {
        default: n
    }
};
Object.defineProperty(Ne, "__esModule", {
    value: !0
});
Ne.RedirectDialog = void 0;
const Mr = Zt(vt),
    x = _t,
    Lr = ae,
    Ar = Ze,
    Rr = S,
    xr = Zt(Ye);
class Pr {
    constructor() {
        this.root = null, this.darkMode = (0, Rr.isDarkMode)()
    }
    attach() {
        const e = document.documentElement;
        this.root = document.createElement("div"), this.root.className = "-cbwsdk-css-reset", e.appendChild(this.root), (0, Lr.injectCssReset)()
    }
    present(e) {
        this.render(e)
    }
    clear() {
        this.render(null)
    }
    render(e) {
        this.root && ((0, x.render)(null, this.root), e && (0, x.render)((0, x.h)(Nr, Object.assign({}, e, {
            onDismiss: () => {
                this.clear()
            },
            darkMode: this.darkMode
        })), this.root))
    }
}
Ne.RedirectDialog = Pr;
const Nr = ({
    title: n,
    buttonText: e,
    darkMode: t,
    onButtonClick: r,
    onDismiss: s
}) => {
    const a = t ? "dark" : "light";
    return (0, x.h)(Ar.SnackbarContainer, {
        darkMode: t
    }, (0, x.h)("div", {
        class: "-cbwsdk-redirect-dialog"
    }, (0, x.h)("style", null, xr.default), (0, x.h)("div", {
        class: "-cbwsdk-redirect-dialog-backdrop",
        onClick: s
    }), (0, x.h)("div", {
        class: (0, Mr.default)("-cbwsdk-redirect-dialog-box", a)
    }, (0, x.h)("p", null, n), (0, x.h)("button", {
        onClick: r
    }, e))))
};
var T = {};
Object.defineProperty(T, "__esModule", {
    value: !0
});
T.CBW_MOBILE_DEEPLINK_URL = T.WALLETLINK_URL = T.CB_KEYS_URL = void 0;
T.CB_KEYS_URL = "https://keys.coinbase.com/connect";
T.WALLETLINK_URL = "https://www.walletlink.org";
T.CBW_MOBILE_DEEPLINK_URL = "https://go.cb-w.com/walletlink";
Object.defineProperty(Pe, "__esModule", {
    value: !0
});
Pe.WLMobileRelayUI = void 0;
const Tr = Ne,
    jr = S,
    Or = T;
class Dr {
    constructor() {
        this.attached = !1, this.redirectDialog = new Tr.RedirectDialog
    }
    attach() {
        if (this.attached) throw new Error("Coinbase Wallet SDK UI is already attached");
        this.redirectDialog.attach(), this.attached = !0
    }
    redirectToCoinbaseWallet(e) {
        const t = new URL(Or.CBW_MOBILE_DEEPLINK_URL);
        t.searchParams.append("redirect_url", (0, jr.getLocation)().href), e && t.searchParams.append("wl_url", e);
        const r = document.createElement("a");
        r.target = "cbw-opener", r.href = t.href, r.rel = "noreferrer noopener", r.click()
    }
    openCoinbaseWalletDeeplink(e) {
        this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            onButtonClick: () => {
                this.redirectToCoinbaseWallet(e)
            }
        }), setTimeout(() => {
            this.redirectToCoinbaseWallet(e)
        }, 99)
    }
    showConnecting(e) {
        return () => {
            this.redirectDialog.clear()
        }
    }
}
Pe.WLMobileRelayUI = Dr;
Object.defineProperty(Ie, "__esModule", {
    value: !0
});
Ie.WalletLinkRelay = void 0;
const Wr = Me,
    Ur = N,
    Br = ie,
    He = Re,
    V = Q,
    Hr = S,
    Kr = xe,
    lt = Pe,
    qr = j,
    b = u,
    $r = O;
class W {
    constructor(e) {
        this.accountsCallback = null, this.chainCallbackParams = {
            chainId: "",
            jsonRpcUrl: ""
        }, this.chainCallback = null, this.dappDefaultChain = 1, this.isMobileWeb = (0, Hr.isMobileWeb)(), this.appName = "", this.appLogoUrl = null, this.linkedUpdated = a => {
            this.isLinked = a;
            const i = this.storage.getItem(Ur.LOCAL_STORAGE_ADDRESSES_KEY);
            if (a && (this._session.linked = a), this.isUnlinkedErrorState = !1, i) {
                const o = i.split(" "),
                    c = this.storage.getItem("IsStandaloneSigning") === "true";
                o[0] !== "" && !a && this._session.linked && !c && (this.isUnlinkedErrorState = !0)
            }
        }, this.metadataUpdated = (a, i) => {
            this.storage.setItem(a, i)
        }, this.chainUpdated = (a, i) => {
            this.chainCallbackParams.chainId === a && this.chainCallbackParams.jsonRpcUrl === i || (this.chainCallbackParams = {
                chainId: a,
                jsonRpcUrl: i
            }, this.chainCallback && this.chainCallback(a, i))
        }, this.accountUpdated = a => {
            this.accountsCallback && this.accountsCallback([a]), W.accountRequestCallbackIds.size > 0 && (Array.from(W.accountRequestCallbackIds.values()).forEach(i => {
                const o = {
                    type: "WEB3_RESPONSE",
                    id: i,
                    response: {
                        method: "requestEthereumAccounts",
                        result: [a]
                    }
                };
                this.invokeCallback(Object.assign(Object.assign({}, o), {
                    id: i
                }))
            }), W.accountRequestCallbackIds.clear())
        }, this.resetAndReload = this.resetAndReload.bind(this), this.linkAPIUrl = e.linkAPIUrl, this.storage = e.storage;
        const {
            session: t,
            ui: r,
            connection: s
        } = this.subscribe();
        this._session = t, this.connection = s, this.relayEventManager = new Br.RelayEventManager, this.ui = r
    }
    subscribe() {
        const e = He.WalletLinkSession.load(this.storage) || new He.WalletLinkSession(this.storage).save(),
            {
                linkAPIUrl: t
            } = this,
            r = new Wr.WalletLinkConnection({
                session: e,
                linkAPIUrl: t,
                listener: this
            }),
            s = this.isMobileWeb ? new lt.WLMobileRelayUI : new Kr.WalletLinkRelayUI;
        return r.connect(), {
            session: e,
            ui: s,
            connection: r
        }
    }
    attachUI() {
        this.ui.attach()
    }
    resetAndReload() {
        Promise.race([this.connection.setSessionMetadata("__destroyed", "1"), new Promise(e => setTimeout(() => e(null), 1e3))]).then(() => {
            this.connection.destroy();
            const e = He.WalletLinkSession.load(this.storage);
            (e == null ? void 0 : e.id) === this._session.id && $r.ScopedLocalStorage.clearAll(), document.location.reload()
        }).catch(e => {})
    }
    setAppInfo(e, t) {
        this.appName = e, this.appLogoUrl = t
    }
    getStorageItem(e) {
        return this.storage.getItem(e)
    }
    setStorageItem(e, t) {
        this.storage.setItem(e, t)
    }
    signEthereumMessage(e, t, r, s) {
        return this.sendRequest({
            method: "signEthereumMessage",
            params: {
                message: (0, b.hexStringFromBuffer)(e, !0),
                address: t,
                addPrefix: r,
                typedDataJson: s || null
            }
        })
    }
    ethereumAddressFromSignedMessage(e, t, r) {
        return this.sendRequest({
            method: "ethereumAddressFromSignedMessage",
            params: {
                message: (0, b.hexStringFromBuffer)(e, !0),
                signature: (0, b.hexStringFromBuffer)(t, !0),
                addPrefix: r
            }
        })
    }
    signEthereumTransaction(e) {
        return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
                fromAddress: e.fromAddress,
                toAddress: e.toAddress,
                weiValue: (0, b.bigIntStringFromBigInt)(e.weiValue),
                data: (0, b.hexStringFromBuffer)(e.data, !0),
                nonce: e.nonce,
                gasPriceInWei: e.gasPriceInWei ? (0, b.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                maxFeePerGas: e.gasPriceInWei ? (0, b.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                maxPriorityFeePerGas: e.gasPriceInWei ? (0, b.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                gasLimit: e.gasLimit ? (0, b.bigIntStringFromBigInt)(e.gasLimit) : null,
                chainId: e.chainId,
                shouldSubmit: !1
            }
        })
    }
    signAndSubmitEthereumTransaction(e) {
        return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
                fromAddress: e.fromAddress,
                toAddress: e.toAddress,
                weiValue: (0, b.bigIntStringFromBigInt)(e.weiValue),
                data: (0, b.hexStringFromBuffer)(e.data, !0),
                nonce: e.nonce,
                gasPriceInWei: e.gasPriceInWei ? (0, b.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                maxFeePerGas: e.maxFeePerGas ? (0, b.bigIntStringFromBigInt)(e.maxFeePerGas) : null,
                maxPriorityFeePerGas: e.maxPriorityFeePerGas ? (0, b.bigIntStringFromBigInt)(e.maxPriorityFeePerGas) : null,
                gasLimit: e.gasLimit ? (0, b.bigIntStringFromBigInt)(e.gasLimit) : null,
                chainId: e.chainId,
                shouldSubmit: !0
            }
        })
    }
    submitEthereumTransaction(e, t) {
        return this.sendRequest({
            method: "submitEthereumTransaction",
            params: {
                signedTransaction: (0, b.hexStringFromBuffer)(e, !0),
                chainId: t
            }
        })
    }
    scanQRCode(e) {
        return this.sendRequest({
            method: "scanQRCode",
            params: {
                regExp: e
            }
        })
    }
    getWalletLinkSession() {
        return this._session
    }
    genericRequest(e, t) {
        return this.sendRequest({
            method: "generic",
            params: {
                action: t,
                data: e
            }
        })
    }
    sendGenericMessage(e) {
        return this.sendRequest(e)
    }
    sendRequest(e) {
        let t = null;
        const r = (0, b.randomBytesHex)(8),
            s = a => {
                this.publishWeb3RequestCanceledEvent(r), this.handleErrorResponse(r, e.method, a), t == null || t()
            };
        return new Promise((a, i) => {
            t = this.ui.showConnecting({
                isUnlinkedErrorState: this.isUnlinkedErrorState,
                onCancel: s,
                onResetConnection: this.resetAndReload
            }), this.relayEventManager.callbacks.set(r, o => {
                if (t == null || t(), (0, V.isErrorResponse)(o)) return i(new Error(o.errorMessage));
                a(o)
            }), this.publishWeb3RequestEvent(r, e)
        })
    }
    setAccountsCallback(e) {
        this.accountsCallback = e
    }
    setChainCallback(e) {
        this.chainCallback = e
    }
    setDappDefaultChainCallback(e) {
        this.dappDefaultChain = e
    }
    publishWeb3RequestEvent(e, t) {
        const r = {
            type: "WEB3_REQUEST",
            id: e,
            request: t
        };
        this.publishEvent("Web3Request", r, !0).then(s => {}).catch(s => {
            this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: r.id,
                response: {
                    method: t.method,
                    errorMessage: s.message
                }
            })
        }), this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method)
    }
    openCoinbaseWalletDeeplink(e) {
        if (this.ui instanceof lt.WLMobileRelayUI) switch (e) {
            case "requestEthereumAccounts":
            case "switchEthereumChain":
                return;
            default:
                window.addEventListener("blur", () => {
                    window.addEventListener("focus", () => {
                        this.connection.checkUnseenEvents()
                    }, {
                        once: !0
                    })
                }, {
                    once: !0
                }), this.ui.openCoinbaseWalletDeeplink();
                break
        }
    }
    publishWeb3RequestCanceledEvent(e) {
        const t = {
            type: "WEB3_REQUEST_CANCELED",
            id: e
        };
        this.publishEvent("Web3RequestCanceled", t, !1).then()
    }
    publishEvent(e, t, r) {
        return this.connection.publishEvent(e, t, r)
    }
    handleWeb3ResponseMessage(e) {
        const {
            response: t
        } = e;
        if (t.method === "requestEthereumAccounts") {
            W.accountRequestCallbackIds.forEach(r => this.invokeCallback(Object.assign(Object.assign({}, e), {
                id: r
            }))), W.accountRequestCallbackIds.clear();
            return
        }
        this.invokeCallback(e)
    }
    handleErrorResponse(e, t, r) {
        var s;
        const a = (s = r == null ? void 0 : r.message) !== null && s !== void 0 ? s : "Unspecified error message.";
        this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: e,
            response: {
                method: t,
                errorMessage: a
            }
        })
    }
    invokeCallback(e) {
        const t = this.relayEventManager.callbacks.get(e.id);
        t && (t(e.response), this.relayEventManager.callbacks.delete(e.id))
    }
    requestEthereumAccounts() {
        const e = {
                method: "requestEthereumAccounts",
                params: {
                    appName: this.appName,
                    appLogoUrl: this.appLogoUrl || null
                }
            },
            t = (0, b.randomBytesHex)(8);
        return new Promise((r, s) => {
            this.relayEventManager.callbacks.set(t, a => {
                if ((0, V.isErrorResponse)(a)) return s(new Error(a.errorMessage));
                r(a)
            }), W.accountRequestCallbackIds.add(t), this.publishWeb3RequestEvent(t, e)
        })
    }
    watchAsset(e, t, r, s, a, i) {
        const o = {
            method: "watchAsset",
            params: {
                type: e,
                options: {
                    address: t,
                    symbol: r,
                    decimals: s,
                    image: a
                },
                chainId: i
            }
        };
        let c = null;
        const l = (0, b.randomBytesHex)(8),
            h = f => {
                this.publishWeb3RequestCanceledEvent(l), this.handleErrorResponse(l, o.method, f), c == null || c()
            };
        return c = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: h,
            onResetConnection: this.resetAndReload
        }), new Promise((f, d) => {
            this.relayEventManager.callbacks.set(l, p => {
                if (c == null || c(), (0, V.isErrorResponse)(p)) return d(new Error(p.errorMessage));
                f(p)
            }), this.publishWeb3RequestEvent(l, o)
        })
    }
    addEthereumChain(e, t, r, s, a, i) {
        const o = {
            method: "addEthereumChain",
            params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: s,
                chainName: a,
                iconUrls: r,
                nativeCurrency: i
            }
        };
        let c = null;
        const l = (0, b.randomBytesHex)(8),
            h = f => {
                this.publishWeb3RequestCanceledEvent(l), this.handleErrorResponse(l, o.method, f), c == null || c()
            };
        return c = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: h,
            onResetConnection: this.resetAndReload
        }), new Promise((f, d) => {
            this.relayEventManager.callbacks.set(l, p => {
                if (c == null || c(), (0, V.isErrorResponse)(p)) return d(new Error(p.errorMessage));
                f(p)
            }), this.publishWeb3RequestEvent(l, o)
        })
    }
    switchEthereumChain(e, t) {
        const r = {
                method: "switchEthereumChain",
                params: Object.assign({
                    chainId: e
                }, {
                    address: t
                })
            },
            s = (0, b.randomBytesHex)(8);
        return new Promise((a, i) => {
            this.relayEventManager.callbacks.set(s, o => {
                if ((0, V.isErrorResponse)(o) && o.errorCode) return i(qr.standardErrors.provider.custom({
                    code: o.errorCode,
                    message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
                }));
                if ((0, V.isErrorResponse)(o)) return i(new Error(o.errorMessage));
                a(o)
            }), this.publishWeb3RequestEvent(s, r)
        })
    }
}
Ie.WalletLinkRelay = W;
W.accountRequestCallbackIds = new Set;
var Fr = M && M.__importDefault || function(n) {
    return n && n.__esModule ? n : {
        default: n
    }
};
Object.defineProperty(Ce, "__esModule", {
    value: !0
});
Ce.WalletLinkSigner = void 0;
const Ke = Fr(sr),
    ut = N,
    Vr = ie,
    D = Q,
    zr = Ie,
    ht = T,
    w = j,
    g = u,
    Zr = O,
    qe = "DefaultChainId",
    gt = "DefaultJsonRpcUrl";
class Gr {
    constructor(e) {
        var t, r;
        this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1;
        const {
            appName: s,
            appLogoUrl: a
        } = e.metadata;
        this._appName = s, this._appLogoUrl = a, this._storage = new Zr.ScopedLocalStorage("walletlink", ht.WALLETLINK_URL), this.updateListener = e.updateListener, this._relayEventManager = new Vr.RelayEventManager, this._jsonRpcUrlFromOpts = "";
        const i = this._storage.getItem(ut.LOCAL_STORAGE_ADDRESSES_KEY);
        if (i) {
            const c = i.split(" ");
            c[0] !== "" && (this._addresses = c.map(l => (0, g.ensureAddressString)(l)), (t = this.updateListener) === null || t === void 0 || t.onAccountsUpdate({
                accounts: this._addresses,
                source: "storage"
            }))
        }
        this._storage.getItem(qe) && ((r = this.updateListener) === null || r === void 0 || r.onChainUpdate({
            chain: {
                id: this.getChainId(),
                rpcUrl: this.jsonRpcUrl
            },
            source: "storage"
        }), this.hasMadeFirstChainChangedEmission = !0), this.initializeRelay()
    }
    getSession() {
        const e = this.initializeRelay(),
            {
                id: t,
                secret: r
            } = e.getWalletLinkSession();
        return {
            id: t,
            secret: r
        }
    }
    async handshake() {
        return await this.request({
            method: "eth_requestAccounts"
        })
    }
    get selectedAddress() {
        return this._addresses[0] || void 0
    }
    get jsonRpcUrl() {
        var e;
        return (e = this._storage.getItem(gt)) !== null && e !== void 0 ? e : this._jsonRpcUrlFromOpts
    }
    set jsonRpcUrl(e) {
        this._storage.setItem(gt, e)
    }
    updateProviderInfo(e, t) {
        var r;
        this.jsonRpcUrl = e;
        const s = this.getChainId();
        this._storage.setItem(qe, t.toString(10)), ((0, g.ensureIntNumber)(t) !== s || !this.hasMadeFirstChainChangedEmission) && ((r = this.updateListener) === null || r === void 0 || r.onChainUpdate({
            chain: {
                id: t,
                rpcUrl: e
            },
            source: "wallet"
        }), this.hasMadeFirstChainChangedEmission = !0)
    }
    async watchAsset(e, t, r, s, a, i) {
        const c = await this.initializeRelay().watchAsset(e, t, r, s, a, i == null ? void 0 : i.toString());
        return (0, D.isErrorResponse)(c) ? !1 : !!c.result
    }
    async addEthereumChain(e, t, r, s, a, i) {
        var o, c;
        if ((0, g.ensureIntNumber)(e) === this.getChainId()) return !1;
        const l = this.initializeRelay();
        this._isAuthorized() || await l.requestEthereumAccounts();
        const h = await l.addEthereumChain(e.toString(), t, a, r, s, i);
        return (0, D.isErrorResponse)(h) ? !1 : (((o = h.result) === null || o === void 0 ? void 0 : o.isApproved) === !0 && this.updateProviderInfo(t[0], e), ((c = h.result) === null || c === void 0 ? void 0 : c.isApproved) === !0)
    }
    async switchEthereumChain(e) {
        const r = await this.initializeRelay().switchEthereumChain(e.toString(10), this.selectedAddress || void 0);
        if ((0, D.isErrorResponse)(r)) {
            if (!r.errorCode) return;
            throw r.errorCode === w.standardErrorCodes.provider.unsupportedChain ? w.standardErrors.provider.unsupportedChain() : w.standardErrors.provider.custom({
                message: r.errorMessage,
                code: r.errorCode
            })
        }
        const s = r.result;
        s.isApproved && s.rpcUrl.length > 0 && this.updateProviderInfo(s.rpcUrl, e)
    }
    async disconnect() {
        this._relay && this._relay.resetAndReload(), this._storage.clear()
    }
    async request(e) {
        try {
            return this._request(e).catch(t => {
                throw t
            })
        } catch (t) {
            return Promise.reject(t)
        }
    }
    async _request(e) {
        if (!e || typeof e != "object" || Array.isArray(e)) throw w.standardErrors.rpc.invalidRequest({
            message: "Expected a single, non-array, object argument.",
            data: e
        });
        const {
            method: t,
            params: r
        } = e;
        if (typeof t != "string" || t.length === 0) throw w.standardErrors.rpc.invalidRequest({
            message: "'args.method' must be a non-empty string.",
            data: e
        });
        if (r !== void 0 && !Array.isArray(r) && (typeof r != "object" || r === null)) throw w.standardErrors.rpc.invalidRequest({
            message: "'args.params' must be an object or array if provided.",
            data: e
        });
        const s = r === void 0 ? [] : r,
            a = this._relayEventManager.makeRequestId();
        return (await this._sendRequestAsync({
            method: t,
            params: s,
            jsonrpc: "2.0",
            id: a
        })).result
    }
    _setAddresses(e, t) {
        var r;
        if (!Array.isArray(e)) throw new Error("addresses is not an array");
        const s = e.map(a => (0, g.ensureAddressString)(a));
        JSON.stringify(s) !== JSON.stringify(this._addresses) && (this._addresses = s, (r = this.updateListener) === null || r === void 0 || r.onAccountsUpdate({
            accounts: s,
            source: "wallet"
        }), this._storage.setItem(ut.LOCAL_STORAGE_ADDRESSES_KEY, s.join(" ")))
    }
    _sendRequestAsync(e) {
        return new Promise((t, r) => {
            try {
                const s = this._handleSynchronousMethods(e);
                if (s !== void 0) return t({
                    jsonrpc: "2.0",
                    id: e.id,
                    result: s
                })
            } catch (s) {
                return r(s)
            }
            this._handleAsynchronousMethods(e).then(s => s && t(Object.assign(Object.assign({}, s), {
                id: e.id
            }))).catch(s => r(s))
        })
    }
    _handleSynchronousMethods(e) {
        const {
            method: t
        } = e;
        switch (t) {
            case "eth_accounts":
                return this._eth_accounts();
            case "eth_coinbase":
                return this._eth_coinbase();
            case "net_version":
                return this._net_version();
            case "eth_chainId":
                return this._eth_chainId();
            default:
                return
        }
    }
    async _handleAsynchronousMethods(e) {
        const {
            method: t
        } = e, r = e.params || [];
        switch (t) {
            case "eth_requestAccounts":
                return this._eth_requestAccounts();
            case "eth_sign":
                return this._eth_sign(r);
            case "eth_ecRecover":
                return this._eth_ecRecover(r);
            case "personal_sign":
                return this._personal_sign(r);
            case "personal_ecRecover":
                return this._personal_ecRecover(r);
            case "eth_signTransaction":
                return this._eth_signTransaction(r);
            case "eth_sendRawTransaction":
                return this._eth_sendRawTransaction(r);
            case "eth_sendTransaction":
                return this._eth_sendTransaction(r);
            case "eth_signTypedData_v1":
                return this._eth_signTypedData_v1(r);
            case "eth_signTypedData_v2":
                return this._throwUnsupportedMethodError();
            case "eth_signTypedData_v3":
                return this._eth_signTypedData_v3(r);
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
                return this._eth_signTypedData_v4(r);
            case "wallet_addEthereumChain":
                return this._wallet_addEthereumChain(r);
            case "wallet_switchEthereumChain":
                return this._wallet_switchEthereumChain(r);
            case "wallet_watchAsset":
                return this._wallet_watchAsset(r);
            default:
                return this._throwUnsupportedMethodError()
        }
    }
    _isKnownAddress(e) {
        try {
            const t = (0, g.ensureAddressString)(e);
            return this._addresses.map(s => (0, g.ensureAddressString)(s)).includes(t)
        } catch {}
        return !1
    }
    _ensureKnownAddress(e) {
        if (!this._isKnownAddress(e)) throw new Error("Unknown Ethereum address")
    }
    _prepareTransactionParams(e) {
        const t = e.from ? (0, g.ensureAddressString)(e.from) : this.selectedAddress;
        if (!t) throw new Error("Ethereum address is unavailable");
        this._ensureKnownAddress(t);
        const r = e.to ? (0, g.ensureAddressString)(e.to) : null,
            s = e.value != null ? (0, g.ensureBigInt)(e.value) : BigInt(0),
            a = e.data ? (0, g.ensureBuffer)(e.data) : Buffer.alloc(0),
            i = e.nonce != null ? (0, g.ensureIntNumber)(e.nonce) : null,
            o = e.gasPrice != null ? (0, g.ensureBigInt)(e.gasPrice) : null,
            c = e.maxFeePerGas != null ? (0, g.ensureBigInt)(e.maxFeePerGas) : null,
            l = e.maxPriorityFeePerGas != null ? (0, g.ensureBigInt)(e.maxPriorityFeePerGas) : null,
            h = e.gas != null ? (0, g.ensureBigInt)(e.gas) : null,
            f = e.chainId ? (0, g.ensureIntNumber)(e.chainId) : this.getChainId();
        return {
            fromAddress: t,
            toAddress: r,
            weiValue: s,
            data: a,
            nonce: i,
            gasPriceInWei: o,
            maxFeePerGas: c,
            maxPriorityFeePerGas: l,
            gasLimit: h,
            chainId: f
        }
    }
    _isAuthorized() {
        return this._addresses.length > 0
    }
    _requireAuthorization() {
        if (!this._isAuthorized()) throw w.standardErrors.provider.unauthorized({})
    }
    _throwUnsupportedMethodError() {
        throw w.standardErrors.provider.unsupportedMethod({})
    }
    async _signEthereumMessage(e, t, r, s) {
        this._ensureKnownAddress(t);
        try {
            const i = await this.initializeRelay().signEthereumMessage(e, t, r, s);
            if ((0, D.isErrorResponse)(i)) throw new Error(i.errorMessage);
            return {
                jsonrpc: "2.0",
                id: 0,
                result: i.result
            }
        } catch (a) {
            throw typeof a.message == "string" && a.message.match(/(denied|rejected)/i) ? w.standardErrors.provider.userRejectedRequest("User denied message signature") : a
        }
    }
    async _ethereumAddressFromSignedMessage(e, t, r) {
        const a = await this.initializeRelay().ethereumAddressFromSignedMessage(e, t, r);
        if ((0, D.isErrorResponse)(a)) throw new Error(a.errorMessage);
        return {
            jsonrpc: "2.0",
            id: 0,
            result: a.result
        }
    }
    _eth_accounts() {
        return [...this._addresses]
    }
    _eth_coinbase() {
        return this.selectedAddress || null
    }
    _net_version() {
        return this.getChainId().toString(10)
    }
    _eth_chainId() {
        return (0, g.hexStringFromIntNumber)(this.getChainId())
    }
    getChainId() {
        const e = this._storage.getItem(qe);
        if (!e) return (0, g.ensureIntNumber)(1);
        const t = parseInt(e, 10);
        return (0, g.ensureIntNumber)(t)
    }
    async _eth_requestAccounts() {
        if (this._isAuthorized()) return Promise.resolve({
            jsonrpc: "2.0",
            id: 0,
            result: this._addresses
        });
        let e;
        try {
            if (e = await this.initializeRelay().requestEthereumAccounts(), (0, D.isErrorResponse)(e)) throw new Error(e.errorMessage)
        } catch (t) {
            throw typeof t.message == "string" && t.message.match(/(denied|rejected)/i) ? w.standardErrors.provider.userRejectedRequest("User denied account authorization") : t
        }
        if (!e.result) throw new Error("accounts received is empty");
        return this._setAddresses(e.result), {
            jsonrpc: "2.0",
            id: 0,
            result: this._addresses
        }
    }
    _eth_sign(e) {
        this._requireAuthorization();
        const t = (0, g.ensureAddressString)(e[0]),
            r = (0, g.ensureBuffer)(e[1]);
        return this._signEthereumMessage(r, t, !1)
    }
    _eth_ecRecover(e) {
        const t = (0, g.ensureBuffer)(e[0]),
            r = (0, g.ensureBuffer)(e[1]);
        return this._ethereumAddressFromSignedMessage(t, r, !1)
    }
    _personal_sign(e) {
        this._requireAuthorization();
        const t = (0, g.ensureBuffer)(e[0]),
            r = (0, g.ensureAddressString)(e[1]);
        return this._signEthereumMessage(t, r, !0)
    }
    _personal_ecRecover(e) {
        const t = (0, g.ensureBuffer)(e[0]),
            r = (0, g.ensureBuffer)(e[1]);
        return this._ethereumAddressFromSignedMessage(t, r, !0)
    }
    async _eth_signTransaction(e) {
        this._requireAuthorization();
        const t = this._prepareTransactionParams(e[0] || {});
        try {
            const s = await this.initializeRelay().signEthereumTransaction(t);
            if ((0, D.isErrorResponse)(s)) throw new Error(s.errorMessage);
            return {
                jsonrpc: "2.0",
                id: 0,
                result: s.result
            }
        } catch (r) {
            throw typeof r.message == "string" && r.message.match(/(denied|rejected)/i) ? w.standardErrors.provider.userRejectedRequest("User denied transaction signature") : r
        }
    }
    async _eth_sendRawTransaction(e) {
        const t = (0, g.ensureBuffer)(e[0]),
            s = await this.initializeRelay().submitEthereumTransaction(t, this.getChainId());
        if ((0, D.isErrorResponse)(s)) throw new Error(s.errorMessage);
        return {
            jsonrpc: "2.0",
            id: 0,
            result: s.result
        }
    }
    async _eth_sendTransaction(e) {
        this._requireAuthorization();
        const t = this._prepareTransactionParams(e[0] || {});
        try {
            const s = await this.initializeRelay().signAndSubmitEthereumTransaction(t);
            if ((0, D.isErrorResponse)(s)) throw new Error(s.errorMessage);
            return {
                jsonrpc: "2.0",
                id: 0,
                result: s.result
            }
        } catch (r) {
            throw typeof r.message == "string" && r.message.match(/(denied|rejected)/i) ? w.standardErrors.provider.userRejectedRequest("User denied transaction signature") : r
        }
    }
    async _eth_signTypedData_v1(e) {
        this._requireAuthorization();
        const t = (0, g.ensureParsedJSONObject)(e[0]),
            r = (0, g.ensureAddressString)(e[1]);
        this._ensureKnownAddress(r);
        const s = Ke.default.hashForSignTypedDataLegacy({
                data: t
            }),
            a = JSON.stringify(t, null, 2);
        return this._signEthereumMessage(s, r, !1, a)
    }
    async _eth_signTypedData_v3(e) {
        this._requireAuthorization();
        const t = (0, g.ensureAddressString)(e[0]),
            r = (0, g.ensureParsedJSONObject)(e[1]);
        this._ensureKnownAddress(t);
        const s = Ke.default.hashForSignTypedData_v3({
                data: r
            }),
            a = JSON.stringify(r, null, 2);
        return this._signEthereumMessage(s, t, !1, a)
    }
    async _eth_signTypedData_v4(e) {
        this._requireAuthorization();
        const t = (0, g.ensureAddressString)(e[0]),
            r = (0, g.ensureParsedJSONObject)(e[1]);
        this._ensureKnownAddress(t);
        const s = Ke.default.hashForSignTypedData_v4({
                data: r
            }),
            a = JSON.stringify(r, null, 2);
        return this._signEthereumMessage(s, t, !1, a)
    }
    async _wallet_addEthereumChain(e) {
        var t, r, s, a;
        const i = e[0];
        if (((t = i.rpcUrls) === null || t === void 0 ? void 0 : t.length) === 0) return {
            jsonrpc: "2.0",
            id: 0,
            error: {
                code: 2,
                message: "please pass in at least 1 rpcUrl"
            }
        };
        if (!i.chainName || i.chainName.trim() === "") throw w.standardErrors.rpc.invalidParams("chainName is a required field");
        if (!i.nativeCurrency) throw w.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
        const o = parseInt(i.chainId, 16);
        return await this.addEthereumChain(o, (r = i.rpcUrls) !== null && r !== void 0 ? r : [], (s = i.blockExplorerUrls) !== null && s !== void 0 ? s : [], i.chainName, (a = i.iconUrls) !== null && a !== void 0 ? a : [], i.nativeCurrency) ? {
            jsonrpc: "2.0",
            id: 0,
            result: null
        } : {
            jsonrpc: "2.0",
            id: 0,
            error: {
                code: 2,
                message: "unable to add ethereum chain"
            }
        }
    }
    async _wallet_switchEthereumChain(e) {
        const t = e[0];
        return await this.switchEthereumChain(parseInt(t.chainId, 16)), {
            jsonrpc: "2.0",
            id: 0,
            result: null
        }
    }
    async _wallet_watchAsset(e) {
        const t = Array.isArray(e) ? e[0] : e;
        if (!t.type) throw w.standardErrors.rpc.invalidParams("Type is required");
        if ((t == null ? void 0 : t.type) !== "ERC20") throw w.standardErrors.rpc.invalidParams(`Asset of type '${t.type}' is not supported`);
        if (!(t != null && t.options)) throw w.standardErrors.rpc.invalidParams("Options are required");
        if (!(t != null && t.options.address)) throw w.standardErrors.rpc.invalidParams("Address is required");
        const r = this.getChainId(),
            {
                address: s,
                symbol: a,
                image: i,
                decimals: o
            } = t.options;
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this.watchAsset(t.type, s, a, o, i, r)
        }
    }
    initializeRelay() {
        if (!this._relay) {
            const e = new zr.WalletLinkRelay({
                linkAPIUrl: ht.WALLETLINK_URL,
                storage: this._storage
            });
            e.setAppInfo(this._appName, this._appLogoUrl), e.attachUI(), e.setAccountsCallback((t, r) => this._setAddresses(t, r)), e.setChainCallback((t, r) => {
                this.updateProviderInfo(r, parseInt(t, 10))
            }), this._relay = e
        }
        return this._relay
    }
}
Ce.WalletLinkSigner = Gr;
var k = {};
Object.defineProperty(k, "__esModule", {
    value: !0
});
k.checkErrorForInvalidRequestArgs = k.getCoinbaseInjectedProvider = k.getCoinbaseInjectedSigner = k.fetchRPCRequest = void 0;
const Yr = K,
    pe = j;
async function Jr(n, e) {
    if (!e.rpcUrl) throw pe.standardErrors.rpc.internal("No RPC URL set for chain");
    const t = Object.assign(Object.assign({}, n), {
        jsonrpc: "2.0",
        id: crypto.randomUUID()
    });
    return (await (await window.fetch(e.rpcUrl, {
        method: "POST",
        body: JSON.stringify(t),
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "X-Cbw-Sdk-Version": Yr.LIB_VERSION
        }
    })).json()).result
}
k.fetchRPCRequest = Jr;

function Gt() {
    return globalThis.coinbaseWalletSigner
}
k.getCoinbaseInjectedSigner = Gt;

function Qr({
    metadata: n,
    preference: e
}) {
    var t, r, s;
    const a = globalThis;
    if (e.options !== "smartWalletOnly") {
        if (Gt()) return;
        const c = a.coinbaseWalletExtension;
        if (c) {
            const {
                appName: l,
                appLogoUrl: h,
                appChainIds: f
            } = n;
            return (t = c.setAppInfo) === null || t === void 0 || t.call(c, l, h, f), c
        }
    }
    const i = (r = a.ethereum) !== null && r !== void 0 ? r : (s = a.top) === null || s === void 0 ? void 0 : s.ethereum;
    if (i != null && i.isCoinbaseBrowser) return i
}
k.getCoinbaseInjectedProvider = Qr;

function Xr(n) {
    if (!n || typeof n != "object" || Array.isArray(n)) return pe.standardErrors.rpc.invalidParams({
        message: "Expected a single, non-array, object argument.",
        data: n
    });
    const {
        method: e,
        params: t
    } = n;
    if (typeof e != "string" || e.length === 0) return pe.standardErrors.rpc.invalidParams({
        message: "'args.method' must be a non-empty string.",
        data: n
    });
    if (t !== void 0 && !Array.isArray(t) && (typeof t != "object" || t === null)) return pe.standardErrors.rpc.invalidParams({
        message: "'args.params' must be an object or array if provided.",
        data: n
    })
}
k.checkErrorForInvalidRequestArgs = Xr;
Object.defineProperty(P, "__esModule", {
    value: !0
});
P.createSigner = P.fetchSignerType = P.storeSignerType = P.loadSignerType = void 0;
const es = _e,
    Yt = Ce,
    ts = j,
    ns = k,
    rs = O,
    Jt = "SignerType",
    Qt = new rs.ScopedLocalStorage("CBWSDK", "SignerConfigurator");

function ss() {
    return Qt.getItem(Jt)
}
P.loadSignerType = ss;

function is(n) {
    Qt.setItem(Jt, n)
}
P.storeSignerType = is;
async function as(n) {
    const {
        communicator: e,
        metadata: t
    } = n;
    cs(e, t).catch(() => {});
    const r = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: n.preference
        },
        {
            data: s
        } = await e.postRequestAndWaitForResponse(r);
    return s
}
P.fetchSignerType = as;

function os(n) {
    const {
        signerType: e,
        metadata: t,
        communicator: r,
        updateListener: s
    } = n;
    switch (e) {
        case "scw":
            return new es.SCWSigner({
                metadata: t,
                updateListener: s,
                communicator: r
            });
        case "walletlink":
            return new Yt.WalletLinkSigner({
                metadata: t,
                updateListener: s
            });
        case "extension":
            {
                const a = (0, ns.getCoinbaseInjectedSigner)();
                if (!a) throw ts.standardErrors.rpc.internal("injected signer not found");
                return a
            }
    }
}
P.createSigner = os;
async function cs(n, e) {
    await n.onMessage(({
        event: r
    }) => r === "WalletLinkSessionRequest");
    const t = new Yt.WalletLinkSigner({
        metadata: e
    });
    n.postMessage({
        event: "WalletLinkUpdate",
        data: {
            session: t.getSession()
        }
    }), await t.handshake(), n.postMessage({
        event: "WalletLinkUpdate",
        data: {
            connected: !0
        }
    })
}
var Te = {},
    J = {};
Object.defineProperty(J, "__esModule", {
    value: !0
});
J.closePopup = J.openPopup = void 0;
const ds = j,
    pt = 420,
    ft = 540;

function ls(n) {
    const e = (window.innerWidth - pt) / 2 + window.screenX,
        t = (window.innerHeight - ft) / 2 + window.screenY,
        r = window.open(n, "Smart Wallet", `width=${pt}, height=${ft}, left=${e}, top=${t}`);
    if (r == null || r.focus(), !r) throw ds.standardErrors.rpc.internal("Pop up window failed to open");
    return r
}
J.openPopup = ls;

function us(n) {
    n && !n.closed && n.close()
}
J.closePopup = us;
Object.defineProperty(Te, "__esModule", {
    value: !0
});
Te.Communicator = void 0;
const hs = K,
    mt = J,
    gs = T,
    bt = j;
class ps {
    constructor(e = gs.CB_KEYS_URL) {
        this.popup = null, this.listeners = new Map, this.postMessage = async t => {
            (await this.waitForPopupLoaded()).postMessage(t, this.url.origin)
        }, this.postRequestAndWaitForResponse = async t => {
            const r = this.onMessage(({
                requestId: s
            }) => s === t.id);
            return this.postMessage(t), await r
        }, this.onMessage = async t => new Promise((r, s) => {
            const a = i => {
                if (i.origin !== this.url.origin) return;
                const o = i.data;
                t(o) && (r(o), window.removeEventListener("message", a), this.listeners.delete(a))
            };
            window.addEventListener("message", a), this.listeners.set(a, {
                reject: s
            })
        }), this.disconnect = () => {
            (0, mt.closePopup)(this.popup), this.popup = null, this.listeners.forEach(({
                reject: t
            }, r) => {
                t(bt.standardErrors.provider.userRejectedRequest("Request rejected")), window.removeEventListener("message", r)
            }), this.listeners.clear()
        }, this.waitForPopupLoaded = async () => this.popup && !this.popup.closed ? this.popup : (this.popup = (0, mt.openPopup)(this.url), this.onMessage(({
            event: t
        }) => t === "PopupUnload").then(this.disconnect).catch(() => {}), this.onMessage(({
            event: t
        }) => t === "PopupLoaded").then(t => {
            this.postMessage({
                requestId: t.id,
                data: {
                    version: hs.LIB_VERSION
                }
            })
        }).then(() => {
            if (!this.popup) throw bt.standardErrors.rpc.internal();
            return this.popup
        })), this.url = new URL(e)
    }
}
Te.Communicator = ps;
var je = {};
Object.defineProperty(je, "__esModule", {
    value: !0
});
je.determineMethodCategory = void 0;
const yt = {
    handshake: ["eth_requestAccounts"],
    sign: ["eth_ecRecover", "personal_sign", "personal_ecRecover", "eth_signTransaction", "eth_sendTransaction", "eth_signTypedData_v1", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_signTypedData", "wallet_addEthereumChain", "wallet_switchEthereumChain", "wallet_watchAsset", "wallet_getCapabilities", "wallet_sendCalls", "wallet_showCallsStatus"],
    state: ["eth_chainId", "eth_accounts", "eth_coinbase", "net_version"],
    deprecated: ["eth_sign", "eth_signTypedData_v2"],
    unsupported: ["eth_subscribe", "eth_unsubscribe"],
    fetch: []
};

function fs(n) {
    for (const e in yt) {
        const t = e;
        if (yt[t].includes(n)) return t
    }
}
je.determineMethodCategory = fs;
var ms = M && M.__rest || function(n, e) {
        var t = {};
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
        if (n != null && typeof Object.getOwnPropertySymbols == "function")
            for (var s = 0, r = Object.getOwnPropertySymbols(n); s < r.length; s++) e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[s]) && (t[r[s]] = n[r[s]]);
        return t
    },
    bs = M && M.__importDefault || function(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    };
Object.defineProperty(be, "__esModule", {
    value: !0
});
be.CoinbaseWalletProvider = void 0;
const ys = bs(on),
    z = j,
    ws = we,
    he = _,
    X = u,
    ge = P,
    wt = k,
    vs = Te,
    _s = je,
    Es = O;
class Ss extends ys.default {
    constructor(e) {
        var t, r, {
                metadata: s
            } = e,
            a = e.preference,
            {
                keysUrl: i
            } = a,
            o = ms(a, ["keysUrl"]);
        super(), this.accounts = [], this.handlers = {
            handshake: async l => {
                try {
                    if (this.connected) return this.emit("connect", {
                        chainId: (0, X.hexStringFromIntNumber)((0, he.IntNumber)(this.chain.id))
                    }), this.accounts;
                    const h = await this.requestSignerSelection(),
                        f = this.initSigner(h),
                        d = await f.handshake();
                    return this.signer = f, (0, ge.storeSignerType)(h), this.emit("connect", {
                        chainId: (0, X.hexStringFromIntNumber)((0, he.IntNumber)(this.chain.id))
                    }), d
                } catch (h) {
                    throw this.handleUnauthorizedError(h), h
                }
            },
            sign: async l => {
                if (!this.connected || !this.signer) throw z.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
                try {
                    return await this.signer.request(l)
                } catch (h) {
                    throw this.handleUnauthorizedError(h), h
                }
            },
            fetch: l => (0, wt.fetchRPCRequest)(l, this.chain),
            state: l => {
                const h = () => {
                    if (this.connected) return this.accounts;
                    throw z.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods")
                };
                switch (l.method) {
                    case "eth_chainId":
                        return (0, X.hexStringFromIntNumber)((0, he.IntNumber)(this.chain.id));
                    case "net_version":
                        return this.chain.id;
                    case "eth_accounts":
                        return h();
                    case "eth_coinbase":
                        return h()[0];
                    default:
                        return this.handlers.unsupported(l)
                }
            },
            deprecated: ({
                method: l
            }) => {
                throw z.standardErrors.rpc.methodNotSupported(`Method ${l} is deprecated.`)
            },
            unsupported: ({
                method: l
            }) => {
                throw z.standardErrors.rpc.methodNotSupported(`Method ${l} is not supported.`)
            }
        }, this.isCoinbaseWallet = !0, this.updateListener = {
            onAccountsUpdate: ({
                accounts: l,
                source: h
            }) => {
                (0, X.areAddressArraysEqual)(this.accounts, l) || (this.accounts = l, h !== "storage" && this.emit("accountsChanged", this.accounts))
            },
            onChainUpdate: ({
                chain: l,
                source: h
            }) => {
                l.id === this.chain.id && l.rpcUrl === this.chain.rpcUrl || (this.chain = l, h !== "storage" && this.emit("chainChanged", (0, X.hexStringFromIntNumber)((0, he.IntNumber)(l.id))))
            }
        }, this.metadata = s, this.preference = o, this.communicator = new vs.Communicator(i), this.chain = {
            id: (r = (t = s.appChainIds) === null || t === void 0 ? void 0 : t[0]) !== null && r !== void 0 ? r : 1
        };
        const c = (0, ge.loadSignerType)();
        this.signer = c ? this.initSigner(c) : null
    }
    get connected() {
        return this.accounts.length > 0
    }
    async request(e) {
        var t;
        try {
            const r = (0, wt.checkErrorForInvalidRequestArgs)(e);
            if (r) throw r;
            const s = (t = (0, _s.determineMethodCategory)(e.method)) !== null && t !== void 0 ? t : "fetch";
            return this.handlers[s](e)
        } catch (r) {
            return Promise.reject((0, ws.serializeError)(r, e.method))
        }
    }
    handleUnauthorizedError(e) {
        e.code === z.standardErrorCodes.provider.unauthorized && this.disconnect()
    }
    async enable() {
        return console.warn('.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'), await this.request({
            method: "eth_requestAccounts"
        })
    }
    async disconnect() {
        this.accounts = [], this.chain = {
            id: 1
        }, Es.ScopedLocalStorage.clearAll(), this.emit("disconnect", z.standardErrors.provider.disconnected("User initiated disconnection"))
    }
    requestSignerSelection() {
        return (0, ge.fetchSignerType)({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata
        })
    }
    initSigner(e) {
        return (0, ge.createSigner)({
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            updateListener: this.updateListener
        })
    }
}
be.CoinbaseWalletProvider = Ss;
Object.defineProperty(te, "__esModule", {
    value: !0
});
te.CoinbaseWalletSDK = void 0;
const Cs = me,
    ks = be,
    Is = O,
    Ms = K,
    Ls = u,
    As = k;
class Rs {
    constructor(e) {
        this.metadata = {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || (0, Ls.getFavicon)(),
            appChainIds: e.appChainIds || []
        }, this.storeLatestVersion()
    }
    makeWeb3Provider(e = {
        options: "all"
    }) {
        var t;
        const r = {
            metadata: this.metadata,
            preference: e
        };
        return (t = (0, As.getCoinbaseInjectedProvider)(r)) !== null && t !== void 0 ? t : new ks.CoinbaseWalletProvider(r)
    }
    getCoinbaseWalletLogo(e, t = 240) {
        return (0, Cs.walletLogo)(e, t)
    }
    storeLatestVersion() {
        new Is.ScopedLocalStorage("CBWSDK").setItem("VERSION", Ms.LIB_VERSION)
    }
}
te.CoinbaseWalletSDK = Rs;
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.CoinbaseWalletSDK = void 0;
    const e = te;
    n.default = e.CoinbaseWalletSDK;
    var t = te;
    Object.defineProperty(n, "CoinbaseWalletSDK", {
        enumerable: !0,
        get: function() {
            return t.CoinbaseWalletSDK
        }
    })
})(Et);
const xs = nn(Et),
    Ts = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: xs
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Ts as i
};
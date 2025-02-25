(this.webpackJsonpnew = this.webpackJsonpnew || []).push([
	[0], {
		127: function(e) {
			e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"manager_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"addCrystals","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collectMoney","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"denominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getChefs","outputs":[{"internalType":"uint8[5]","name":"","type":"uint8[5]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"init","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellTower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalChefs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTowers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"towers","outputs":[{"internalType":"uint256","name":"crystals","type":"uint256"},{"internalType":"uint256","name":"money","type":"uint256"},{"internalType":"uint256","name":"money2","type":"uint256"},{"internalType":"uint256","name":"yield","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"hrs","type":"uint256"},{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"refs","type":"uint256"},{"internalType":"uint256","name":"refDeps","type":"uint256"},{"internalType":"uint8","name":"treasury","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"towerId","type":"uint256"}],"name":"upgradeTower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"upgradeTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gold","type":"uint256"}],"name":"withdrawMoney","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
		},
		171: function(e) {
			e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
		},
		281: function(e) {
			e.exports = JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call[]","name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes[]","name":"returnData","type":"bytes[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"allowFailure","type":"bool"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call3[]","name":"calls","type":"tuple[]"}],"name":"aggregate3","outputs":[{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"allowFailure","type":"bool"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call3Value[]","name":"calls","type":"tuple[]"}],"name":"aggregate3Value","outputs":[{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call[]","name":"calls","type":"tuple[]"}],"name":"blockAndAggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBasefee","outputs":[{"internalType":"uint256","name":"basefee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlockNumber","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"chainid","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"internalType":"address","name":"coinbase","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"internalType":"uint256","name":"difficulty","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"internalType":"uint256","name":"gaslimit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"requireSuccess","type":"bool"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call[]","name":"calls","type":"tuple[]"}],"name":"tryAggregate","outputs":[{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"requireSuccess","type":"bool"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall3.Call[]","name":"calls","type":"tuple[]"}],"name":"tryBlockAndAggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall3.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"payable","type":"function"}]')
		},
		292: function(e, t) {},
		332: function(e, t) {},
		334: function(e, t) {},
		357: function(e, t) {},
		359: function(e, t) {},
		371: function(e, t) {},
		372: function(e, t) {},
		395: function(e, t) {},
		398: function(e, t) {},
		400: function(e, t) {},
		504: function(e, t) {},
		505: function(e, t) {},
		507: function(e, t, n) {},
		508: function(e, t, n) {
			"use strict";
			n.r(t);
			var a, r, s = n(2),
				c = n.n(s),
				i = n(266),
				o = n.n(i),
				u = n(11),
				l = c.a.createContext({
					showMessage: null,
					showLoading: null,
					hideLoading: null,
					showBuyCrystals: null,
					showSellCoins: null,
					showAlliances: null,
					showLanguage: null,
					showSellKingdom: null,
					showCastleUpgrade: null,
					showTowerUpgrade: null
				}),
				b = n(24),
				p = n(55),
				d = n(3),
				j = ["children", "enabled"],
				m = function(e) {
					var t = e.children,
						n = e.enabled,
						a = Object(p.a)(e, j);
					return Object(d.jsx)("div", Object(b.a)(Object(b.a)({}, a), {}, {
						className: "alert",
						style: {
							display: "".concat(n ? "block" : "none")
						},
						children: t
					}))
				},
				f = n(0),
				y = n(8),
				h = function(e) {
					var t = e.active,
						n = e.setActive,
						a = e.children,
						r = e.modalName;
					return Object(d.jsx)("div", {
						className: t ? "modal active" : "modal",
						onClick: function() {
							return n(!1)
						},
						children: Object(d.jsxs)("div", {
							className: "".concat(r, t ? " modal__content active" : " modal__content"),
							onClick: function(e) {
								return e.stopPropagation()
							},
							children: [Object(d.jsx)("div", {
								className: "modal__close",
								onClick: function() {
									return n(!1)
								}
							}), a]
						})
					})
				},
				O = ["text", "enable", "callback"],
				w = function(e) {
					var t = e.text,
						n = e.enable,
						a = e.callback,
						r = Object(p.a)(e, O);
					return Object(d.jsx)("button", Object(b.a)(Object(b.a)({}, r), {}, {
						className: "main-button",
						disabled: !n,
						onClick: a,
						children: t
					}))
				},
				v = n(20),
				x = 56,
				g = 97,
				A = (a = {}, Object(v.a)(a, x, {
					chainId: "0x38",
					chainName: "Smart Chain",
					rpcUrls: ["https://bsc-dataseed.binance.org/"],
					nativeCurrency: {
						name: "BINANCE COIN",
						symbol: "BNB",
						decimals: 18
					},
					blockExplorerUrls: ["https://bscscan.com/"]
				}), Object(v.a)(a, g, {
					chainId: "0x61",
					chainName: "BSC TESTNET",
					rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
					nativeCurrency: {
						name: "BINANCE COIN",
						symbol: "BNB",
						decimals: 18
					},
					blockExplorerUrls: ["https://testnet.bscscan.com/"]
				}), a),
				T = function() {
					var e = Object(y.a)(Object(f.a)().mark((function e(t, n) {
						var a, r;
						return Object(f.a)().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (!(a = window.ethereum) || !a.request) {
										e.next = 25;
										break
									}
									return r = A[t], e.prev = 3, e.next = 6, a.request({
										method: "wallet_switchEthereumChain",
										params: [{
											chainId: "0x".concat(Number.parseInt(t).toString(16))
										}]
									});
								case 6:
								case 15:
									return e.abrupt("return", !0);
								case 9:
									if (e.prev = 9, e.t0 = e.catch(3), 4902 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.code)) {
										e.next = 22;
										break
									}
									return e.prev = 12, e.next = 15, a.request({
										method: "wallet_addEthereumChain",
										params: [r]
									});
								case 18:
									return e.prev = 18, e.t1 = e.catch(12), console.error("Failed to setup the network in Metamask ", e.t1), e.abrupt("return", !1);
								case 22:
									return e.abrupt("return", !1);
								case 23:
									e.next = 26;
									break;
								case 25:
									throw "Network error: please change network";
								case 26:
								case "end":
									return e.stop()
							}
						}), e, null, [
							[3, 9],
							[12, 18]
						])
					})));
					return function(t, n) {
						return e.apply(this, arguments)
					}
				}(),
				C = "0x17891dB447A950464e412390c7ca81903Cd9e695",
				N = "0xA3Ef90EEc0fA5f958e86BFfc2202D4d60Fd6D364",
				M = x,
				k = A[M].rpcUrls[0],
				S = {
					0: {
						price: 0,
						time: 24
					},
					1: {
						price: 200,
						time: 30
					},
					2: {
						price: 250,
						time: 36
					},
					3: {
						price: 300,
						time: 42
					},
					4: {
						price: 400,
						time: 48
					}
				},
				Y = {
					0: {
						0: {
							price: 0,
							revenue: 0,
							warriors: 0
						},
						1: {
							price: 40,
							revenue: 5,
							warriors: 1
						},
						2: {
							price: 60,
							revenue: 8,
							warriors: 2
						},
						3: {
							price: 90,
							revenue: 12,
							warriors: 3
						},
						4: {
							price: 136,
							revenue: 18,
							warriors: 4
						},
						5: {
							price: 204,
							revenue: 28,
							warriors: 5
						},
						6: {
							price: 306,
							revenue: 42,
							warriors: 6
						}
					},
					1: {
						0: {
							price: 0,
							revenue: 0,
							warriors: 0
						},
						1: {
							price: 400,
							revenue: 56,
							warriors: 1
						},
						2: {
							price: 600,
							revenue: 85,
							warriors: 2
						},
						3: {
							price: 900,
							revenue: 128,
							warriors: 3
						},
						4: {
							price: 1350,
							revenue: 195,
							warriors: 4
						},
						5: {
							price: 2026,
							revenue: 297,
							warriors: 5
						},
						6: {
							price: 3040,
							revenue: 450,
							warriors: 6
						}
					},
					2: {
						0: {
							price: 0,
							revenue: 0,
							warriors: 0
						},
						1: {
							price: 1200,
							revenue: 179,
							warriors: 1
						},
						2: {
							price: 1800,
							revenue: 272,
							warriors: 2
						},
						3: {
							price: 2700,
							revenue: 413,
							warriors: 3
						},
						4: {
							price: 4050,
							revenue: 628,
							warriors: 4
						},
						5: {
							price: 6076,
							revenue: 954,
							warriors: 5
						},
						6: {
							price: 9114,
							revenue: 1439,
							warriors: 6
						}
					},
					3: {
						0: {
							price: 0,
							revenue: 0,
							warriors: 0
						},
						1: {
							price: 2400,
							revenue: 382,
							warriors: 1
						},
						2: {
							price: 3600,
							revenue: 581,
							warriors: 2
						},
						3: {
							price: 5400,
							revenue: 882,
							warriors: 3
						},
						4: {
							price: 8100,
							revenue: 1340,
							warriors: 4
						},
						5: {
							price: 12150,
							revenue: 2035,
							warriors: 5
						},
						6: {
							price: 18226,
							revenue: 3076,
							warriors: 6
						}
					},
					4: {
						0: {
							price: 0,
							revenue: 0,
							warriors: 0
						},
						1: {
							price: 4e3,
							revenue: 678,
							warriors: 1
						},
						2: {
							price: 6e3,
							revenue: 1030,
							warriors: 2
						},
						3: {
							price: 9e3,
							revenue: 1564,
							warriors: 3
						},
						4: {
							price: 13500,
							revenue: 2379,
							warriors: 4
						},
						5: {
							price: 20250,
							revenue: 3620,
							warriors: 5
						},
						6: {
							price: 30376,
							revenue: 5506,
							warriors: 6
						}
					}
				},
				D = c.a.createContext({
					web3Modal: null,
					web3Account: null,
					chainId: "",
					connected: !1,
					address: "",
					login: null,
					logout: null,
					totalInvested: 0,
					totalChefs: 0,
					totalTowers: 0,
					accountTower: {},
					balanceOf: 0,
					currentBlockTimeStamp: 0,
					init: !1
				}),
				U = n(6),
				B = n(7),
				V = n(127),
				I = function() {
					function e(t, n) {
						Object(U.a)(this, e), this.web3 = t, this.account = n, this.instanse = new t.eth.Contract(V, C)
					}
					return Object(B.a)(e, [{
						key: "addCrystals",
						value: function() {
							var e = Object(y.a)(Object(f.a)().mark((function e(t, n, a, r, s, c) {
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return 6e5, e.abrupt("return", this.instanse.methods.addCrystals(t, this.web3.utils.toWei("".concat(n), "ether")).send({
												from: this.account,
												value: this.web3.utils.toWei("0", "ether"),
												gasPrice: this.web3.utils.toWei("5", "gwei"),
												gas: 6e5
											}).on("transactionHash", (function() {
												r()
											})).on("error", (function(e) {
												a(e.message ? e.message : "Failure")
											})).on("receipt", (function(e) {
												e.status ? c() : s("Failure")
											})));
										case 2:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t, n, a, r, s, c) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "withdrawMoney",
						value: function() {
							var e = Object(y.a)(Object(f.a)().mark((function e(t, n, a, r, s) {
								var c, i;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.getPrice();
										case 2:
											return c = e.sent, e.next = 5, this.estimateWithdrawMoney(t);
										case 5:
											return i = e.sent, e.abrupt("return", this.instanse.methods.withdrawMoney(t).send({
												from: this.account,
												gasPrice: c,
												gas: i
											}).on("transactionHash", (function() {
												a()
											})).on("error", (function(e) {
												n(e.message ? e.message : "Failure")
											})).on("receipt", (function(e) {
												e.status ? s() : r("Failure")
											})));
										case 7:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t, n, a, r, s) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "upgradeTreasury",
						value: function() {
							var e = Object(y.a)(Object(f.a)().mark((function e(t, n, a, r) {
								var s, c;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.getPrice();
										case 2:
											return s = e.sent, e.next = 5, this.estimateUpgradeTreasury();
										case 5:
											return c = e.sent, e.abrupt("return", this.instanse.methods.upgradeTreasury().send({
												from: this.account,
												gasPrice: s,
												gas: c
											}).on("transactionHash", (function() {
												n()
											})).on("error", (function(e) {
												t(e.message ? e.message : "Failure")
											})).on("receipt", (function(e) {
												e.status ? r() : a("Failure")
											})));
										case 7:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t, n, a, r) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "upgradeTower",
						value: function() {
							var e = Object(y.a)(Object(f.a)().mark((function e(t, n, a, r, s) {
								var c, i;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.getPrice();
										case 2:
											return c = e.sent, e.next = 5, this.estimateUpgradeTower(t);
										case 5:
											return i = e.sent, e.abrupt("return", this.instanse.methods.upgradeTower(t).send({
												from: this.account,
												gasPrice: c,
												gas: i
											}).on("transactionHash", (function() {
												a()
											})).on("error", (function(e) {
												n(e.message ? e.message : "Failure")
											})).on("receipt", (function(e) {
												e.status ? s() : r("Failure")
											})));
										case 7:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t, n, a, r, s) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "sellTower",
						value: function() {
							var e = Object(y.a)(Object(f.a)().mark((function e(t, n, a, r) {
								var s, c;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.getPrice();
										case 2:
											return s = e.sent, e.next = 5, this.estimateSellTower();
										case 5:
											return c = e.sent, e.abrupt("return", this.instanse.methods.sellTower().send({
												from: this.account,
												gasPrice: s,
												gas: c
											}).on("transactionHash", (function() {
												n()
											})).on("error", (function(e) {
												t(e.message ? e.message : "Failure")
											})).on("receipt", (function(e) {
												e.status ? r() : a("Failure")
											})));
										case 7:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t, n, a, r) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "collectMoney",
						value: function() {
							var e = Object(y.a)(Object(f.a)().mark((function e(t, n, a, r) {
								var s, c;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.getPrice();
										case 2:
											return s = e.sent, e.next = 5, this.estimate\u0421ollectMoney();
										case 5:
											return c = e.sent, e.abrupt("return", this.instanse.methods.collectMoney().send({
												from: this.account,
												gasPrice: s,
												gas: c
											}).on("transactionHash", (function() {
												n()
											})).on("error", (function(e) {
												t(e.message ? e.message : "Failure")
											})).on("receipt", (function(e) {
												e.status ? r() : a("Failure")
											})));
										case 7:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t, n, a, r) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getPrice",
						value: function() {
							var e = Object(y.a)(Object(f.a)().mark((function e() {
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.web3.eth.getGasPrice();
										case 2:
											return e.abrupt("return", e.sent);
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "estimateWithdrawMoney",
						value: function() {
							var e = Object(y.a)(Object(f.a)().mark((function e(t) {
								var n;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.instanse.methods.withdrawMoney(t).estimateGas({
												from: this.account
											});
										case 2:
											return n = e.sent, e.abrupt("return", Math.round(1.2 * n));
										case 4:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "estimateUpgradeTreasury",
						value: function() {
							var e = Object(y.a)(Object(f.a)().mark((function e() {
								var t;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.instanse.methods.upgradeTreasury().estimateGas({
												from: this.account
											});
										case 2:
											return t = e.sent, e.abrupt("return", Math.round(1.2 * t));
										case 4:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "estimateUpgradeTower",
						value: function() {
							var e = Object(y.a)(Object(f.a)().mark((function e(t) {
								var n;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.instanse.methods.upgradeTower(t).estimateGas({
												from: this.account
											});
										case 2:
											return n = e.sent, e.abrupt("return", Math.round(1.2 * n));
										case 4:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "estimateSellTower",
						value: function() {
							var e = Object(y.a)(Object(f.a)().mark((function e() {
								var t;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.instanse.methods.sellTower().estimateGas({
												from: this.account
											});
										case 2:
											return t = e.sent, e.abrupt("return", Math.round(1.2 * t));
										case 4:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "estimate\u0421ollectMoney",
						value: function() {
							var e = Object(y.a)(Object(f.a)().mark((function e() {
								var t;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.instanse.methods.collectMoney().estimateGas({
												from: this.account
											});
										case 2:
											return t = e.sent, e.abrupt("return", Math.round(1.2 * t));
										case 4:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}]), e
				}(),
				R = 0,
				Q = 1,
				E = 2,
				F = 3,
				P = 4,
				J = 5,
				W = function(e, t, n) {
					var a = Object(s.useMemo)((function() {
							return n ? new I(e, t) : null
						}), [e, t, n]),
						r = Object(s.useCallback)(Object(y.a)(Object(f.a)().mark((function e() {
							return Object(f.a)().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, a.getPrice();
									case 2:
										return e.abrupt("return", e.sent);
									case 3:
									case "end":
										return e.stop()
								}
							}), e)
						}))), [e, t, n]),
						c = function() {
							var e = Object(y.a)(Object(f.a)().mark((function e(t, n, r, s, c, i) {
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											e.t0 = t, e.next = e.t0 === R ? 3 : e.t0 === Q ? 5 : e.t0 === E ? 7 : e.t0 === F ? 9 : e.t0 === P ? 11 : e.t0 === J ? 13 : 15;
											break;
										case 3:
											return a.addCrystals(n.ref, n.value, r, s, c, i), e.abrupt("return");
										case 5:
											return a.withdrawMoney(n.amount, r, s, c, i), e.abrupt("return");
										case 7:
											return a.upgradeTreasury(r, s, c, i), e.abrupt("return");
										case 9:
											return a.upgradeTower(n.towerId, r, s, c, i), e.abrupt("return");
										case 11:
											return a.sellTower(r, s, c, i), e.abrupt("return");
										case 13:
											return a.collectMoney(r, s, c, i), e.abrupt("return");
										case 15:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t, n, a, r, s, c) {
								return e.apply(this, arguments)
							}
						}();
					return {
						esimateGas: function(e, t) {
							switch (e) {
								case Q:
									return a.estimateWithdrawMoney(t.amount);
								case E:
									return a.estimateUpgradeTreasury();
								case F:
									return a.estimateUpgradeTower(t.towerId);
								case P:
									return a.estimateSellTower();
								case J:
									return a.estimate\u0421ollectMoney()
							}
						},
						callMethod: c,
						gasPrice: r
					}
				},
				L = n(39),
				H = n.n(L),
				X = n.p + "static/media/coins-icon.c8d657ff.png",
				K = "static/media/coin.png",
				G = function(e) {
					var t = e.active,
						n = e.setActive,
						a = Object(s.useState)(!0),
						r = Object(u.a)(a, 2),
						c = r[0],
						i = r[1],
						o = Object(s.useContext)(D),
						b = o.web3Account,
						p = (o.balanceOf, o.address),
						j = o.connected,
						m = o.accountTower,
						O = o.init,
						v = Object(s.useContext)(l),
						x = v.showMessage,
						g = v.showLoading,
						A = v.hideLoading,
						T = v.showSellKingdom,
						C = W(b, p, j),
						N = C.esimateGas,
						M = C.callMethod,
						k = C.gasPrice;
					Object(s.useEffect)((function() {
						i(!0)
					}), [t]);
					var S = Object(s.useCallback)(function() {
							var e = Object(y.a)(Object(f.a)().mark((function e(t) {
								var n, a;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, k();
										case 2:
											return n = e.sent, e.next = 5, N(Q, {
												amount: t
											});
										case 5:
											return a = e.sent, e.abrupt("return", {
												price: n,
												esimated: a
											});
										case 7:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), [b, p, j]),
						Y = function() {
							var e = Object(y.a)(Object(f.a)().mark((function e() {
								var t, a, r, s, o;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (O) {
												e.next = 3;
												break
											}
											return x("Not init"), e.abrupt("return");
										case 3:
											if (m.money && 0 != m.money && c) {
												e.next = 6;
												break
											}
											return x("Not enough Coins"), e.abrupt("return");
										case 6:
											return i(!1), e.prev = 7, e.next = 10, S(m.money);
										case 10:
											t = e.sent, a = t.price, r = t.esimated, s = new H.a(a), o = new H.a(r), b.utils.fromWei(s.multipliedBy(o).toFixed(), "ether"), M(Q, {
												amount: m.money
											}, (function(e) {
												A(), x("".concat(e)), i(!0)
											}), (function() {
												g(), n(!1), i(!0)
											}), (function(e) {
												A(), x("".concat(e)), i(!0)
											}), (function() {
												A(), x("Success"), i(!0)
											})), e.next = 24;
											break;
										case 19:
											e.prev = 19, e.t0 = e.catch(7), console.log(e.t0), x(e.t0.message ? e.t0.message : "Failure"), i(!0);
										case 24:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[7, 19]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
					return Object(d.jsxs)(h, {
						active: t,
						setActive: n,
						modalName: "withdraw",
						children: [Object(d.jsx)("p", {
							className: "withdraw__label",
							children: "Withdraw BUSD"
						}), Object(d.jsxs)("p", {
							className: "withdraw__rate",
							children: ["0.002 BUSD for 1 ", Object(d.jsx)("span", {
								children: Object(d.jsx)("img", {
									src: K
								})
							})]
						}), Object(d.jsx)("div", {
							className: "withdraw__image",
							children: Object(d.jsx)("img", {
								src: X,
								alt: ""
							})
						}), Object(d.jsxs)("div", {
							className: "withdraw__your-rate",
							children: [Object(d.jsx)("span", {
								children: "You can exchange"
							}), Object(d.jsxs)("div", {
								className: "withdraw__wrapper",
								children: [Object(d.jsxs)("span", {
									children: [" ", "".concat(m.money ? m.money : 0), Object(d.jsx)("img", {
										src: K
									})]
								}), Object(d.jsx)("span", {
									children: "for ".concat(m.money ? (2e15 * m.money / 1e18).toFixed(6) : 0, " BUSD")
								})]
							})]
						}), Object(d.jsxs)("div", {
							className: "withdraw__btns",
							children: [Object(d.jsx)(w, {
								style: {
									fontSize: "24px"
								},
								enable: c,
								text: "Withdraw",
								callback: function() {
									Y()
								}
							}), Object(d.jsx)(w, {
								style: {
									fontSize: "20px"
								},
								enable: c,
								text: "Retreat",
								callback: function() {
									n(!1), T()
								}
							})]
						})]
					})
				},
				z = n.p + "static/media/sell-icon.17ef4e64.png",
				Z = function(e) {
					var t = e.active,
						n = e.setActive,
						a = Object(s.useState)(!0),
						r = Object(u.a)(a, 2),
						c = r[0],
						i = r[1],
						o = Object(s.useState)(!0),
						b = Object(u.a)(o, 2),
						p = b[0],
						j = b[1],
						m = Object(s.useContext)(D),
						O = m.web3Account,
						v = (m.balanceOf, m.address),
						x = m.connected,
						g = m.accountTower,
						A = Object(s.useContext)(l),
						T = A.showMessage,
						C = A.showLoading,
						N = A.hideLoading,
						M = W(O, v, x),
						k = M.esimateGas,
						S = M.callMethod,
						Y = M.gasPrice;
					Object(s.useEffect)((function() {
						i(!0)
					}), [t]), Object(s.useEffect)((function() {
						var e = g.yield ? g.yield : 0;
						j(24 * e * 5)
					}), [x, g]);
					var U = Object(s.useCallback)(Object(y.a)(Object(f.a)().mark((function e() {
							var t, n;
							return Object(f.a)().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, Y();
									case 2:
										return t = e.sent, e.next = 5, k(P, {});
									case 5:
										return n = e.sent, e.abrupt("return", {
											price: t,
											esimated: n
										});
									case 7:
									case "end":
										return e.stop()
								}
							}), e)
						}))), [O, v, x]),
						B = function() {
							var e = Object(y.a)(Object(f.a)().mark((function e() {
								var t, a, r, s, c;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (x) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											if (0 != g.yield) {
												e.next = 5;
												break
											}
											return T("Not a single tower built"), e.abrupt("return");
										case 5:
											return i(!1), e.prev = 6, e.next = 9, U();
										case 9:
											t = e.sent, a = t.price, r = t.esimated, s = new H.a(a), c = new H.a(r), O.utils.fromWei(s.multipliedBy(c).toFixed(), "ether"), S(P, {}, (function(e) {
												N(), T("".concat(e)), i(!0)
											}), (function() {
												C(), n(!1), i(!0)
											}), (function(e) {
												N(), T("".concat(e)), i(!0)
											}), (function() {
												N(), T("Success"), i(!0)
											})), e.next = 23;
											break;
										case 18:
											e.prev = 18, e.t0 = e.catch(6), console.log(e.t0), T(e.t0.message ? e.t0.message : "Failure"), i(!0);
										case 23:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[6, 18]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
					return Object(d.jsxs)(h, {
						active: t,
						setActive: n,
						modalName: "sell",
						children: [Object(d.jsx)("div", {
							className: "sell__image",
							children: Object(d.jsx)("img", {
								src: z
							})
						}), Object(d.jsxs)("p", {
							className: "sell__text",
							children: ["Are you sure you want", Object(d.jsx)("br", {}), " to retreat?"]
						}), Object(d.jsxs)("p", {
							className: "sell__info",
							children: ["You will get ", p, " ", Object(d.jsx)("span", {
								children: Object(d.jsx)("img", {
									src: K
								})
							}), "  note: all your troops will be disbanded"]
						}), Object(d.jsxs)("div", {
							className: "sell__btns",
							children: [Object(d.jsx)(w, {
								style: {
									fontSize: "24px"
								},
								enable: c,
								text: "Okay",
								callback: function() {
									B()
								}
							}), Object(d.jsx)(w, {
								style: {
									fontSize: "20px"
								},
								enable: c,
								text: "Cancel",
								callback: function() {
									n(!1)
								}
							})]
						})]
					})
				},
				q = "static/media/gem.png",
				_ = function(e) {
					var t = e.active,
						n = e.setActive,
						a = Object(s.useContext)(D),
						r = a.address,
						c = a.accountTower,
						i = Object(s.useContext)(l).showMessage,
						o = "".concat("https://www.clashofbusd.online/", "?p=").concat(r);
					return Object(d.jsxs)(h, {
						active: t,
						setActive: n,
						modalName: "partner",
						children: [Object(d.jsx)("h2", {
							className: "partner__text",
							children: "Your Clan link"
						}), Object(d.jsxs)("div", {
							className: "partner__info",
							children: [Object(d.jsx)("input", {
								type: "text",
								readOnly: !0,
								className: "partner__link",
								value: o
							}), Object(d.jsx)(w, {
								style: {
									fontSize: "32px"
								},
								enable: !0,
								text: "Copy",
								callback: function() {
									i("Copied"), navigator.clipboard.writeText(o)
								}
							})]
						}), Object(d.jsx)("p", {
							className: "partner__details",
							children: "You get 8% in Gems and 4% in gold from each deposit your clan members make."
						}), Object(d.jsxs)("div", {
							className: "partner__statistic statistic",
							children: [Object(d.jsx)("h3", {
								children: "Clan Member statistics"
							}), Object(d.jsxs)("div", {
								className: "statistic__content",
								children: [Object(d.jsxs)("div", {
									className: "statistic__item",
									children: [Object(d.jsx)("div", {
										className: "statistic__image",
										children: Object(d.jsx)("img", {
											src: K
										})
									}), Object(d.jsx)("p", {
										children: c.refDeps ? "+".concat(Math.floor(100 * c.refDeps * 4 / 100)) : "+0"
									})]
								}), Object(d.jsxs)("div", {
									className: "statistic__item",
									children: [Object(d.jsx)("div", {
										className: "statistic__image",
										children: Object(d.jsx)("img", {
											src: q
										})
									}), Object(d.jsx)("p", {
										children: c.refDeps ? "+".concat(Math.floor(8 * c.refDeps / 100)) : "+0"
									})]
								}), Object(d.jsxs)("div", {
									className: "statistic__item",
									children: [Object(d.jsx)("div", {
										className: "statistic__image",
										children: Object(d.jsx)("img", {
											src: "static/media/member.png"
										})
									}), Object(d.jsx)("p", {
										children: c.refs ? "+".concat(c.refs) : "+0"
									})]
								})]
							})]
						})]
					})
				},
				$ = n(171),
				ee = function() {
					function e(t, n) {
						Object(U.a)(this, e), this.web3 = t, this.account = n, this.instanse = new t.eth.Contract($, "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56")
					}
					return Object(B.a)(e, [{
						key: "approve",
						value: function() {
							var e = Object(y.a)(Object(f.a)().mark((function e(t, n, a, r) {
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return 6e5, e.abrupt("return", this.instanse.methods.approve(C, "1000000000000000000000000000000").send({
												from: this.account,
												value: this.web3.utils.toWei("0", "ether"),
												gasPrice: this.web3.utils.toWei("5", "gwei"),
												gas: 2e5
											}).on("transactionHash", (function() {
												n()
											})).on("error", (function(e) {
												t(e.message ? e.message : "Failure")
											})).on("receipt", (function(e) {
												e.status ? r() : a("Failure")
											})));
										case 2:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t, n, a, r) {
								return e.apply(this, arguments)
							}
						}()
					}]), e
				}(),
				te = 0,
				ne = n(514),
				ae = function() {
					var e = Object(ne.a)(["partner"]),
						t = Object(u.a)(e, 2),
						n = t[0],
						a = t[1];
					return {
						cookies: n,
						setupCookies: Object(s.useCallback)((function(e) {
							var t = new Date;
							t.setTime(t.getTime() + 2592e6), a("partner", e, {
								path: "/",
								expires: t
							})
						}))
					}
				},
				re = ["active", "setActive"],
				se = function(e) {
					var t = e.active,
						n = e.setActive,
						a = Object(p.a)(e, re),
						r = Object(s.useState)(!0),
						c = Object(u.a)(r, 2),
						i = c[0],
						o = c[1],
						j = Object(s.useContext)(D),
						m = j.web3Account,
						O = j.balanceOf,
						v = j.address,
						x = j.connected,
						g = Object(s.useContext)(l),
						A = g.showMessage,
						T = g.showLoading,
						C = g.hideLoading,
						N = ae().cookies,
						M = W(m, v, x),
						k = (M.esimateGas, M.callMethod),
						S = (M.gasPrice, function(e, t, n) {
							var a = Object(s.useMemo)((function() {
									return n ? new ee(e, t) : null
								}), [e, t, n]),
								r = function() {
									var e = Object(y.a)(Object(f.a)().mark((function e(t, n, r, s, c) {
										return Object(f.a)().wrap((function(e) {
											for (;;) switch (e.prev = e.next) {
												case 0:
													e.t0 = t, e.next = e.t0 === te ? 3 : 5;
													break;
												case 3:
													return a.approve(n, r, s, c), e.abrupt("return");
												case 5:
												case "end":
													return e.stop()
											}
										}), e)
									})));
									return function(t, n, a, r, s) {
										return e.apply(this, arguments)
									}
								}();
							return {
								callBusdMethod: r
							}
						}(m, v, x)),
						Y = S.callBusdMethod,
						U = Object(s.useState)(0),
						B = Object(u.a)(U, 2),
						V = B[0],
						I = B[1],
						Q = Object(s.useState)(0),
						E = Object(u.a)(Q, 2),
						F = E[0],
						P = E[1],
						J = Object(s.useState)(!1),
						L = Object(u.a)(J, 2),
						H = L[0],
						X = L[1],
						K = Object(s.useState)(!1),
						G = Object(u.a)(K, 2),
						z = G[0],
						Z = G[1];
					Object(s.useEffect)((function() {
						P(V / .2)
					}), [z]), Object(s.useEffect)((function() {
						o(!0)
					}), [t]), Object(s.useEffect)((function() {
						I(.2 * F)
					}), [H]);
					var _ = function(e, t) {
							"" == e.target.value && (e.target.value = 0, t(0))
						},
						$ = function() {
							var e = Object(y.a)(Object(f.a)().mark((function e() {
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											try {
												Y(te, (function(e) {
													C(), A("".concat(e)), o(!0)
												}), (function() {
													T(), n(!1), o(!0)
												}), (function(e) {
													C(), A("".concat(e)), o(!0)
												}), (function() {
													C(), A("Success"), o(!0)
												}))
											} catch (t) {
												console.log(t), A(t.message ? t.message : "Failure"), o(!0)
											}
											case 1:
											case "end":
												return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						ne = function() {
							var e = Object(y.a)(Object(f.a)().mark((function e() {
								var t;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											o(!1), t = N.partner ? N.partner : "0x13363721377b24539d3804653627fD4C02D63bbf";
											try {
												k(R, {
													ref: t,
													value: V
												}, (function(e) {
													C(), A("".concat(e)), o(!0)
												}), (function() {
													T(), n(!1), o(!0)
												}), (function(e) {
													C(), A("".concat(e)), o(!0)
												}), (function() {
													C(), A("Success"), o(!0)
												}))
											} catch (a) {
												console.log(a), A(a.message ? a.message : "Failure"), o(!0)
											}
											case 3:
											case "end":
												return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
					return Object(d.jsxs)(h, Object(b.a)(Object(b.a)({}, a), {}, {
						active: t,
						setActive: n,
						modalName: "buy",
						children: [Object(d.jsx)("h3", {
							className: "buy__title",
							children: "Buy Gems"
						}), Object(d.jsxs)("form", {
							className: "buy__converter",
							children: [Object(d.jsxs)("div", {
								className: "buy__bnb buy__item",
								children: [Object(d.jsxs)("label", {
									htmlFor: "bnb",
									children: [Object(d.jsx)("span", {
										children: "BUSD"
									}), Object(d.jsxs)("span", {
										className: "buy__balance",
										children: ["Balance: ", O]
									})]
								}), Object(d.jsx)("input", {
									type: "text",
									name: "bnb",
									id: "bnb",
									value: V,
									onChange: function(e) {
										return function(e) {
											var t = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
												n = e.target.value.replace(/,/g, ".");
											("" === n || t.test(n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && (I(n), Z(!z))
										}(e)
									},
									onBlur: function(e) {
										return _(e, I)
									}
								})]
							}), Object(d.jsx)("div", {
								className: "buy__image",
								children: Object(d.jsx)("img", {
									src: "static/media/gem.png"
								})
							}), Object(d.jsxs)("div", {
								className: "buy__crystal buy__item",
								children: [Object(d.jsx)("label", {
									htmlFor: "crystal",
									children: Object(d.jsx)("span", {
										children: "Gems"
									})
								}), Object(d.jsx)("input", {
									type: "text",
									name: "crystal",
									id: "crystal",
									value: F,
									onChange: function(e) {
										return function(e) {
											var t = e.target.value.replace(/[^0-9]/g, "");
											e.target.value = t, P(t), X(!H)
										}(e)
									},
									onBlur: function(e) {
										return _(e, P)
									}
								})]
							})]
						}), Object(d.jsx)("div", {
							className: "buy__converted",
							children: Object(d.jsxs)("p", {
								children: [" 1 ", Object(d.jsx)("span", {
									children: Object(d.jsx)("img", {
										src: q
									})
								}), " = 0.2 BUSD"]
							})
						}), Object(d.jsx)(w, {
							style: {
								fontSize: "20px"
							},
							enable: i,
							text: "Approve",
							callback: function() {
								$()
							}
						}), Object(d.jsx)(w, {
							style: {
								fontSize: "20px"
							},
							enable: i,
							text: "Buy",
							callback: function() {
								ne()
							}
						})]
					}))
				},
				ce = function(e) {
					var t = e.active,
						n = e.setActive,
						a = Object(s.useState)(!0),
						r = Object(u.a)(a, 2),
						c = r[0],
						i = r[1],
						o = Object(s.useContext)(D),
						b = o.web3Account,
						p = (o.balanceOf, o.address),
						j = o.connected,
						m = o.accountTower,
						O = o.init,
						v = Object(s.useContext)(l),
						x = v.showMessage,
						g = v.showLoading,
						A = v.hideLoading,
						T = W(b, p, j),
						C = T.esimateGas,
						N = T.callMethod,
						M = T.gasPrice,
						k = Object(s.useState)(0),
						Y = Object(u.a)(k, 2),
						U = Y[0],
						B = Y[1],
						V = Object(s.useState)(0),
						I = Object(u.a)(V, 2),
						R = I[0],
						Q = I[1],
						F = Object(s.useState)(0),
						P = Object(u.a)(F, 2),
						J = P[0],
						L = P[1];
					Object(s.useEffect)((function() {
						if (j && !(m.treasury >= 4)) {
							var e = m.treasury ? m.treasury : 0,
								t = S[e],
								n = S[e + 1];
							B(t.time), Q(n.time - t.time), L(n.price)
						}
					}), [j, m]), Object(s.useEffect)((function() {
						i(!0)
					}), [t]);
					var X = Object(s.useCallback)(Object(y.a)(Object(f.a)().mark((function e() {
							var t, n;
							return Object(f.a)().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, M();
									case 2:
										return t = e.sent, e.next = 5, C(E);
									case 5:
										return n = e.sent, e.abrupt("return", {
											price: t,
											esimated: n
										});
									case 7:
									case "end":
										return e.stop()
								}
							}), e)
						}))), [b, p, j]),
						K = function() {
							var e = Object(y.a)(Object(f.a)().mark((function e() {
								var t, a, r, s, o, u;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if ((m.treasury || 0 == m.treasury) && c) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											if (i(!1), t = S[m.treasury + 1], !(m.crystals < t.price && O)) {
												e.next = 8;
												break
											}
											return x("Not enough Gems"), i(!0), e.abrupt("return");
										case 8:
											return e.prev = 8, e.next = 11, X();
										case 11:
											a = e.sent, r = a.price, s = a.esimated, o = new H.a(r), u = new H.a(s), b.utils.fromWei(o.multipliedBy(u).toFixed(), "ether"), N(E, {}, (function(e) {
												A(), x("".concat(e)), i(!0)
											}), (function() {
												g(), n(!1), i(!0)
											}), (function(e) {
												A(), x("".concat(e)), i(!0)
											}), (function() {
												A(), x("Success"), i(!0)
											})), e.next = 25;
											break;
										case 20:
											e.prev = 20, e.t0 = e.catch(8), console.log(e.t0), x(e.t0.message ? e.t0.message : "Failure"), i(!0);
										case 25:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[8, 20]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
					return Object(d.jsxs)(h, {
						active: t,
						setActive: n,
						modalName: "TownHall",
						children: [Object(d.jsx)("p", {
							className: "treasury__label",
							children: "Upgrade TH"
						}), Object(d.jsxs)("div", {
							className: "treasury__your-rate",
							children: [Object(d.jsx)("span", {
								children: "Time until Townhall fills"
							}), Object(d.jsxs)("div", {
								className: "treasury__wrapper",
								children: [Object(d.jsx)("div", {
									className: "treasury__icon",
									children: Object(d.jsx)("img", {
										src: "static/media/time.png"
									})
								}), Object(d.jsxs)("p", {
									className: "treasury__info",
									children: [U, "h ", Object(d.jsxs)("span", {
										children: ["(+", R, "h)"]
									})]
								})]
							})]
						}), Object(d.jsx)("div", {
							className: "treasury__btns",
							children: Object(d.jsx)(w, {
								style: {
									fontSize: "20px"
								},
								enable: c,
								text: Object(d.jsxs)("div", {
									className: "button__wrapper",
									children: [J, Object(d.jsx)("img", {
										src: q
									})]
								}),
								callback: function() {
									K()
								}
							})
						})]
					})
				},
				ie = function(e) {
					var t = e.id,
						n = e.active,
						a = e.setActive,
						r = Object(s.useState)(!0),
						c = Object(u.a)(r, 2),
						i = c[0],
						o = c[1],
						b = Object(s.useState)(0),
						p = Object(u.a)(b, 2),
						j = p[0],
						m = p[1],
						O = Object(s.useState)(0),
						v = Object(u.a)(O, 2),
						x = v[0],
						g = v[1],
						A = Object(s.useState)(0),
						T = Object(u.a)(A, 2),
						C = T[0],
						N = T[1],
						M = Object(s.useState)(0),
						k = Object(u.a)(M, 2),
						S = k[0],
						U = k[1],
						B = Object(s.useState)(0),
						V = Object(u.a)(B, 2),
						I = V[0],
						R = V[1],
						Q = Object(s.useState)(0),
						E = Object(u.a)(Q, 2),
						P = E[0],
						J = E[1],
						L = Object(s.useState)(0),
						G = Object(u.a)(L, 2),
						z = G[0],
						Z = G[1],
						_ = Object(s.useState)(0),
						$ = Object(u.a)(_, 2),
						ee = $[0],
						te = $[1],
						ne = Object(s.useContext)(D),
						ae = ne.web3Account,
						re = (ne.balanceOf, ne.address),
						se = ne.connected,
						ce = ne.accountTower,
						ie = (ne.init, Object(s.useContext)(l)),
						oe = ie.showMessage,
						ue = ie.showLoading,
						le = ie.hideLoading,
						be = W(ae, re, se),
						pe = be.esimateGas,
						de = be.callMethod,
						je = be.gasPrice;
					Object(s.useEffect)((function() {
						if (se && ce.chefs && void 0 != t && !(ce.chefs[t] > 5)) {
							for (var e = ce.chefs ? ce.chefs[t] : 0, n = Y[t][e], a = Y[t][e + 1], r = 0, s = 0; s <= e; s++) r += Y[t][s].revenue;
							te(ce.chefs[t]), m(n.warriors), g(a.warriors - n.warriors), N(r), U(a.revenue), R(ce.yield), J(a.revenue), Z(a.price)
						}
					}), [se, ce, t]), Object(s.useEffect)((function() {
						o(!0)
					}), [n]);
					var me = Object(s.useCallback)(Object(y.a)(Object(f.a)().mark((function e() {
							var n, a;
							return Object(f.a)().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, je();
									case 2:
										return n = e.sent, e.next = 5, pe(F, {
											towerId: t
										});
									case 5:
										return a = e.sent, e.abrupt("return", {
											price: n,
											esimated: a
										});
									case 7:
									case "end":
										return e.stop()
								}
							}), e)
						}))), [ae, re, se, t]),
						fe = function() {
							var e = Object(y.a)(Object(f.a)().mark((function e() {
								var n, r, s, c, i, u, l;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (se && ce.chefs && void 0 != t) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											if (o(!1), n = ce.chefs ? ce.chefs[t] : 0, r = Y[t][n + 1], !(ce.crystals < r.price)) {
												e.next = 9;
												break
											}
											return oe("Not enough Gems"), o(!0), e.abrupt("return");
										case 9:
											return e.prev = 9, e.next = 12, me();
										case 12:
											s = e.sent, c = s.price, i = s.esimated, u = new H.a(c), l = new H.a(i), ae.utils.fromWei(u.multipliedBy(l).toFixed(), "ether"), de(F, {
												towerId: t
											}, (function(e) {
												le(), oe("".concat(e)), o(!0)
											}), (function() {
												ue(), a(!1), o(!0)
											}), (function(e) {
												le(), oe("".concat(e)), o(!0)
											}), (function() {
												le(), oe("Success"), o(!0)
											})), e.next = 26;
											break;
										case 21:
											e.prev = 21, e.t0 = e.catch(9), console.log(e.t0), oe(e.t0.message ? e.t0.message : "Failure"), o(!0);
										case 26:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[9, 21]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
					return Object(d.jsxs)(h, {
						active: n,
						setActive: a,
						modalName: "tower-upgrade",
						children: [Object(d.jsx)("p", {
							className: "tower-upgrade__label",
							children: "Upgrade Barracks"
						}), Object(d.jsxs)("p", {
							className: "tower-upgrade__level",
							children: ["level ", ee]
						}), Object(d.jsxs)("div", {
							className: "tower-upgrade__your-rate",
							children: [Object(d.jsx)("span", {
								children: "Troops"
							}), Object(d.jsxs)("div", {
								className: "tower-upgrade__wrapper",
								children: [Object(d.jsx)("div", {
									className: "tower-upgrade__icon",
									children: Object(d.jsx)("img", {
										src: "static/media/troop.png"
									})
								}), Object(d.jsxs)("p", {
									className: "tower-upgrade__info",
									children: [j, " ", Object(d.jsxs)("span", {
										children: ["(+", x, ")"]
									})]
								})]
							})]
						}), Object(d.jsxs)("div", {
							className: "tower-upgrade__your-rate",
							children: [Object(d.jsx)("span", {
								children: "Profit"
							}), Object(d.jsxs)("div", {
								className: "tower-upgrade__wrapper",
								children: [Object(d.jsx)("div", {
									className: "tower-upgrade__icon",
									children: Object(d.jsx)("img", {
										src: K
									})
								}), Object(d.jsxs)("p", {
									className: "tower-upgrade__info",
									children: [C, " ", Object(d.jsxs)("span", {
										children: ["(+", S, ")"]
									})]
								})]
							})]
						}), Object(d.jsxs)("div", {
							className: "tower-upgrade__your-rate",
							children: [Object(d.jsx)("span", {
								children: "Total Profit"
							}), Object(d.jsxs)("div", {
								className: "tower-upgrade__wrapper",
								children: [Object(d.jsx)("div", {
									className: "tower-upgrade__icon",
									children: Object(d.jsx)("img", {
										src: X
									})
								}), Object(d.jsxs)("p", {
									className: "tower-upgrade__info",
									children: [I, " ", Object(d.jsxs)("span", {
										children: ["(+", P, ")"]
									})]
								})]
							})]
						}), Object(d.jsx)("div", {
							className: "tower-upgrade__btns",
							children: Object(d.jsx)(w, {
								style: {
									fontSize: "20px"
								},
								enable: i,
								text: Object(d.jsxs)("div", {
									className: "button__wrapper",
									children: [z, Object(d.jsx)("img", {
										src: q
									})]
								}),
								callback: function() {
									fe()
								}
							})
						})]
					})
				},
				oe = n(54),
				ue = function(e) {
					var t = Object.assign({}, (Object(oe.a)(e), e));
					return Object(d.jsxs)("div", Object(b.a)(Object(b.a)({}, t), {}, {
						className: "lds-ring",
						children: [Object(d.jsx)("div", {}), Object(d.jsx)("div", {}), Object(d.jsx)("div", {}), Object(d.jsx)("div", {})]
					}))
				},
				le = function(e) {
					var t = e.children,
						n = Object(s.useState)(""),
						a = Object(u.a)(n, 2),
						r = a[0],
						c = a[1],
						i = Object(s.useState)(null),
						o = Object(u.a)(i, 2),
						b = o[0],
						p = o[1],
						j = Object(s.useState)(0),
						f = Object(u.a)(j, 2),
						y = f[0],
						h = f[1],
						O = Object(s.useState)(!1),
						w = Object(u.a)(O, 2),
						v = w[0],
						x = w[1],
						g = Object(s.useState)(!1),
						A = Object(u.a)(g, 2),
						T = A[0],
						C = A[1],
						N = Object(s.useState)(!1),
						M = Object(u.a)(N, 2),
						k = M[0],
						S = M[1],
						Y = Object(s.useState)(!1),
						D = Object(u.a)(Y, 2),
						U = D[0],
						B = D[1],
						V = Object(s.useState)(!1),
						I = Object(u.a)(V, 2),
						R = I[0],
						Q = I[1],
						E = Object(s.useState)(!1),
						F = Object(u.a)(E, 2),
						P = (F[0], F[1]),
						J = Object(s.useState)(!1),
						W = Object(u.a)(J, 2),
						L = W[0],
						H = W[1],
						X = Object(s.useState)(!1),
						K = Object(u.a)(X, 2),
						z = K[0],
						q = K[1],
						$ = Object(s.useCallback)((function(e) {
							null != b && clearTimeout(b);
							var t = setTimeout((function() {
								return p(null)
							}), 2e3);
							c(e), p(t)
						}), []),
						ee = Object(s.useCallback)((function() {
							x(!0)
						}), []),
						te = Object(s.useCallback)((function() {
							x(!1)
						}), []),
						ne = Object(s.useCallback)((function() {
							S(!0)
						}), []),
						ae = Object(s.useCallback)((function() {
							B(!0)
						}), []),
						re = Object(s.useCallback)((function() {
							Q(!0)
						}), []),
						oe = Object(s.useCallback)((function() {
							P(!0)
						}), []),
						le = Object(s.useCallback)((function() {
							H(!0)
						}), []),
						be = Object(s.useCallback)((function() {
							C(!0)
						}), []),
						pe = Object(s.useCallback)((function(e) {
							h(e), q(!0)
						}), []);
					return Object(d.jsxs)(l.Provider, {
						value: {
							showMessage: $,
							showLoading: ee,
							hideLoading: te,
							showBuyCrystals: ne,
							showSellCoins: ae,
							showAlliances: re,
							showLanguage: oe,
							showSellKingdom: le,
							showCastleUpgrade: be,
							showTowerUpgrade: pe
						},
						children: [t, Object(d.jsx)(m, {
							enabled: null != b,
							children: r
						}), Object(d.jsx)(m, {
							enabled: v,
							children: Object(d.jsx)(ue, {})
						}), Object(d.jsx)(G, {
							active: U,
							setActive: B
						}), Object(d.jsx)(Z, {
							active: L,
							setActive: H
						}), Object(d.jsx)(_, {
							active: R,
							setActive: Q
						}), Object(d.jsx)(se, {
							active: k,
							setActive: S
						}), Object(d.jsx)(ce, {
							active: T,
							setActive: C
						}), Object(d.jsx)(ie, {
							active: z,
							setActive: q,
							id: y
						})]
					})
				},
				be = n(134),
				pe = n(267),
				de = n.n(pe),
				je = {
					walletconnect: {
						package: n(283).a,
						options: {
							infuraId: "a8de5a5e6c22437fbedca386f50424f0",
							rpc: (r = {}, Object(v.a)(r, x, "https://bsc-dataseed1.binance.org"), Object(v.a)(r, g, "https://data-seed-prebsc-1-s1.binance.org:8545/"), r)
						}
					}
				},
				me = function() {
					var e = Object(y.a)(Object(f.a)().mark((function e(t, n) {
						var a;
						return Object(f.a)().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (!n) {
										e.next = 9;
										break
									}
									return e.next = 3, n.chainId;
								case 3:
									if ((a = e.sent) === "0x".concat(Number.parseInt(t).toString(16)) || a == t) {
										e.next = 8;
										break
									}
									return e.next = 7, T(t, n);
								case 7:
									return e.abrupt("return", e.sent);
								case 8:
									return e.abrupt("return", !0);
								case 9:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(t, n) {
						return e.apply(this, arguments)
					}
				}(),
				fe = n(70),
				ye = n.n(fe),
				he = function(e) {
					try {
						var t = new ye.a(e);
						return t.eth.extend({
							methods: [{
								name: "chainId",
								call: "eth_chainId",
								outputFormatter: t.utils.hexToNumber
							}]
						}), t
					} catch (n) {
						console.log(n)
					}
				},
				Oe = n(282),
				we = n(29),
				ve = n(281),
				xe = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = null,
						n = [],
						a = {
							reference: "KingdomCash",
							contractAddress: C,
							abi: V
						},
						r = [{
							reference: "totalInvestedCall",
							methodName: "totalInvested"
						}, {
							reference: "totalChefsCall",
							methodName: "totalChefs"
						}, {
							reference: "totalTowersCall",
							methodName: "totalTowers"
						}, {
							reference: "initCall",
							methodName: "init"
						}];
					null != e && (n = [{
						reference: "chefsCall",
						methodName: "getChefs",
						methodParameters: [e]
					}, {
						reference: "towersCall",
						methodName: "towers",
						methodParameters: [e]
					}], t = {
						reference: "MulticallV3",
						contractAddress: N,
						abi: ve,
						calls: [{
							reference: "balanceOf",
							methodName: "getEthBalance",
							methodParameters: [e]
						}, {
							reference: "timestamp",
							methodName: "getCurrentBlockTimestamp"
						}]
					});
					var s = [Object(b.a)(Object(b.a)({}, a), {}, {
						calls: [].concat(r, Object(we.a)(n))
					})];
					return null != t && s.push(t), s
				},
				ge = function(e) {
					return Ce(e) ? Te(e.returnValues[0]) : 0
				},
				Ae = function(e, t) {
					return {
						crystals: Ce(t) ? Te(t.returnValues[0]) : 0,
						money: Ce(t) ? Te(t.returnValues[1]) : 0,
						money2: Ce(t) ? Te(t.returnValues[2]) : 0,
						yield: Ce(t) ? Te(t.returnValues[3]) : 0,
						timestamp: Ce(t) ? Te(t.returnValues[4]) : 0,
						hrs: Ce(t) ? Te(t.returnValues[5]) : 0,
						ref: Ce(t) ? t.returnValues[6] : "",
						refs: Ce(t) ? Te(t.returnValues[7]) : 0,
						refDeps: Ce(t) ? Te(t.returnValues[8]) : 0,
						treasury: Ce(t) ? t.returnValues[9] : 0,
						chefs: Ce(e) ? e.returnValues : [0, 0, 0, 0, 0]
					}
				},
				Te = function(e) {
					return new H.a(e.hex).toFixed()
				},
				Ce = function(e) {
					return e.success
				},
				Ne = function(e) {
					var t = e.children,
						n = e.callback,
						a = e.className,
						r = void 0 === a ? "" : a;
					return Object(d.jsx)("div", {
						className: n ? "label clickable ".concat(r) : "label ".concat(r),
						onClick: n,
						children: t
					})
				},
				Me = ["leftImage", "label", "rightImage", "callback"],
				ke = function(e) {
					var t = e.leftImage,
						n = e.label,
						a = e.rightImage,
						r = e.callback;
					Object(p.a)(e, Me);
					return Object(d.jsxs)(Ne, {
						className: "top-bar__element",
						children: [Object(d.jsx)("img", {
							src: t
						}), Object(d.jsx)("span", {
							children: n
						}), Object(d.jsx)("a", {
							href: "",
							onClick: function(e) {
								e.preventDefault(), r()
							},
							children: Object(d.jsx)("img", {
								src: a
							})
						})]
					})
				},
				Se = function(e) {
					var t = Object.assign({}, (Object(oe.a)(e), e)),
						n = Object(s.useContext)(l),
						a = n.showMessage,
						r = n.showBuyCrystals,
						c = n.showSellCoins,
						i = Object(s.useContext)(D),
						o = i.accountTower,
						u = i.connected;
					return Object(d.jsx)("section", Object(b.a)(Object(b.a)({}, t), {}, {
						id: "top-bar",
						children: Object(d.jsx)("div", {
							className: "top-bar",
							children: Object(d.jsxs)("div", {
								className: "top-bar__content",
								children: [Object(d.jsx)(ke, {
									leftImage: q,
									label: u ? o.crystals ? o.crystals : 0 : "---",
									rightImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANxSURBVHgBrVZNTBNBFP5a8AClFkT+o6Yh2EQhwYMHjUaIEoSEigcPHjTRiJgYQ/05yYGDES9GwIOEcPFkUKKQJko0IdTEeDCokHgpiGiQCDUE6A9US7vOm+622112W4Evmd2Z2TfvmzfzvZkFUoQgCFWsDLCyKESxKLarsJVgDjsEfXSk4seQChF7OQIBP5wv+jH8egie+V/ILyjE8dp62E+fgSkri0w7DQbD9Q2TiUs0QkS3b17D9NRXlY21tAzt9x9KhNWM0KXlzwh9tNDD+byfE+XnWdB+5zycg23o6mhGfn4265+Ec+CZZO/Qc5aMrIoew29e8UbrjVMor7DyutVaiJYrJ3mdllbEMT1n6dBHNj0883NRgpIQELgFrI0DaaWosPLAY98ley0kRKaUt8p6pTNKRAhPAcEelYleWhhlRqS6EVYaNWcozCW2Iz+hgWzRz4g8LdJlRCp5q2AMK9qRWNVeczRWV6SFgxaJ0sKQirwlOB+/Z8kSkUVmhP3CYU17ZVpQZCp5O1qY6sqt6tHLNarIKA2UmJ6ew917fbG0OHvuInU7aM+qqBaXt319ov8AT4vLtbwuTwuKjIth6vsMzBnbYDUtAn4m7/B4ap6V0RKMZajYeYlXp37MSL3ZRLZElUxLLjy/5zHmGkLlQS+QlcMGydRPe5XhTxAF7RmCJvZOi/cJ7AT0RjD5aRie5VXk5hVIX5aIzMVKY0NDA3p6etDat4IHf/fBVswGGWRkJjaBvZ+jhBKCmcDEAZZ/ZllYBox+W0PbywX8CYVBfkW8janR5/OhqakJbrc7NqxkhwlGY/ysdj5iS2vyxf36LbBfrYgHyiQ+uxCItW02G3p7e2E288lUG8VTuos66ENzczOKi4u5Mc0sAUkuJMm+qKiI+5ERdSXcBizCTq2bseHEEV6ECbMgzCJe3Jb4N210Shyx44ox0/VQzcogoqJRQ1BcEuE0aGBJ9FMt+uVIOPXFUF2yaLlCfKshnhbw5UT3jJRJSgxYuJ0vGJL70FzsZPcZj5CnBZPx2IddwNxullu57L0Hkx+tvD9ze26C/UbJXPQg+dLmtz4Nwv1uP/DlEEZHbHA88ankrecspX+Q9dJCglLeev8gSSGp1Ov1Ct3d3UJ9fb1QWVkp1NXV8Tb1K1W3KQg6abGlRDLCTf8R/wMD3UoU35KxMwAAAABJRU5ErkJggg==",
									callback: function() {
										u ? r() : a("Please login")
									}
								}), Object(d.jsxs)("div", {
									className: "top-bar__wrapper",
									children: [Object(d.jsx)(ke, {
										leftImage: K,
										label: u ? o.money ? o.money : 0 : "---",
										rightImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGrSURBVHgB7ZQ/SEJBHMe/L2qolIr+2vaIEKKgpTmjIQh81dAQ0hLZFtqfKYemaom0NnEWJClBKSmQbI+oUcwsBEsjNP8U/bHrTnxONfTUlt4H7u737t3d5x3vdwfIyMgQQjS0uGhJkNJIFNbR/CQyk8pgFh2cKKKNMZvNwL3vhO/Ii3jsDlJpa+/A8MgohIlJ1CsUrMvCcdwCV9jqCROtLM0jHLpCueC7urG+uSMKh6ppZWCRe8+ZF7W1NsBoGENvLw+phMP3WNtw0PWCcLt2MTU9w7qNVbTSsMh3fJgfaFoUShIxeL4DhrmRfMx+SYFBtrNGFoVuIlDW1oCvTwCZZSB3CclUdaOvZTYfhm4jYm8jkyVZUNfQjPhDDBd+L/oHUoCiiU4i+DWE5lzqE8FzH+JPL2hubRffJJnMT8u4VquF1WqFyfGMrbceqDvpJE6CjCb42fUHVg8e8fqeA1u3wGkxG9PpNPR6PQKBAMqFWq2GzWaDUqlkj0PiObPQxsCEdrsdHo8H0WgUUlGpVBAEATqdThRt03NmLA5gQlIZLN9+Efmru1FG5n/xBXog3UUhBDsCAAAAAElFTkSuQmCC",
										callback: function() {
											u ? c() : a("Please login")
										}
									}), Object(d.jsxs)("div", {
										className: "top-bar__rate",
										style: {
											display: "".concat(u ? "block" : "none")
										},
										children: ["+", u && o.yield ? o.yield : "", "/hour"]
									})]
								})]
							})
						})
					}))
				},
				Ye = ["image", "text", "callback"],
				De = function(e) {
					var t = e.image,
						n = e.text,
						a = e.callback,
						r = Object(p.a)(e, Ye);
					return Object(d.jsxs)("div", Object(b.a)(Object(b.a)({}, r), {}, {
						className: "nav__item",
						children: [Object(d.jsx)("div", {
							className: "nav__icon",
							children: Object(d.jsx)("img", {
								src: t
							})
						}), Object(d.jsx)(Ne, {
							callback: a,
							children: n
						})]
					}))
				},
				Ue = n.p + "static/media/telegram.47739f60.png",
				Be = n.p + "static/media/aliance.b3599ebd.png",
				Ve = n.p + "static/media/help.d659f7ef.png",
				Ie = n.p + "static/media/logout.5081e481.png",
				Re = function(e) {
					var t = Object.assign({}, (Object(oe.a)(e), e)),
						n = Object(s.useContext)(D),
						a = n.connected,
						r = n.logout,
						c = Object(s.useContext)(l),
						i = c.showMessage,
						o = c.showAlliances;
					return Object(d.jsx)("section", Object(b.a)(Object(b.a)({}, t), {}, {
						id: "sidebar",
						children: Object(d.jsx)("div", {
							className: "sidebar",
							children: Object(d.jsxs)("nav", {
								className: "sidebar__content nav",
								children: [Object(d.jsx)(De, {
									text: "Clan",
									image: Be,
									callback: function() {
										a ? o() : i("Please login")
									}
								}), Object(d.jsx)(De, {
									text: "Guide",
									image: Ve,
									callback: function() {
										window.open("".concat("https://edit"))
									}
								}), Object(d.jsx)(De, {
									text: "Telegram",
									image: Ue,
									callback: function() {
										window.open("".concat("https://t.me/clashofbusd"))
									}
								}), Object(d.jsx)(De, {
									style: {
										display: "".concat(0 == a ? "none" : "flex", " ")
									},
									text: "Log out",
									image: Ie,
									callback: r
								})]
							})
						})
					}))
				},
				Qe = function(e) {
					var t = Object.assign({}, (Object(oe.a)(e), e)),
						n = Object(s.useContext)(D),
						a = n.connected,
						r = n.totalInvested,
						c = n.totalChefs,
						i = n.totalTowers,
						o = n.accountTower;
					return Object(d.jsx)("div", Object(b.a)(Object(b.a)({}, t), {}, {
						className: "infobar",
						children: Object(d.jsxs)("div", {
							className: "infobar__content",
							children: [Object(d.jsxs)("div", {
								className: "infobar__item info",
								children: [Object(d.jsx)("div", {
									className: "info__title",
									children: "Total Clans"
								}), Object(d.jsx)("div", {
									className: "info__value",
									children: i
								})]
							}), Object(d.jsxs)("div", {
								className: "infobar__item info",
								children: [Object(d.jsx)("div", {
									className: "info__title",
									children: "Total Deposits"
								}), Object(d.jsxs)("div", {
									className: "info__value",
									children: [parseFloat(r).toFixed(4), " BUSD"]
								})]
							}), Object(d.jsxs)("div", {
								className: "infobar__item info",
								children: [Object(d.jsx)("div", {
									className: "info__title",
									children: "Total Troops"
								}), Object(d.jsx)("div", {
									className: "info__value",
									children: c
								})]
							}), Object(d.jsxs)("div", {
								className: "infobar__item info",
								children: [Object(d.jsx)("div", {
									className: "info__title",
									children: "Your Clan Divs"
								}), Object(d.jsx)("div", {
									className: "info__value",
									children: a ? o.refs ? o.refs : 0 : "---"
								})]
							})]
						})
					}))
				},
				Ee = function(e) {
					Object.assign({}, (Object(oe.a)(e), e));
					return Object(d.jsxs)("div", {
						id: "hud",
						className: "hud",
						children: [Object(d.jsx)(Se, {}), Object(d.jsx)(Qe, {}), Object(d.jsx)(Re, {})]
					})
				},
				Fe = function(e) {
					Object(oe.a)(e);
					var t = Object(s.useState)(!0),
						n = Object(u.a)(t, 2),
						a = n[0],
						r = n[1],
						c = Object(s.useContext)(D),
						i = c.web3Account,
						o = (c.balanceOf, c.address),
						b = c.connected,
						p = c.accountTower,
						j = c.currentBlockTimeStamp,
						m = c.login,
						h = Object(s.useContext)(l),
						O = h.showMessage,
						v = h.showLoading,
						x = h.hideLoading,
						g = W(i, o, b),
						A = g.esimateGas,
						T = g.callMethod,
						C = g.gasPrice,
						N = Object(s.useContext)(l).showCastleUpgrade,
						M = Object(s.useState)(0),
						k = Object(u.a)(M, 2),
						Y = k[0],
						U = k[1],
						B = Object(s.useState)(0),
						V = Object(u.a)(B, 2),
						I = V[0],
						R = V[1];
					Object(s.useEffect)((function() {
						if (b)
							if (0 != j && 0 != p.yield) {
								var e = new Date(1e3 * j),
									t = new Date(1e3 * p.timestamp),
									n = Math.floor(e.getTime() / 36e5) - Math.floor(t.getTime() / 36e5),
									a = S[p.treasury],
									r = Math.min(n + parseFloat(p.hrs), a.time);
								R(r), U(Math.floor(100 * r / a.time))
							} else U(0)
					}), [j]);
					var Q = Object(s.useCallback)((function() {
							p.treasury >= 4 || !b || N()
						}), [b, p]),
						E = Object(s.useCallback)(Object(y.a)(Object(f.a)().mark((function e() {
							var t, n;
							return Object(f.a)().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, C();
									case 2:
										return t = e.sent, e.next = 5, A(J, {});
									case 5:
										return n = e.sent, e.abrupt("return", {
											price: t,
											esimated: n
										});
									case 7:
									case "end":
										return e.stop()
								}
							}), e)
						}))), [i, o, b]),
						F = function() {
							var e = Object(y.a)(Object(f.a)().mark((function e() {
								var t, n, a, s, c;
								return Object(f.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (b) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											if (!(I <= 0 || 0 == p.yield)) {
												e.next = 5;
												break
											}
											return O("No coins available"), e.abrupt("return");
										case 5:
											return r(!1), e.prev = 6, e.next = 9, E();
										case 9:
											t = e.sent, n = t.price, a = t.esimated, s = new H.a(n), c = new H.a(a), i.utils.fromWei(s.multipliedBy(c).toFixed(), "ether"), T(J, {}, (function(e) {
												x(), O("".concat(e)), r(!0)
											}), (function() {
												v(), r(!0)
											}), (function(e) {
												x(), O("".concat(e)), r(!0)
											}), (function() {
												x(), O("Success"), r(!0)
											})), e.next = 23;
											break;
										case 18:
											e.prev = 18, e.t0 = e.catch(6), console.log(e.t0), O(e.t0.message ? e.t0.message : "Failure"), r(!0);
										case 23:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[6, 18]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
					return Object(d.jsxs)("div", {
						className: "castle",
						children: [Object(d.jsxs)("div", {
							className: "castle__body",
							children: [Object(d.jsx)("div", {
								className: "castle__upgrade",
								style: {
									visibility: "".concat(b && p.treasury < 4 ? "visible" : "hidden")
								},
								onClick: function() {
									Q()
								}
							}), Object(d.jsx)("div", {
								className: "castle__image castle__image-0 ".concat(p.treasury && 0 != p.treasury ? "" : "active"),
								onClick: function() {
									Q()
								}
							}), Object(d.jsx)("div", {
								className: "castle__image castle__image-1 ".concat(b && 1 == p.treasury ? "active" : ""),
								onClick: function() {
									Q()
								}
							}), Object(d.jsx)("div", {
								className: "castle__image castle__image-2 ".concat(b && 2 == p.treasury ? "active" : ""),
								onClick: function() {
									Q()
								}
							}), Object(d.jsx)("div", {
								className: "castle__image castle__image-3 ".concat(b && 3 == p.treasury ? "active" : ""),
								onClick: function() {
									Q()
								}
							}), Object(d.jsx)("div", {
								className: "castle__image castle__image-4 ".concat(b && 4 == p.treasury ? "active" : "")
							})]
						}), Object(d.jsx)("div", {
							className: "castle__btn",
							children: b ? Object(d.jsx)(w, {
								text: "Claim",
								enable: a,
								callback: function() {
									F()
								}
							}) : Object(d.jsx)(w, {
								text: "Login",
								enable: !0,
								callback: function() {
									m()
								}
							})
						}), Object(d.jsx)("div", {
							className: "castle__progress progress",
							style: {
								display: "".concat(b ? "block" : "none")
							},
							children: Object(d.jsxs)("div", {
								className: "progress__inner",
								children: [Object(d.jsxs)("div", {
									className: "progress__value",
									children: [Y, "%"]
								}), Object(d.jsx)("div", {
									style: {
										width: "".concat(Y, "%")
									},
									className: "progress__body"
								})]
							})
						})]
					})
				},
				Pe = ["id"],
				Je = function(e) {
					var t = e.id,
						n = Object(p.a)(e, Pe),
						a = Object(s.useContext)(D),
						r = a.connected,
						c = a.accountTower,
						i = Object(s.useState)(0),
						o = Object(u.a)(i, 2),
						j = o[0],
						m = o[1],
						f = Object(s.useContext)(l),
						y = f.showTowerUpgrade,
						h = f.showMessage;
					Object(s.useEffect)((function() {
						var e = r && c.chefs ? c.chefs[t] : 0;
						m(e)
					}), [r, c]);
					var O = Object(s.useCallback)((function() {
							j > 5 || (r ? y(t) : h("Please login"))
						}), [r, c]),
						w = Object(s.useCallback)((function(e, t) {
							if (0 == e) {
								if (0 == t) return 4;
								if (1 == t) return 3;
								if (2 == t) return 2;
								if (3 == t) return 1;
								if (4 == t) return 0
							}
							if (1 == e) {
								if (0 == t) return 3;
								if (1 == t) return 4;
								if (2 == t) return 2;
								if (3 == t) return 1;
								if (4 == t) return 0
							}
							if (2 == e) {
								if (0 == t) return 1;
								if (1 == t) return 0;
								if (2 == t) return 2;
								if (3 == t) return 3;
								if (4 == t) return 4
							}
							if (3 == e) {
								if (0 == t) return 1;
								if (1 == t) return 0;
								if (2 == t) return 2;
								if (3 == t) return 3;
								if (4 == t) return 4
							}
							if (4 == e) {
								if (0 == t) return 3;
								if (1 == t) return 4;
								if (2 == t) return 2;
								if (3 == t) return 1;
								if (4 == t) return 0
							}
						}), []),
						v = Object(s.useCallback)((function(e, t) {
							if (0 == e) {
								if (0 == t) return 0;
								if (1 == t) return 1;
								if (2 == t) return 2;
								if (3 == t) return 3;
								if (4 == t) return 4
							}
							if (1 == e) {
								if (0 == t) return 0;
								if (1 == t) return 1;
								if (2 == t) return 2;
								if (3 == t) return 3;
								if (4 == t) return 4
							}
							if (2 == e) {
								if (0 == t) return 4;
								if (1 == t) return 3;
								if (2 == t) return 2;
								if (3 == t) return 1;
								if (4 == t) return 0
							}
							if (3 == e) {
								if (0 == t) return 4;
								if (1 == t) return 3;
								if (2 == t) return 2;
								if (3 == t) return 1;
								if (4 == t) return 0
							}
							if (4 == e) {
								if (0 == t) return 0;
								if (1 == t) return 1;
								if (2 == t) return 2;
								if (3 == t) return 3;
								if (4 == t) return 4
							}
						}), []);
					return Object(d.jsx)("div", Object(b.a)(Object(b.a)({}, n), {}, {
						className: "tower tower-".concat(t),
						children: Object(d.jsxs)("div", {
							className: "tower__content",
							children: [Object(d.jsx)("div", {
								className: "tower__build ".concat(0 == j ? "" : "hidden"),
								onClick: O
							}), Object(d.jsxs)("div", {
								className: "tower__object ".concat(0 == j ? "hidden" : ""),
								onClick: O,
								children: [Object(d.jsx)("div", {
									className: "tower__upgrade ".concat(0 != j && j < 6 ? "" : "hidden")
								}), Object(d.jsx)("div", {
									className: "tower__body tower__body-1 ".concat(1 == j ? "" : "hidden")
								}), Object(d.jsx)("div", {
									className: "tower__body tower__body-2 ".concat(2 == j ? "" : "hidden")
								}), Object(d.jsx)("div", {
									className: "tower__body tower__body-3 ".concat(3 == j ? "" : "hidden")
								}), Object(d.jsx)("div", {
									className: "tower__body tower__body-4 ".concat(4 == j ? "" : "hidden")
								}), Object(d.jsx)("div", {
									className: "tower__body tower__body-5 ".concat(5 == j ? "" : "hidden")
								}), Object(d.jsx)("div", {
									className: "tower__body tower__body-5 tower__body-6 ".concat(6 == j ? "" : "hidden")
								})]
							}), Object(d.jsx)("div", {
								className: "tower__warriors warriors ".concat(0 == j ? "hidden" : ""),
								children: Object(d.jsxs)("div", {
									className: "tower__warrior-inner",
									children: [Object(d.jsx)("div", {
										className: "tower__warrior tower__warrior-".concat(v(t, 0), " ").concat(j < 1 ? "hidden" : "")
									}), Object(d.jsx)("div", {
										className: "tower__warrior tower__warrior-".concat(v(t, 1), " ").concat(j < 2 ? "hidden" : "")
									}), Object(d.jsx)("div", {
										className: "tower__warrior tower__warrior-".concat(v(t, 2), " ").concat(j < 3 ? "hidden" : "")
									}), Object(d.jsx)("div", {
										className: "tower__warrior tower__warrior-".concat(v(t, 3), " ").concat(j < 4 ? "hidden" : "")
									}), Object(d.jsx)("div", {
										className: "tower__warrior tower__warrior-".concat(v(t, 4), " ").concat(j < 5 ? "hidden" : "")
									})]
								})
							}), Object(d.jsx)("div", {
								className: "tower__fight fight ".concat(0 == j ? "hidden" : ""),
								children: Object(d.jsx)("div", {
									className: "tower__warrior-inner",
									children: Object(d.jsx)("div", {
										className: "fight ".concat(j < 1 ? "hidden" : "")
									})
								})
							}), Object(d.jsx)("div", {
								className: "tower__orcs orcs ".concat(0 == j ? "hidden" : ""),
								children: Object(d.jsxs)("div", {
									className: "tower__orc-inner",
									children: [Object(d.jsx)("div", {
										className: "tower__orc tower__orc-".concat(w(t, 0), " ").concat(j < 1 ? "hidden" : "")
									}), Object(d.jsx)("div", {
										className: "tower__orc tower__orc-".concat(w(t, 1), " ").concat(j < 2 ? "hidden" : "")
									}), Object(d.jsx)("div", {
										className: "tower__orc tower__orc-".concat(w(t, 2), " ").concat(j < 3 ? "hidden" : "")
									}), Object(d.jsx)("div", {
										className: "tower__orc tower__orc-".concat(w(t, 3), " ").concat(j < 4 ? "hidden" : "")
									}), Object(d.jsx)("div", {
										className: "tower__orc tower__orc-".concat(w(t, 4), " ").concat(j < 5 ? "hidden" : "")
									})]
								})
							})]
						})
					}))
				},
				We = function() {
					return Object(d.jsx)("div", {
						className: "board",
						id: "board",
						children: Object(d.jsx)("div", {
							className: "board__wrapper",
							children: Object(d.jsx)("div", {
								className: "board__inner",
								children: Object(d.jsxs)("div", {
									className: "board__body",
									children: [Object(d.jsx)(Fe, {}), Object(d.jsx)(Je, {
										id: 0
									}), Object(d.jsx)(Je, {
										id: 1
									}), Object(d.jsx)(Je, {
										id: 2
									}), Object(d.jsx)(Je, {
										id: 3
									}), Object(d.jsx)(Je, {
										id: 4
									})]
								})
							})
						})
					})
				},
				Le = n.p + "static/media/splash-screen.6f4e2e92.jpg",
				He = function() {
					var e = Object(s.useState)(!0),
						t = Object(u.a)(e, 2),
						n = t[0],
						a = t[1];
					return Object(s.useEffect)((function() {
						setTimeout((function() {
							a(!1)
						}), 2e3)
					}), []), Object(d.jsx)("div", {
						className: "splash-screen ".concat(n ? "" : "hide"),
						children: Object(d.jsx)("img", {
							src: Le
						})
					})
				},
				Xe = n(176),
				Ke = n.p + "static/media/mobile-icon.4a4f6b3c.png",
				Ge = function() {
					var e = Object(s.useState)(!1),
						t = Object(u.a)(e, 2),
						n = t[0],
						a = t[1],
						r = Object(Xe.useMobileOrientation)().isPortrait;
					return Object(d.jsxs)("div", {
						className: "mobile-screen",
						style: {
							display: "".concat(Xe.isMobile && r && !n ? "flex" : "none")
						},
						children: [Object(d.jsx)("div", {
							className: "mobile-screen__close",
							onClick: function() {
								a(!0)
							}
						}), Object(d.jsx)("img", {
							src: Ke
						}), Object(d.jsx)("p", {
							children: "Please change your phone orientation for better experience"
						})]
					})
				},
				ze = function() {
					var e = Object(be.b)(),
						t = Object(u.a)(e, 2),
						n = (t[0], t[1]),
						a = ae(),
						r = (a.cookies, a.setupCookies);
					return Object(s.useEffect)((function() {
						var e = new URLSearchParams(window.location.search);
						null != e && (e.get("p") && ye.a.utils.isAddress(e.get("p")) && r(e.get("p")), n(""))
					}), []), Object(d.jsxs)("div", {
						id: "main",
						children: [Object(d.jsx)(He, {}), Object(d.jsx)(Ge, {}), Object(d.jsx)(We, {}), Object(d.jsx)(Ee, {})]
					})
				},
				Ze = function() {
					var e = function() {
							var e = Object(s.useState)(!1),
								t = Object(u.a)(e, 2),
								n = t[0],
								a = t[1],
								r = Object(s.useState)(null),
								c = Object(u.a)(r, 2),
								i = c[0],
								o = c[1],
								l = Object(s.useState)(null),
								b = Object(u.a)(l, 2),
								p = b[0],
								d = b[1],
								j = Object(s.useState)(null),
								m = Object(u.a)(j, 2),
								h = m[0],
								O = m[1],
								w = Object(s.useState)([M]),
								v = Object(u.a)(w, 2),
								x = v[0],
								g = v[1],
								A = Object(s.useState)(null),
								T = Object(u.a)(A, 2),
								C = T[0],
								N = T[1],
								k = Object(s.useCallback)((function() {
									d(null), o(""), a(!1), O(null), g([M])
								}));
							Object(s.useEffect)((function() {
								N(new de.a({
									network: "mainnet",
									cacheProvider: !1,
									theme: "light",
									providerOptions: je,
									shouldCacheProvider: !1
								}))
							}), []), Object(s.useEffect)((function() {
								try {
									if (null == h || !h.on) return;
									h.on("disconnect", (function(e) {
										if (e) return console.log("disconnect:", e), void(1e3 === e && Y());
										Y()
									})), h.on("accountsChanged", function() {
										var e = Object(y.a)(Object(f.a)().mark((function e(t) {
											return Object(f.a)().wrap((function(e) {
												for (;;) switch (e.prev = e.next) {
													case 0:
														o(t[0]);
													case 1:
													case "end":
														return e.stop()
												}
											}), e)
										})));
										return function(t) {
											return e.apply(this, arguments)
										}
									}()), h.on("chainChanged", function() {
										var e = Object(y.a)(Object(f.a)().mark((function e(t) {
											return Object(f.a)().wrap((function(e) {
												for (;;) switch (e.prev = e.next) {
													case 0:
														t !== "0x".concat(Number.parseInt(M).toString(16)) && Y();
													case 1:
													case "end":
														return e.stop()
												}
											}), e)
										})));
										return function(t) {
											return e.apply(this, arguments)
										}
									}())
								} catch (e) {
									console.log("chainChanged:", e)
								}
							}), [h]);
							var S = function() {
									var e = Object(y.a)(Object(f.a)().mark((function e() {
										var t, n, r, s;
										return Object(f.a)().wrap((function(e) {
											for (;;) switch (e.prev = e.next) {
												case 0:
													return window.sessionStorage.getItem("_was_connected") || window.sessionStorage.setItem("_was_connected", "true"), e.prev = 1, e.next = 4, C.clearCachedProvider();
												case 4:
													return e.next = 6, C.connect();
												case 6:
													return t = e.sent, n = he(t), e.next = 10, n.eth.getAccounts();
												case 10:
													return r = e.sent, s = r[0], e.prev = 12, e.next = 15, me(M, n.currentProvider);
												case 15:
													if (e.sent) {
														e.next = 18;
														break
													}
													return e.abrupt("return");
												case 18:
													window.web3 = n, d(n), a(!0), o(s), g([M]), O(t), e.next = 30;
													break;
												case 26:
													e.prev = 26, e.t0 = e.catch(12), alert(e.t0), Y();
												case 30:
													e.next = 35;
													break;
												case 32:
													e.prev = 32, e.t1 = e.catch(1), console.log("On connect error:", e.t1);
												case 35:
												case "end":
													return e.stop()
											}
										}), e, null, [
											[1, 32],
											[12, 26]
										])
									})));
									return function() {
										return e.apply(this, arguments)
									}
								}(),
								Y = function() {
									var e = Object(y.a)(Object(f.a)().mark((function e() {
										return Object(f.a)().wrap((function(e) {
											for (;;) switch (e.prev = e.next) {
												case 0:
													return window.sessionStorage.getItem("_was_connected") && window.sessionStorage.removeItem("_was_connected"), e.prev = 1, p && p.currentProvider && p.currentProvider.close && p.currentProvider.close(), e.next = 5, C.resetState();
												case 5:
													return e.next = 7, C.clearCachedProvider();
												case 7:
													window.localStorage.clear(), k(), document.location.reload(), e.next = 15;
													break;
												case 12:
													e.prev = 12, e.t0 = e.catch(1), console.log(e.t0);
												case 15:
												case "end":
													return e.stop()
											}
										}), e, null, [
											[1, 12]
										])
									})));
									return function() {
										return e.apply(this, arguments)
									}
								}();
							return {
								web3Modal: C,
								web3Account: p,
								chainId: x,
								connected: n,
								address: i,
								login: S,
								logout: Y
							}
						}(),
						t = e.web3Modal,
						n = e.web3Account,
						a = e.chainId,
						r = e.connected,
						c = e.address,
						i = e.login,
						o = e.logout,
						l = function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
								t = Object(s.useState)(0),
								n = Object(u.a)(t, 2),
								a = n[0],
								r = n[1],
								c = Object(s.useState)(0),
								i = Object(u.a)(c, 2),
								o = i[0],
								l = i[1],
								b = Object(s.useState)(0),
								p = Object(u.a)(b, 2),
								d = p[0],
								j = p[1],
								m = Object(s.useState)({}),
								h = Object(u.a)(m, 2),
								O = h[0],
								w = h[1],
								v = Object(s.useState)(0),
								x = Object(u.a)(v, 2),
								g = x[0],
								A = x[1],
								T = Object(s.useState)(0),
								C = Object(u.a)(T, 2),
								N = C[0],
								M = C[1],
								S = Object(s.useState)(!1),
								Y = Object(u.a)(S, 2),
								D = Y[0],
								U = Y[1],
								B = new ye.a(k),
								V = new Oe.a({
									web3Instance: B,
									ryAggregate: !0
								});
							return Object(s.useEffect)((function() {
								function t() {
									return n.apply(this, arguments)
								}

								function n() {
									return (n = Object(y.a)(Object(f.a)().mark((function t() {
										var n, a, s, c;
										return Object(f.a)().wrap((function(t) {
											for (;;) switch (t.prev = t.next) {
												case 0:
													return n = xe(e), t.prev = 1, t.next = 4, V.call(n);
												case 4:
													if (a = t.sent, s = a.results.KingdomCash.callsReturnContext, r(ye.a.utils.fromWei(ge(s[0]), "ether")), l(ge(s[1])), j(ge(s[2])), U(s[3].returnValues[0]), !(null != e && s.length > 4)) {
														t.next = 19;
														break
													}
													if (c = a.results.MulticallV3.callsReturnContext, !(N > ge(c[1]))) {
														t.next = 14;
														break
													}
													return t.abrupt("return");
												case 14:
													w(Ae(s[4], s[5])), A(ye.a.utils.fromWei(ge(c[0]))), M(ge(c[1])), t.next = 20;
													break;
												case 19:
													w({});
												case 20:
													t.next = 25;
													break;
												case 22:
													t.prev = 22, t.t0 = t.catch(1), console.log(t.t0);
												case 25:
												case "end":
													return t.stop()
											}
										}), t, null, [
											[1, 22]
										])
									})))).apply(this, arguments)
								}
								t();
								var a = setInterval((function() {
									t()
								}), 3e3);
								return function() {
									return clearInterval(a)
								}
							}), [e]), {
								totalInvested: a,
								totalChefs: o,
								totalTowers: d,
								accountTower: O,
								balanceOf: g,
								currentBlockTimeStamp: N,
								init: D
							}
						}(c),
						b = l.totalInvested,
						p = l.totalChefs,
						j = l.totalTowers,
						m = l.accountTower,
						h = l.balanceOf,
						O = l.currentBlockTimeStamp,
						w = l.init;
					return Object(d.jsx)(be.a, {
						children: Object(d.jsx)("div", {
							className: "App",
							children: Object(d.jsx)(D.Provider, {
								value: {
									web3Modal: t,
									web3Account: n,
									chainId: a,
									connected: r,
									address: c,
									login: i,
									logout: o,
									totalInvested: b,
									totalChefs: p,
									totalTowers: j,
									accountTower: m,
									balanceOf: h,
									currentBlockTimeStamp: O,
									init: w
								},
								children: Object(d.jsx)(le, {
									children: Object(d.jsx)(ze, {})
								})
							})
						})
					})
				};
			n(507);
			o.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(Ze, {}))
		}
	},
	[
		[508, 1, 2]
	]
]);
//# sourceMappingURL=main.7cca63ef.chunk.js.map
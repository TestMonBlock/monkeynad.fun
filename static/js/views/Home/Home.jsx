import React from "react";
import { default as numeral } from "numeral";
import { Input, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CountUp from "react-countup";
import { Utils, checkTime, RELEASE_TIME } from "../../utils/utils";
import logo from "../../media/logo.png";
import twitter from "../../media/twitter.png";
import bscscan from "../../media/bscscan.png";
import telegram from "../../media/telegram.png";
import "./Home.scss";
import Countdown from "../../components/Countdown/Countdown";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "xxx",
      input: 0,
      blinkMyMiners: false,
      blinkMyEarns: false,
      myEarnsStart: 0,
      myEarns: this.props.myEarns,
      bnbPerHour: this.props.bnbPerHour,
    };

    this.render = this.render.bind(this);
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.myMiners !== prevProps.myMiners) {
      this.setState({ blinkMyMiners: true }, () => {
        setTimeout(() => {
          this.setState({
            blinkMyMiners: false,
          });
        }, 2000);
      });
    }

    if (this.props.myEarns !== prevProps.myEarns) {
      this.setState(
        {
          myEarns: this.props.myEarns,
          blinkMyEarns: true,
        },
        () => {
          setTimeout(() => {
            this.setState({
              myEarnsStart: this.props.myEarns,
              blinkMyEarns: false,
            });
          }, 3000);
        }
      );
    }
  };

  changeInput = (val) => {
    if (isNaN(val)) {
      return;
    }
    this.setState({
      input: val,
    });
  };

  render() {
    const {
      address,
      myMiners,
      bnbPerHour,
      contractBalance,
      nativeBalance,
      userTotalDeposits,
    } = this.props;
    const refLink = `${window.location.origin}/?ref=${address}`;

    return (
      <div className={"home"}>
        <div className={"container"}>
          <div className={"header"}>
            <w3m-button />
            <div className={"socialMedias"}>
              <a
                href={
                  "https://bscscan.com/address/0x8Cc2772547737873845ba99997Dd4679b57393Ae"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={bscscan} alt={"bscscan"} />
              </a>
              <a
                href={"https://x.com/BrewedBeansDapp"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt={"twitter"} />
              </a>
              <a
                href={"https://t.me/brewedbeans"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={telegram} alt={"telegram"} />
              </a>
            </div>
          </div>
          <p className={"slogan"}>
            The BNB game with up to 8% daily return and 6% referral rewards and
            lowest dev fee
          </p>

          {checkTime() ? null : (
            <div className={"countdownWrapper"}>
              <div>
                <Countdown date={RELEASE_TIME} />
              </div>
              <div>{RELEASE_TIME}</div>
            </div>
          )}

          <div className={"mainContent"}>
          <img src={logo} alt={"logo"} className={"logo"} />
            <a
              href={"https://telegra.ph/Brewed-Beans-Whitepaper-12-13"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className={"slogan"}>
                Click here for Whitepaper and instructions.
              </p>
            </a>
            <div className={"box leftBox"}>
              <div className={"dataRow"}>
                <div className={"name"}>Contract</div>
                <div className={"value"}>
                  {numeral(contractBalance).format("0,0.[000]")} BNB
                </div>
              </div>
              <div className={"dataRow"}>
                <div className={"name"}>Your Wallet</div>
                <div className={"value"}>
                  {numeral(nativeBalance).format("0,0.[000]")} BNB
                </div>
              </div>
              <div className={"dataRow"}>
                <div className={"name"}>Your Beans</div>
                <div
                  className={
                    this.state.blinkMyMiners ? "value blink_me" : "value"
                  }
                >
                  {numeral(myMiners).format("0,0.[000]")} BEANS
                </div>
              </div>
              <div className={"dataRow"}>
                <div className={"name"}>Your Deposits</div>
                <div className={"value"}>
                  {numeral(userTotalDeposits).format("0,0.[000]")} BNB
                </div>
              </div>

              <Input
                value={`${this.state.input}`}
                onChange={(e) => {
                  this.changeInput(e.target.value);
                }}
                className={"antInput"}
                suffix={<span className={"suffix"}>BNB</span>}
              />
              <div
                className={"buyButton"}
                onClick={() => {
                  this.buy();
                }}
              >
                BREW BEANS
              </div>
              <div className={"actionWrapper"}>
                <div className={"dataRow"}>
                  <div className={"name"}>Your Rewards</div>
                  <div
                    className={
                      this.state.blinkMyEarns ? "value blink_me" : "value"
                    }
                  >
                    <CountUp
                      start={this.state.myEarnsStart}
                      end={this.state.myEarns}
                      duration={2}
                      separator=","
                      decimals={4}
                      decimal="."
                      suffix=" BNB"
                    />
                    {/*{numeral(myEarns).format('0,0.[000000]')} BNB*/}
                  </div>
                </div>
                <div className={"dataRow"}>
                  <div className={"name"}>Your Treasury</div>
                  <div
                    className={
                      this.state.bnbPerHour ? "value blink_me" : "value"
                    }
                  >
                    {numeral(bnbPerHour).format("0,0.[00]")}% Full
                  </div>
                </div>
                <div className={"actionButtons"}>
                  {/*<Tooltip title={"Compound your earning beef"}>*/}
                  <div
                    onClick={() => {
                      this.compound();
                    }}
                  >
                    RE-BREW
                  </div>
                  {/*</Tooltip>*/}
                  <div
                    onClick={() => {
                      this.withdraw();
                    }}
                  >
                    DRINK COFFEE
                  </div>
                </div>
                <div
                  className={`buyButton ${
                    this.props.isDisabled ? "disabled" : ""
                  }`} // Add conditional class
                  onClick={() => {
                    if (this.props.isDisabled) {
                      // Show warning message when the button is clicked while disabled
                      message.warning(
                        "You need to deposit an additional 0.11 BNB to enable the upgrade."
                      );
                    } else {
                      this.upgrade(); // Proceed with the upgrade if not disabled
                    }
                  }}
                >
                  UPGRADE TREASURY
                </div>
              </div>
            </div>
            <div className={"box rightBox"}>
              <div className={"referral"}>
                <h1>Referral Link</h1>
                <p>
                  Earn 6% of the BNB used to brew beans from anyone who uses
                  your referral link
                </p>
                <div className={"refWrapper"}>
                  <div className={"referralLink"}>
                    {address ? refLink : "Connect Wallet"}
                  </div>
                  <CopyToClipboard
                    text={refLink}
                    onCopy={() => {
                      message.info("Copied to clipboard");
                    }}
                  >
                    <div className={"copyButton"}>COPY</div>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  buy = async () => {
    if (!checkTime()) {
      message.info("Coming Soon");
      return;
    }
    if (this.state.input <= 0) {
      message.warning("You Can't Buy Zero Beans");
      return;
    }
    if (this.state.input > this.props.nativeBalance) {
      message.warning("Insufficient wallet balance");
      return;
    }
    try {
      const callValue = Utils.web3.utils.toWei(this.state.input, "ether");
      const gasPrice = await Utils.web3.eth.getGasPrice();
      const urlParams = new URLSearchParams(window.location.search);
      let affrAddr = urlParams.get("ref");

      let inviter = Utils.owner;
      if (Utils.web3.utils.isAddress(affrAddr)) {
        inviter = affrAddr;
      }
      Utils.brewedbeans.methods
        .buyEggs(inviter)
        .send({
          from: this.props.address,
          value: callValue,
          gasPrice: gasPrice,
        })
        .on("transactionHash", (hash) => {
          console.log(hash);
          message.info("Transaction sent", 3);
        })
        .once("receipt", (res) => {
          message.info("Transaction confirmed", 3);
        })
        .then((res) => {})
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };

  compound = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const gasPrice = await Utils.web3.eth.getGasPrice();
    if (!checkTime()) {
      message.info("Coming Soon!");
      return;
    }
    if (this.props.myEarns * 1 < 0.00001) {
      message.warning("You need at least 1 bean to compound");
      return;
    }
    if (this.props.nativeBalance * 1 < 0.001) {
      message.warning("Insufficient Gas");
      return;
    }
    try {
      let affrAddr = urlParams.get("ref");

      let inviter = Utils.owner;
      if (Utils.web3.utils.isAddress(affrAddr)) {
        inviter = affrAddr;
      }
      console.log(inviter);
      Utils.brewedbeans.methods
        .hatchEggs(inviter)
        .send({
          from: this.props.address,
          gasPrice: gasPrice,
        })
        .on("transactionHash", (hash) => {
          console.log(hash);
          message.info("Transaction sent", 3);
        })
        .once("receipt", (res) => {
          message.info("Transaction confirmed", 3);
        })
        .then((res) => {})
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };

  withdraw = async () => {
    if (!checkTime()) {
      message.info("Coming Soon!");
      return;
    }
    if (this.props.nativeBalance * 1 < 0.001) {
      message.warning("Insufficient Gas");
      return;
    }
    try {
      const gasPrice = await Utils.web3.eth.getGasPrice();
      Utils.brewedbeans.methods
        .sellEggs()
        .send({
          from: this.props.address,
          gasPrice: gasPrice,
        })
        .on("transactionHash", (hash) => {
          console.log(hash);
          message.info("Transaction sent", 3);
        })
        .once("receipt", (res) => {
          message.info("Transaction confirmed", 3);
        })
        .then((res) => {})
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };

  upgrade = async () => {
    if (!checkTime()) {
      message.info("Coming Soon!");
      return;
    }
    if (this.props.nativeBalance * 1 < 0.001) {
      message.warning("Insufficient Gas");
      return;
    }
    try {
      const gasPrice = await Utils.web3.eth.getGasPrice();
      Utils.brewedbeans.methods
        .upgradeTreasury()
        .send({
          from: this.props.address,
          gasPrice: gasPrice,
        })
        .on("transactionHash", (hash) => {
          console.log(hash);
          message.info("Transaction sent", 3);
        })
        .once("receipt", (res) => {
          message.info("Transaction confirmed", 3);
        })
        .then((res) => {})
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };
}

export default Home;

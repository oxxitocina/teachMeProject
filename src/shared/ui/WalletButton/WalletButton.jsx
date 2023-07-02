import './WalletButton.css'
import { ethers } from 'ethers';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress, setLoggedIn } from '../../../store/slices/authorization'

export default function WalletButton() {
    const dispatch = useDispatch()
    const address = useSelector((state) => state.authorization.address)
    const [walletAddress, setWalletAddress] = useState("");
    const isLoggedIn = useSelector((state) => state.authorization.isLoggedIn)

    useEffect(() => {
        console.log(address)
        console.log(isLoggedIn)
      })
    
      async function requestAccount() {
        if(window.ethereum) {
          console.log('detected');
    
          try {
            const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            setWalletAddress(accounts[0]);
            dispatch(setAddress(accounts[0]))
          } catch (error) {
            console.log('Error connecting...');
          }
    
        } else {
          alert('Meta Mask not detected');
        }
      }
    
      async function connectWallet() {
        if(typeof window.ethereum !== 'undefined') {
          await requestAccount();
          const provider = new ethers.providers.Web3Provider(window.ethereum);

          dispatch(setLoggedIn(true))
    
          const balance = await provider.getBalance(walletAddress);
          const bal = ethers.utils.formatEther(balance)
          console.log(bal)
        }
      }


  return (
    <>
        <div className="landing-connectwalletbtn" onClick={() => {connectWallet()}}>
            <img
              alt="Rectangle21111"
              src="/external/rectangle21111-zuer.svg"
              className="landing-rectangle21"
            />
            <span className="landing-text40"><span>Connect wallet</span></span>
            <div className="landing-iconprofilecircle">
              <div>
                <img
                  alt="Vector1111"
                  src="/external/vector1111-rp24p.svg"
                  className="landing-vector05"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-6n3l.svg"
                  className="landing-vector06"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-7aiq.svg"
                  className="landing-vector07"
                />
              </div>
            </div>
            <img
              alt="Line11111"
              src="/external/line11111-y3e.svg"
              className="landing-line1"
            />
            <div className="landing-iconwallet">
              <div className="landing-group2">
                <img
                  alt="Vector1111"
                  src="/external/vector1111-1c3q.svg"
                  className="landing-vector08"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-07ps.svg"
                  className="landing-vector09"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-384t.svg"
                  className="landing-vector10"
                />
              </div>
            </div>
          </div>

    </>
  )
}

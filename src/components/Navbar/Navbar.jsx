import SearchForm from "../SearchForm/SearchForm"
import './Navbar.css'
import {
  useNavigate
} from "react-router-dom";
import { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { useSelector, useDispatch } from 'react-redux'
import { setAddress } from "../../store/slices/authorization";
import WalletButton from "../../shared/ui/WalletButton/WalletButton";
import ProfileButton from "../../shared/ui/ProfileButton/ProfileButton";

export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [walletAddress, setWalletAddress] = useState("");
  const address = useSelector((state) => state.authorization.address)
  const isLoggedIn = useSelector((state) => state.authorization.isLoggedIn)

  function RenderProfileButton()  {
    if(isLoggedIn !== false)  {
      return (
        <>
          <ProfileButton/>
        </>
      )
    }else{
      return (
        <>
          <WalletButton/>
        </>
      )
    }
  }

  

  return (
    <>
        <div className="landing-frame2">
            <span onClick={() => {navigate('/')}} className="landing-text30"><span>Home</span></span>
          </div>
        <SearchForm/>

        <RenderProfileButton/>
        
        <div className="landing-market" onClick={() => {navigate('/store')}}>
            <img
              alt="Rectangle21111"
              src="/external/rectangle21111-sb4b.svg"
              className="landing-rectangle2"
            />
            <div className="landing-iconshop">
              <div className="landing-group">
                <img
                  alt="Vector1111"
                  src="/external/vector1111-xtx.svg"
                  className="landing-vector"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-0gu9.svg"
                  className="landing-vector01"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-v96h.svg"
                  className="landing-vector02"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-fev.svg"
                  className="landing-vector03"
                />
                <img
                  alt="Vector1111"
                  src="/external/vector1111-c7cn.svg"
                  className="landing-vector04"
                />
              </div>
            </div>
          </div>

          



          
    </>
  )
}

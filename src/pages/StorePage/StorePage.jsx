import './StorePage.css'
import Navbar from '../../components/Navbar/Navbar'
import { useSelector } from 'react-redux'

export default function StorePage() {
    const balance = useSelector((state) => state.tokenEconomy.balance)

  return (
    <>
        <Navbar/>

    <div className="main">

        <div className="main-wallet">
            <br/>
            <div className="wallet-pic"></div>
            <div className="wallet-address">0x6969...6666</div>
            <div className="wallet-balance">Balance: <span style={{color: 'white'}}>{balance}</span> <span style={{color: 'white'}}>PPF</span></div>
            <div className="wallet-progress">solved questions: <span style={{color: 'white'}}>15</span></div>
            <br/>
        </div>
        <br/>

        <div className="main-market">

            <div className="main-market-title">
                <p>Welcome To Market</p>

            </div>

            <div className="main-market-head">
                <ul className="market-links">
                    <li><a href="">On Sale</a></li>
                    <li><a href="">Top</a></li>
                    <li><a href="">New</a></li>
                    <li><a href="">Games</a></li>
                    <li><a href="">Premium plans</a></li>
                </ul>
            </div>

            <div className="main-market-content">
                <div  className="topic" style={{backgroundImage: `url('mesh-gradient (6) 1.png')`}}>
                    <div className="topic-pic"></div>
                    <div className="topic-title">
                        <div className="title"><h3>Maincraft</h3></div>
                        <div className="price">1.05 PPF</div>
                    </div>
                    <div className="topic-desc">Skins, mods, all of you wants. Ultra Mega Good key! </div>
                </div>
                <div  className="topic" style={{backgroundImage: `url('mesh-gradient (5) 1.png')`}}>
                    <div className="topic-pic"></div>
                    <div className="topic-title">
                        <div className="title"><h3>Hogwarts Legacy</h3></div>
                        <div className="price"></div>
                    </div>
                    <div className="topic-desc">Go deeper of wonder, and become guranteed magician~</div>
                </div>
                <div  className="topic" style={{backgroundImage: `url('mesh-gradient (4) 1.png')`}}>
                    <div className="topic-pic"></div>
                    <div className="topic-title">
                        <div className="title"><h3>The Messanger</h3></div>
                        <div className="price"></div>
                    </div>
                    <div className="topic-desc">2D platformer game to test your destiny and humor</div>
                </div>
                <div  className="topic" style={{backgroundImage: `url('mesh-gradient (6) 1.png')`}}>
                    <div className="topic-pic"></div>
                    <div className="topic-title">
                        <div className="title"><h3>Mortal Combat</h3></div>
                        <div className="price"></div>
                    </div>
                    <div className="topic-desc">DIE, REVIVE, and KILL the stress after your school</div>
                </div><div  className="topic" style={{backgroundImage: `url('mesh-gradient (5) 1.png')`}}>
                    <div className="topic-pic"></div>
                    <div className="topic-title">
                        <div className="title"><h3>Sonic Frontiers</h3></div>
                        <div className="price"></div>
                    </div>
                    <div className="topic-desc">Feel speed as speed of sounds, I mean super fast</div>
                </div><div  className="topic" style={{backgroundImage: `url('mesh-gradient (4) 1.png')`}}>
                    <div className="topic-pic"></div>
                    <div className="topic-title">
                        <div className="title"><h3>Pit People</h3></div>
                        <div className="price"></div>
                    </div>
                    <div className="topic-desc">I don't know what is it :/ Maybe you try and say?~</div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

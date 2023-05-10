import { FaReact, FaNodeJs, FaSass } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import mayuratImg from '../assets/mayurapada.lk.png';
import meImg from '../assets/me.jpg';

export const Card = () => {
    return (
        <div className="nft">
            <div className="main">
                <img className="tokenImage" src={mayuratImg} alt="NFT" />
                <h2>Mayurapada.lk</h2>
                <p className="description">
                    Official wbsite of Mayurapada Central College
                </p>
                <div className="tokenInfo">
                    <div className="price">
                        <p>
                            <FaReact className="tech-icons" />
                            <FaSass className="tech-icons" />
                            <FaNodeJs className="tech-icons" />
                        </p>
                    </div>
                    <div className="duration">
                        <MdDateRange className="duration__icon" />
                        <p>24/12/2022</p>
                    </div>
                </div>
                <hr />
                <div className="creator">
                    <div className="wrapper">
                        <img src={meImg} alt="Creator" />
                    </div>
                    <p>
                        <ins>Created By</ins> Dinujaya_S
                    </p>
                </div>
            </div>
        </div>
    );
};

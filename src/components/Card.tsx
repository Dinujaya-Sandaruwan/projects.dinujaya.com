import { MdDateRange } from 'react-icons/md';
import mayuratImg from '../assets/mayurapada.lk.png';
import meImg from '../assets/me.jpg';
import { IconType } from 'react-icons';

interface Props {
    title: string;
    desc: string;
    date: string;
    technologies: Array<IconType & { className?: string }>;
    image: string;
}

export const Card = ({ title, desc, date, technologies, image }: Props) => {
    return (
        <div className="nft">
            <div className="main">
                <img
                    className="tokenImage"
                    src={image}
                    alt="Website Preview Image"
                />
                <h2>{title}</h2>
                <p className="description">{desc}</p>
                <div className="tokenInfo">
                    <div className="price">
                        <p>
                            {technologies.map((Icon, index) => (
                                <Icon key={index} className="tech-icons" />
                            ))}
                        </p>
                    </div>
                    <div className="duration">
                        <MdDateRange className="duration__icon" />
                        <p>{date}</p>
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

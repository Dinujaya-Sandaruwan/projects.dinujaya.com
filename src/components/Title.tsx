import { FaHome, FaYoutube, FaReact } from 'react-icons/fa';
import { BsFillBookmarkStarFill, BsGithub } from 'react-icons/bs';
import { ImMenu, ImHome } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';

// import './styles.css';

interface Props {
    mobileMenuDisplay: string;
    mobileMenuDisplayBlocK: () => void;
    mobileMenuDisplayNone: () => void;
}

const Title = ({
    mobileMenuDisplay,
    mobileMenuDisplayBlocK,
    mobileMenuDisplayNone,
}: Props) => {
    return (
        <>
            <div>
                <nav className="desktopMenu">
                    <div className="navList">
                        <a
                            href="http://dinujaya.com/"
                            className="navLink"
                            target="_blank"
                        >
                            <div className="navItem">
                                <ImHome className="listIcon" />
                                Home
                            </div>
                        </a>
                        <a
                            href="https://youtube.com/playlist?list=PLv-22kGnDnb0Bjk5Bq0ifAUs29qwa78iR"
                            className="navLink"
                            target="_blank"
                        >
                            <div className="navItem">
                                <FaYoutube className="listIcon" />
                                YT Playlist
                            </div>
                        </a>
                        <a
                            href="http://bookmarks.dinujaya.com/"
                            className="navLink"
                            target="_blank"
                        >
                            <div className="navItem">
                                <BsFillBookmarkStarFill className="listIcon" />
                                BookMarks
                            </div>
                        </a>
                        <a
                            href="https://github.com/Dinujaya-Sandaruwan/React-SCSS-TypeScript-Node_boilerplate"
                            className="navLink"
                            target="_blank"
                        >
                            <div className="navItem">
                                <FaReact className="listIcon" />
                                Boilerplate
                            </div>
                        </a>
                    </div>
                    <ImMenu
                        className="burgerMenu"
                        onClick={mobileMenuDisplayBlocK}
                    />
                    <a
                        href="https://github.com/Dinujaya-Sandaruwan"
                        target="_blank"
                    >
                        <BsGithub className="githubICon" />
                    </a>
                </nav>
                <nav
                    className="mobileMenu"
                    id="mobileMenu"
                    style={{ display: mobileMenuDisplay }}
                >
                    <div className="mobileMenuItem">
                        <span className="close" onClick={mobileMenuDisplayNone}>
                            <AiOutlineClose className="closeIcon" />
                        </span>
                        <a
                            className="navLink"
                            href="http://dinujaya.com/"
                            target="_blank"
                        >
                            <div className="navItemMobile odd">Home</div>
                        </a>
                        <a
                            className="navLink"
                            href="https://youtube.com/playlist?list=PLv-22kGnDnb0Bjk5Bq0ifAUs29qwa78iR"
                            target="_blank"
                        >
                            <div className="navItemMobile even">
                                YT Playlist
                            </div>
                        </a>
                        <a
                            className="navLink"
                            href="http://bookmarks.dinujaya.com/"
                            target="_blank"
                        >
                            <div className="navItemMobile odd">BookMarks</div>
                        </a>
                        <a
                            className="navLink"
                            href="https://github.com/Dinujaya-Sandaruwan/React-SCSS-TypeScript-Node_boilerplate"
                            target="_blank"
                        >
                            <div className="navItemMobile even">
                                Boilerplate
                            </div>
                        </a>
                    </div>
                </nav>
            </div>
            <h1 className="heading">DINUJAYA'S PROJECTS</h1>
        </>
    );
};

export default Title;

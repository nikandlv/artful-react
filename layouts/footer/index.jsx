import SendInput from "../../components/Input";
import Art from "./art";

export default function Footer() {
    return (
        <section>
            <div className="subsrcibe-section">
                <div className="row center-xs">
                    <Art />
                    <div className="col-xs-12 col-md-6">
                        <h2>Create a new generation website for your business</h2>
                    </div>
                    <div className="col-xs-12 col-md-6 subscribe-input-wrapper">
                        <SendInput />
                    </div>
                </div>
            </div>
            
            <footer>
                <div className="main">
                    <div className="about">
                        <h2>Interactive ART</h2>
                        <p>Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. Had country man pressed shewing</p>
                    </div>
                <ul>
                    <li className="title">Useful links</li>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About us</li></a>
                    <a href="#"><li>Services</li></a>
                    <a href="#"><li>Blog</li></a>
                    <a href="#"><li>Contact</li></a>
                    </ul>
                    <ul>
                    <li className="title">Need Help?</li>
                    <a href="#"><li>Faqs</li></a>
                    <a href="#"><li>Privacy</li></a>
                    <a href="#"><li>Policy</li></a>
                    <a href="#"><li>Support</li></a>
                    <a href="#"><li>Terms</li></a>
                    </ul>
                    <ul>
                    <li className="title">Contact</li>
                    <a target="_blank" href="https://www.behance.net/elcan12"><li>Elcan Huseynaliyev Behance</li></a>
                    <a target="_blank" href="https://www.behance.net/gallery/80148217/Interactive-ART-Agency-Free"><li>Elcan Huseynaliyev Project</li></a>
                    <a target="_blank" href="https://nikandlv.ir"><li>Nikandlv</li></a>
                    <a target="_blank" href="https://neoxus.ir"><li>Neoxus</li></a>
                    <a target="_blank" href="https://github.com/nikandlv/artful-react"><li>Github</li></a>
                    </ul>
                </div>
            </footer>
            <div className="bottom-bar">
                <span className="copyright">Copyright © 2019-2020</span>
                <span className="copyright">Designed with <p className="love">love</p> by <a target="_blank" href="https://www.behance.net/elcan12">Elcan Huseynaliyev</a></span>
                <span className="copyright">Coded with <p className="love">love</p> by <a target="_blank" href="https://nikandlv.ir">Nikandlv</a></span>
            </div>
        </section>
    )
}
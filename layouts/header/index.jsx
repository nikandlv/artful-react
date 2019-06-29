import GeneralContainer from "../container/GeneralContainer";
import Art from "./art";
import Button from "../../components/Button";

export default function Header() {
    return (
        <header>
            <GeneralContainer>
                <nav className="top-navbar">
                    <ul>
                        <li className="logo">Interactive ART</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">How it works</a></li>
                        <li><a href="#">Clients</a></li>
                        <li><a href="#">Portfolio</a></li>
                    </ul>
                </nav>
                <Art />
                <div className="header-title-section">
                    <h1>Create a new generation</h1>
                    <h1>website for your business</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour, or randomized words which dont
                    </p>
                    <div className="header-button-group">
                        <Button color="secondary">Contact us</Button>
                        <Button color="primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.442" height="14.442" viewBox="0 0 14.442 14.442">
                            <g id="layers" transform="translate(0 0)">
                                <g id="Group_22" data-name="Group 22" transform="translate(0 0)">
                                <path id="Path_37" data-name="Path 37" d="M14.442,7.221a.971.971,0,0,0-.488-.838l-.8-.473.8-.478a.963.963,0,0,0,0-1.674C12.949,3.16,9.541,1.135,7.861.171a1.284,1.284,0,0,0-1.283,0S2.008,2.857.488,3.758a.963.963,0,0,0,0,1.675l.8.478-.8.473a.963.963,0,0,0,0,1.675l.8.478-.8.473a.963.963,0,0,0,0,1.675c1.3.773,4.5,2.671,6.094,3.587a1.279,1.279,0,0,0,1.28,0c1.6-.915,4.793-2.813,6.093-3.587a.963.963,0,0,0,0-1.675l-.8-.473.8-.478A.973.973,0,0,0,14.442,7.221ZM.823,4.869A.325.325,0,0,1,.656,4.6a.321.321,0,0,1,.166-.273C2.341,3.424,6.9.744,6.9.744a.623.623,0,0,1,.631,0c1.676.961,5.081,2.984,6.084,3.581a.307.307,0,0,1,0,.546c-1.3.772-4.492,2.668-6.084,3.581a.626.626,0,0,1-.628,0C5.315,7.537,2.122,5.641.823,4.869Zm12.8,4.705a.307.307,0,0,1,0,.546c-1.3.772-4.492,2.668-6.084,3.581a.626.626,0,0,1-.628,0c-1.592-.913-4.785-2.808-6.084-3.581a.325.325,0,0,1-.167-.273.321.321,0,0,1,.166-.273l1.114-.655c1.506.892,3.492,2.065,4.645,2.726a1.279,1.279,0,0,0,1.28,0C9.014,10.984,11,9.812,12.505,8.919Zm0-2.08c-1.3.772-4.492,2.668-6.084,3.581a.626.626,0,0,1-.628,0C5.315,10.163,2.122,8.267.823,7.495a.325.325,0,0,1-.167-.273.321.321,0,0,1,.166-.273l1.114-.655c1.506.892,3.492,2.065,4.645,2.726a1.279,1.279,0,0,0,1.28,0C9.014,8.358,11,7.186,12.505,6.293l1.114.655a.307.307,0,0,1,0,.546Z" transform="translate(0 -0.001)" fill="#fff"/>
                                </g>
                            </g>
                            </svg>
                            See our work
                        </Button>
                    </div>
                </div>
            </GeneralContainer>
        </header>
    )
}
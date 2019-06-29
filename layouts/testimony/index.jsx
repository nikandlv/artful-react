import TopArt from "./topArt";
import MiddleArt from "./middleArt";

export default function Testimony() {
    return (
        <section className="testimony-section">
            <TopArt />
            <h1>You're in a good hand</h1>
            <p>There are many variations of passages of Lorem Ipsum available</p>
            <p>but the majority have suffered</p>
            <div className="row center-xs">
                
            <div className="col-xs-12 col-sm-10">
                <div className="row center-xs testimony-row">
                <MiddleArt />
                <div className="col-xs-12 col-sm-4">
                    <div className="item">
                        <p>Life before Company was very chaotic we got alot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.</p>
                        <div className="card-actions">
                            <img src="./static/img/avatar1.jpg" alt="The Name"/>
                            <span>Martin jones, Creative Cons</span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="item">
                        <p>Life before Company was very chaotic we got alot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.</p>
                        <div className="card-actions">
                            <img src="./static/img/avatar2.jpg" alt="The Name"/>
                            <span>Martin jones, Creative Cons</span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="item">
                        <p>Life before Company was very chaotic we got alot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.</p>
                        <div className="card-actions">
                            <img src="./static/img/avatar3.jpg" alt="The Name"/>
                            <span>Martin jones, Creative Cons</span>
                        </div>
                    </div>
                </div>
            </div>

                </div>
            </div>
        </section>
    )
}
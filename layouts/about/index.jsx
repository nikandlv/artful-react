import Art from "./art";

export default function About() {
    return (
        <section className="about-section">
            <h4 className="section-title">How it works</h4>
            <h2>Three Simple Steps To Start The Working Process</h2>
            <div className="row center-xs">
                <div className="col-xs-12 col-sm-10">
                    <div className="row center-xs about-row">
                        <div className="col-xs-12 col-sm-4">
                            <p className="title">Research Project</p>
                            <p className="subtitle">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <p className="title">Targeting</p>
                            <p className="subtitle">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <p className="title">Result</p>
                            <p className="subtitle">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                </div>
            </div>
            <Art />
        </section>
    )
}
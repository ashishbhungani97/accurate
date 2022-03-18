
import Img1 from '../Images/logo.svg';
import Img2 from '../Images/card1.png'
import Img3 from '../Images/card2.png'
import Img4 from '../Images/card3.png'
import Img5 from '../Images/icon-1.png'
import Img6 from '../Images/icon-2.png'
import Img7 from '../Images/icon-3.png'
import Img8 from '../Images/icon.png'
import Img9 from '../Images/icon-5.png'
import Img10 from '../Images/icon-6.png'



function Body() {
    return (
        <>
            
            <nav className="navbar navbar-expand-lg cstm-navbar shadow navbar-dark">
                <div className="container" style={{"marginBottom": "14px" , "marginTop": "10px"}}>
                    <a className="navbar-brand" href="index.html">
                        <img alt={Math.floor(Math.random() * 100)} src={Img1} className="img-fluid"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            
            <section className="overflow-hidden">
                <div className="container overflow-hidden">
                    <div className="row justify-content-center overflow-hidden">
                        <div className="col-md-12 overflow-hidden" data-aos="fade-up">
                            <div className="banner-text overflow-hidden" data-aos="fade-down">
                                <h1 className="overflow-hidden mt-5">Accurate, Explore the Power of Export Import Data....</h1>
                                <div className="o-l fw-bold mt-2 overflow-hidden" style={{"color": "#80B0D5"}}>
                                    <ol className="ps-0"><span><i className="fa fa-check" aria-hidden="true"></i></span> Explore the Power of Export Import Data</ol>
                                    <ol className="ps-0"><span><i className="fa fa-check" aria-hidden="true"></i></span> Discover Active Lead World Wide</ol>
                                    <ol className="ps-0"><span><i className="fa fa-check" aria-hidden="true"></i></span> Track Your Competitor</ol>
                                    <ol className="ps-0"><span><i className="fa fa-check" aria-hidden="true"></i></span> Simple user experience</ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            
            <section>
                <div className="container mt-5">
                    <div className="row justify-content-center rounded smartdata">
                        <div className="col-lg-12 overflow-hidden">
                            <div className="smart mt-4 overflow-hidden" data-aos="fade-down">
                                <h1 style={{"color":" #8BB0D5"}}>Why <span className="fw-bold" style={{"color":" #2356BC"}}>Accurate?</span></h1>
                                <p style={{"color":" #414D56"}} className="fw-bold">We have shipment records of 80+ countries, and you can access them all through a simple interface. These records are compiled after collating actual shipping and customs documents like shipping bills, bills of entries, EGM, etc. You can filter the records based on requirements (import or export). Connections play an important role in business, and this database of shipment records will help you find some profitable buyers and suppliers for your trading business.</p>
                                <p style={{"color":" #414D56"}} className="fw-bold">
                                    India Customs data is the imports and exports data of products imported in and exported from India. It is very useful for global import export business for exporters/suppliers and importers/buyers to do market research and analysis of trade business</p><p style={{"color": "#414D56"}} className="fw-bold">
                                    This one gives stats-based information about products/goods exporting from India along with details of trading partners.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div data-aos="fade-down" className="overflow-hidden">
                                <h1 className="text-center fw-bold" style={{"color": "#8BB0D5"}}>The benefits of Join US.</h1>
                                <p className="text-center fw-bold" style={{"color": "#414D56"}}>We Provide Solutions & Not Just A Service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <div className="container">
                    <div className="row crds">
                        <div className="col-lg-4 col-md-12 mt-3">
                            <div className="card crd-outline border-card overflow-hidden" style={{"backgroundColor":"#12151F"}}>
                                <div className="card-body overflow-hidden" data-aos="fade-down">
                                    <div className="crd-img icon-size overflow-hidden">
                                        <img alt={Math.floor(Math.random() * 100)} src={Img2} className="img-fluid"/>
                                    </div>
                                    <div className="card-title t-text mt-3 text-center overflow-hidden" style={{"color":"#8BB0D5"}}>                                      <h4>Discover Trading partner</h4>
                                    </div>
                                    <div className="card-text justify-content-center fw-bold" style={{"color": "#414D56"}}>
                                        <p className="font-13">Find most suitable buyer and supplier for your product.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mt-3">
                            <div className="card crd-outline border-card overflow-hidden" style={{"backgroundColor":"#12151F"}}>
                                <div className="card-body  overflow-hidden" data-aos="fade-up">
                                    <div className="crd-img icon-size overflow-hidden">
                                        <img alt={Math.floor(Math.random() * 100)} src={Img3} className="img-fluid"/>
                                    </div>
                                    <div className="card-title t-text mt-3 text-center   overflow-hidden" style={{"color": "#8BB0D5"}}>
                                        <h4>Competitor Analysis</h4>
                                    </div>
                                    <div className="card-text justify-content-center fw-bold" style={{"color": "#414D56"}}>
                                        <p className="font-13">
                                            Analyse your competitor before making a move.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mt-3">
                            <div className="card crd-outline border-card   overflow-hidden" style={{"backgroundColor":"#12151F"}}>
                                <div className="card-body  overflow-hidden" data-aos="fade-right">
                                    <div className="crd-img icon-size overflow-hidden">
                                        <img alt={Math.floor(Math.random() * 100)} src={Img4} className="img-fluid"/>
                                    </div>
                                    <div className="card-title t-text mt-3 text-center   overflow-hidden" style={{"color": "#8BB0D5"}}>
                                        <h4>Research Indian Market</h4>
                                    </div>
                                    <div className="card-text justify-content-center fw-bold" style={{"color":"#414D56"}}>
                                        <p className="font-13">
                                            Discover new opportunities in Indian Market.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 className="text-center mt-4" style={{"color":"#8BB0D5"}}>The core features of <span className="fw-bold">Accurate</span></h1>
                        <div className="col-md-6">
                            <div className="text-1 mt-5 overflow-hidden d-lg-flex text-lg-start text-center " data-aos="fade-left">
                                <div className="icon-point mb-3">
                                    <img alt={Math.floor(Math.random() * 100)} src={Img5} className="img-fluid"/>
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="fw-bold" style={{"color": "#8BB0D5"}}>Obtain an Analytical Report for Strategic Planning </h4>
                                    <div className="mt-3">
                                        <p className="justify-text fw-bold" style={{"color": "#414D56"}}>
                                            With the help of efficient BI algorithms, we offer a summary of International as well as India trade data that saves your time and effort. Moreover, this report is free from mistakes that anyone can perform while manually analyzing the plethora of records.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-1 mt-5 overflow-hidden  d-lg-flex text-lg-start text-center" data-aos="fade-left">
                                <div className="icon-point mb-3">
                                    <img alt={Math.floor(Math.random() * 100)} src={Img6} className="img-fluid"/>
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="fw-bold" style={{"color" : "#8BB0D5"}}>Customized Reports to Cater to your Needs</h4>
                                    <div className="mt-3">
                                        <p className="justify-text fw-bold" style={{"color": "#414D56"}}>
                                            We understand that every businessman has different requirements. Hence we provide customized reports with global and India shipment data that are prepared to cater to core problems. The layout of the report is kept in a graphical layout to make it more understandable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-1 mt-5 overflow-hidden d-lg-flex text-lg-start text-center" data-aos="fade-left">
                                <div className="icon-point mb-3">
                                    <img alt={Math.floor(Math.random() * 100)} src={Img7} className="img-fluid"/>
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="fw-bold" style={{"color": "#8BB0D5"}}>Deep Analysis</h4>
                                    <div className="mt-3">
                                        <p className="overflow-hidden justify-text fw-bold" style={{"color": "#414D56"}}>
                                            Our tool is integrated with BI-powered technology to deliver in-depth analysis on the filtered data and generate a report that can help the management know the insights of the industry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-1 mt-5 overflow-hidden d-lg-flex text-lg-start text-center" data-aos="fade-left">
                                <div className="icon-point mb-3">
                                    <img alt={Math.floor(Math.random() * 100)} src={Img8} className="img-fluid"/>
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="fw-bold" style={{"color": "#8BB0D5"}}>Export Reports in your Desired Format </h4>
                                    <div className="mt-3">
                                        <p className="justify-text fw-bold" style={{"color": "#414D56"}}>
                                            You can export the reports in various formats like PDF and Excel to save them in the local storage. Moreover, you can directly take a printout of the reports with a single click.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-1 mt-5 overflow-hidden d-lg-flex text-lg-start text-center" data-aos="fade-left">
                                <div className="icon-point mb-3">
                                    <img alt={Math.floor(Math.random() * 100)} src={Img9} className="img-fluid"/>
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="fw-bold" style={{"color": "#8BB0D5"}}>User-friendly experience</h4>
                                    <div className="mt-3">
                                        <p className="justify-text fw-bold" style={{"color": "#414D56"}}>
                                            Our upper-most priority is to create a user-friendly environment for the community. Hereby is our main focus to provide a complete seamless experience by developing the total simplicity into Accurate.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-1 mt-5 overflow-hidden d-lg-flex text-lg-start text-center" data-aos="fade-left">
                                <div className="icon-point mb-3">
                                    <img alt={Math.floor(Math.random() * 100)} src={Img10} className="img-fluid"/>
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="fw-bold" style={{"color": "#8BB0D5"}}>Role of India in world trade </h4>
                                    <div className="mt-3">
                                        <p className="justify-text fw-bold" style={{"color": "#414D56"}}>
                                            10th biggest economy of the world that is riding the rapid train of development
                                            Skyrocketing expansion of the share of foreign trade in the country
                                            Major global exporter in a wide range of items like tea, spices, pearls, precious/semi-precious stones, medicinal and pharmaceutical products, rice, iron-ore and concentrates, leather related goods, textile yarns, fabrics garments, and tobacco.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-12 col-sm-12 mt-5">
                            <table className="table table-info">
                                <thead className="">
                                    <tr>
                                        <th scope="col">NO.</th>
                                        <th scope="col">Data Type</th>
                                        <th scope="col">Download Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Import Data</td>
                                        <td><a href="public/import.xlsx"><i className="fa fa-download"></i></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Export Data</td>
                                        <td><a href="public/export.xlsx"><i className="fa fa-download"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="pt-5 pb-2 text-center text-lg-start bg-color-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="p-3">
                                <div className="pb-3 footer-logo ms-auto me-auto ms-lg-0 me-lg-0">
                                    <a className="navbar-brand" href="#section">
                                        <img alt={Math.floor(Math.random() * 100)} src={Img1} className="img-fluid"/></a>
                                </div>
                                <p className="text-white">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>Email: info@accurate.io</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 text-right">
                            <div className="p-3">
                                <div className="ms-2">
                                    <h5 className="text-white">Contact US</h5>
                                </div>
                                <div className="ul-list-footer mt-3">
                                    <ul className="d-lg-flex">
                                        <li className="ms-lg-2">
                                            <a href="https://wa.me/+919624092064" target="_blank" rel="noreferrer" className="text-decoration-none text-white hover-effect-color">
                                                <div className="icon-point-1 mt-1">
                                                    <i className="fab fa-whatsapp"></i>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="ms-lg-2">
                                            <a href="https://telegram.me/ashishpatel1997" target="_blank" rel="noreferrer" className="text-decoration-none text-white hover-effect-color">
                                                <div className="icon-point-1 mt-1">
                                                    <i className="fab fa-telegram-plane"></i>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
}

export default Body;

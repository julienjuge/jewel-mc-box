import React, {Component} from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FiChevronUp} from "react-icons/fi";
import {Link} from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Breadcrumb from "./common/Breadcrumb";
import Lightbox from "react-image-lightbox";
import FooterTwo from "../component/footer/FooterTwo";

const TabOne = [
    {
        image: '01',
        bigImage: '/assets/images/perso1.jpeg',
    },
    {
        image: '02',
        bigImage: '/assets/images/perso2.jpeg',
    },
    {
        image: '03',
        bigImage: '/assets/images/perso3.jpeg',
    }
]

class BlogDetailsPersonnalise extends Component {
    constructor() {
        super()
        this.state = {
            tab1: 0,
            isOpen: false,
            isOpenVideo: false,
        };
        this.openModal = this.openModal.bind(this)
        this.openModalVideo = this.openModalVideo.bind(this);
    }

    openModal() {
        this.setState({isOpen: true})
    }

    openModalVideo() {
        this.setState({isOpenVideo: true});
    }

    render() {
        const {tab1, isOpen, isOpenVideo} = this.state;
        return (
            <React.Fragment>
                <PageHelmet pageTitle='Blog Details'/>
                {/* Start Header Area  */}
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png"/>
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'PERSONNALISE'}/>
                {/* End Breadcrump Area */}

                {/* Start Blog Details */}
                <div className="rn-blog-details pt--110 pb--70 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-wrapper">
                                    <div className="inner">
                                        <p>Personnalisation de votre "JEWEL MC BOX" en fonction de votre véhicule</p>
                                        <p>Aussi bien sur la structure que sur la décoration</p>
                                        {/* Start Portfolio Area  */}
                                        <div className="container">
                                            <div className="row">
                                                {TabOne.map((value, index) => (
                                                    <div className="col-lg-12" key={index}>
                                                        {isOpen && (
                                                            <Lightbox
                                                                mainSrc={TabOne[tab1].bigImage}
                                                                nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                                                prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                                                onCloseRequest={() => this.setState({isOpen: false})}
                                                                onMovePrevRequest={() =>
                                                                    this.setState({
                                                                        tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                                                    })
                                                                }
                                                                onMoveNextRequest={() =>
                                                                    this.setState({
                                                                        tab1: (tab1 + 1) % TabOne.length,
                                                                    })
                                                                }
                                                            />
                                                        )}
                                                        {
                                                            index === 0 && <div className="item-portfolio-static">
                                                                <div onClick={() => this.setState({
                                                                    isOpen: true,
                                                                    tab1: index
                                                                })}>
                                                                    <div className="portfolio-static">
                                                                        <div className="thumbnail-inner">
                                                                            <div className="thumbnail">
                                                                                <a href="#portfolio-details">
                                                                                    <img
                                                                                        src={`/assets/images/perso1.jpeg`}
                                                                                        alt="Portfolio Images"/>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="content">
                                                                            <div className="inner">
                                                                                <p>{value.category}</p>
                                                                                <h4><a
                                                                                    href="#portfolio-details">{value.title}</a>
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* End Portfolio Area  */}
                                        <p className="mt--40"> TEXT EXPLICATIF </p>

                                        <div className="video-wrapper position-relative mb--40">
                                            <div className="thumbnail">
                                                <img src="/assets/images/perso3.jpeg" alt="Blog Images"/>
                                            </div>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpenVideo}
                                                        videoId='j78OXKRCFUg'
                                                        onClose={() => this.setState({isOpenVideo: false})}/>
                                            <button className="video-popup position-top-center"
                                                    onClick={this.openModalVideo}><span className="play-icon"></span>
                                            </button>
                                        </div>
                                        <p className="mb--0">There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some form, by
                                            injected humour, or randomised words which don't look even slightly
                                            believable. If you are going to use a passage of Lorem Ipsum. You need to be
                                            sure there isn't anything embarrassing hidden in the middle of text. All the
                                            Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.
                                            Necessary, making this the first true generator on the Internet. It re are
                                            many variations of passages of Lorem Ipsum available, but the majority have
                                            suffered alteration in some form, by injectedeed eedhumour, or randomised
                                            words which don't look even slightly believable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Details */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp/>
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <FooterTwo/>

            </React.Fragment>
        )
    }
}

export default BlogDetailsPersonnalise;
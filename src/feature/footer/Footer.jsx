import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTelegram, faLinkedin ,faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
import logo from "../../image/Ebus-logo-White.png";
import sabt from "../../image/sabt.jpg";
import bazar from "../../image/bazar-2.png"

export default function Footer(){
    return <div>
        <div className="container-fluid d-flex flex-column flex-md-row justify-content-between background-footer">
            <div className="text-dark col-xs-6 col-md-3  order-2 order-md-1 mt-5">
                <div className="mb-3 d-flex align-items-baseline">
                    <h4>ایباس</h4>
                </div>
                <div className="mt-3">
                    <ul>
                        <li className="limarker">
                            <span className="limarker">استرداد بلیط</span>
                        </li>
                        <li className="limarker">
                            <span className="limarker">سوالات متداول </span>
                        </li>
                        <li className="limarker">
                            <span className="limarker">درباره ما</span>
                        </li>
                        <li className="limarker">
                            <span className="limarker">تماس با ما</span>
                        </li>
                        <li className="limarker">
                            <span className="limarker">فرصت های شغلی</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-dark col-xs-6 col-md-3  order-2 order-md-1 mt-5">
                <div className="mb-3 d-flex align-items-baseline">
                    <h4>راهنما</h4>
                </div>
                <div className="mt-3">
                    <ul>
                        <li className="limarker">
                            <span className="limarker">سوالات متداول </span>
                        </li>
                        <li className="limarker">
                            <span className="limarker">قوانین و مقررات</span>
                        </li>
                        <li className="limarker">
                            <span className="limarker">راهنمای خرید</span>
                        </li>
                        <li className="limarker">
                            <span className="limarker">حقوق مسافر</span>
                        </li>
                        <li className="limarker">
                            <span className="limarker">حقوق مشتریان</span>
                        </li>
                        <li className="limarker">
                            <span className="limarker">سرویس دربستی</span>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="text-dark col-xs-6 col-md-3  order-2 order-md-1 mt-5">
                <div className="mb-3">
                    <h4>دانلود اپلیکیشن</h4>
                </div>
                <div className="mt-3 dis">
                    <button><img src={bazar} className="image-foot"/>دریافت از بازار</button>
                    <button><img src="https://www.dailymobile.ir/wp-content/uploads/2014/12/topic_google_play.png" className="image-foot"/>دریافت از google play</button>
                </div>
                <div className="mt-3 d-flex flex-column email">
                <span>شماره تماس : 02171057305</span>
                <span>فکس : 33737912 , 33737932</span>
                <span>ادرس پست الکترونیکی : info@ebus.ir</span>
                </div>
            </div>
            
            <div className="text-dark col-xs-6 col-md-3  order-2 order-md-1 mt-5">
                <div className="mt-3 d-flex-column ">
                    <ul className="ullogo">
                        <a href="https://trustseal.enamad.ir/?id=228758&Code=OuykS0b5WnPJNUuuMY9L">
                        <img src={sabt} alt="" className='width-sabt'/>
                        </a>
                    </ul>
                    
                </div>
            </div>
        </div>
        <div className="footer d-flex flex-lg-column gray p-2">
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                    <div className="mt-1">
                        <span className="d-flex flex-wrap">
                            <a className="mb-1 limarker col-12 col-md-1 d-flex justify-content-center align-items-center active">
                                <img className=" logo" src={logo} alt="" />
                            </a>
                            <span className="my-2 col-12 col-md-10 text-right font-size me-3">کلیه حقوق این سایت محفوظ و متعلق به راهکار سفر سروین می‌باشد.</span>
                        </span>
                    </div>
                    <div className="text-dark mt-1">
                        <div className="d-flex justify-content-around">
                            <div className='p-1 circle ms-1'>
                                <a href="https://www.linkedin.com/company/ebus-ir/">
                                    <FontAwesomeIcon icon={faLinkedin} className="gray-color"/>
                                </a>
                            </div>
                            <div className='p-1 circle ms-1'>
                                <a href="https://twitter.com/ebus.ir">
                                    <FontAwesomeIcon icon={faTwitter} className="gray-color"/>
                                </a>
                            </div>
                            <div className='p-1 circle ms-1'>
                                <a href="https://www.pinterest.com/ebusiran">
                                    <FontAwesomeIcon icon={faPinterest} className="gray-color" />
                                </a>
                            </div>
                            <div className='p-1 circle ms-1'>
                                <a href="https://www.telegram.com">
                                    <FontAwesomeIcon icon={faTelegram} className="gray-color"/>
                                </a>
                            </div>
                            <div className='p-1 circle ms-1'>
                                <a href="">
                                    <FontAwesomeIcon icon={faFacebook} className="gray-color"/>
                                </a>
                            </div>
                            <div className='p-1 circle ms-1'>
                                <a href="https://instagram.com/ebus.ir?utm_medium=copy_link">
                                    <FontAwesomeIcon icon={faInstagram} className="gray-color"/>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
}
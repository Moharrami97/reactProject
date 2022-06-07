import "./newsletter.css"
export default function SubscribeToNewsletter(){
    return <div className="newsletter">
            <h5>عضویت در خبرنامه</h5>
            <div className="mb-3 mt-4 text">با عضویت در خبرنامه از آخرین اخبار و جشنواره های ایباس باخبر شوید</div>
            <input type="email" placeholder="ایمیل خود را وارد کنید"/>
            <br/>
            <input type="submit" value="ثبت"/>
        </div>

}
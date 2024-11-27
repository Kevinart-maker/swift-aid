import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Donate = () => {
    const [view, setView] = useState(false)
    const navigate = useNavigate()

    const viewable = view ? 'viewable' : 'not-viewable'
    
    const payments = [
        {
            id: 1,
            img: '/assets/paypal.png',
            title: 'Paypal',
        },
        {
            id: 2,
            img: '/assets/google-pay.png',
            title: 'Google Paypal',
        },
        {
            id: 3,
            img: '/assets/apple-pay.png',
            title: 'Apple Pay',
        },
        {
            id: 4,
            img: '/assets/visa.png',
            title: 'VISA',
        },
        {
            id: 5,
            img: '/assets/master.png',
            title: 'Master Card',
        },
        {
            id: 6,
            img: '/assets/credit.png',
            title: 'Credit Card',
        },
        {
            id: 7,
            img: '/assets/tuk.png',
            title: 'Tuks Balance',
        },
    ]

    const paymentList = payments.map(payment => (
        <div key={payment.id} className="payment-list">
            <span>
                <img src={payment.img} alt={payment.title} />
                <span>{payment.title}</span>
            </span>
            <i className="fa-solid fa-chevron-right"></i>
        </div>
    ))
    
    return (
        <div className="donate-container">
            <h2><i className="fa-solid fa-arrow-left" onClick={()=> navigate('/')}></i> Donate</h2>

            <div className="main">
                <div className="input">
                    <input type="number" placeholder="Amount" />
                    <span>$209.97</span>
                </div>
                <div className="line"></div>
                <div className="payment">
                    <div className="head">
                        <h3>Payment Method</h3>
                        <span onClick={()=> setView(true)}>Change</span>
                    </div>
                    <div className="payment-method">
                        <img src="/assets/paypal.png" alt="paypal" />
                        <span>PayPal</span>
                    </div>
                </div>
            </div>

            <div className={`payment-method-list ${viewable}`}>
                <div className="head">
                    <i className="fa-solid fa-xmark" onClick={()=> setView(false)}></i>
                    <p>Payment Method</p>
                </div>

                <div className="lists">{paymentList}</div>
            </div>

            <div className="btn" onClick={()=> navigate('/donatesuccess')}>Donate</div>
        </div>
    );
}
 
export default Donate;
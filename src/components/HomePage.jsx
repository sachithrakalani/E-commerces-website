import image from "./../../public/assets/images/1st.avif";
import image2 from "./../../public/assets/images/2nd.png";
import Footer from "./Footer";
import style from "./homepage.module.css";

export default function HomePage() {
  return (
    <div>
      <div className={style.firstsec}>
        <div>
          <img src={image} alt="wines" className={style.img} />
        </div>
        <div className={style.text}>
          <h1>Best picks</h1>
          <p className={style.normaltext}>
            Get great value and seamless service with these brilliant wines,
            available direct
            <br /> from Vivino and a selection of our best merchant partners
          </p>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.detailsandimg}>
          <div className={style.imgandprice}>
            <div>
              <img src={image2} alt="wine" className={style.wineimg} />
            </div>
            <div>
              <button className={style.pricebtn}>$99</button>
            </div>
          </div>
          <div className={style.details}>
            <div>Casa Piene</div>
            <div style={{ fontWeight: "bold" }}>Cabernet Sauvignon</div>
            <div>Nepa Valley, United State</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

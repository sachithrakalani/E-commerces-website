import footer1 from "./../../public/assets/images/footer1.jpg";
import footer2 from "./../../public/assets/images/footer2.jpg";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={style.main}>
        <div className={style.firstsec}>
          <div className={style.title}>
            <h1>
              Trusted by millions to discover and buy the right wine every time.
            </h1>
          </div>

          <div className={style.links}>
            <p>
              <i className="fas fa-wine-bottle"></i>
              Shop the world’s largest wine marketplace
            </p>

            <p>
              <i className="fas fa-user-plus"></i>
              Our support team is always here to help
            </p>

            <p>
              <i className="fas fa-box"></i>
              Careful delivery right to your doorstep
            </p>

            <p>
              <i className="fas fa-star"></i>
              Check honest reviews of any wine before purchase
            </p>
          </div>
        </div>
        <div className={style.secondsec}>
          <div className={style.imagediv}>
            <img src={footer1} className={style.images} />
            <img src={footer2} className={style.images} />
          </div>
          <div className={style.links}>
            <a href="">App</a>
            <br />
            <a href="">About</a>
            <br />
            <a href="">Primium</a>
            <br />
            <a href="">Contact</a>
            <br />
            <a href="">Gifting</a>
            <br />
          </div>
        </div>
      </footer>
    </div>
  );
}

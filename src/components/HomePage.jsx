import image from "./../../public/assets/images/1st.avif";
import image2 from "./../../public/assets/images/2nd.png";

export default function HomePage() {
  return (
    <div>
      <div>
        <div>
          <img src={image} alt="wines" />
        </div>
        <div>
          <h1>Best picks</h1>
          <p>
            Get great value and seamless service with these brilliant wines,
            available direct
            <br /> from Vivino and a selection of our best merchant partners
          </p>
        </div>
      </div>
      <div>
        <img src={image2}></img>
      </div>
    </div>
  );
}

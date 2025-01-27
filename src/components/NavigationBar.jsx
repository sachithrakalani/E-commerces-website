import style from "./navigationbar.module.css";

export default function NavigationBar() {
  return (
    <div style={{ position:"fixed",width:"100%"}}>
      <header className={style.navbar}>
        <div className={style.navbarfirst}>
          <h3 className={style.title}>VIVINO</h3>
          <input
            className={style.searchbar}
            placeholder="Search for Wines..."
          />
          <h3 className={style.links}>sign In </h3>
          <h3 className={style.links}>Cart</h3>
        </div>
        <div className={style.navbarsecond}>
          <h3>Wines</h3>
          <h3>Offers</h3>
          <h3>Grapes</h3>
        </div>
      </header>
    </div>
  );
}

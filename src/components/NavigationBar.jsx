import style from "./navigationbar.module.css";

export default function NavigationBar() {
  return (
    <div style={{ position: "fixed", width: "100%" }}>
      <header className={style.navbar}>
        <div className={style.navbarfirst}>
          <h3 className={style.title}>VIVINO</h3>
          <div className={style.search}>
            <i className={`fas fa-search ${style.searchIcon}`}></i>
            <input
              className={style.searchbar}
              placeholder="Search for Wines..."
            />
          </div>
          <div className={style.links}>
          <i className="fas fa-user" style={{ marginRight: "25px" }}></i>
            <i className={`fas fa-shopping-cart`}></i>
          </div>
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

import style from "./addWinesPopup.module.css";

export default function AddWinesPopup() {
  return (
    <div className={style.container}>
      <button className={style.addBtn}>Add Wines</button>

      <div className={style.innerContainer}>
        <div className={style.popup}>
          <div className={style.headerStyle}>
            <h2 style={{ margin: 0 }}>Add Wine</h2>
            <button className={style.closeBtn}>✖</button>
          </div>

          <div className={style.inputField}>
            <input
              type="text"
              placeholder="Enter Wine name"
              className={style.input}
            />
            <input
              type="text"
              placeholder="Enter Wine Price"
              className={style.input}
            />
            <input
              type="text"
              placeholder="Enter Wine Description"
              className={style.input}
            />
            <input
              type="text"
              placeholder="Enter Wine Manufacture Date"
              className={style.input}
            />
            <input
              type="text"
              placeholder="Enter Wine Expiration Date"
              className={style.input}
            />
          </div>

          <button className={style.submitBtn}>Submit</button>
        </div>
      </div>
    </div>
  );
}

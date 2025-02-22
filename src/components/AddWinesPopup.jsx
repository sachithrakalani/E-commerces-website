export default function AddWinesPopup() {
  return (
    <div>
      <button>Add Wines</button>

      <div>
        <div>
          <div>
            <h2>Add Wine</h2>
            <button>✖</button>
          </div>

          <div>
            <input type="text" placeholder="Enter Wine name" /><br /><br />
            <input type="text" placeholder="Enter Wine Price" /><br /><br />
            <input type="text" placeholder="Enter Wine Description" /><br /><br />
            <input type="text" placeholder="Enter Wine Manufacture Date" /><br /><br />
            <input type="text" placeholder="Enter Wine Expiration Date" /><br /><br />
          </div>

          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}


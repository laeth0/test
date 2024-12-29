import React from "react";

export default function Add1 (){
    return (
  <div className="container">
  <div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon1">@</span>
    <input type="text" className="form-control" placeholder="Product Name" aria-label="Username" aria-describedby="basic-addon1" />
  </div>
  <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Product Description " aria-label="Recipient's username" aria-describedby="basic-addon2" />
    <span className="input-group-text" id="basic-addon2">talk about the product</span>
  </div>
  <div className="mb-3">
    <label htmlFor="basic-url" className="form-label">URL Product Picture</label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon3">https:///assets//</span>
      <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
    </div>
    <div className="form-text" id="basic-addon4">give us a clear picture for the product</div>
  </div>
  <div className="input-group mb-3">
    <span className="input-group-text">$</span>
    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
    <span className="input-group-text">.00</span>
  </div>
  <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Producer Name" aria-label="Username" />
    <span className="input-group-text">@</span>
    <input type="text" className="form-control" placeholder="Producer Email" aria-label="Server" />
  </div>
  <div className="input-group">
    <span className="input-group-text">notes</span>
    <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
  </div>
</div>

    )
}

import React from "react";

function GetByLabelText() {
  return (
    <div>
      <label htmlFor="getByLabelText">Get By Label Text</label>
      <input type="text" id="getByLabelText" />
      <label>
          <input type='checkbox' id='terms' /> I agree to the terms & conditions.
        </label>
    </div>
  );
}

export default GetByLabelText;

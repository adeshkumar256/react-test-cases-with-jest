function Application() {
  return (
    <form>
      <div>
        <h1>heading 1</h1>
        <h2>heading 2</h2>
      </div>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />
      </div>
      <div>
        <label htmlFor='bio'>Bio</label>
        <textarea id='bio' name='bio' />
      </div>
      <div>
        <label htmlFor='jobLocation'>Job Location</label>
        <select id='jobLocation'>
          <option value=''>Select a country</option>
          <option value='USA'>USA</option>
          <option value='Australia'>Australia</option>
          <option value='Nepal'>Nepal</option>
          <option value='India'>India</option>
        </select>
      </div>

      <div>
        <label>
          <input type='checkbox' id='terms' /> I agree to the terms & conditions.
        </label>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Application

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">TASKO.</div>



      <div className='btn-box'>


        <button className="new-task-btn">
          + Add Tasks
        </button>

      </div>
    </nav>
  )
}

export default Navbar
import {NavLink} from 'react-router'

function Header() {
  return (
      <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" href="#">Navbar</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
                            <NavLink class="nav-link" to="/about">About</NavLink>
                            <NavLink class="nav-link" to="/contact">Contact</NavLink>
                        </div>
                </div>
  </div>
</nav>
      </div>
  )
}

export default Header
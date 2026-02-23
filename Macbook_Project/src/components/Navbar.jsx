import { navLinks } from '../constants'

const Navbar = () => {
  const base = import.meta.env.BASE_URL
  return (
    <header>
        <nav>
            <img src={`${base}logo.svg`} alt="Apple logo" />

            <ul>
                {navLinks.map((link)=>(
                    <li key={link.label}>
                        <a href={link.path}>{link.label}</a>
                    </li>
                ))}
            </ul>

            <div className='flex-center gap-3'>
                <button>
                    <img src={`${base}search.svg`} alt="Search" />
                </button>
                <button>
                    <img src={`${base}cart.svg`} alt="Cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
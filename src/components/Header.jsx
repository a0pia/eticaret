import CartIcon from "./CartIcon.jsx"
import './header.css'

const Header = ({cart}) => {
  return (
    <div className="containerheader">
    <div className="flex justify-between items-center mb-6">
        <h1 id="baslik" className='text-3xl font-semibold '>React ve Tailwind CSS Seepet Uygulaması</h1>
       <CartIcon cart={cart} />
    </div>
    </div>
  )
}
 
export default Header  
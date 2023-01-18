import './index.scss'
import { Link } from 'react-router-dom'
import memoji from '../../assets/images/MeMoji.png'

const Sidebar =() => (
<div className='nav-bar'>
<h1>Sidebar</h1>
  <Link className='logo' to='/'><img src={memoji}/></Link>
  <h1>Kay Watts</h1>
  <nav></nav>
</div>
)
export default Sidebar
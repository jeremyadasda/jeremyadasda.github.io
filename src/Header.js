    import Pepito from "./Pepito";
import logo from './logo.svg';
function Header(){
return (
    <div className="row borde">
      <div className="col-4 d-flex justify-content-center align-items-center">
        <img src={logo} className="img-fluid" id="logoimg" alt='estreya'/>
        </div>
      <div className="col-4 d-flex justify-content-center align-items-center"><Pepito/></div>
      <div className="col-4 d-flex justify-content-center align-items-center">
        <img src={logo} className="img-fluid" id="logoimg" alt='estreya'/>
        </div>
    </div>
);
}
export default Header;
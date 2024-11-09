import Slider1 from '../images/slider1.webp';
import Slider2 from '../images/slider2.webp';
import Slider3 from '../images/slider3.webp';

function Slider(){
    return (
        <div id="demo" class="carousel slide" data-bs-ride="carousel">


  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>


  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Slider1} alt="Los Angeles" className="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src={Slider2} alt="Chicago" className="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src={Slider3} alt="New York" className="d-block w-100"/>
    </div>
  </div>

 
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>


    );
}
export default Slider;
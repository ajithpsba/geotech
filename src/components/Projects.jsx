import skytower from '../images/skytower.jpg';
import Electric from '../images/electric.jpg';
import Tunnel from '../images/tunnel.jpg';
function project(){
return(
<section id="Project">
  <div className="container">
    <h2 className='title-head'>Our Latest Project</h2>
    <div className="row">
      <div className="col-lg-12">
        <div className="projectalign">
          <div class="card" style={{ width:'350px' }}>
            <div class="card-body">
              <h4 class="card-title">Sky Tower</h4>
              <p class="card-text">Sky Tower is a state-of-the-art skyscraper project developed by Geotech as part of our commitment to pushing the boundaries of modern architecture.</p>
              <a href="#" class="btn btn-warning" style={{color: '#fff'}}>View More</a>
            </div>
            <img class="card-img-bottom" src={skytower} />
          </div>

          <div class="card" style={{ width:'350px' }}>
            <div class="card-body">
              <h4 class="card-title">Electric</h4>
              <p class="card-text">At Geotech, we’re dedicated to powering the future with safe, reliable, 
                and innovative electrical solutions. Specializing in comprehensive electrical services</p>
              <a href="#" class="btn btn-warning" style={{color: '#fff'}}>View More</a>
            </div>
            <img class="card-img-bottom" src={Electric} />
          </div>

          <div class="card" style={{ width:'350px' }}>
            <div class="card-body">
              <h4 class="card-title">Tunnel</h4>
              <p class="card-text">Our work is grounded in cutting-edge geotechnical science, allowing us to assess, plan, and execute projects with precision and care.</p>
              <a href="#" class="btn btn-warning" style={{color: '#fff'}}>View More</a>
            </div>
            <img class="card-img-bottom" src={Tunnel} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}
export default  project;

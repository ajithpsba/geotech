import Aboutus from '../images/aboutus.jpg'
function About(){
    return (
        <section id="About">
            
            <div className="container">
            <h2 className='title-head' >About US</h2>
        <div className="row">
            <div className="col-lg-5">
                
            <img className='aboutimg' src={Aboutus} alt="" />
            </div>
            <div className="col-lg-7">
                <h3 className='title-para' >Who Are We?</h3>
                <p className='text-para'>At GeoTech
                    , we’re more than just a construction company 
                    – we’re a team of skilled professionals dedicated to building dreams 
                    and shaping futures. With years of industry experience, we specialize 
                    in delivering high-quality construction services that meet the unique
                     needs of every client, whether it’s residential, commercial, or industrial 
                     projects.</p>
                     <p className='text-para'>
                     Our commitment to excellence drives us to provide innovative 
                     and sustainable solutions, ensuring that every project stands 
                     the test of time. From concept to completion, we handle every detail 
                     with precision, integrity, and safety at the forefront. Guided by strong 
                     values and a passion for construction, we’re here to bring your vision to life.
                     </p>
            </div>
        </div>
        </div>
        </section>
    );
}
export default  About;

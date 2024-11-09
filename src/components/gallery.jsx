
import gallery3 from '../images/gallery3.jpg';
import gallery4 from '../images/gallery4.jpg';
import gallery5 from '../images/gallery5.jpg';
import gallery6 from '../images/gallery6.jpg';
function gallery()
{
    return(
<section id="gallery">
    <div className="container">
    <h2 className='title-head' >Gallery</h2>
        <div className="row">
            <div className="col-lg-12">
<div className="gallery">
        <div className="gallery-item">
            <img src={gallery3} alt="Image 3"/>
        </div>
        <div className="gallery-item">
            <img src={gallery4} alt="Image 4"/>
        </div>
        <div className="gallery-item">
            <img src={gallery5} alt="Image 5"/>
        </div>
        <div className="gallery-item">
            <img src={gallery6} alt="Image 6"/>
        </div>
    </div>
    </div>
    </div>
    </div>
</section>
    );
}
export default gallery;
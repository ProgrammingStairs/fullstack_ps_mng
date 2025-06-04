import '../css/style.css';
import banner from '../images/banner.avif';
function BannerComponent(){
    return(<>
    <div id="banner">
            <img src={banner} id="banner_img" alt=""/>
        </div>
    </>);
}

export default BannerComponent;  
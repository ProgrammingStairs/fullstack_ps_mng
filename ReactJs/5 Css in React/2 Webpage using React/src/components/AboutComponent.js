import '../css/style.css';
import banner from '../images/banner.avif';
function AboutComponent(){
    return (<>
    <div id="about">
            <br/><br/>
            <center>
                <h1>About Us</h1>
            </center>
            <div id="about1">
                <img src={banner} id="about_img" alt=""/>
            </div>
            <div id="about2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi eum velit cumque debitis impedit fuga blanditiis ea neque voluptas molestias vero, saepe officia quis recusandae pariatur consequuntur, suscipit a placeat, excepturi enim voluptatibus sequi. 
                <br/><br/>
                Maxime deserunt rem in soluta perferendis veniam expedita, adipisci dolores eius maiores, ducimus dolore possimus. Exercitationem odio fugit doloribus hic quo delectus sit, eos omnis corporis, nisi incidunt aut temporibus culpa nemo nostrum distinctio saepe magnam! Consequuntur recusandae labore quibusdam quis porro est, ducimus, corrupti rem quisquam repudiandae, molestiae explicabo. Suscipit maxime quia aperiam qui adipisci perspiciatis a animi accusantium fuga, in beatae tempora veniam.
            </div>
            <br/><br/>
        </div>
        
    </>);
}

export default AboutComponent;
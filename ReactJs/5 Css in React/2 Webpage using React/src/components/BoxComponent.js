import '../css/style.css';
import banner from '../images/banner.avif';
function BoxComponent(){
    return (<>
            <div id="box">
            <div id="box1">
                <div id="section1_box">
                    <img src={banner} id="section1_img" alt=""/>
                </div>
                <div id="section2_box">
                    <button id="section1_btn">+</button>
                    <input id="section1_input" type="number" step="1" min="0" max="1000" placeholder="Enter Quantity"/>
                    <button id="section1_btn">-</button>
                </div>
            </div>
            <div id="box1">
                <div id="section1_box">
                    <img src={banner} id="section1_img" alt=""/>
                </div>
                <div id="section2_box">
                    <button id="section1_btn">+</button>
                    <input id="section1_input" type="number" step="1" min="0" max="1000" placeholder="Enter Quantity"/>
                    <button id="section1_btn">-</button>
                </div>
            </div>
            <div id="box1">
                <div id="section1_box">
                    <img src={banner} id="section1_img" alt=""/>
                </div>
                <div id="section2_box">
                    <button id="section1_btn">+</button>
                    <input id="section1_input" type="number" step="1" min="0" max="1000" placeholder="Enter Quantity"/>
                    <button id="section1_btn">-</button>
                </div>
            </div>
        </div>

    </>);
}
export default BoxComponent;
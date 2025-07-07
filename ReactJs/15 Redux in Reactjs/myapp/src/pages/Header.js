import { connect } from 'react-redux';
import '../style.css';

function Header(props){
    const {tagline} = props;
    return (<div id="header">
        <h1>Redux Example</h1>
        <h2>{tagline}</h2>    
    </div>);
}

const mapStateToProp = (state)=>{
    return {
        tagline : state.head.tagLine
    }
}
export default connect(mapStateToProp)(Header);
import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:"100%", margin:'auto'}}>
                <Grid className="landing-page">
                    <Cell col={12}>
                        <img src="https://webstockreview.net/images/professional-clipart-female-avatar-16.png"
                        alt="image"
                        className="avtar-img"
                            />
                    <div className='banner-text'>
                        <h1>   Full Mern Stack Developer </h1>
                        <hr />
                        <p> HTML   | BOOTSTARP    | CSS   | React    | NODE  | EXPRESS    | JAVASCRIPT |</p>
                        
                      <div className="social-links">
                        <a href="https://google.com" target="_blank" relf="">
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>
                        <a href="https://google.com" target="_blank" relf="noreferer noreferer" >
                            <i className="fa fa-github-square"  aria-hidden="true" />
                        </a>

                        <a href="https://google.com" target="_blank" relf="noreferer noreferer" >
                            <i className="fa fa-facebook-square"  aria-hidden="true" />
                        </a>
                        
                        <a href="https://google.com" target="_blank" relf="noreferer noreferer" >
                            <i className="fa fa-youtube-square"  aria-hidden="true" />
                        </a>

                       </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
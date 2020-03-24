import React,{Component} from 'react';
import { Grid,Cell } from 'react-mdl';


class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}> 
                    <div>
                        <img src="https://www."/>
                    </div>
                    </Cell>
                    <Cell className="resume-right" col={8}> rightside</Cell>
                  </Grid>
            </div>
        )
    }
}

export default Resume;
import React,{Component} from 'react';
import { Tabs,Tab , Card , CardText ,CardActions, CardProps, CardMedia,CardMenu,CardTitleProps,CardTitle,Button,IconButton} from 'react-mdl';

class Project extends Component{
    constructor(props){
        super(props)
        this.state={active:0}}

        toggleCate(){     
if(this.state.active===0){
    return(
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
            <Button colored>Get Started</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    )
    }
    else if(this.state.active===1){
        return(
        <div><h1>Hellow Angular</h1></div>
         )
    }
    else if(this.state.active===2){
        return(
            <div><h1>Hellow ashj</h1></div>
             )
        }
    else if(this.state.active===3){
        return(
            <div><h1>Hellow shd</h1></div>
                )
        }

}


    render(){
        return(
            <div className="cat-name">
                <Tabs activeTab={this.state.active} onChange={(tabid)=>this.setState({active:tabid})} ripple>
                 <Tab>ReactJs</Tab>
                 <Tab>NodeJs</Tab>
                 <Tab>ExpressJs</Tab>
                 <Tab>MongoDB</Tab>
                </Tabs>
                <section className="projects">
                    {this.toggleCate()}
                </section>
                
            </div>
        )
    }
}

export default Project;
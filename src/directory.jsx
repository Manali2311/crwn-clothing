import React from "react";
import MenuItem from "./menu-item";
import './directory.scss';


class Directory extends React.Component{
constructor(){
    super();

    this.state={
        section:[
            {
               title:'hats',
               imageUrl:"/Images/hat.jpeg",
                id:1
            },
            {
                title:'Jackets',
                imageUrl:"/Images/jack.jpg",
                id:2
            },
            {
                title:'Sneakers',
                imageUrl:"/Images/snekers.jpg",
                id:3
            },
            {
                title:'Womens',
                imageUrl:"/Images/women.jpg",
                id:4
            },
            {
                title:'Mens',
                imageUrl:"/Images/men.jpg",
                id:5
            }
        ]
    }
}
render(){
    return(
        <div className="directory">
    {this.state.section.map(({title , id , imageUrl})=>(
    <MenuItem key={id} title={title} imageUrl={imageUrl} />
        ))}
        </div>
    )
}
}
export default Directory;
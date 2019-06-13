import React, { Component } from "react"

import "../../../node_modules/swiper/dist/css/swiper.css"
import BScroll from "better-scroll";
class NavBaner extends Component {
    render() {
        let { navdata } = this.props
        //console.log(navdata)
        return (
            <div className="nav wrapper" ref="nav">
                <ul className="content" ref="nav_content">
                    {
                        navdata.map((item, index) => {
                            return <li key={index}>{item.name}</li>
                        })
                    }
                </ul>
            </div> 
        )
    }
    componentDidMount(){
        this.scroll = new BScroll(this.refs.nav,{
            scrollX:true,
            click:true
        })
        
    }
}
export default NavBaner;
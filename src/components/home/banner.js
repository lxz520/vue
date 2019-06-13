import React, { Component } from "react"
import Swiper from "swiper"
import "../../../node_modules/swiper/dist/css/swiper.css"
class Banner extends Component {

    render() {
        let { banners } = this.props
        return (
            <div className="swiper-container banner">
                <div className="swiper-wrapper">
                    {
                        banners.map((item, index) => {
                            return <div className="swiper-slide" key={index}><img src={item} /></div>
                        })
                    }

                </div>

                <div className="swiper-pagination"></div>


            </div>

        )
    }
    componentDidMount(){
        new Swiper(".banner",{
            loop:true,
            autoplay:{
                disableOnInteraction: false,
            }
        }) 
        
    }
}
export default Banner;
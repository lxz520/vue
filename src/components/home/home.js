import React, { Component,Fragment } from "react"
import Header from './header'
import './css/index.css'
import NavBaner from "./navBaner"
import { connect } from "react-redux"
import {
    getNavData,
    getHome_Ant,
    getGoodList,
    getGoodListMore
} from "../../action/actionCreator"
import Banner from "./banner"
import HomeClasscify from "./homeclasscify"
import Home_ant from "./home_ant"
import GoodList from "./goodlist"
import BScroll from "better-scroll"
class Home extends Component {

    render() {
        let { navdata, banners, classcify, home_ant, goodlist } = this.props
        return (
       <Fragment>
         
                    <Header />
                    <NavBaner navdata={navdata} />
                    <div className="wrapper home">
                    <div className="content">
                    <Banner banners={banners} />
                    <HomeClasscify classcify={classcify} />
                    <Home_ant home_ant={home_ant} />
                    <GoodList goodlist={goodlist} />
                </div>
            </div>
            </Fragment>
///
        )
    }
    
    componentDidMount() {
        this.props.navData();
        this.scroll = new BScroll(".home",{
            pullUpLoad:true,
            click:true,
            // scrollY:true
        });
        this.scroll.on("pullingUp",()=>{
            this.props.getHomeMore(this.props.page);
           // console.log(1)
        })

    }
    componentDidUpdate() {
        this.scroll.refresh();
        this.scroll.finishPullUp()
    }
}
const mapStateToProps = (state) => ({
    navdata: state.home.navdata,
    banners: state.home.banners,
    classcify: state.home.classcify,
    home_ant: state.home.home_ant,
    goodlist: state.home.goodlist,
    page:state.home.page
    
})
const mapDispatchToProps = (dispatch) => ({
    navData() {
        getNavData(dispatch);
        getHome_Ant(dispatch);
        getGoodList(dispatch);
    },
    getHomeMore(page){
        console.log(page)
        getGoodListMore(dispatch,page)
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
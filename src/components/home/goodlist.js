import React, { Component } from "react"
import BScroll from "better-scroll"
import Loading from "../../components/common/loading"
class GoodList extends Component {
    render() {
        let { goodlist } = this.props
        return (
            <div className="wrapper goodlist">
             
                <div className="content">
                  
                    {
                        goodlist.map((item, index) => {
                            return <div className="goods_item" key={index}>
                                <div className="goods_l">
                                    <img src={item.pic} />
                                </div>
                                <div className="goods_r">
                                    <h4>{item.d_title}</h4>
                                    <p><span>天猫价 ¥{item.yuanjia}</span><span>已售 {item.xiaoliang}</span></p>
                                    <p><span>券后价 ¥{item.jiage}</span></p>
                                </div>
                               
                            </div>
                           
                        })
                    }
                  <Loading />
                </div>
            </div>

        )
    }
    
}
export default GoodList;
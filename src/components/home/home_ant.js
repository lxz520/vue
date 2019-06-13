import React ,{Component} from "react"
class Home_ant  extends Component{

    render(){
       let {home_ant} =this.props
        return (
            <div className="Home_ant">
             <div className="Ant"><span>聚拼团</span><a href="#">查看更多拼团 ></a></div>
             <ul>
                 {
                     home_ant.map((item,index)=>{
                         return <li key={index}><img src={item.image} />
                         <p>拼团价¥{item.price}</p>
                         </li>
                     })
                 }
             </ul>
            </div>
        )
    }
}
export default Home_ant;
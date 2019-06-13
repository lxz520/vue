import React ,{Component} from "react"
class HomeClasscify  extends Component{

    render(){
        let {classcify} = this.props
        return (
            <div className="homeClasscify">
              <ul>  {
                    classcify.map((item,index)=>{
                        return <li key={index}><img src={item.img} />
                        <p>{item.title}</p>
                        </li>
                    })
                }
                </ul>
            </div>
        )
    }
}
export default HomeClasscify;
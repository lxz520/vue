import { fetch as fetchPolyFill } from "whatwg-fetch"
import fetchJsonp from "fetch-jsonp"
export const getNavData = (dispatch) => {
    //http://www.shenduzhekou.com/index.php?r=class/type 
    dispatch({
        type: "NAVDATA",
        payload: new Promise(resolve => {
            fetchPolyFill("/index.php?r=class/type").then((res) => {
                return res.json()
            }).then((data) => {
               // console.log(data)
                resolve(data)
            })
        })
    })
}
export const getHome_Ant = (dispatch) => {
    //http://www.shenduzhekou.com/index.php?r=realtime/waplist&callback=jQuery19106089853585794078_1543728126041&_=1543728126042
    dispatch({
        type: "HOME_ANT",
        payload: new Promise(resolve => {
            //let url = "/index.php?r=realtime/waplist&_=1543728126042";
            fetchJsonp("http://www.shenduzhekou.com/index.php?r=realtime/waplist&_=1543728126042").then(res => res.json()).then((data) => {
                //console.log(data)
                resolve(data)
            })
        })
    })

}
//http://www.shenduzhekou.com/index.php?r=index/ajaxnew&page=1
export const getGoodList=(dispatch)=>{
    dispatch({
        type:"GOODLIST",
        payload:new Promise(resolve=>{
            fetchPolyFill("/index.php?r=index/ajaxnew&page=1").then(res=>res.json()).then((data)=>{
               // console.log(data)
               resolve(data)
            })
        })
    })
}
//http://www.shenduzhekou.com/index.php?r=index/ajaxnew&page=2&cac_id=cXVlcnlUaGVuRmV0Y2g7Njs2MTI5MzQyMjg2OkJWRVVlVFRLUzF1aGVYUW52RkhvQkE7NjEyOTAyNDY4NTpKTmxzUWI5SVJwcVVqMkV6YzRXd2hBOzcxOTgwODM2NjQ6M3BudXQ4azhUdHEtVlZIcU9qZUwzdzs3MTk4MTU1OTkzOjR0b09PZUxJUlNHaTcyNmducFpPekE7NjEyOTM0MjI4MzpCVkVVZVRUS1MxdWhlWFFudkZIb0JBOzYxMjkwMjQ2ODQ6Sk5sc1FiOUlScHFVajJFemM0V3doQTswOw%3D%3D
// http://www.shenduzhekou.com/index.php?r=index/ajaxnew&page=2&cac_id=cXVlcnlUaGVuRmV0Y2g7Njs2MTEzNTc5MTg3OkJWRVVlVFRLUzF1aGVYUW52RkhvQkE7NjExMzI2MTMwMDpKTmxzUWI5SVJwcVVqMkV6YzRXd2hBOzcxOTAyMDE2MDE6M3BudXQ4azhUdHEtVlZIcU9qZUwzdzs3MTkwMjczNjM5OjR0b09PZUxJUlNHaTcyNmducFpPekE7NjExMzU3OTE4ODpCVkVVZVRUS1MxdWhlWFFudkZIb0JBOzYxMTMyNjEzMDE6Sk5sc1FiOUlScHFVajJFemM0V3doQTswOw%3D%3D
export const getGoodListMore=(dispatch,page)=>{
    dispatch({
        type:"GOODLIST_More",
        payload:new Promise(resolve=>{
            let MoreUrl="/index.php?r=index/ajaxnew&page="+page+"&cac_id=cXVlcnlUaGVuRmV0Y2g7Njs2MTI5MzQyMjg2OkJWRVVlVFRLUzF1aGVYUW52RkhvQkE7NjEyOTAyNDY4NTpKTmxzUWI5SVJwcVVqMkV6YzRXd2hBOzcxOTgwODM2NjQ6M3BudXQ4azhUdHEtVlZIcU9qZUwzdzs3MTk4MTU1OTkzOjR0b09PZUxJUlNHaTcyNmducFpPekE7NjEyOTM0MjI4MzpCVkVVZVRUS1MxdWhlWFFudkZIb0JBOzYxMjkwMjQ2ODQ6Sk5sc1FiOUlScHFVajJFemM0V3doQTswOw%3D%3D";
            fetchPolyFill(MoreUrl).then(res=>res.json()).then((data)=>{
              console.log(data)
               resolve(data)
            })
        })
    })
}
//


// app.use("index.php",httpProxyMiddleware({
//     target :"http://www.shenduzhekou.com",
//     changeOrigin:true
//   }))

const defaultState={
    navdata:[],
    banners:["https://img.alicdn.com/imgextra/i2/2508158775/O1CN01e1Elpj2EgzxSvc77i_!!2508158775.jpg",
    "https://img.alicdn.com/imgextra/i1/2508158775/O1CN012EgzwkcFl96X1u7_!!2508158775.jpg",
"https://img.alicdn.com/imgextra/i1/2508158775/O1CN01FaPxQf2EgzxSTiH9g_!!2508158775.jpg"],
    classcify:[{
        img:"https://img.alicdn.com/imgextra/i1/2053469401/TB2G1wjoBnTBKNjSZPfXXbf1XXa-2053469401.png",
        title:"疯狂抢购"
    },
    {
        img:"https://img.alicdn.com/imgextra/i2/2053469401/TB2Z1Qso7UmBKNjSZFOXXab2XXa-2053469401.png",
        title:"咚咚抢"
    },
    {
        img:"https://img.alicdn.com/imgextra/i3/2053469401/TB2do7GoVooBKNjSZFPXXXa2XXa-2053469401.png",
        title:"每日半价"
    },
    {
        img:"https://img.alicdn.com/imgextra/i1/2053469401/TB2qYeWoRjTBKNjSZFuXXb0HFXa-2053469401.png",
        title:"折上折"
    },
    {
        img:"https://img.alicdn.com/imgextra/i1/2053469401/O1CN012JJhsPlAS4fsv7s-2053469401.png",
        title:"聚拼团"
    },
],
    home_ant:[],
    goodlist:[],
    page:2
}
export default (state=defaultState,action)=>{
   //console.log(action)
    switch(action.type){
        case "NAVDATA_FULFILLED":
        const navState={...state};
       // console.log(action.payload.data)
        navState.navdata=action.payload.data;
        return navState;
        case "HOME_ANT_FULFILLED":
        const homeState={...state};
        homeState.home_ant=action.payload;
        return homeState;
        case "GOODLIST_FULFILLED":
        const goolistState={...state};
        goolistState.goodlist=action.payload.data.data;
        //console.log(action.payload.data.data);
        return goolistState;
        case "GOODLIST_More_FULFILLED":
       const  goolistStateMore={...state};
      goolistStateMore.goodlist=[...goolistStateMore.goodlist,...action.payload.data.data];
      //console.log(goolistStateMore.goodlist)
      goolistStateMore.page++;
     return goolistStateMore;
    }
    return state;
}
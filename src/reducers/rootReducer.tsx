const initState = {
    me: 'omurbek',
    trades:[
        {buyerUsername:"mithrandir", btc:'0.123234', messages:[
            {id:1, username:'mithrandir', message:'hi my name is mitha', time: '14:20 pm'},
            {id:2, username:'omurbek', message:'Hello Mit, how is ur day', time: '14:30 pm'},
            {id:2, username:'omurbek', message:'Hello Mit, how is ur day, Hello Mit, how is ur day, Hello Mit, how is ur day Hello Mit, how is ur day Hello Mit, how is ur day Hello Mit, how is ur day', time: '14:30 pm'},
        ],amount:'70',currency:"USD",paymentMethod:"Amazon Gift Card",status:"PAID",id:'1'},
        {buyerUsername:"mithrandir", btc:'0.525687',messages:[],amount:'30',currency:"USD",paymentMethod:"PayPal",status:"NOT PAID",id:'2'},
        {active: true, buyerUsername:"mithrandir", btc:'0.68993',messages:[],amount:'45',currency:"USD",paymentMethod:"iTunes Gift Card",status:"PAID",id:'3'},
        {buyerUsername:"mithrandir", btc:'0.2678',messages:[],amount:'12',currency:"USD",paymentMethod:"iTunes Gift Card",status:"PAID",id:'4'},
    ],
    users:{
        'mithrandir': { positive:'37',negative:'1'},
        'omurbek': { positive:'10',negative:'2'},
    }
}
const rootReducer = (state=initState, action: any)=>{
    return state;
}

export default rootReducer;


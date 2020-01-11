import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export const Chat:React.FC =(props: any)=> {
    const activeChat = props.trades[0];
    return(
        <div className="container">
            <div className="trades-list">
            <div className="trades-list-content">
                {
                    props.trades.map((trade:any)=>{
                        const hasMessages = true;
                        const statusClassname = hasMessages ? 'status hasMessage' : 'status';
                        const tradeClassName = trade.active ? 'trade-item active' : 'trade-item';
                        return (
                            <div key={trade.id} className={tradeClassName}>
                                <div className="trade-item-content">
                                    <div className="username">
                                        <div className={statusClassname} />
                                        {trade.buyerUsername} is buying
                                        </div>
                                        <div className="payment-method">{trade.paymentMethod}</div>
                                        <div className="payment-amount">{trade.amount} {trade.currency} ({trade.btc}) BTC</div>

                                </div>
                                <div className="trade-item-avatar">
                                    <img alt="avatar" src="https://www.w3schools.com/howto/img_avatar.png" />
                                    <div>{trade.status}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="trades-list-border"/>
            </div>
            <div className="trades-chat">
                <h2>{activeChat.paymentMethod}</h2>
                <div>{activeChat.buyerUsername} +{props.users[activeChat.buyerUsername].positive} / -{props.users[activeChat.buyerUsername].negative}</div>
                <hr/>
                <div>
                    {activeChat.messages.map((item:any)=>{
                        const isMe = item.username === props.me;
                        const messageClassName = isMe ? 'message-content me' : 'message-content';
                        return (
                            <div key={item.id}>
                                <div className="message-left">
                                    {isMe && <img alt="avatar" src="https://www.w3schools.com/howto/img_avatar.png" />}
                                </div>
                                <div className={messageClassName}>{item.message}</div>
                                <div className="message-right">
                                {!isMe && <img alt="avatar" src="https://www.w3schools.com/howto/img_avatar.png" />}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="trades-info">
                <div className="trades-info-border"/>
                <div className="trades-info-content">
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
  return state; //state is the reducers
}

const mapDispatchToProps = (dispatch : any) =>{
  return {
    onIncrementCounter: ()=> dispatch({type: "INCREMENT"}),
    onDecrementCounter: ()=> dispatch({type: "DECREMENT"})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Chat);


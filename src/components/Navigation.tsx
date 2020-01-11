import React from 'react';
import {Link} from 'react-router-dom';

export const Navigation:React.FC =()=> {
    return(
        <div className="navigation">
            <ul className="nav-ul">
                <li><Link to="/">Overview</Link></li>
                <li><Link to="/trades">Trades</Link></li>
                <li><Link to="/disputes">Disputes</Link></li>
                <li><Link to="/my_offers">My offers</Link></li>
                <li><Link to="/my_team">My team</Link></li>
                <li><Link to="/trade_history">Trade History</Link></li>
            </ul>
        </div>
    )
}

export default Navigation;


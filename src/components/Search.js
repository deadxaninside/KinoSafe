import React from "react";
import './search.css';

function Serch() {
    return (
        <div className="search">
            <input type="text" placeholder="Поиск" />
            <ion-icon name="search-outline"></ion-icon>
        </div>
    );
}

export default Serch;
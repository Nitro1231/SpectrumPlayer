import React from 'react';

function SideNav() {
    function openNav(e) {
        e.preventDefault();
        document.getElementById("sideNav").style.width = "250px";
    }
    function closeNav(e) {
        e.preventDefault();
        document.getElementById("sideNav").style.width = "0";
    }
    return (
        <>
            <div id="sideNav" class="sidenav">
                <a href="#" class="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
            <span class="click" onClick={openNav}>&#9776;</span>
        </>
    );
}

export default SideNav;
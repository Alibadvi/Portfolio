import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import React from 'react';
import {log} from "node:util";
//first method
// const enum statusItems2 {
//     Active = 'active',
//     Terminated = 'terminated',
// }
//
//
// //second method
// const statusItems = {
//     Active: 'active',
//     Terminated: 'terminated'
// } as const
//
// type PaintOptionsKeys = keyof typeof statusItems
// type PaintOption = typeof statusItems[PaintOptionsKeys]
//
//
//
// // Necessary
// const _status: PaintOption = statusItems.Active // C
// const _status2: statusItems2 = statusItems2.Active // C
// const _status3: statusItems2 = 'active' // IC
// const _status4: PaintOption = "sth else" // IC
//
// console.log(_status)
// console.log(_status2)
// console.log(_status3)
// console.log(_status4)



function ScrollToTop() {
    // Extracts pathname property(key) from an object
    const {pathname} = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 10);

    }, [pathname]);
    return (
        <div>

        </div>);
}

export default ScrollToTop;

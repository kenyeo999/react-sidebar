import { useState } from "react"


export default function SidebarItem({item}) {
    const [open, setOpen] = useState(false)

    // return (
    //     <div className={open ? "sidebar-item open" : "sidebar-item"}>
    //         <div className="sidebar-title">
    //             <span>
    //                 <i className="bi-gear-fill"></i>
    //                 {item.title}
    //             </span>
    //             <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
    //         </div>
    //         <div className="sidebar-content">hello mellow</div>
    //     </div>
    // )

    if(item.childrens){
        return (
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
            <div className="sidebar-title">
                <span>
                    {/* if there is icon then its name is in json file wow */}
                    {item.icon && <i className={item.icon}></i>}
                    {item.title}
                </span>
                <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
            </div>
            {/* <div className="sidebar-content">hello mellow</div> */}
            <div className="sidebar-content">{item.childrens.map((child, index) => <SidebarItem key={index} item={child}/>)}</div>
        </div>
    )
}else{
    return (

            <a href={item.path || "#"} className="sidebar-item plain">
                    {/* if there is icon then its name is in json file wow */}
                    {item.icon && <i className={item.icon}></i>}
                    {item.title}
            </a>
        
    )
    }
};

import React, { useState ,useEffect} from 'react';
// import maggi from '../images/maggi.jpg';
import Menu from './MenuAPI';
import MediaCard from './MediaCard';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(Menu.map((currMenu) =>
    {
        return currMenu.category;
    })),
    "All",];

console.log(uniqueList);

const Restaurant = () =>
{
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    const [num, setNum] = useState(0);
    console.log(menuData);

    useEffect(() =>
    {   
        document.title=`Clicks${num}`;
    });
    // useEffect(() =>
    // {   
    //     document.title=`Chats${num}`;
    // },[]);

    const updateMenu = (category) =>
    {
        if (category === "All")
        {
            setMenuData(Menu);
            setNum(num+1);
            return;
        }
        const updateList = Menu.filter((currMenu) =>
        {
            return currMenu.category == category;
        })
        setNum(num+1);
        setMenuData(updateList);
    };

    return (
        <>
            <Navbar menuList={menuList} updateMenu={updateMenu} />
            <MediaCard menuData={menuData}/>

        </>
    )
}

export default Restaurant
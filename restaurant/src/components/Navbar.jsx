import React from 'react'

const Navbar = ({ updateMenu, menuList }) =>
{
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        menuList.map((currElem) =>
                        {
                            return (<button onClick={() => { updateMenu(currElem) }} className="btn-group__item">
                                {currElem}
                            </button>);
                        })
                    }
                    {/* <button onClick={() => setMenuData(Menu)} className="btn-group__item">
                        All
                    </button> */}
                </div>
            </nav>

        </>
    )
}

export default Navbar

import React from 'react'


// const Card = ({menuData}) =>
const Card = (props) =>
{
    console.log(props.menuData);

    return (
        <>
            <section className="main-card--container">
                {props.menuData.map((currMenuData) =>
                {
                    const{id,image,name,category,price,description}=currMenuData;

                    return (
                        <>
                            {/* <div className="card-container" key={currMenuData.id}> */}
                            <div className="card-container" key={id}>

                                <div className="card">

                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">
                                            {currMenuData.id}
                                        </span>

                                        {/* <span className="card-author subtle">{currMenuData.category}</span> */}
                                        <span className="card-author subtle">{category}</span>
                                        {/* <h2 className="card-title">{currMenuData.name}</h2> */}
                                        <h2 className="card-title">{name}</h2>

                                        <span className="card-description subtle">
                                        {/* {currMenuData.description} */}
                                        {description}
                                        </span>

                                        <div className="card-read">Read</div>
                                    </div>

                                    {/* <img src={currMenuData.image} alt="maggi" className="card-media" /> */}
                                    <img src={image} alt="maggi" className="card-media" />

                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )

}

export default Card

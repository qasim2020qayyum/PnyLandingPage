import React, { useEffect, useState } from 'react'
import "./InspirationalClasses.css"
import inspirationalClasses from './inspirationalClasses_data'

const InspirationalClasses = () => {
    useEffect(()=>{
        filterItem("Featured")
      },[])



    const allCategory = [...new Set(inspirationalClasses.map((curCat) => curCat.category)), ];
    const [items, setItems] = useState(inspirationalClasses);
    const [catItem, setCatItem] = useState(allCategory)



    const filterItem = (categoryItem) => {
        const updatedItems = inspirationalClasses.filter((currentElem) => {
            return currentElem.category === categoryItem;
        })
        setItems(updatedItems);
    }

    return (
        <>
            <div className='inspirationalClasses'>
                <div className='InspirationalClasses_heading'><h1>Explore Inspirational Classes</h1> </div>
                <div className='inspirationalClasses_button_whole'>
                    {
                        catItem.map((elem) => {
                            return (
                                <>
                                    <button class="inspirationalClasses_button" role="button" onClick={() => filterItem(elem)}>{elem}</button>
                                </>
                            )
                        })
                    }
                </div>
                <div className='inspirationalClasses_cards'>
                    {
                        items.map((elem) => {
                            return (
                                <>
                                    <div className='inspirationalClasses_card'>
                                        <img src={elem.image} alt='InspirationalClasses_img' />
                                        <p>{elem.description}</p>
                                        <p>{elem.name}</p>
                                    </div>
                                </>
                            )
                        })

                    }

                </div>
            </div>
        </>
    )
}

export default InspirationalClasses

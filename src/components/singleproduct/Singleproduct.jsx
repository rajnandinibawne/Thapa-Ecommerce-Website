import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../context/productcontext'
import PageNavigation from './PageNavigation'
import MyImage from '../MyImage.jsx/MyImage'
import FormatPrice from '../../Helpers/FormatPrice'
import style  from './Singleproduct.module.css'
import Star from '../stars/Star'
import AddToCart from '../AddToCart'
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";


const API ="https://api.pujakaitem.com/api/products"


const Singleproduct=() => {
    const{getSingleProduct, isSingleLoading, singleProduct} = useProductContext();
    console.log(singleProduct)

    const {id} = useParams();//useparams to get data 
    // console.log(id);
    const {
        id:alias,
        name,
        image,
        company,
        price,
        featured,
        description,
        category,
        stock,
        stars,
        reviews,

    } = singleProduct;

    useEffect(( )=> {
        // getSingleProduct( `API?id=thapaserialnoa`) 
        getSingleProduct(`${API}?id=${id}`)
    }, [])
    return (
     <div className={style.wrapper}>
        <PageNavigation title={name} />
        <div className="container">
            <div className={style.twocolumn}>
                <div className="product_images">
                <MyImage imgs={image} className={style.pictures}/> 
                </div>
                <div className={style.product_data}>
                    <h2>{name}</h2>
                    <p>{company}</p>
                    <p className="product-data-price">
                        MRP: <del>
                            <FormatPrice price= {price+120000}/>
                        </del>
                    </p>
                    <p className="product-real-price">
                        Deal of the Day : <FormatPrice price={price}/>
                    </p>
                    <p>{featured}</p>
                    <p>{description}</p>
                    <div className={style.delivery}>
                        <div className={style.data_warranty}>
                            <TbTruckDelivery className={style.warranty_icon}/>
                            <p>Free Delivery</p>
                        </div>
                        <div className={style.data_warranty}>
                        <TbReplace className={style.warranty_icon} />
                        <p>30 Days Replacement</p>
                        </div>
                        <div className={style.data_warranty}>
                            <TbTruckDelivery className={style.warranty_icon}/>
                            <p>Thapa Delivers</p>
                        </div>
                        <div className={style.data_warranty}>
                        <MdSecurity className={style.warranty_icon}/>
                        <p>2 Years Warranty</p>
                        </div>
                    </div>
                    <Star stars={stars} />
                    <p>{reviews} reviews</p>
                    <hr />
                    {stock > 0 && <AddToCart product = {singleProduct} />}
                </div>
                
            </div>
        </div>
     </div>
    )
}

export default Singleproduct
'use client'
import { useState } from "react";

const QuotationItems = ({ product }) => {
    
    const [item, setItem] = useState([]);
    const addItem = (data) => {
        setItem([...item, data]);
        
    }

    // console.log(item);
    return (
        <div className="">
            <div className="flex gap-5 justify-end pr-5">
                <button className=" btn text-xl">{item.length}</button>
                <button className=" btn">Create</button>
            </div>


            <div className=" grid grid-cols-4 gap-5 p-5">

                <div className=" space-y-5">
                    {product.map(data => {
                        if (data.category == "cctv") {
                            return (
                                <div div key={data._id} className="card bg-base-100 card-xs shadow-sm" >
                                    <div className="card-body">

                                        <h2 className="card-title">{data.productName}</h2>
                                        <p>{data.description}</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-outline cursor-default ">{data.price}</button>
                                            <button onClick={() => addItem(data)} className="btn btn-outline font-bold hover:text-blue-500">Add</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        return null;
                    }
                    )}

                </div>
                <div>
                    <div className=" space-y-5">
                        {product.map(data => {
                            if (data.category == "computer") {
                                return (
                                    <div div key={data._id} className="card bg-base-100 card-xs shadow-sm" >
                                        <div className="card-body">

                                            <h2 className="card-title">{data.productName}</h2>
                                            <p>{data.description}</p>
                                            <div className="justify-end card-actions">
                                                <button className="btn btn-outline cursor-default ">{data.price}</button>
                                                <button className="btn btn-outline font-bold hover:text-blue-500">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            return null;
                        }
                        )}

                    </div>
                </div>
                <div className=" space-y-5">
                    {product.map(data => {
                        if (data.category == "electrical") {
                            return (
                                <div div key={data._id} className="card bg-base-100 card-xs shadow-sm" >
                                    <div className="card-body">

                                        <h2 className="card-title">{data.productName}</h2>
                                        <p>{data.description}</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-outline cursor-default ">{data.price}</button>
                                            <button className="btn btn-outline font-bold hover:text-blue-500">Add</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        return null;
                    }
                    )}

                </div>
                <div>
                    <div className=" space-y-5">
                        {product.map(data => {
                            if (data.category == "others") {
                                return (
                                    <div div key={data._id} className="card bg-base-100 card-xs shadow-sm" >
                                        <div className="card-body">

                                            <h2 className="card-title">{data.productName}</h2>
                                            <p>{data.description}</p>
                                            <div className="justify-end card-actions">
                                                <button className="btn btn-outline cursor-default ">{data.price}</button>
                                                <button className="btn btn-outline font-bold hover:text-blue-500">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            return null;
                        }
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default QuotationItems;
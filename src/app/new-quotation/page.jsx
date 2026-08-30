
import QuotationItems from "@/components/QuotationItems";
import SearchBar from "@/components/SearchBar";
import { fetchProducts } from "@/lib/data";
const NewQuotation = async () => {


    const product = await fetchProducts();
    console.log(" Data  is ", typeof (product[1].category));



    return (

        <div className=" bg-slate-100">
            <SearchBar></SearchBar>
            <div className=" bg-slate-900 flex justify-between items-center m-5">
                    <h1 className=" text-2xl font-bold p-5">CCTV Items</h1>
                    <h1 className=" text-2xl font-bold p-5">Computer Items</h1>
                    <h1 className=" text-2xl font-bold p-5">Electrical Items</h1>
                    <h1 className=" text-2xl font-bold p-5">Others Items</h1>
            </div>
            <QuotationItems product={product}></QuotationItems>
        </div >
    )

};

export default NewQuotation;
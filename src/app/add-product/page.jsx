'use client'
import { TextField,Label,Input,FieldError,Select,ListBox,TextArea,Button } from "@heroui/react";

const AddDestinationPage = () => {

    const onSubmit=async(e)=>{
        e.preventDefault();
        const formData=new FormData(e.currentTarget);
        const data=Object.fromEntries(formData.entries());
        console.log(data);

        const res= await fetch('http://localhost:5000/add-product',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        const serverRes= await res.json();
        console.log(serverRes);
    }
    return (
        <div className=" container mx-auto bg-slate-200">
            
            <form
                onSubmit={onSubmit}
                className="p-10 space-y-8 w-2xl mx-auto"
            >
                <h1 className=" font-extrabold text-2xl  text-blue-800">Add New Product</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                        <TextField name="productName" isRequired>
                            <Label>Product Name</Label>
                            <Input placeholder="Hikvision / Dahua" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Country */}
                    <TextField name="productId" isRequired>
                        <Label>ID</Label>
                        <Input placeholder="CV-001/CR-0001/EC-00001/OS-#01" className="rounded-2xl" />
                        <FieldError />
                    </TextField>

                    {/* Category - Updated Select Component */}
                    <div>
                        <Select
                            name="category"
                            isRequired
                            className="w-full"
                            placeholder="Select category"
                        >
                            <Label>Category</Label>
                            <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox className=" text-black">
                                    <ListBox.Item id="Cctv" textValue="Cctv">
                                        CCTV
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Computer" textValue="Computer">
                                        COMPUTER
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Electronic" textValue="Electronic">
                                        ELECTRONICS
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Others" textValue="Others">
                                        OTHERS
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Price */}
                    <TextField name="price" type="number" isRequired>
                        <Label>Price (BDT)</Label>
                        <Input
                            type="number"
                            placeholder="1299"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField name="warranty" isRequired>
                        <Label>Warranty</Label>
                        <Input
                            placeholder="365 Days"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                        <TextField name="submitData" type="date" isRequired>
                            <Label>Add Date</Label>
                            <Input type="date" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                        <TextField name="imageUrl" isRequired>
                            <Label>Image URL</Label>
                            <Input
                                type="url"
                                placeholder="https://example.com/2mp-dome-camera.jpg"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <TextField name="description" isRequired>
                            <Label>Description</Label>
                            <TextArea
                                placeholder="Describe the product details..."
                                className="rounded-3xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>
                </div>

                {/* Buttons */}

                <Button
                    type="submit"
                    variant="outline"
                    
                    className=" rounded-none w-full bg-cyan-500 text-white"
                >
                    Add Product
                </Button>
            </form>
        </div>
    );
};

export default AddDestinationPage;
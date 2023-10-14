import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";



const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id,name, quantity, supplier, taste, category, details, photo } = coffee;

    const updateCoffee = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const updateCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(updateCoffee);

        // how send to data server

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })

        .then(res=> res.json())
        .then(data=>{
            console.log(data);

            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        })


    }

    
    return (
        <div className="py-10 w-[1320px] mx-auto ">
        <h1 className="text-4xl font-semibold">Update Coffee{name}</h1>
        <form onSubmit={updateCoffee} >
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Quantity </span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
               
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="supplier" defaultValue={supplier}  placeholder="Supplier Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste </span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details </span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            <div >
                <div className="form-control w-full mb-8">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                
               
            </div>
         
            <input type="submit" value="Update Coffee" className="btn btn-block" />
        </form>
    </div>
    );
};

export default UpdateCoffee;
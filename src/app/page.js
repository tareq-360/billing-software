const page = async() => {
  const res= await fetch(`http://localhost:5000/products`)
  const products= await res.json();
  console.log(products);


  return (
    <div className=" grid grid-cols-4 gap-5">
      {
        products.map(product => <div key={product._id} className="card bg-base-100 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={product.imageUrl}
            alt={product.productId}
            className="rounded-xl w-40 h-40" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.productName}</h2>
          <p>{product.description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">{product.price}</button>
          </div>
        </div>
      </div>)
      }
    </div>
  );
};

export default page;
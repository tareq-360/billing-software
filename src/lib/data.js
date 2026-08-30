export const fetchProducts = async() => {
    const fetchPorductsdata = async () => {
        const res = await fetch(`http://localhost:5000/products`)
        const products = await res.json();
        return products;
    }
    const products = await fetchPorductsdata();
    return products;
}
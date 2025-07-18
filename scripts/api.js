export async function getProducts() {
    const response = await fetch('https://dummyjson.com/products') // DEFAULT: GET
    const data = await response.json()

    if(!response.ok) { // deu error, 400...500
        return []
    } 
    // early return

    return data.products;
}
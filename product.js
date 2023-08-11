const products = [
  { id: 1, name: "walton Mobile phone", price: 19000 },
  { id: 2, name: "One Plus phone", price: 191000 },
  { id: 3, name: "laptop", price: 193000 },
  { id: 4, name: "Tablet", price: 194000 },
  { id: 5, name: "desktop", price: 195000 },
  { id: 6, name: "Iphone mobile", price: 192000 },
  { id: 7, name: "HTC mobile phone", price: 195000 },
  { id: 8, name: "Nokia Mobile Phone", price: 1935000 },
  { id: 9, name: "Java Mobile phone", price: 192000 },
];

function MatchFinder(products,search) {
    const matchProduct=[];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matchProduct.push(product)
        }
    }
    return matchProduct;
}


const result=MatchFinder(products,'Phone')
console.log(result)
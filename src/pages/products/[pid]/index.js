import { useRouter } from "next/router";

function ProductDetail(){
const router = useRouter();
const productId = router.query.pid;
let data="";
if(productId==1){
data="cake";
}else if(productId==2){
    data="craft";
}else{
    data="others"
}
    return <h1>About Product {data}</h1>
}

export default ProductDetail;
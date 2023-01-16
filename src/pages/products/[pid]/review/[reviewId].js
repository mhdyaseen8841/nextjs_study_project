import { useRouter } from "next/router";

function ProductReview(){
const router = useRouter();
const {pid,reviewId} = router.query;

    return <h1>review Products new({pid}) {reviewId}</h1>
}

export default ProductReview;
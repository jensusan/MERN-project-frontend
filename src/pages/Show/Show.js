import {useState} from "react";
import AddToCartForm from "../../components/Cart/AddToCartForm";
import {Wrapper} from "./Show-style"


const Show = (props) => {
    const id = props.match.params.id;
    const products = props.products;
    const product = products.find(p => p._id === id)

    //form
    const [reviewForm, setReviewForm] = useState(product.reviews)
    const [newReview, setNewReview] = useState()

    const handleChange = (event) => {
        setNewReview(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setReviewForm((prevState) => (product.reviews = [...prevState, newReview]))
        setNewReview('')
        updateReviews();
    }

    const updateReviews = async () => {
        console.log(id)
        await fetch(`${props.URL}${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(product),
        })
    }

    return(
        <Wrapper>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <div>
            <h2>${product.price}</h2>
            <h3>product details</h3>
            <p>{product.description}</p>
            <ul>
                {product.descriptionBullets.map((bullet) => (
                    <li>{bullet}</li>
                ))}
            </ul>
            <AddToCartForm />
            <h3>reviews</h3>
            {reviewForm.map((review, index) => (
                    <p key={index}>{review}</p>
                ))}
            <form onSubmit={handleSubmit}>
                <input type="text" value={newReview} onChange={handleChange}/>
                <input className="button" type="submit" value="ADD REVIEW" />
            </form>
            </div>
        </Wrapper>
    )
};

export default Show;
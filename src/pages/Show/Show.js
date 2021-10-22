import { useState } from "react"
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
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <h3>${product.price}</h3>
            <h3>product details</h3>
            <p>{product.description}</p>
            <ul>
                {product.descriptionBullets.map((bullet) => (
                    <li>{bullet}</li>
                ))}
            </ul>
            <h3>reviews</h3>
            {reviewForm.map((review, index) => (
                    <p key={index}>{review}</p>
                ))}
            <form onSubmit={handleSubmit}>
                <input type="text" value={newReview} onChange={handleChange}/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
};

export default Show;
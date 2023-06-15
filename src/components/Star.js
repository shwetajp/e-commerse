import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Star = ({ star, reviews }) => {
    console.log(star, reviews)

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {
                    star > index + 1 ? (<FontAwesomeIcon icon={faStar} style={{ color: '#f1f11f' }} />)
                        : star > number ? (<FontAwesomeIcon icon={faStarHalf} style={{ color: '#f1f11f' }} />)
                            : (< FontAwesomeIcon icon={faStar} style={{ color: 'none' }} />)
                }
            </span>
        )

    })
    return (
        <>
            <div>
                {ratingStar}({reviews})
            </div>
        </>
    )
}


export default Star
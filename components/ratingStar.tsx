import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons'

interface RatingStarProps {
  rating?: number
  count?: number
}

const RatingStar: React.FC<RatingStarProps> = ({
  count,
  rating: propsRating = 0,
}) => {
  const [rating, setRating] = useState(propsRating)
  return (
    <div className="flex items-center">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return (
          <label
            key={i}
            className={`mr-1 inline-block cursor-pointer text-sm ${
              ratingValue <= rating ? 'text-yellow-500' : 'text-light-gray2'
            }`}
          >
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className="hidden"
            />
            <FontAwesomeIcon
              icon={faStar}
              className={
                ratingValue <= rating
                  ? 'text-xxs text-yellow-500'
                  : 'text-xxs text-light-gray2'
              }
            />
          </label>
        )
      })}
      {count ? <div className="text-xxs text-light-gray">({count})</div> : 0}
    </div>
  )
}

export default RatingStar

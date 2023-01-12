import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

interface Props {
  cartNumber?: number
}

const FloatButton: React.FC<Props> = ({ cartNumber = 20 }) => {
  const [showCartNumber, setShowCartNumber] = useState(false)

  return (
    <>
      <button
        className="fixed bottom-0 right-0 m-4 rounded-full bg-primary p-4 text-white"
        onClick={() => setShowCartNumber(!showCartNumber)}
      >
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        {showCartNumber && (
          <span className="ml-2 rounded-full bg-tint p-1 text-xs font-medium text-white">
            {cartNumber}
          </span>
        )}
      </button>
    </>
  )
}

export default FloatButton

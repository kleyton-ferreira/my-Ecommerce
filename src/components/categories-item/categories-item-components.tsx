import { FunctionComponent } from 'react'

// CSS
import './categories-item.style.css'

// UTILITZ
import Category from '../../types/categories.types'

interface CategoryItemProps {
  category: Category
}

const CategoryItems: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <div
      className='category-item-container'
      style={{ backgroundImage: category.imageUrl }}
    >
      <div className='category-name'>
        <p> {category.displayName} </p>
        <p>Explorar</p>
      </div>
    </div>
  )
}

export default CategoryItems

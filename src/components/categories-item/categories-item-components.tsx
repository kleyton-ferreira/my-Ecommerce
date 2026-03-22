// UTILITZ
import { FunctionComponent } from 'react'
import Category from '../../types/categories.types'

interface CategoriesItem {
  category: Category
}

const CategoriesItems: FunctionComponent<CategoriesItem> = ({ category }) => {
  return (
    <div
      className='category-item-container'
      style={{ backgroundImage: category.imageUrl }}
    >
      <div className='category-name'>
        <p> {category.displayName} </p>
      </div>
    </div>
  )
}

export default CategoriesItems

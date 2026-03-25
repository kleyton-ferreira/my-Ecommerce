import { FunctionComponent } from 'react'

// CSS
import { CategoryItemContainer, CategoryName } from './categories-item.style'

// UTILITZ
import Category from '../../types/categories.types'

interface CategoryItemProps {
  category: Category
}

const CategoryItems: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p> {category.displayName} </p>
        <p> {category.name} </p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItems

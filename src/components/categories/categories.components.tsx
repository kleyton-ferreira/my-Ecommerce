// UTILITS
import { useState } from 'react'
import Category from '../../types/categories.types'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  return (
    <div className='categories-container'>
      <div className='categories-content'>
        {categories.map(() => (
          <CategoriesItem />
        ))}
      </div>
    </div>
  )
}

export default Categories

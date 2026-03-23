import { useEffect, useState } from 'react'

// UTILITS
import Category from '../../types/categories.types'
import axios from 'axios'
import env from '../../config/env.config'

// CSS
import { CategoriesContainer, CategoriesContent } from './categories.style'

// COMPONENTS
import CategoryItems from '../categories-item/categories-item-components'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)
      console.log({ data })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((itemsCategory) => (
          <div key={itemsCategory.id}>
            <CategoryItems category={itemsCategory} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories

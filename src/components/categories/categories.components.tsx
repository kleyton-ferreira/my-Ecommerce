import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'

// UTILITS
import Category from '../../types/categories.types'
import { categoryConverter } from '../../converters/firestore.converts'
import { db } from '../../config/firebase.config'

// STYLED COMPONENTS
import { CategoriesContainer, CategoriesContent } from './categories.style'

// COMPONENTS
import CategoryItems from '../categories-item/categories-item-components'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })
      console.log({ categoriesFromFirestore })
      setCategories(categoriesFromFirestore)
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

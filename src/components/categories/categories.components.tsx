import { useEffect, useState } from 'react'

// UTILITS
import Category from '../../types/categories.types'
import axios from 'axios'
import env from '../../config/env.config'

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
    <div className='categories-container'>
      <div className='categories-content'>Aqui vem as Categorias ( ! )</div>
    </div>
  )
}

export default Categories

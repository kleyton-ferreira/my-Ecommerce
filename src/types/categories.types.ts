import Product from "./product.types"

interface Category {
    id: string
    name: string
    displayName: string
    imageUrl: string
    products: Product[]
}

export default Category

// ESSAS CATEGORIES E OS TIPOS QUE CADA ELEMENTO SERA EXIBIDO NA TELA! QUE VEM DO BANCO DE DADOS!
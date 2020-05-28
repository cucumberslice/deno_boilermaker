import {  Router } from 'https://deno.land/x/oak/mod.ts'
import {getProducts,getProduct,updateProduct,addProduct,deleteProduct}
 from './products.ts'
const router  = new Router()

router.get('/products', getProducts)
router.get('/products/:id', getProduct)
router.post('/products',addProduct)
router.put('/products/:id',updateProduct)
router.delete('/products/:id',deleteProduct)

export default router

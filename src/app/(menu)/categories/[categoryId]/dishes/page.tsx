import { getCategoryDishes } from "@/api/categories"
import ProductList from "@/components/blocks/products-list"
import { Button } from "@/components/ui/button"

export default async function DishesPage() {
    const data = await getCategoryDishes({restaurantId: "6936d68d642389dd0f00d9ab", categoryId: "12"})
    return (<>
    <div className="">
      <form className="mx-6">   
            <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
            <div className="relative flex items-center justify-between">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
                </div>
                <input type="search" id="search" className="bg-white block w-full p-3 ps-9 bg-neutral-secondary-medium border rounded-lg border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
                <Button type="button" className="absolute right-1">Search</Button>
            </div>
        </form>

    </div>
    <div className="mb-25 mt-10 px-6">
      <ProductList products={data} />
    </div>
    </>)
}

const productList = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-6.png',
    imgAlt: 'Samsung Galaxy Watch 6',
    name: 'Samsung Galaxy Watch 6 Classic',
    price: 129,
    badges: ['Watch', 'Samsung']
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-5.png',
    imgAlt: 'Samsung Galaxy Watch 7',
    name: 'Samsung Galaxy Watch 7',
    price: 229,
    salePrice: 139,
    badges: ['Watch', 'Samsung']
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-4.png',
    imgAlt: 'Samsung Galaxy Watch Ultra',
    name: 'Samsung Galaxy Watch Ultra',
    price: 119,
    badges: ['Watch', 'Samsung']
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-3.png',
    imgAlt: 'Samsung Galaxy Watch 7',
    name: 'Samsung Galaxy Watch 7',
    price: 129,
    badges: ['Watch', 'Samsung']
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-2.png',
    imgAlt: 'Spigen Rugged Armor Pro',
    name: 'Spigen Rugged Armor Pro',
    price: 239,
    badges: ['Watch', 'Spigen']
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-1.png',
    imgAlt: 'Mosmoc Rugged No Gap',
    name: 'Mosmoc Rugged No Gap',
    price: 149,
    badges: ['Watch', 'Samsung']
  }
]

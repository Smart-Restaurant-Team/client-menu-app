import serverAxios from "@/lib/server-axios";

const getCategories = async ({restaurantId}: {restaurantId: string}) => {
    try {
        const res = await serverAxios.get(`/client/restaurants/${restaurantId}/categories`);
        console.log("Categories data:", res);
        return res.data.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        // throw error;
    }
};

const getCategoryDishes= async ({restaurantId, categoryId}: {categoryId: string, restaurantId: string})=>{
    try {
        const res = await serverAxios.get(`/client/restaurants/${restaurantId}/categories/${categoryId}/dishes`)
        console.log("Categories data:", res);
        return res.data.data;
    } catch (error) {
        console.error("Error fetching categoy diehs:", error);
        
    }
}
export {getCategories, getCategoryDishes};
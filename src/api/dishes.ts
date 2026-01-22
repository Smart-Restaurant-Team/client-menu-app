import serverAxios from "@/lib/server-axios";

const getDishDetails= async ({dishId}: {dishId: string})=>{
    try {
        // const res = await serverAxios.get(`/client/restaurants//categories//dishes`)
        // console.log("Categories data:", res);
        const data = {
            title : "Pizza Me", 
            _id: dishId
        }
        return data;
    } catch (error) {
        console.error("Error fetching categoy diehs:", error);
        
    }
}
export {getDishDetails};
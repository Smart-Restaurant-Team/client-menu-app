
export async function generateStaticParams() {
  const data = [
    { _id: "6936d68d642389dd0f00d9ab" },
    { _id: "695075343347a1b04e76bbd5" },

  ];

  return data.map((item) => ({
    resturant_id: item._id, // Key must match your [folder_name]
  }));
}
export default async function RestaurantInfoPage ({ 
  params 
}: { 
  params: Promise<{ restaurant_id: string }> 
}){
    const data = await fetch('https://nondistributional-unciteable-daniel.ngrok-free.dev/menu_service/client/restaurants/6936d68d642389dd0f00d9ab/infos')
    const { restaurant_id } = await params;

    return (<>
    <h1>Info</h1>
    {restaurant_id}
    </>)
}



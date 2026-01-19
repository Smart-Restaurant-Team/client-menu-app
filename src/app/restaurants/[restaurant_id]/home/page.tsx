import Loading from "../loading";

// 1. Fixed the typo in the map return to match "restaurant_id"
export async function generateStaticParams() {
  const data = [
    { _id: "6936d68d642389dd0f00d9ab" },
    { _id: "695075343347a1b04e76bbd5" },
  ];

  return data.map((item) => ({
    restaurant_id: item._id, // Fixed spelling: resturant_id -> restaurant_id
  }));
}

export default async function RestaurantOverviewPage({
  params,
}: {
  params: Promise<{ restaurant_id: string }>;
}) {
  const { restaurant_id } = await params;
  
  // Fetching data from your endpoint
  const response = await fetch(
    `https://nondistributional-unciteable-daniel.ngrok-free.dev/menu_service/client/restaurants/${restaurant_id}/categories`
  );
  const data = await response.json();
  const categories = data.data;
  console.log("Fetched categories:", categories);
  if (!categories || categories.length === 0) {
    return <div className="p-8 text-center">No categories found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Menu Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category: any) => (
          <CategoryCard key={category._id} category={category} />
        ))}
        
        
      </div>
    </div>
  );
}

const CategoryCard = ({ category }: { category: any }) => {
  // Logic to find English content, fallback to the first available if not found
  const displayContent = 
    category.content?.find((c: any) => c.lang === "en") || 
    category.content?.[0];

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      {category.thumbnail && (
        <img 
          src={category.thumbnail} 
          alt={displayContent?.title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
            {category.icon_key && <span className="text-xl">📦</span>} {/* Replace with actual icon logic */}
            <h2 className="text-xl font-bold">{displayContent?.title || "Untitled Category"}</h2>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">
          {displayContent?.description || "No description available."}
        </p>
      </div>
    </div>
  );
};
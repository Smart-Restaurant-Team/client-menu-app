import { getDishDetails } from '@/api/dishes'
import { ImageResponse } from 'next/og'
 
// Image metadata
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getDishDetails({dishId: "1254"})
  
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
      className='bg-primary'
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src="https://img.freepik.com/free-photo/chicken-burger-with-french-fries-table_140725-4532.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        {post && post.title }
        {post && post.title }
      </div>
    )
  )
}
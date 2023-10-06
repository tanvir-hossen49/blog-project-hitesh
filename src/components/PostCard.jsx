import service from "../appwrite/config"
import {Link} from 'react-router-dom'
import parser from 'html-react-parser'

const PostCard = ({$id, title, featuredImg, content}) => {  
  const text = parser(content).map(e => e?.props?.children).toString();

  return (
      <div className="w-[320px] rounded-md border">
          <div className='w-full justify-center mb-4'>
              <img src={service.getFilePreview(featuredImg)} alt={title}
              className="h-[200px] w-full rounded-md object-cover" />
          </div>
          <div className="p-4">
            <h2 className='text-lg font-semibold'>{title}</h2>
            <p className="mt-3 text-sm text-gray-600">
              { text.length > 100 ? text.split(' ').slice(0, 20).join(' ').concat('...') : parser(content)}
            </p>
            <Link to={`/post/${$id}`}>
              <button className="mt-4 bg-black px-3 py-2 rounded-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                Read more
              </button>
            </Link>
          </div>
      </div>
  )
}

export default PostCard
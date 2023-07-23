import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import PageNotFoundImage from '../assets/images/pagenotfoundimg.jpg'
import { Button } from '../components/Button';




export const PageNotFound = () => {

  useEffect(() => {
    document.title = `Page Not Found/cinemate`
  });

  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
            <p className='text-7xl text-gray-700 dark:text-white pb-10 font-bold'>404, oops!</p>
            <div className='max-w-lg'>
                <img className='rounded' src={PageNotFoundImage} alt="" />
            </div>
        </div>
        <div className='flex justify-center my-4'>
            <Link to = "/">
                <Button>Back to Home</Button>
            </Link>
        </div>
      </section>
    </main>
  )
}

import { Link } from 'react-router'
import React from 'react'
import { NotebookIcon } from 'lucide-react'

const NotesNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center py-6 space-y-6 max-w-md mx-auto text-center'>
        <div className='bg-primary/10 rounded-full p-8'>
        <NotebookIcon className='size-10 text-primary'/>
        </div>
        <h3 className='text-2xl font-bold'>No note yet</h3>
        <p>
            Ready to organize your thoughts? Create your first note to get started on your journey.
        </p>
        <Link to='/create' className='btn btn-primary'>
        Create Your First Note
        </Link>
    </div>
  )
}

export default NotesNotFound
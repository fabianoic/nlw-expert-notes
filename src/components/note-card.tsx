export function NoteCard() {
    return (
        <button className='rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
            <span className='text-sm font-medium text-slate-300'>
                ha 2 dias
            </span>
            <p className='text-sm leading-6 text-slate-400'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio id, quas, quod vitae rerum quam explicabo culpa sed consequuntur laudantium corrupti sit quasi ad earum hic reprehenderit accusantium pariatur quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sapiente fugiat quibusdam earum. Cumque quasi aliquid illo, hic porro ipsa laborum suscipit commodi adipisci in inventore autem deleniti harum tenetur.
            </p>

            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </button>
    );
}
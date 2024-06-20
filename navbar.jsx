import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-teal-700">
      <img src="Page banner.png" alt="banner" className='w-full h-auto' />
    
      <nav className="bg-teal-700">
        <div className="flex min-h-screen flex-col items-center justify-between bg-teal-700">
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left">
            
            <Link className="group flex flex-col items-start justify-start rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"  href="/" >
            <h2 className="mb-3 text-2xl font-semibold">Docs</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">Return to home</p>
              
            </Link>

            <Link className="group flex flex-col items-start justify-start rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"  href="/Grids" >
                <h2 className="mb-3 text-2xl font-semibold">Grids and Teams</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">Our gridbuilding templates and references</p>
              
            </Link>

            <Link className="group flex flex-col items-start justify-start rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"  href="/" >
                <h2 className="mb-3 text-2xl font-semibold">Guildwar History</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">See where we've ranked</p>
              
            </Link>

            <Link className="group flex flex-col items-start justify-start rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"  href="/" >
                <h2 className="mb-3 text-2xl font-semibold">Hall of Fame</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">Crew and crew member personal achievements</p>
              
            </Link>

            <Link  className="group flex flex-col items-start justify-start rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"  href="/" >
                <h2 className="mb-3 text-2xl font-semibold">Apply to join</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">Interested in our crew- drop an email to apply</p>
              
            </Link>

          </div>
        </div>
      </nav>
      </div>
    
  );
}

export default Navbar;

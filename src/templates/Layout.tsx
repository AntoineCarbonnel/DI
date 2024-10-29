'use client'

import {UsersIcon} from '@heroicons/react/24/outline'
import {useLocation} from 'react-router-dom'

const navigation = [
  {name: 'Customers', href: '/customers', icon: UsersIcon, current: false},
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({children}) {
  const location = useLocation()

  return (
	  <>
		<div>
		  <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
			<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6">
			  <div className="flex h-16 shrink-0 items-center">
				<img
					alt="Display interactive"
					src="https://display.aero/wp-content/uploads/2023/12/di_h_br_tab.png"
					className="h-8 w-auto"
				/>
			  </div>
			  <nav className="flex flex-1 flex-col">
				<ul role="list" className="flex flex-1 flex-col gap-y-7">
				  <li>
					<ul role="list" className="-mx-2 space-y-1">
					  {navigation.map((item) => (
						  <li key={item.name}>
							<a
								href={item.href}
								className={classNames(
									location.pathname === item.href
										? 'bg-indigo-700 text-white'
										: 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
									'transition group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
								)}
							>
							  <item.icon
								  aria-hidden="true"
								  className={classNames(
									  location.pathname === item.href ? 'text-white' : 'text-indigo-200 group-hover:text-white',
									  'h-6 w-6 shrink-0',
								  )}
							  />
							  {item.name}
							</a>
						  </li>
					  ))}
					</ul>
				  </li>
				</ul>
			  </nav>
			</div>
		  </div>

		  <main className="py-10 lg:pl-72">
			<div className="px-4 sm:px-6 lg:px-8">
			  {children}
			</div>
		  </main>
		</div>
	  </>
  )
}
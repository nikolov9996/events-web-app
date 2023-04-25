import { Fragment } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PAGES } from 'app/constants'

const Index = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: "/", current: location.pathname === PAGES.HOME },
    { name: 'Wish List', href: PAGES.MY_TICKETS, current: location.pathname === PAGES.MY_TICKETS },
    { name: 'Create Event', href: PAGES.CREATE_EVENT, current: location.pathname === PAGES.CREATE_EVENT },
  ]

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className='bg-zinc-50 h-full justify-center flex'>
      <div className="max-w-7xl w-full bg-slate-200 ">
        <div>
          <Disclosure as="nav" className="bg-gray-900">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">

                      <div className="hidden md:block">
                        <div className="flex items-baseline space-x-4">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={classNames(
                                item.current
                                  ? ' text-white bg-gray-900'
                                  : 'text-gray-400 bg-gray-800 hover:text-white',
                                'px-3 py-2 text-lg font-semibold rounded-md'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        {open ? (
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? ' text-white bg-gray-900'
                            : 'text-gray-400 bg-gray-800 hover:text-white',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <main>

          <Outlet />
        </main>
      </div>
    </div >
  )
}

export default Index
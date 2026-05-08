import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './User/User.jsx';
import Github from './components/Github/Github.jsx'
import { githubInfoLoader } from './components/Github/githubInfoLoader.js'

// React Router setup: yaha hum batate hain kis URL par kaunsa component dikhna chahiye.
const router = createBrowserRouter(
  createRoutesFromElements(
    // Parent route: Layout common rahega, andar ke pages Outlet me change honge.
    <Route path='/' element= {<Layout />} >
      <Route path='' element= {<Home />} />
      <Route path='about' element= {<About />} />
      <Route path='contact' element= {<Contact />} />

      {/* Dynamic route: :userId URL se value pakadta hai, jaise /user/khushi */}
      <Route path='user/:userId' element= {<User />} />

      <Route
        // loader page render hone se pehle data fetch karta hai.
        // Isliye Github component me direct fetch/useEffect ki zarurat nahi.
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
        // Jab loader data la raha ho, tab temporary loading UI dikhane ke liye.
        hydrateFallbackElement={
          <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
            Loading Github profile...
          </div>
        }
      />
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* RouterProvider router ko app se connect karta hai. */}
      <RouterProvider router={router} />
  </StrictMode>,
)

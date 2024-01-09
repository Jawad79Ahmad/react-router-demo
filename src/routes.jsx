import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact'
import User from './components/Users/User.jsx'
import Github, { githubInfo } from './components/Github/Github.jsx'


const routerList = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='users/:name/:age' element={<User />} />
      <Route path='github' element={<Github />} loader={githubInfo} />
    </Route>
  )
)

export default routerList

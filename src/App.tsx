import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from "./templates/Layout.tsx";
import HomePage from "./pages/index.tsx";
import CustomersPage from "./pages/customers/index.tsx";
import CustomerDetailPage from "./pages/customers/[id].tsx";

function App() {
  return (
	  <Router>
		<Layout>
		  <Routes>
			<Route path="/" element={<HomePage/>}/>
			<Route path="/customers" element={<CustomersPage/>}/>
			<Route path="/customers/:id" element={<CustomerDetailPage/>}/>
		  </Routes>
		</Layout>
	  </Router>
  )
}

export default App

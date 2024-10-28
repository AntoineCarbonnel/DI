import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Customer} from "../../types/Customer.ts";

function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
	// Fetch customers data
	fetch(`${import.meta.env.VITE_API_BASE_URL}/customers`)
		.then(response => response.json())
		.then(data => setCustomers(data));
  }, []);

  return (
	  <div className="container mx-auto px-4 sm:px-8">
		<div className="py-8">
		  <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
			<h2 className="text-2xl leading-tight">Customers</h2>
		  </div>
		  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
			<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
			  <table className="min-w-full leading-normal">
				<thead>
				<tr>
				  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
					ID
				  </th>
				  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
					Title
				  </th>
				  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
					Last Name
				  </th>
				  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
					First Name
				  </th>
				  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
					Postal Code
				  </th>
				  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
					City
				  </th>
				  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
					Email
				  </th>
				  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
					Actions
				  </th>
				</tr>
				</thead>
				<tbody>
				{customers.map((customer) => (
					<tr key={customer.id}>
					  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
						{customer.id}
					  </td>
					  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
						{customer.title}
					  </td>
					  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
						{customer.lastname}
					  </td>
					  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
						{customer.firstname}
					  </td>
					  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
						{customer.postal_code}
					  </td>
					  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
						{customer.city}
					  </td>
					  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
						{customer.email}
					  </td>
					  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
						<Link to={`/customers/${customer.id}`} className="text-indigo-600 hover:text-indigo-900">
						  View Orders
						</Link>
					  </td>
					</tr>
				))}
				</tbody>
			  </table>
			</div>
		  </div>
		</div>
	  </div>
  );
}

export default CustomersPage;
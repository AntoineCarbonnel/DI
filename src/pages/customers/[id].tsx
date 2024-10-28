import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CustomerDetailPage() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    // Fetch customer data based on the id
    fetch(`/api/customers/${id}`)
      .then(response => response.json())
      .then(data => setCustomer(data));
  }, [id]);

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Customer Detail</h1>
      <p>ID: {customer.id}</p>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
    </div>
  );
}

export default CustomerDetailPage;
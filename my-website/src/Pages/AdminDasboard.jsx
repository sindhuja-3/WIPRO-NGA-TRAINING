function AdminDashboard() {
  return (
    <div className="admin-container">
      <h1>Welcome Admin 👑</h1>
      <p className="admin-subtitle">Manage your store easily from here</p>

      <div className="admin-cards">
        <div className="admin-card">
          <h3>Products</h3>
          <p> items</p>
        </div>

        <div className="admin-card">
          <h3>Orders</h3>
          <p> pending</p>
        </div>

        <div className="admin-card">
          <h3>Users</h3>
          <p> registered</p>
        </div>
      </div>

      <div className="admin-actions">
        <button>Add Product</button>
        <button>View Orders</button>
        <button>Manage Users</button>
      </div>
    </div>
  );
}

export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import './Items.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Items = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/items`);
      setItems(response.data);
      setError('');
    } catch (error) {
      setError('Failed to load items');
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setError('Please login to add items');
      return;
    }

    try {
      await axios.post(`${API_URL}/items`, newItem);
      setNewItem({ name: '', description: '' });
      fetchItems();
      setError('');
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to create item');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/items/${id}`);
      fetchItems();
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to delete item');
    }
  };

  return (
    <div className="items-page">
      <div className="items-container">
        <h1>Items Management</h1>

        {error && <div className="error-message">{error}</div>}

        {isAuthenticated ? (
          <section className="form-section">
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Item Name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Description"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                required
              />
              <button type="submit">Add Item</button>
            </form>
          </section>
        ) : (
          <div className="info-box">
            <p>Please <a href="/login">login</a> to add items</p>
          </div>
        )}

        <section className="items-section">
          <h2>All Items</h2>
          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading items...</p>
            </div>
          ) : items.length === 0 ? (
            <p className="no-items">No items yet. {isAuthenticated ? 'Add one above!' : 'Login to add items.'}</p>
          ) : (
            <div className="items-list">
              {items.map((item) => (
                <div key={item._id} className="item-card">
                  <div className="item-header">
                    <h3>{item.name}</h3>
                    {item.createdBy && (
                      <span className="item-author">by {item.createdBy.username || 'Unknown'}</span>
                    )}
                  </div>
                  <p>{item.description}</p>
                  {isAuthenticated && (
                    (user?.id === item.createdBy?._id || user?.role === 'admin') && (
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    )
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Items;


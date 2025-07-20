import React, { useState, useEffect } from 'react';
import { feedbackAPI } from '../utils/api';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await feedbackAPI.getApproved();
      setFeedbacks(response.data);
    } catch (err) {
      setError('Failed to load customer feedback');
      console.error('Error fetching feedback:', err);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  if (loading) {
    return (
      <section className="feedback">
        <div className="container">
          <h2>Customer Feedback</h2>
          <p>Loading feedback...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="feedback">
        <div className="container">
          <h2>Customer Feedback</h2>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="feedback">
      <div className="container">
        <h2>What Our Customers Say</h2>
        {feedbacks.length === 0 ? (
          <p>No feedback available yet.</p>
        ) : (
          <div className="feedback-grid">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="feedback-card">
                <div className="feedback-rating">
                  {renderStars(feedback.rating)}
                </div>
                <p className="feedback-message">"{feedback.message}"</p>
                <div className="feedback-author">
                  <strong>{feedback.name}</strong>
                  {feedback.service_type && (
                    <span className="feedback-service">
                      {' '}• {feedback.service_type.replace('-', ' ').toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Feedback;

import React, { useState, useEffect } from 'react';
import './Solutions.css';

const API_URL = 'https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/6700d26f-7f30-458e-a1e0-ff17612b1d96_solution.json';

const Solutions = () => {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setSolutions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSolutions();
  }, []);

  return (
    <section id="solutions" className="section solutions-section">
      <div className="container">
        <h2 className="section-title">Solutions</h2>

        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading solutions...</p>
          </div>
        )}

        {error && (
          <div className="error-state">
            <p>Error loading solutions: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid-2 solutions-grid">
            {solutions.map((solution, index) => (
              <div key={solution.id} className="solution-card beveled-card">
                <div className="solution-header-row">
                  <h3 className="solution-title">{solution.title}</h3>
                  <div className="solution-number">{index + 1}</div>
                </div>
                
                <p className="solution-desc">{solution.description}</p>
                
                <a href="#" className="solution-link">
                  {solution.status.toLowerCase().includes('soon') ? 'Coming Soon' : 'Explore More'}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Solutions;

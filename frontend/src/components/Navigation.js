import React from 'react';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  // Get step number based on current path
  const getStepNumber = () => {
    switch (location.pathname) {
      case '/':
        return 1;
      case '/facilities':
        return 2;
      case '/documents':
        return 3;
      case '/review':
        return 4;
      case '/processing':
        return 5;
      case '/results':
        return 6;
      default:
        return 0;
    }
  };
  
  const step = getStepNumber();
  
  // Don't show progress steps on results page
  if (step === 6) {
    return (
      <header className="app-header">
        <div className="logo">
          <i className="fas fa-shield-alt"></i>
          <span>OTCC Assessment Tool</span>
        </div>
      </header>
    );
  }
  
  return (
    <header className="app-header">
      <div className="logo">
        <i className="fas fa-shield-alt"></i>
        <span>OTCC Assessment Tool</span>
      </div>
      
      {step > 0 && (
        <div className="progress-steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Company Info</div>
          </div>
          <div className="step-connector"></div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Facilities</div>
          </div>
          <div className="step-connector"></div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">Documents</div>
          </div>
          <div className="step-connector"></div>
          <div className={`step ${step >= 4 ? 'active' : ''}`}>
            <div className="step-number">4</div>
            <div className="step-label">Review</div>
          </div>
          <div className="step-connector"></div>
          <div className={`step ${step >= 5 ? 'active' : ''}`}>
            <div className="step-number">5</div>
            <div className="step-label">Processing</div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;

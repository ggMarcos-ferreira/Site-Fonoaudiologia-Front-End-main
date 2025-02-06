import React, { useState } from 'react';
import FormAnamneseParte1 from '../components/FormAnamneseParte1.jsx';
import FormAnamneseParte2 from '../components/FormAnamneseParte2.jsx';
import FormAnamneseParte3 from '../components/FormAnamneseParte3.jsx';
import FormAnamneseParte4 from '../components/FormAnamneseParte4.jsx';
import FormAnamneseParte5 from '../components/FormAnamneseParte5.jsx';

function FormAnamnese() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      {currentStep === 1 && <FormAnamneseParte1 onNext={handleNext} />}
      {currentStep === 2 && <FormAnamneseParte2 onNext={handleNext} onPrev={handlePrev} />}
      {currentStep === 3 && <FormAnamneseParte3 onNext={handleNext} onPrev={handlePrev} />}
      {currentStep === 4 && <FormAnamneseParte4 onNext={handleNext} onPrev={handlePrev} />}
      {currentStep === 5 && <FormAnamneseParte5 onPrev={handlePrev} />}
    </div>
  );
}

export default FormAnamnese;

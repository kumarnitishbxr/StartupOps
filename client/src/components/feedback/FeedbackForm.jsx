// import React from "react";
// import { useState } from "react";
// import Button from "../common/Button";
// import { submitFeedback } from "../../API/feedbackapi";

// const FeedbackForm = ({ startupId, onSuccess }) => {
//   const [form, setForm] = useState({
//     ideaName: "",
//     feedbackType: "INTERNAL",
//     rating: 5,
//     comment: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await submitFeedback(startupId, form);
//       setForm({
//         ideaName: "",
//         feedbackType: "INTERNAL",
//         rating: 5,
//         comment: "",
//       });
//       onSuccess?.();
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-4 rounded-lg shadow space-y-4"
//     >
//       <input
//         name="ideaName"
//         placeholder="Idea or feature name"
//         value={form.ideaName}
//         onChange={handleChange}
//         required
//         className="w-full border px-3 py-2 rounded"
//       />

//       <select
//         name="feedbackType"
//         value={form.feedbackType}
//         onChange={handleChange}
//         className="w-full border px-3 py-2 rounded"
//       >
//         <option value="INTERNAL">Internal Feedback</option>
//         <option value="EXTERNAL">External Feedback</option>
//       </select>

//       <div>
//         <label className="block text-sm text-gray-500 mb-1">
//           Rating
//         </label>
//         <input
//           type="range"
//           min="1"
//           max="5"
//           name="rating"
//           value={form.rating}
//           onChange={handleChange}
//           className="w-full"
//         />
//         <p className="text-xs text-gray-400 mt-1">
//           Score: {form.rating}/5
//         </p>
//       </div>

//       <textarea
//         name="comment"
//         placeholder="Qualitative feedback / suggestions"
//         value={form.comment}
//         onChange={handleChange}
//         className="w-full border px-3 py-2 rounded"
//         rows={3}
//       />

//       <Button type="submit" loading={loading}>
//         Submit Feedback
//       </Button>
//     </form>
//   );
// };

// export default FeedbackForm;



import React from "react";
import { useState } from "react";
import Button from "../common/Button";
import { submitFeedback } from "../../API/feedbackapi";

const FeedbackForm = ({ startupId='698762f707e29ec03fc6296a', onSuccess }) => {
  const [form, setForm] = useState({
    ideaName: "",
    feedbackType: "INTERNAL",
    rating: 5,
    comment: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitFeedback(startupId, form);
      setForm({
        ideaName: "",
        feedbackType: "INTERNAL",
        rating: 5,
        comment: "",
      });
      onSuccess?.();
    } finally {
      setLoading(false);
    }
  };

  // Generate star rating display
  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`star ${index < form.rating ? 'star-filled' : 'star-empty'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap');
        
        .feedback-form {
          font-family: 'Outfit', sans-serif;
          background: linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(30, 30, 50, 0.95) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(236, 72, 153, 0.25);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .feedback-form::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #ec4899 0%, #8b5cf6 50%, #06b6d4 100%);
          background-size: 200% 100%;
          animation: gradient-flow 3s linear infinite;
        }
        
        @keyframes gradient-flow {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        
        .feedback-form:hover {
          border-color: rgba(236, 72, 153, 0.4);
          box-shadow: 0 15px 40px -10px rgba(236, 72, 153, 0.3);
        }
        
        .form-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(236, 72, 153, 0.15);
        }
        
        .header-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2));
          border: 1px solid rgba(236, 72, 153, 0.3);
          border-radius: 12px;
          font-size: 1.25rem;
        }
        
        .header-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #f9a8d4;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'Fira Code', monospace;
        }
        
        .input-wrapper {
          position: relative;
        }
        
        .input-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          color: #f9a8d4;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'Fira Code', monospace;
        }
        
        .input-field {
          width: 100%;
          background: rgba(15, 15, 35, 0.6);
          border: 1px solid rgba(236, 72, 153, 0.2);
          border-radius: 12px;
          padding: 0.875rem 1rem;
          font-size: 0.875rem;
          color: #e0e7ff;
          font-family: 'Outfit', sans-serif;
          transition: all 0.3s ease;
          outline: none;
        }
        
        .input-field::placeholder {
          color: #64748b;
        }
        
        .input-field:focus {
          border-color: rgba(236, 72, 153, 0.5);
          background: rgba(15, 15, 35, 0.8);
          box-shadow: 
            0 0 0 3px rgba(236, 72, 153, 0.1),
            0 4px 12px rgba(236, 72, 153, 0.15);
        }
        
        .input-field:hover:not(:focus) {
          border-color: rgba(236, 72, 153, 0.3);
        }
        
        .select-field {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23ec4899' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 3rem;
          cursor: pointer;
        }
        
        .textarea-field {
          min-height: 100px;
          resize: vertical;
          font-family: 'Outfit', sans-serif;
        }
        
        .rating-container {
          background: rgba(15, 15, 35, 0.4);
          border: 1px solid rgba(236, 72, 153, 0.15);
          border-radius: 12px;
          padding: 1.25rem;
        }
        
        .rating-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        
        .rating-value {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.875rem;
          background: rgba(236, 72, 153, 0.15);
          border: 1px solid rgba(236, 72, 153, 0.3);
          border-radius: 9999px;
          font-family: 'Fira Code', monospace;
          font-weight: 600;
          font-size: 0.875rem;
          color: #f9a8d4;
        }
        
        .stars-display {
          display: flex;
          gap: 0.25rem;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .star {
          transition: all 0.2s ease;
          cursor: default;
        }
        
        .star-filled {
          color: #ec4899;
          text-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
        }
        
        .star-empty {
          color: #334155;
        }
        
        .rating-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          background: rgba(236, 72, 153, 0.1);
          border-radius: 5px;
          outline: none;
          position: relative;
        }
        
        .rating-slider::-webkit-slider-track {
          background: linear-gradient(90deg, 
            rgba(236, 72, 153, 0.2) 0%, 
            rgba(236, 72, 153, 0.4) 50%, 
            rgba(236, 72, 153, 0.6) 100%
          );
          border-radius: 5px;
        }
        
        .rating-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          border: 2px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(236, 72, 153, 0.4);
          transition: all 0.2s ease;
        }
        
        .rating-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(236, 72, 153, 0.6);
        }
        
        .rating-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          border: 2px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(236, 72, 153, 0.4);
          transition: all 0.2s ease;
        }
        
        .rating-slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(236, 72, 153, 0.6);
        }
        
        .rating-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 0.5rem;
        }
        
        .rating-label {
          font-size: 0.7rem;
          color: #64748b;
          font-family: 'Fira Code', monospace;
        }
        
        .field-indicator {
          position: absolute;
          left: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          background: linear-gradient(180deg, #ec4899, #8b5cf6);
          border-radius: 2px;
          transition: height 0.3s ease;
        }
        
        .input-wrapper:focus-within .field-indicator {
          height: 24px;
        }
        
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(236, 72, 153, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.02) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
          opacity: 0.5;
        }
        
        .char-count {
          position: absolute;
          bottom: -1.25rem;
          right: 0;
          font-size: 0.7rem;
          color: #64748b;
          font-family: 'Fira Code', monospace;
        }
        
        .type-badges {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        
        .type-badge {
          display: none;
        }
        
        .type-badge-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(15, 15, 35, 0.6);
          border: 1px solid rgba(236, 72, 153, 0.2);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.875rem;
          color: #94a3b8;
          font-weight: 500;
        }
        
        .type-badge:checked + .type-badge-label {
          background: rgba(236, 72, 153, 0.15);
          border-color: rgba(236, 72, 153, 0.5);
          color: #f9a8d4;
          box-shadow: 0 4px 12px rgba(236, 72, 153, 0.2);
        }
        
        .type-badge-label:hover {
          border-color: rgba(236, 72, 153, 0.3);
        }
      `}</style>

      <form
        onSubmit={handleSubmit}
        className="feedback-form p-6"
      >
        <div className="grid-overlay"></div>
        
        <div className="relative z-10">
          {/* Form Header */}
          <div className="form-header">
            <div className="header-icon">
              💬
            </div>
            <div className="header-title">
              Submit Feedback
            </div>
          </div>

          <div className="form-content">
            {/* Idea Name Input */}
            <div className="input-wrapper">
              <div className="field-indicator"></div>
              <label className="input-label">
                Idea / Feature Name *
              </label>
              <input
                name="ideaName"
                placeholder="Enter idea or feature name..."
                value={form.ideaName}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>

            {/* Feedback Type - Radio Style */}
            <div className="input-wrapper">
              <label className="input-label">
                Feedback Type
              </label>
              <div className="type-badges">
                <input
                  type="radio"
                  id="internal"
                  name="feedbackType"
                  value="INTERNAL"
                  checked={form.feedbackType === "INTERNAL"}
                  onChange={handleChange}
                  className="type-badge"
                />
                <label htmlFor="internal" className="type-badge-label">
                  <span>🏢</span>
                  Internal
                </label>

                <input
                  type="radio"
                  id="external"
                  name="feedbackType"
                  value="EXTERNAL"
                  checked={form.feedbackType === "EXTERNAL"}
                  onChange={handleChange}
                  className="type-badge"
                />
                <label htmlFor="external" className="type-badge-label">
                  <span>🌍</span>
                  External
                </label>
              </div>
            </div>

            {/* Rating Slider */}
            <div className="rating-container">
              <div className="rating-header">
                <label className="input-label" style={{margin: 0}}>
                  Rating
                </label>
                <div className="rating-value">
                  <span>{form.rating}</span>
                  <span style={{opacity: 0.6}}>/ 5</span>
                </div>
              </div>
              
              <div className="stars-display">
                {renderStars()}
              </div>
              
              <input
                type="range"
                min="1"
                max="5"
                name="rating"
                value={form.rating}
                onChange={handleChange}
                className="rating-slider"
              />
              
              <div className="rating-labels">
                <span className="rating-label">Poor</span>
                <span className="rating-label">Fair</span>
                <span className="rating-label">Good</span>
                <span className="rating-label">Great</span>
                <span className="rating-label">Excellent</span>
              </div>
            </div>

            {/* Comment Textarea */}
            <div className="input-wrapper">
              <div className="field-indicator"></div>
              <label className="input-label">
                Comments & Suggestions
              </label>
              <textarea
                name="comment"
                placeholder="Share your qualitative feedback and suggestions..."
                value={form.comment}
                onChange={handleChange}
                className="input-field textarea-field"
                rows={3}
              />
              {form.comment && (
                <span className="char-count">
                  {form.comment.length} characters
                </span>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" loading={loading}>
              {loading ? 'Submitting...' : 'Submit Feedback'}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;
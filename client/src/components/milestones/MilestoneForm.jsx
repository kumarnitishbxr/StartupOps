// import React from "react";
// import { useState } from "react";
// import Button from "../common/Button";
// import Loader from "../common/Loader";
// import { createMilestone } from "../../API/milstoneapi";

// const MilestoneForm = ({ startupId, onSuccess }) => {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     startDate: "",
//     endDate: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await createMilestone(startupId, form);
//       setForm({
//         title: "",
//         description: "",
//         startDate: "",
//         endDate: "",
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
//         name="title"
//         placeholder="Milestone title"
//         value={form.title}
//         onChange={handleChange}
//         required
//         className="w-full border px-3 py-2 rounded"
//       />

//       <textarea
//         name="description"
//         placeholder="Milestone description"
//         value={form.description}
//         onChange={handleChange}
//         className="w-full border px-3 py-2 rounded"
//       />

//       <div className="flex gap-3">
//         <input
//           type="date"
//           name="startDate"
//           value={form.startDate}
//           onChange={handleChange}
//           required
//           className="w-full border px-3 py-2 rounded"
//         />

//         <input
//           type="date"
//           name="endDate"
//           value={form.endDate}
//           onChange={handleChange}
//           required
//           className="w-full border px-3 py-2 rounded"
//         />
//       </div>

//       <Button type="submit" loading={loading}>
//         Create Milestone
//       </Button>
//     </form>
//   );
// };

// export default MilestoneForm;




import React from "react";
import { useState } from "react";
import Button from "../common/Button";
import Loader from "../common/Loader";
import { createMilestone } from "../../API/milstoneapi";

const MilestoneForm = ({ startupId, onSuccess }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createMilestone(startupId, form);
      setForm({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
      });
      onSuccess?.();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        .milestone-form {
          font-family: 'Space Grotesk', sans-serif;
          background: linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(30, 30, 50, 0.95) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .milestone-form::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%);
          background-size: 200% 100%;
          animation: gradient-slide 3s linear infinite;
        }
        
        @keyframes gradient-slide {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        
        .milestone-form:hover {
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 0 15px 40px -10px rgba(139, 92, 246, 0.3);
        }
        
        .form-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        
        .input-group {
          position: relative;
        }
        
        .input-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          color: #a78bfa;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'JetBrains Mono', monospace;
        }
        
        .input-field {
          width: 100%;
          background: rgba(15, 15, 35, 0.6);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 12px;
          padding: 0.875rem 1rem;
          font-size: 0.875rem;
          color: #e0e7ff;
          font-family: 'Space Grotesk', sans-serif;
          transition: all 0.3s ease;
          outline: none;
        }
        
        .input-field::placeholder {
          color: #64748b;
        }
        
        .input-field:focus {
          border-color: rgba(139, 92, 246, 0.5);
          background: rgba(15, 15, 35, 0.8);
          box-shadow: 
            0 0 0 3px rgba(139, 92, 246, 0.1),
            0 4px 12px rgba(139, 92, 246, 0.15);
        }
        
        .input-field:hover:not(:focus) {
          border-color: rgba(139, 92, 246, 0.3);
        }
        
        .textarea-field {
          min-height: 100px;
          resize: vertical;
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .date-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .date-input {
          position: relative;
        }
        
        .input-field[type="date"] {
          color-scheme: dark;
          cursor: pointer;
        }
        
        .input-field[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.7) sepia(1) saturate(5) hue-rotate(240deg);
          cursor: pointer;
        }
        
        .input-icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #8b5cf6;
          font-size: 1.125rem;
          pointer-events: none;
        }
        
        .char-count {
          position: absolute;
          bottom: -1.25rem;
          right: 0;
          font-size: 0.7rem;
          color: #64748b;
          font-family: 'JetBrains Mono', monospace;
        }
        
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.02) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
          opacity: 0.5;
        }
        
        .button-wrapper {
          margin-top: 0.5rem;
        }
        
        .field-indicator {
          position: absolute;
          left: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          background: linear-gradient(180deg, #8b5cf6, #ec4899);
          border-radius: 2px;
          transition: height 0.3s ease;
        }
        
        .input-group:focus-within .field-indicator {
          height: 24px;
        }
        
        .form-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(139, 92, 246, 0.15);
        }
        
        .form-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 12px;
          font-size: 1.25rem;
        }
        
        .form-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #c4b5fd;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'JetBrains Mono', monospace;
        }
        
        @media (max-width: 640px) {
          .date-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <form
        onSubmit={handleSubmit}
        className="milestone-form p-6"
      >
        <div className="grid-overlay"></div>
        
        <div className="relative z-10">
          {/* Form Header */}
          <div className="form-header">
            <div className="form-icon">
              🎯
            </div>
            <div className="form-title">
              New Milestone
            </div>
          </div>

          <div className="form-grid">
            {/* Title Input */}
            <div className="input-group">
              <div className="field-indicator"></div>
              <label className="input-label">
                Milestone Title *
              </label>
              <input
                name="title"
                placeholder="Enter milestone title..."
                value={form.title}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>

            {/* Description Textarea */}
            <div className="input-group">
              <div className="field-indicator"></div>
              <label className="input-label">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Describe the milestone objectives and deliverables..."
                value={form.description}
                onChange={handleChange}
                className="input-field textarea-field"
              />
              {form.description && (
                <span className="char-count">
                  {form.description.length} characters
                </span>
              )}
            </div>

            {/* Date Inputs */}
            <div className="date-grid">
              <div className="input-group date-input">
                <div className="field-indicator"></div>
                <label className="input-label">
                  Start Date *
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={form.startDate}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div className="input-group date-input">
                <div className="field-indicator"></div>
                <label className="input-label">
                  End Date *
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={form.endDate}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="button-wrapper">
              <Button type="submit" loading={loading}>
                {loading ? 'Creating...' : 'Create Milestone'}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default MilestoneForm;
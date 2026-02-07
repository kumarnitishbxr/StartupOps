import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStartup } from "../../stores/startupSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const CreateStartup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.startup);

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    industry: "",
    stage: "",
    website: "",
  });

  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setLogo(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const nextStep = () => {
    if (step === 1 && !formData.name) {
      return toast.error("Startup name is required");
    }

    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      if (logo) {
        data.append("logo", logo);
      }

      const result = await dispatch(addStartup(data)).unwrap();

      toast.success("Startup created successfully!");

      navigate(`/startups/${result.data._id}`);
    } catch (error) {
      toast.error(error || "Failed to create startup");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white shadow-lg rounded-2xl p-6"
      >
        <h1 className="text-2xl font-bold mb-4">
          Create Your Startup
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* STEP 1 - BASIC INFO */}
          {step === 1 && (
            <>
              <div>
                <label className="block mb-1 font-medium">
                  Startup Name *
                </label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-3 w-full rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Industry
                </label>

                <input
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="border p-3 w-full rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Stage
                </label>

                <select
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                  className="border p-3 w-full rounded-lg"
                >
                  <option value="">Select Stage</option>
                  <option value="Idea">Idea</option>
                  <option value="MVP">MVP</option>
                  <option value="Growth">Growth</option>
                  <option value="Scaling">Scaling</option>
                </select>
              </div>
            </>
          )}

          {/* STEP 2 - DETAILS */}
          {step === 2 && (
            <>
              <div>
                <label className="block mb-1 font-medium">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="border p-3 w-full rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Website
                </label>

                <input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="border p-3 w-full rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Startup Logo
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="border p-2 w-full rounded-lg"
                />

                {preview && (
                  <img
                    src={preview}
                    alt="preview"
                    className="mt-4 h-24 object-contain border rounded"
                  />
                )}
              </div>
            </>
          )}

          {/* ACTION BUTTONS */}
          <div className="flex justify-between pt-4">

            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 border rounded-lg"
              >
                Back
              </button>
            )}

            {step < 2 && (
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Next
              </button>
            )}

            {step === 2 && (
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 text-white px-6 py-2 rounded-lg"
              >
                {loading ? "Creating..." : "Create Startup"}
              </button>
            )}

          </div>

        </form>
      </motion.div>
    </div>
  );
};

export default CreateStartup;

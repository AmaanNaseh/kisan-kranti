import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  Sprout,
  Thermometer,
  Wind,
  FlaskConical,
  Leaf,
  Zap,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { Farm_Backend_API } from "../Config/Config";

export default function CropfieldAnalysisPage() {
  const [form, setForm] = useState({
    temperature: "",
    humidity: "",
    tds: "",
    soil_moisture: "",
    ph: "",
    N: "",
    P: "",
    K: "",
  });
  const [prediction, setPrediction] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeActions, setActiveActions] = useState([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [visualMessage, setVisualMessage] = useState("");
  const [activeSimulation, setActiveSimulation] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsAnalyzing(true);
    try {
      const res = await axios.post(`${Farm_Backend_API}/api/predict`, form);
      setPrediction(res.data.prediction);
    } catch (err) {
      console.error(err);
      alert("Prediction failed");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const toggleAction = (action) => {
    const selected = farmActions.find((a) => a.id === action);
    setActiveActions((prev) => {
      let updated = [...prev];

      // Make mutually exclusive only for same field (e.g., pH increase vs decrease)
      const mutualPairs = [
        ["increase_ph", "lower_ph"],
        ["increase_n", "reduce_n"],
        ["increase_p", "reduce_p"],
        ["increase_k", "reduce_k"],
        ["irrigate_more", "irrigate_less"],
      ];

      mutualPairs.forEach(([a1, a2]) => {
        if (action === a1) updated = updated.filter((a) => a !== a2);
        if (action === a2) updated = updated.filter((a) => a !== a1);
      });

      // Toggle selected action
      if (prev.includes(action)) {
        updated = updated.filter((a) => a !== action);
      } else {
        updated.push(action);
      }

      return updated;
    });

    const actLabel = farmActions.find((a) => a.id === action)?.label;
    setVisualMessage(`${actLabel} activated`);
    setTimeout(() => setVisualMessage(""), 1500);
  };

  const farmActions = [
    {
      id: "increase_ph",
      label: "Increase pH",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      category: "ph",
    },
    {
      id: "lower_ph",
      label: "Lower pH",
      icon: TrendingDown,
      color: "from-pink-500 to-purple-500",
      category: "ph",
    },
    {
      id: "increase_n",
      label: "Increase N",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600",
      category: "nutrients",
    },
    {
      id: "reduce_n",
      label: "Reduce N",
      icon: TrendingDown,
      color: "from-emerald-600 to-green-500",
      category: "nutrients",
    },
    {
      id: "increase_p",
      label: "Increase P",
      icon: TrendingUp,
      color: "from-yellow-500 to-orange-500",
      category: "nutrients",
    },
    {
      id: "reduce_p",
      label: "Reduce P",
      icon: TrendingDown,
      color: "from-orange-500 to-yellow-500",
      category: "nutrients",
    },
    {
      id: "increase_k",
      label: "Increase K",
      icon: TrendingUp,
      color: "from-amber-500 to-yellow-600",
      category: "nutrients",
    },
    {
      id: "reduce_k",
      label: "Reduce K",
      icon: TrendingDown,
      color: "from-yellow-600 to-amber-500",
      category: "nutrients",
    },
    {
      id: "irrigate_more",
      label: "Irrigate More",
      icon: Droplets,
      color: "from-blue-500 to-cyan-500",
      category: "water",
    },
    {
      id: "irrigate_less",
      label: "Irrigate Less",
      icon: Droplets,
      color: "from-cyan-500 to-blue-500",
      category: "water",
    },
  ];

  const fieldInputs = [
    {
      name: "temperature",
      label: "Temperature (°C)",
      icon: Thermometer,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "humidity",
      label: "Humidity (%)",
      icon: Wind,
      color: "from-blue-400 to-cyan-500",
    },
    {
      name: "tds",
      label: "TDS (ppm)",
      icon: Droplets,
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "soil_moisture",
      label: "Soil Moisture (%)",
      icon: Droplets,
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "ph",
      label: "pH Level",
      icon: FlaskConical,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "N",
      label: "Nitrogen (N)",
      icon: Leaf,
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "P",
      label: "Phosphorus (P)",
      icon: Leaf,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "K",
      label: "Potassium (K)",
      icon: Leaf,
      color: "from-amber-500 to-yellow-600",
    },
  ];
  const executeActions = async () => {
    setIsExecuting(true);

    const updatedForm = { ...form };

    const actionSequence = [
      "increase_ph",
      "lower_ph",
      "irrigate_more",
      "irrigate_less",
      "increase_n",
      "reduce_n",
      "increase_p",
      "reduce_p",
      "increase_k",
      "reduce_k",
    ];

    const sequence = actionSequence.filter((a) => activeActions.includes(a));

    for (const action of sequence) {
      // Set the label of the currently running action
      const label =
        farmActions.find((a) => a.id === action)?.label || "Simulation";
      setActiveSimulation(label);

      // Run animation for this step
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Apply numeric updates
      if (action === "increase_ph") updatedForm.ph = +form.ph + 0.5 || 7.5;
      if (action === "lower_ph") updatedForm.ph = +form.ph - 0.5 || 6.5;
      if (action === "increase_n") updatedForm.N = +form.N + 5 || 50;
      if (action === "reduce_n") updatedForm.N = +form.N - 5 || 20;
      if (action === "increase_p") updatedForm.P = +form.P + 5 || 50;
      if (action === "reduce_p") updatedForm.P = +form.P - 5 || 20;
      if (action === "increase_k") updatedForm.K = +form.K + 5 || 50;
      if (action === "reduce_k") updatedForm.K = +form.K - 5 || 20;
      if (action === "irrigate_more")
        updatedForm.soil_moisture = +form.soil_moisture + 5 || 60;
      if (action === "irrigate_less")
        updatedForm.soil_moisture = +form.soil_moisture - 5 || 40;
    }

    setForm(updatedForm);
    setActiveSimulation("");
    setIsExecuting(false);
    setActiveActions([]);
    setVisualMessage("All simulations completed");
  };

  const RANGES = {
    temperature: [0, 50],
    humidity: [20, 80],
    tds: [0, 1000],
    soil_moisture: [0, 100],
    ph: [0, 14],
    N: [0, 1999],
    P: [0, 1999],
    K: [0, 1999],
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Digital Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Digital Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-6">
          {/* Control Panel */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-1 col-span-1"
          >
            <div className="bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-cyan-500/30">
              <h2 className="text-xl mb-4 text-cyan-400 flex items-center gap-2">
                <FlaskConical className="w-5 h-5" />
                Sensor Data Input
              </h2>

              <div className="space-y-3">
                {fieldInputs.map((field, idx) => (
                  <motion.div
                    key={field.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.03 }}
                    className="relative"
                  >
                    <label className="mb-1.5 text-xs text-cyan-300 flex items-center gap-2">
                      <div
                        className={`p-1 rounded-md bg-gradient-to-r ${field.color}`}
                      >
                        <field.icon className="w-3 h-3 text-white" />
                      </div>
                      {field.label}
                    </label>
                    <input
                      type="number"
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      min={RANGES[field.name]?.[0]}
                      max={RANGES[field.name]?.[1]}
                      className="w-full px-3 py-2 rounded-lg border border-cyan-500/30 bg-slate-900/50 text-cyan-100 text-sm focus:border-cyan-400 focus:outline-none transition-all placeholder-cyan-700"
                      placeholder={`Range: ${RANGES[field.name]?.[0]} - ${
                        RANGES[field.name]?.[1]
                      }`}
                    />

                    {form[field.name] && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-3 top-8"
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={handleSubmit}
                disabled={isAnalyzing}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
              >
                {isAnalyzing ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Zap className="w-4 h-4" />
                    </motion.div>
                    Running Simulation...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    Run AI Prediction
                  </>
                )}
              </motion.button>

              {prediction && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mt-6 bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-cyan-500/30"
                >
                  <h2 className="text-xl mb-2 text-cyan-400 flex items-center gap-2">
                    <Leaf className="w-5 h-5" />
                    AI Predicted Output
                  </h2>
                  <p className="text-lg text-cyan-100">{prediction}</p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Digital Twin Visualization */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-2 col-span-1"
          >
            <div className="bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-cyan-500/30 min-h-[500px] relative overflow-hidden">
              {/* 3D Field Grid */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(6, 182, 212, 0.15) 2px, transparent 2px),
                    linear-gradient(90deg, rgba(6, 182, 212, 0.15) 2px, transparent 2px)
                  `,
                  backgroundSize: "40px 40px",
                  transform: "perspective(500px) rotateX(60deg)",
                  transformOrigin: "center center",
                }}
              />

              {/* Field visualization */}

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl text-cyan-400 flex items-center gap-2">
                    <Sprout className="w-5 h-5" />
                    Live Field Simulation
                  </h2>

                  {visualMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="+bg-cyan-700/50 px-4 py-2 rounded-full text-cyan-100 text-sm shadow-lg"
                    >
                      {visualMessage}
                    </motion.div>
                  )}
                </div>

                {/* 3D Crop Grid */}
                <div className="flex justify-center mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={executeActions}
                    disabled={isExecuting || activeActions.length === 0}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium shadow-lg disabled:opacity-50"
                  >
                    {isExecuting ? "Executing Actions..." : "Execute Actions"}
                  </motion.button>
                </div>

                <div className="relative h-64 mb-6">
                  {/* Sequential Simulation Visuals */}
                  <AnimatePresence>
                    {activeSimulation && (
                      <motion.div
                        key={activeSimulation}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                          scale: [0.8, 1.2, 1.2, 0.8],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className="absolute inset-0 pointer-events-none flex items-center justify-center"
                      >
                        <motion.div
                          className="w-44 h-44 rounded-full border-4 border-cyan-400/60 bg-cyan-500/10 flex items-center justify-center text-cyan-300 text-lg font-semibold shadow-xl shadow-cyan-500/20"
                          animate={{
                            scale: [0.8, 1.1, 1],
                            rotate: [0, 10, -10, 0],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                        >
                          {activeSimulation}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action Effects Overlay */}
                  <AnimatePresence>
                    {activeActions.includes("irrigate_more") && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 pointer-events-none"
                      >
                        {[...Array(15)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400 rounded-full"
                            style={{
                              left: `${10 + Math.random() * 80}%`,
                              top: 0,
                            }}
                            animate={{
                              y: [0, 250],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </motion.div>
                    )}
                    {activeActions.some(
                      (a) => a.includes("fertilizer") || a.includes("increase_")
                    ) && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.05, 0.1, 0.05] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-green-400/5 pointer-events-none"
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Action Control Buttons */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-cyan-500/30"
                >
                  <h2 className="text-xl mb-4 text-cyan-400 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Farm Action Controls
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {farmActions.map((action) => {
                      const Icon = action.icon;
                      const active = activeActions.includes(action.id);
                      return (
                        <motion.button
                          key={action.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleAction(action.id)}
                          className={`relative group overflow-hidden p-3 rounded-lg text-sm border transition-all
                    ${
                      active
                        ? "border-cyan-400 bg-gradient-to-br from-cyan-900/80 to-blue-900/60 shadow-lg shadow-cyan-500/30"
                        : "border-cyan-500/20 bg-slate-900/40 hover:border-cyan-500/40"
                    }`}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                          />
                          <div className="flex flex-col items-center gap-1 relative z-10">
                            <Icon
                              className={`w-5 h-5 ${
                                active ? "text-cyan-300" : "text-cyan-500"
                              }`}
                            />
                            <span
                              className={`text-xs ${
                                active ? "text-cyan-100" : "text-cyan-400"
                              }`}
                            >
                              {action.label}
                            </span>
                          </div>
                          {active && (
                            <motion.div
                              className="absolute inset-0 rounded-lg border border-cyan-400/50"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scanning Lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(transparent 0%, rgba(6, 182, 212, 0.05) 50%, transparent 100%)",
          height: "100px",
        }}
        animate={{ y: ["-100px", "100vh"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

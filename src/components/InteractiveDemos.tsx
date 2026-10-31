import React, { useState } from 'react';
import { Check, Plus, Trash2, ShieldCheck, Lock, Unlock, Key, Sparkles, Sliders, Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';

// 1. Interactive Demo for Task List App
export function TaskListInteractiveDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review React 19 functional hooks & memoization', priority: 'High', completed: true },
    { id: 2, text: 'Build responsive grid with Tailwind CSS', priority: 'High', completed: true },
    { id: 3, text: 'Implement client-side client cache in LocalStorage', priority: 'Medium', completed: false },
    { id: 4, text: 'Deploy production build to Vercel with CI/CD', priority: 'Low', completed: false },
  ]);
  const [newText, setNewText] = useState('');
  const [newPriority, setNewPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
  const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: newText.trim(), priority: newPriority, completed: false },
    ]);
    setNewText('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'Active') return !t.completed;
    if (filter === 'Completed') return t.completed;
    return true;
  });

  return (
    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 text-sm text-slate-200">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
        <div>
          <span className="font-semibold text-white">Live Interactive Demo</span>
          <span className="text-xs text-slate-400 block">Try adding, completing, or filtering real tasks</span>
        </div>
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-lg text-xs">
          {(['All', 'Active', 'Completed'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-2.5 py-1 rounded transition-colors ${
                filter === tab ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Task input */}
      <form onSubmit={handleAddTask} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Add a new task (e.g. Master TypeScript)..."
          className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value as any)}
          className="bg-slate-900 border border-slate-800 rounded-lg px-2 text-xs text-slate-300 focus:outline-none focus:border-blue-500"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button
          type="submit"
          className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-medium transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          Add
        </button>
      </form>

      {/* Task List */}
      <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-6 text-slate-500 text-xs">No tasks found for this view.</div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between p-2.5 rounded-lg border transition-all ${
                task.completed
                  ? 'bg-slate-900/40 border-slate-900 text-slate-500'
                  : 'bg-slate-900/90 border-slate-800 text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  className={`w-5 h-5 rounded flex items-center justify-center border transition-colors shrink-0 ${
                    task.completed
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-slate-700 hover:border-blue-500'
                  }`}
                >
                  {task.completed && <Check className="w-3.5 h-3.5" />}
                </button>
                <span className={`text-xs truncate ${task.completed ? 'line-through text-slate-500' : ''}`}>
                  {task.text}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span
                  className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded ${
                    task.priority === 'High'
                      ? 'text-rose-400 bg-rose-950/60'
                      : task.priority === 'Medium'
                      ? 'text-amber-400 bg-amber-950/60'
                      : 'text-emerald-400 bg-emerald-950/60'
                  }`}
                >
                  {task.priority}
                </span>
                <button
                  type="button"
                  onClick={() => deleteTask(task.id)}
                  className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-900 flex justify-between text-xs text-slate-400">
        <span>{tasks.filter((t) => !t.completed).length} pending tasks</span>
        <button
          onClick={() => setTasks(tasks.filter((t) => !t.completed))}
          className="text-blue-400 hover:underline text-xs"
        >
          Clear completed
        </button>
      </div>
    </div>
  );
}

// 2. Interactive Demo for RSA Cryptography / File Encryption
export function RsaEncryptionInteractiveDemo() {
  const [plainText, setPlainText] = useState('Confidential Project Specification');
  const [keyLength, setKeyLength] = useState('2048-bit');
  const [encrypted, setEncrypted] = useState(false);
  const [cipherText, setCipherText] = useState(
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3zF9A8xK7T2uGv...[RSA-AES-256-ENCRYPTED-STREAM]'
  );
  const [verified, setVerified] = useState(true);

  const handleEncrypt = () => {
    if (!plainText.trim()) return;
    const simulatedHash = Array.from(plainText)
      .map((c) => c.charCodeAt(0).toString(16))
      .join('')
      .slice(0, 32);
    setCipherText(`RSA-${keyLength}-AES256-${simulatedHash.toUpperCase()}-7d8e2a1b9c4f`);
    setEncrypted(true);
    setVerified(true);
  };

  const handleDecrypt = () => {
    setEncrypted(false);
  };

  return (
    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 text-sm text-slate-200">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
        <div className="flex items-center gap-2">
          <Key className="w-4 h-4 text-violet-400" />
          <span className="font-semibold text-white">RSA & AES Hybrid Simulator</span>
        </div>
        <div className="text-xs text-slate-400 font-mono">Standard: PKCS#1 v2.2</div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs text-slate-400 mb-1">Input Payload / Plaintext Message</label>
          <input
            type="text"
            value={plainText}
            onChange={(e) => setPlainText(e.target.value)}
            disabled={encrypted}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 disabled:opacity-50"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Key Size</label>
            <select
              value={keyLength}
              onChange={(e) => setKeyLength(e.target.value)}
              disabled={encrypted}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-violet-500 disabled:opacity-50"
            >
              <option value="1024-bit">RSA 1024-bit</option>
              <option value="2048-bit">RSA 2048-bit (Standard)</option>
              <option value="4096-bit">RSA 4096-bit (Military)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Cipher Mode</label>
            <div className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-300 font-mono">
              AES-CBC-256 + SHA256
            </div>
          </div>
        </div>

        {encrypted ? (
          <div className="p-3 bg-violet-950/30 border border-violet-800/50 rounded-lg space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-violet-300 font-semibold flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-violet-400" />
                Encrypted Cipher Payload
              </span>
              <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                <ShieldCheck className="w-3 h-3" />
                Integrity Validated
              </span>
            </div>
            <p className="font-mono text-xs text-violet-200 break-all bg-slate-950/60 p-2 rounded border border-violet-900/40">
              {cipherText}
            </p>
            <button
              onClick={handleDecrypt}
              className="w-full mt-2 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
            >
              <Unlock className="w-3.5 h-3.5" />
              Decrypt Payload With Private Key
            </button>
          </div>
        ) : (
          <button
            onClick={handleEncrypt}
            className="w-full py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-violet-600/20"
          >
            <Lock className="w-3.5 h-3.5" />
            Generate RSA Keys & Encrypt File Payload
          </button>
        )}
      </div>
    </div>
  );
}

// 3. Interactive Demo for Image Colorization (Interactive Comparison Slider)
export function ImageColorizationInteractiveDemo() {
  const [sliderPosition, setSliderPosition] = useState(55);

  return (
    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 text-sm text-slate-200">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold text-white">OpenCV Neural Colorization Pipeline</span>
        </div>
        <span className="text-xs text-slate-400">Drag slider to compare</span>
      </div>

      <div className="relative w-full h-56 rounded-lg overflow-hidden select-none border border-slate-800 bg-slate-900">
        {/* Colorized Image Layer (Background) */}
        <div
          className="absolute inset-0 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(135deg, #1e3a8a 0%, #065f46 50%, #991b1b 100%)`,
          }}
        >
          <div className="text-center p-4 bg-slate-950/80 backdrop-blur-sm rounded-xl border border-white/10 max-w-xs">
            <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold block mb-1">
              Deep Learning Inference
            </span>
            <p className="text-xs text-slate-200">
              LAB color space chrominance (A & B channels) predicted from grayscale L-channel
            </p>
          </div>
        </div>

        {/* Grayscale Layer (Clipped by slider) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div
            className="absolute inset-0 w-full h-full grayscale flex items-center justify-center"
            style={{
              width: '100%',
              minWidth: '320px',
              backgroundImage: `linear-gradient(135deg, #1f2937 0%, #374151 50%, #111827 100%)`,
            }}
          >
            <div className="text-center p-4 bg-black/80 backdrop-blur-sm rounded-xl border border-white/10 max-w-xs">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                Original Input
              </span>
              <p className="text-xs text-slate-300">Monochromatic Grayscale Luminance Channel</p>
            </div>
          </div>
        </div>

        {/* Vertical divider bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-lg"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="w-6 h-6 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md text-[10px] font-bold">
            ↔
          </div>
        </div>
      </div>

      {/* Slider range control */}
      <div className="mt-3 flex items-center gap-3">
        <span className="text-xs text-slate-400">Grayscale (L)</span>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="flex-1 accent-emerald-500 cursor-pointer"
        />
        <span className="text-xs text-emerald-400">Colorized (LAB)</span>
      </div>
    </div>
  );
}

// 4. Interactive Demo for Seminar Hall Reservation
export function SeminarHallInteractiveDemo() {
  const [selectedHall, setSelectedHall] = useState('Main Auditorium');
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [reservedSlots, setReservedSlots] = useState<string[]>(['10:00 AM - 12:00 PM']);
  const [successMsg, setSuccessMsg] = useState(false);

  const slots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '01:00 PM - 03:00 PM',
    '03:30 PM - 05:30 PM',
  ];

  const handleBook = () => {
    if (!selectedSlot) return;
    if (reservedSlots.includes(selectedSlot)) return;
    setReservedSlots([...reservedSlots, selectedSlot]);
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 3000);
    setSelectedSlot(null);
  };

  return (
    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 text-sm text-slate-200">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-400" />
          <span className="font-semibold text-white">Facility Availability Matrix</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-400">
          <MapPin className="w-3.5 h-3.5" /> Campus Hall A
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-xs text-slate-400 mb-1">Select Hall Venue</label>
          <select
            value={selectedHall}
            onChange={(e) => setSelectedHall(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
          >
            <option value="Main Auditorium">Main Auditorium (Capacity: 500)</option>
            <option value="Seminar Hall 1">Seminar Hall 1 (Capacity: 150)</option>
            <option value="Conference Room B">Conference Room B (Capacity: 60)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs text-slate-400 mb-2">Available Time Slots (Conflict Detection)</label>
          <div className="grid grid-cols-2 gap-2">
            {slots.map((slot) => {
              const isReserved = reservedSlots.includes(slot);
              const isSelected = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  disabled={isReserved}
                  onClick={() => setSelectedSlot(slot)}
                  className={`p-2 rounded-lg text-xs font-mono text-left border transition-all ${
                    isReserved
                      ? 'bg-rose-950/20 border-rose-900/40 text-rose-400/80 cursor-not-allowed'
                      : isSelected
                      ? 'bg-blue-600/20 border-blue-500 text-blue-300 font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{slot}</span>
                    {isReserved ? (
                      <span className="text-[10px] text-rose-400 font-sans">Booked</span>
                    ) : (
                      <span className="text-[10px] text-emerald-400 font-sans">Available</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {successMsg && (
          <div className="p-2.5 bg-emerald-950/40 border border-emerald-800/60 rounded-lg text-xs text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Reservation confirmed for {selectedHall}! Admin confirmation token generated.
          </div>
        )}

        <button
          onClick={handleBook}
          disabled={!selectedSlot}
          className="w-full py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600 text-white rounded-lg text-xs font-medium transition-colors"
        >
          Confirm Reservation Request
        </button>
      </div>
    </div>
  );
}

// 5. Interactive Agency Showcase for Infinity Visions
export function InfinityVisionsInteractiveDemo() {
  const [activeTab, setActiveTab] = useState<'branding' | 'development' | 'motion'>('development');

  return (
    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 text-sm text-slate-200">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
        <div>
          <span className="font-semibold text-white">Infinity Visions Experience</span>
          <span className="text-xs text-slate-400 block">Creative Agency & Motion Showcase</span>
        </div>
        <a
          href="https://infinityvisions.framer.website/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-violet-400 hover:text-violet-300 hover:underline"
        >
          Open Live Agency Site ↗
        </a>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { id: 'development', label: 'Front-End UIs' },
          { id: 'branding', label: 'Brand Identity' },
          { id: 'motion', label: 'Motion Graphics' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-violet-600/30 border border-violet-500 text-violet-200 shadow-sm'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-[#0F1117] border border-violet-900/30">
        {activeTab === 'development' && (
          <div>
            <h4 className="text-white font-semibold text-sm mb-1">Modern React Front-End Architecture</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Crafting performant web experiences using React.js, Tailwind CSS, and Vite. Designed with focus on zero layout shifts, smooth responsiveness, and micro-interactions.
            </p>
          </div>
        )}
        {activeTab === 'branding' && (
          <div>
            <h4 className="text-white font-semibold text-sm mb-1">Visual Branding & Identity Systems</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Crafting cohesive visual styles, typographic pairings, and color palettes that position digital products distinctly in their competitive landscape.
            </p>
          </div>
        )}
        {activeTab === 'motion' && (
          <div>
            <h4 className="text-white font-semibold text-sm mb-1">Fluid Motion & Interaction Design</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bringing web interfaces to life with Framer Motion transitions, physics-based springs, and scroll-linked timeline sequences.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

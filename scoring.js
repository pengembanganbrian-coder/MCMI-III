
// Kunci Penskoran Berdasarkan Appendix B PDF User
const scoringConfig = {
  scale1: { 
    name: "Schizoid (1)", 
    t2: [10, 27, 46, 92, 105, 148, 165], 
    t1: [4, 38, 48, 101, 142, 156, 167], 
    f1: [32, 57] 
  },
  scale2A: { 
    name: "Avoidant (2A)", 
    t2: [18, 40, 69, 84, 99, 127, 141, 174], 
    t1: [47, 48, 146, 148, 151, 158], 
    f1: [57, 80] 
  },
  scale2B: { 
    name: "Depressive (2B)", 
    t2: [20, 25, 47, 112, 123, 133, 145, 151], 
    t1: [24, 43, 83, 86, 142, 148, 154], 
    f1: [] 
  },
  scale3: { 
    name: "Dependent (3)", 
    t2: [16, 35, 45, 73, 94, 108, 135, 169], 
    t1: [47, 56, 84, 120, 133, 141, 151], 
    f1: [82] 
  },
  scale4: { 
    name: "Histrionic (4)", 
    t2: [12, 21, 32, 51, 57, 80, 88], 
    t1: [10, 24, 27, 48, 69, 92, 99, 123, 127, 174], 
    f1: [18] 
  },
  scale5: { 
    name: "Narcissistic (5)", 
    t2: [5, 26, 31, 67, 85, 93, 144, 159], 
    t1: [21, 38, 57, 80, 88, 116], 
    f1: [2] 
  },
  scale6A: { 
    name: "Antisocial (6A)", 
    t2: [17, 38, 53, 101, 113, 139, 166], 
    t1: [7, 13, 14, 21, 41, 52, 93, 122, 136], 
    f1: [172] 
  }
};

function startTest() {
    const nama = document.getElementById('nama').value;
    const nip = document.getElementById('nip').value;
    if(!nama || !nip) return alert("Mohon lengkapi Nama dan NIP.");
    
    document.getElementById('setup-section').classList.add('hidden');
    document.getElementById('test-section').classList.remove('hidden');
    
    const container = document.getElementById('question-list');
    questions.forEach(q => {
        container.innerHTML += `
            <div class="question-card p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all">
                <span class="text-slate-700 font-medium leading-relaxed md:w-2/3">${q.id}. ${q.text}</span>
                <div class="flex gap-3">
                    <label class="flex-1 md:flex-none flex items-center justify-center gap-2 cursor-pointer bg-blue-50 px-6 py-3 rounded-xl border-2 border-transparent hover:border-blue-200 transition-all">
                        <input type="radio" name="q${q.id}" value="true" class="w-5 h-5 text-blue-600"> 
                        <span class="text-blue-800 font-black text-lg">+</span>
                    </label>
                    <label class="flex-1 md:flex-none flex items-center justify-center gap-2 cursor-pointer bg-slate-50 px-6 py-3 rounded-xl border-2 border-transparent hover:border-slate-200 transition-all">
                        <input type="radio" name="q${q.id}" value="false" class="w-5 h-5 text-slate-600"> 
                        <span class="text-slate-800 font-black text-lg">-</span>
                    </label>
                </div>
            </div>`;
    });
}

function finishTest() {
    const answers = {};
    let disclosureRaw = 0;

    questions.forEach(q => {
        const selected = document.querySelector(`input[name="q${q.id}"]:checked`)?.value;
        answers[q.id] = selected;
        if(selected === 'true') disclosureRaw++;
    });

    const isValid = disclosureRaw >= 34 && disclosureRaw <= 178;
    const alertBox = document.getElementById('validity-alert');
    alertBox.innerText = isValid ? "✅ HASIL VALID (Disclosure Score: " + disclosureRaw + ")" : "⚠️ HASIL TIDAK VALID (Disclosure Score: " + disclosureRaw + ")";
    alertBox.className = isValid ? "bg-emerald-100 text-emerald-800 p-4 rounded-2xl text-center font-bold" : "bg-red-100 text-red-800 p-4 rounded-2xl text-center font-bold";

    const grid = document.getElementById('result-grid');
    grid.innerHTML = "";
    
    for(const [key, cfg] of Object.entries(scoringConfig)) {
        let raw = 0;
        cfg.t2.forEach(id => { if(answers[id] === 'true') raw += 2; });
        cfg.t1.forEach(id => { if(answers[id] === 'true') raw += 1; });
        if(cfg.f1) cfg.f1.forEach(id => { if(answers[id] === 'false') raw += 1; });
        
        grid.innerHTML += `
            <div class="bg-white border-2 border-slate-100 p-5 rounded-2xl flex justify-between items-center shadow-sm">
                <span class="font-bold text-slate-700">${cfg.name}</span>
                <span class="text-2xl font-black text-blue-900">${raw}</span>
            </div>`;
    }

    document.getElementById('user-display').innerText = "Responden: " + document.getElementById('nama').value + " | NIP: " + document.getElementById('nip').value;
    document.getElementById('test-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
    window.scrollTo({top: 0, behavior: 'smooth'});
}

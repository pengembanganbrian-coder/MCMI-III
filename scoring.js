
// Logic and Weighting based on Appendix B
const clinicalScales = {
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
    },
    scale6B: { 
        name: "Sadistic (6B)", 
        t2: [14, 28, 64, 87, 95, 116], 
        t1: [7, 13, 17, 33, 36, 39, 41, 49, 53, 79, 93, 96, 166], 
        f1: [] 
    }
};

function startTest() {
    const nama = document.getElementById('nama').value.trim();
    const nip = document.getElementById('nip').value.trim();
    if(!nama || !nip) return alert("Harap isi Nama dan NIP pegawai.");
    
    document.getElementById('setup-section').classList.add('hidden');
    document.getElementById('test-section').classList.remove('hidden');
    
    const list = document.getElementById('question-list');
    questions.forEach(q => {
        list.innerHTML += `
            <div class="question-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all rounded-xl hover:shadow-md border-b border-slate-50">
                <span class="text-slate-700 font-bold leading-relaxed md:w-3/4">${q.id}. ${q.text}</span>
                <div class="flex gap-4">
                    <label class="flex-1 md:flex-none flex items-center justify-center gap-2 cursor-pointer bg-blue-50 px-8 py-4 rounded-2xl border-2 border-transparent hover:border-blue-300 transition-all active:scale-95 group">
                        <input type="radio" name="q${q.id}" value="true" class="hidden peer"> 
                        <span class="text-blue-900 font-black text-2xl group-hover:scale-110 transition-transform">+</span>
                        <div class="w-4 h-4 rounded-full border-2 border-blue-900 peer-checked:bg-blue-900 transition-colors"></div>
                    </label>
                    <label class="flex-1 md:flex-none flex items-center justify-center gap-2 cursor-pointer bg-slate-100 px-8 py-4 rounded-2xl border-2 border-transparent hover:border-slate-300 transition-all active:scale-95 group">
                        <input type="radio" name="q${q.id}" value="false" class="hidden peer"> 
                        <span class="text-slate-800 font-black text-2xl group-hover:scale-110 transition-transform">-</span>
                        <div class="w-4 h-4 rounded-full border-2 border-slate-800 peer-checked:bg-slate-800 transition-colors"></div>
                    </label>
                </div>
            </div>`;
    });
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function finishTest() {
    const answers = {};
    let disclosureRaw = 0;

    questions.forEach(q => {
        const sel = document.querySelector(`input[name="q${q.id}"]:checked`)?.value;
        answers[q.id] = sel;
        if(sel === 'true') disclosureRaw++;
    });

    const isValid = disclosureRaw >= 34 && disclosureRaw <= 178;
    const vBox = document.getElementById('validity-box');
    vBox.innerText = isValid ? "✅ HASIL VALID (Skor Disclosure: " + disclosureRaw + ")" : "⚠️ HASIL TIDAK VALID (Skor Disclosure: " + disclosureRaw + ")";
    vBox.className = isValid ? "bg-emerald-100 text-emerald-800 border-emerald-300 p-6 rounded-3xl text-center font-black text-xl border-4" : "bg-red-100 text-red-800 border-red-300 p-6 rounded-3xl text-center font-black text-xl border-4";

    const table = document.getElementById('result-table');
    table.innerHTML = "";
    
    for(const [id, cfg] of Object.entries(clinicalScales)) {
        let raw = 0;
        cfg.t2.forEach(qid => { if(answers[qid] === 'true') raw += 2; });
        cfg.t1.forEach(qid => { if(answers[qid] === 'true') raw += 1; });
        if(cfg.f1) cfg.f1.forEach(qid => { if(answers[qid] === 'false') raw += 1; });
        
        let br = convertRawToBR(id, raw);
        
        let interpretation = "NORMAL";
        let colorClass = "text-slate-400 font-bold";
        if (br >= 85) {
            interpretation = "GANGGUAN (Signifikan)";
            colorClass = "text-red-600 font-black bg-red-50 px-3 py-1 rounded-full";
        } else if (br >= 75) {
            interpretation = "CIRI/SIFAT (Moderat)";
            colorClass = "text-amber-600 font-black bg-amber-50 px-3 py-1 rounded-full";
        }

        table.innerHTML += `
            <tr class="hover:bg-slate-50 transition-all border-b border-slate-100">
                <td class="p-6 font-bold text-slate-700">${cfg.name}</td>
                <td class="p-6 text-center text-slate-500 font-medium">${raw}</td>
                <td class="p-6 text-center text-2xl font-black text-blue-900">${br}</td>
                <td class="p-6 text-xs tracking-tighter ${colorClass}">${interpretation}</td>
            </tr>`;
    }

    document.getElementById('user-display').innerText = "Pegawai: " + document.getElementById('nama').value + " | NIP: " + document.getElementById('nip').value;
    document.getElementById('test-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Base de données Outillage Connecteurs — KGU Studio
// Chaque entrée : fam (famille), ref, taille, type, pince, positionneur, tourelle, insertion, extraction, notes

const DB_CONTACTS = [
  // ===== MIL-DTL-38999 =====
  {fam:"38999", ref:"22D Pin", taille:"22D", type:"Pin - miniature", pince:"M22520/2-01 (DMC AFM8)", tourelle:"—", positionneur:"M22520/2-09", insertion:"M81969/8-01", extraction:"M81969/8-02", notes:"24-28 AWG"},
  {fam:"38999", ref:"22D Socket", taille:"22D", type:"Socket - miniature", pince:"M22520/2-01 (DMC AFM8)", tourelle:"—", positionneur:"M22520/2-07", insertion:"M81969/8-01", extraction:"M81969/8-02", notes:"24-28 AWG"},
  {fam:"38999", ref:"Taille 20", taille:"20", type:"Pin/Socket", pince:"M22520/1-01 (AF8) ou M22520/2-01", tourelle:"M22520/1-04", positionneur:"M22520/2-10 (si base 2-01)", insertion:"M81969/8-05", extraction:"M81969/8-06", notes:"20-24 AWG — le plus courant"},
  {fam:"38999", ref:"Taille 16", taille:"16", type:"Pin/Socket", pince:"M22520/1-01 (AF8)", tourelle:"M22520/1-04", positionneur:"—", insertion:"M81969/8-07", extraction:"M81969/8-08", notes:"16-20 AWG"},
  {fam:"38999", ref:"Taille 12", taille:"12", type:"Pin/Socket", pince:"M22520/1-01 (AF8)", tourelle:"M22520/1-04", positionneur:"—", insertion:"M81969/8-09", extraction:"M81969/8-10", notes:"12-14 AWG"},
  {fam:"38999", ref:"12 Coax (âme)", taille:"12 Coax", type:"Blindé", pince:"M22520/2-01 (AFM8)", tourelle:"—", positionneur:"M22520/2-34", insertion:"Selon fiche contact", extraction:"Selon fiche contact", notes:"M39029/75, /59, /60"},
  {fam:"38999", ref:"12 Coax (blindage)", taille:"12 Coax", type:"Manchon", pince:"M22520/31-01", tourelle:"—", positionneur:"M22520/31-02", insertion:"Selon fiche contact", extraction:"Selon fiche contact", notes:"Sertissage manchon de blindage"},
  {fam:"38999", ref:"10 (Power)", taille:"10", type:"Pin/Socket", pince:"Outil dédié fabricant (1716P-type)", tourelle:"—", positionneur:"N/A", insertion:"M81969/8-11", extraction:"M81969/8-12", notes:"Contact puissance, hors gamme M22520 std"},

  // ===== MIL-DTL-5015 =====
  {fam:"5015", ref:"Taille 16 / 16S", taille:"16", type:"Pin/Socket", pince:"M22520/1-01 (AF8)", tourelle:"—", positionneur:"Localisateur dédié 5015-16", insertion:"Outil fabricant", extraction:"Outil fabricant", notes:"16-20 AWG"},
  {fam:"5015", ref:"Taille 12", taille:"12", type:"Pin/Socket", pince:"M22520/1-01 (AF8)", tourelle:"—", positionneur:"Localisateur dédié 5015-12", insertion:"Outil fabricant", extraction:"Outil fabricant", notes:"12-14 AWG"},
  {fam:"5015", ref:"Taille 8", taille:"8", type:"Pin/Socket", pince:"Outil pneumatique dédié", tourelle:"—", positionneur:"Selon fabricant", insertion:"Outil fabricant", extraction:"Outil fabricant", notes:"Sertissage pneumatique obligatoire"},
  {fam:"5015", ref:"Taille 4", taille:"4", type:"Pin/Socket", pince:"Outil pneumatique dédié", tourelle:"—", positionneur:"Selon fabricant", insertion:"Outil fabricant", extraction:"Outil fabricant", notes:"Sertissage pneumatique obligatoire"},
  {fam:"5015", ref:"Taille 0", taille:"0", type:"Pin/Socket", pince:"Outil pneumatique dédié", tourelle:"—", positionneur:"Selon fabricant", insertion:"Outil fabricant", extraction:"Outil fabricant", notes:"Sertissage pneumatique obligatoire"},

  // ===== Souriau 851 =====
  {fam:"851", ref:"Taille 20 — Serti AWG24", taille:"20", type:"Serti (0,21mm²)", pince:"8365 (M22520/1-01)", tourelle:"—", positionneur:"8365-02 (M22520/1-02)", insertion:"8500-29B", extraction:"8500-36A", notes:"Code shell R = version sertie"},
  {fam:"851", ref:"Taille 20 — Serti AWG22", taille:"20", type:"Serti (0,38mm²)", pince:"8476-01 (M22520/2-01)", tourelle:"—", positionneur:"8476-02 (M22520/2-02)", insertion:"8500-29B", extraction:"8500-36A", notes:"Code shell R = version sertie"},
  {fam:"851", ref:"Taille 20 — Serti AWG18", taille:"20", type:"Serti (0,93mm²)", pince:"8465 (MS3191-1)", tourelle:"—", positionneur:"MS3191-20A", insertion:"8500-29B", extraction:"8500-36A", notes:"Douille réductrice 8500-781 si section < taille"},
  {fam:"851", ref:"Taille 16 — Serti AWG16", taille:"16", type:"Serti (1,34mm²)", pince:"8365 (M22520/1-01)", tourelle:"—", positionneur:"8365-02 (M22520/1-02)", insertion:"8500-39", extraction:"8500-38A", notes:"—"},
  {fam:"851", ref:"Taille 16 — Serti AWG14", taille:"16", type:"Serti (1,91mm²)", pince:"8465 (MS3191-1)", tourelle:"—", positionneur:"MS3191-16A", insertion:"8500-39", extraction:"8500-38A", notes:"—"},
  {fam:"851", ref:"Taille 20 — Soudure", taille:"20", type:"Soudure (non amovible)", pince:"AUCUNE — fer à souder", tourelle:"—", positionneur:"—", insertion:"N/A (contact fixe)", extraction:"N/A (contact fixe)", notes:"Code shell E = version soudure"},
  {fam:"851", ref:"Taille 16 — Soudure", taille:"16", type:"Soudure (non amovible)", pince:"AUCUNE — fer à souder", tourelle:"—", positionneur:"—", insertion:"N/A (contact fixe)", extraction:"N/A (contact fixe)", notes:"Code shell E = version soudure"},

  // ===== Souriau 8STA / Deutsch Autosport =====
  {fam:"8STA", ref:"22D Pin", taille:"22D", type:"Miniature", pince:"M22520/2-01 (AFM8)", tourelle:"—", positionneur:"K42 (≈M22520/2-09)", insertion:"M81969/14-01", extraction:"M81969/14-01", notes:"24-28 AWG"},
  {fam:"8STA", ref:"22D Socket", taille:"22D", type:"Miniature", pince:"M22520/2-01 (AFM8)", tourelle:"—", positionneur:"K40 (≈M22520/2-08)", insertion:"M81969/14-01", extraction:"M81969/14-01", notes:"24-28 AWG"},
  {fam:"8STA", ref:"Taille 20", taille:"20", type:"Pin/Socket", pince:"M22520/2-01 ou M22520/1-01", tourelle:"TH163 (si base 1-01)", positionneur:"K43 (≈M22520/2-10)", insertion:"M81969/14-10", extraction:"M81969/14-10", notes:"20-24 AWG"},
  {fam:"8STA", ref:"Taille 16", taille:"16", type:"Pin/Socket", pince:"M22520/1-01 (AF8)", tourelle:"M22520/1-04", positionneur:"—", insertion:"M81969/14-03", extraction:"M81969/14-03", notes:"16-20 AWG"},

  // ===== Deutsch DT/DTM/DTP =====
  {fam:"Deutsch", ref:"20 (DTM)", taille:"20", type:"Pin/Socket", pince:"HDT-48-00 ou AF8 + TH1A", tourelle:"TH1A (si base AF8)", positionneur:"Intégré au turret", insertion:"—", extraction:"Outil extraction Deutsch dédié", notes:"8 empreintes rotatives"},
  {fam:"Deutsch", ref:"16 (DT)", taille:"16", type:"Pin/Socket", pince:"HDT-48-00 ou AF8 + TH1A", tourelle:"TH1A", positionneur:"Intégré au turret", insertion:"—", extraction:"Outil extraction Deutsch dédié", notes:"—"},
  {fam:"Deutsch", ref:"12 (DTP)", taille:"12", type:"Pin/Socket", pince:"Outil DTP dédié (gros gabarit)", tourelle:"—", positionneur:"Intégré", insertion:"—", extraction:"Outil extraction Deutsch dédié", notes:"Non couvert par AF8/TH1A standard"},

  // ===== D-Sub =====
  {fam:"D-Sub", ref:"Taille 20 (standard)", taille:"20", type:"Pin/Socket usiné", pince:"M22520/2-01 (AFM8)", tourelle:"—", positionneur:"M22520/2-08", insertion:"M81969/39-01", extraction:"M81969/39-01", notes:"Connecteurs 9/15/25/37/50 points (DB9-DB50)"},

  // ===== RS PRO =====
  {fam:"RS PRO", ref:"LX93 — 1mm", taille:"1mm", type:"Serti", pince:"M22520/2-01 + positionneur dédié", tourelle:"—", positionneur:"Voir fiche technique RS", insertion:"—", extraction:"—", notes:"22-26 AWG"},
  {fam:"RS PRO", ref:"LX93 — 0.75mm", taille:"0.75mm", type:"Serti", pince:"M22520/2-01 + positionneur dédié", tourelle:"—", positionneur:"Voir fiche technique RS", insertion:"—", extraction:"—", notes:"24-28 AWG"},
  {fam:"RS PRO", ref:"LX93 — 1.1mm", taille:"1.1mm", type:"Serti", pince:"M22520/2-01 + positionneur dédié", tourelle:"—", positionneur:"Voir fiche technique RS", insertion:"—", extraction:"—", notes:"20-24 AWG"},
  {fam:"RS PRO", ref:"LX99 — 1.6mm", taille:"1.6mm", type:"Serti", pince:"M22520/1-01 + tourelle dédiée", tourelle:"Voir fiche technique RS", positionneur:"Voir fiche technique RS", insertion:"—", extraction:"—", notes:"16-22 AWG"},
  {fam:"RS PRO", ref:"MDC", taille:"—", type:"Serti", pince:"Voir fiche technique produit RS", tourelle:"—", positionneur:"—", insertion:"—", extraction:"—", notes:"24-28 AWG — pas de norme commune"},
];

const DB_EMBOUTS = [
  {fam:"Embouts", ref:"Blanc", taille:"0,5 mm²", type:"AWG 20", pince:"Pince embouts standard", tourelle:"—", positionneur:"—", insertion:"—", extraction:"—", notes:"—"},
  {fam:"Embouts", ref:"Bleu", taille:"0,75 mm²", type:"AWG 18", pince:"Pince embouts standard", tourelle:"—", positionneur:"—", insertion:"—", extraction:"—", notes:"—"},
  {fam:"Embouts", ref:"Rouge", taille:"1 mm²", type:"AWG 17", pince:"Pince embouts standard", tourelle:"—", positionneur:"—", insertion:"—", extraction:"—", notes:"—"},
  {fam:"Embouts", ref:"Noir", taille:"1,5 mm²", type:"AWG 16", pince:"Pince embouts standard", tourelle:"—", positionneur:"—", insertion:"—", extraction:"—", notes:"—"},
  {fam:"Embouts", ref:"Gris", taille:"2,5 mm²", type:"AWG 14", pince:"Pince embouts standard", tourelle:"—", positionneur:"—", insertion:"—", extraction:"—", notes:"—"},
  {fam:"Embouts", ref:"Vert", taille:"6 mm²", type:"AWG 10", pince:"Pince embouts standard", tourelle:"—", positionneur:"—", insertion:"—", extraction:"—", notes:"—"},
  {fam:"Embouts", ref:"Marron", taille:"16 mm²", type:"AWG 6", pince:"Pince embouts standard", tourelle:"—", positionneur:"—", insertion:"—", extraction:"—", notes:"—"},
];

const DB_COSSES = [
  {fam:"Cosses", ref:"Œillet rouge", taille:"0,5-1,5 mm²", type:"AWG 22-16", pince:"Pince à cosses préisolées", tourelle:"—", positionneur:"—", insertion:"—", extraction:"—", notes:"Œillets M3/M4/M5/M6/M8/M10"},
  {fam:"Cosses", ref:"Œillet bleu", taille:"1,5-2,5 mm²", type:"AWG 16-14", pince:"Pince à cosses préisolées", tourelle:"—", positionneur:"—", insertion:"—", extraction:"—", notes:"Œillets M3/M4/M5/M6/M8/M10"},
  {fam:"Cosses", ref:"Œillet jaune", taille:"4-6 mm²", type:"AWG 12-10", pince:"Pince à cosses préisolées", tourelle:"—", positionneur:"—", insertion:"—", extraction:"—", notes:"Œillets M4/M5/M6/M8/M10/M12"},
  {fam:"Cosses", ref:"Fourche/Faston rouge", taille:"0,5-1,5 mm²", type:"AWG 22-16", pince:"Pince à cosses préisolées", tourelle:"—", positionneur:"—", insertion:"—", extraction:"—", notes:"Fourche 3,7-5,3mm / Faston 2,8-6,3mm"},
  {fam:"Cosses", ref:"Fourche/Faston bleu", taille:"1,5-2,5 mm²", type:"AWG 16-14", pince:"Pince à cosses préisolées", tourelle:"—", positionneur:"—", insertion:"—", extraction:"—", notes:"Fourche 4,3-6,4mm / Faston 4,8-6,3mm"},
  {fam:"Cosses", ref:"Fourche/Faston jaune", taille:"4-6 mm²", type:"AWG 12-10", pince:"Pince à cosses préisolées", tourelle:"—", positionneur:"—", insertion:"—", extraction:"—", notes:"Fourche 5,3-8,4mm / Faston 6,3-9,5mm"},
];

const ALL_DATA = [...DB_CONTACTS, ...DB_EMBOUTS, ...DB_COSSES];

const FAMILIES = ["Tout", "38999", "5015", "851", "8STA", "Deutsch", "D-Sub", "RS PRO", "Embouts", "Cosses"];

const GUIDES = [
  {
    titre: "Lire une référence Souriau 851",
    texte: "Structure : 851 [shell type][E ou R][shell size]-[layout][P/S]-[spec]. Suffixe E (ex: 00E, 06E, 07E) = version SOUDURE, contact non amovible → aucun outil de sertissage. Suffixe R (ex: 00R, 06R, 07R) = version SERTIE, contact amovible → pince + positionneur nécessaires. Exemple : 85106EC1419S50 → shell 06 (plug), E = soudure, taille capot 14, 19 contacts taille 20 → fer à souder uniquement."
  },
  {
    titre: "Lire une référence MIL-DTL-38999",
    texte: "Structure : D38999/[type shell][taille][arrangement][P ou S][clavetage]. L'arrangement (ex: B4, B35, J61) encode le nombre de contacts ET leur taille via les tables normalisées M39029. Exemple : D38999/24FB4SN → type 24 (receptacle jam-nut), taille F, arrangement B4 = 4 contacts taille 20, S = socket, N = clavetage normal."
  }
];

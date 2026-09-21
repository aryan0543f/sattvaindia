/* ========================================
   SATTVA INDIA - Main JavaScript
   Translations, Cart Logic, Modals, Animations
   ======================================== */

// ===== TRANSLATIONS =====
const translations = {
  en: {
    topCompliance: "FSSAI & ISO 9001:2015 Verified Facility",
    navAbout: "About Us",
    navSectors: "Supply Sectors",
    navRoutes: "Logistics Hub",
    navCatalog: "Catalog & Matrix",
    navCert: "COA & Quality",
    navQuoteDrawer: "Quote Drawer",
    btnBulkPricing: "Submit Order",
    heroBadge: "FSSAI & ISO Certified • Direct Manufacturing & Supply Partner",
    heroTitle: "Made for the HORECA World & Exporters.",
    heroDesc: "Sourced and supplied from our Pune facility. Available for bulk orders with consistent quality and taste, batch after batch.",
    heroOrderBtn: "Build Custom Batch Order",
    heroInspectCert: "Inspect Compliance",
    proofHeader: "Verified Quality Metrics",
    
    aboutTag: "Company Heritage",
    aboutMainTitle: "Connecting Pure Farmlands with Commercial Kitchens",
    aboutBadge: "Our Origin & Infrastructure",
    aboutCardTitle: "SATTVA INDIA",
    aboutCardDesc: "Sattva India, based in Pradhikaran, Nigdi, Pune, operates dedicated manufacturing and hand-picked batch packaging units focused on delivering consistent quality and reliable food products for the institutional food sector.",
    aboutP1: "Founded with a commitment to quality, consistency and reliable supply, Sattva India has grown to become the preferred B2B food partner for leading hotels, cafés, restaurants, caterers, educational and industrial messes across Maharashtra and beyond.",
    aboutP2: "Our range goes beyond spice powders and whole spices to include sauces, pickles, papads, dry fruits and other everyday food essentials — bringing diverse products together under one roof for professional kitchens.",
    aboutPillar1: "Hygienic Processing",
    aboutPillar3: "Flexible Sizing",

    sectorTag: "Institutional Segments",
    sectorTitle: "Dedicated Solutions for Every Commercial Scale",
    sectorDesc: "We tailor our volume slabs, recipe profiles, and delivery schedules to meet the stringent demands of each commercial sector.",
    sec1Title: "Hotels, Cafes & Restaurants",
    sec1Desc: "Consistent gravy bases, authentic tandoori and biryani masalas, sauces, and kitchen pantry items with standardized portioning and flavor lock.",
    sec2Title: "Hostels, Messes & Canteens",
    sec2Desc: "Engineered for large-scale institutional cafeterias, engineering college messes, and factory dining facilities requiring high yields and wholesale efficiency.",
    sec4Title: "Global Exports & OEM",
    sec4Desc: "Machine-cleaned, sorted, low-moisture whole and powdered spices compliant with international Phytosanitary and Spice Board benchmarks.",

    routeTag: "Local Pune Logistics",
    routeTitle: "Daily Scheduled Delivery Grid",
    routeDesc: "Operating from our central Nigdi hub with guaranteed regular supply runs across major industrial & HoReCa clusters.",
    catalogTag: "Interactive Inventory Matrix",
    catalogTitle: "Wholesale Product Order Matrix",
    catalogDesc: "Choose packaging formats or request testing samples directly into your procurement drawer.",
    catMasale: "Ground Masale (20)",
    catWhole: "Whole Spices & Dry Fruits (24)",
    catSauces: "Sauces (5)",
    catPapadPickle: "Papad & Pickles (8)",
    catStaples: "Pantry & Other Items (8)",
    formTag: "Direct Wholesale Inquiries",
    formTitle: "Structured Quotation Summary",
    formDesc: "Your customized quantities and pack units from the catalog are automatically populated below.",
    formLabelBiz: "Business Name *",
    formLabelPhone: "WhatsApp Mobile *",
    formLabelSector: "Operation Sector",
    formLabelLoc: "Delivery Destination",
    formLabelReq: "Configured Items in Quote",
    formBtnSend: "Transmit Order Quote to WhatsApp Desk",

    footerBrandBio: "Your trusted B2B HORECA food partner. Supplying spices, sauces, pickles, papads, dry fruits and institutional food essentials for hotels, cafés, restaurants, caterers, messes and commercial kitchens across Pune and Maharashtra.",
    footerSecHeader: "Supply Sectors",
    footerCatHeader: "Product Portfolio",
    footerHubHeader: "Pune Central Hub"
  },
  mr: {
    topCompliance: "FSSAI आणि ISO 9001:2015 प्रमाणित युनिट",
    navAbout: "आमच्याबद्दल",
    navSectors: "पुरवठा क्षेत्रे",
    navRoutes: "वितरण मार्ग",
    navCatalog: "उत्पादने व दर",
    navCert: "लॅब रिपोर्ट (COA)",
    navQuoteDrawer: "ऑर्डर यादी",
    btnBulkPricing: "ऑर्डर पाठवा",
    heroBadge: "FSSAI आणि ISO प्रमाणित • थेट उत्पादन आणि अन्न पुरवठादार",
    heroTitle: "हॉटेल्स, केटरर्स आणि निर्यातदारांसाठी अस्सल दर्जेदार मसाले.",
    heroDesc: "निगडी, पुणे येथील आमच्या प्रोसेसिंग युनिटमधून थेट पुरवठा. मोफत शेफ सॅम्पल किंवा घाऊक पोती निवडून ऑर्डर करा.",
    heroOrderBtn: "होलसेल ऑर्डर तयार करा",
    heroInspectCert: "प्रमाणपत्रे तपासा",
    proofHeader: "तपासलेले गुणवत्ता निकष",
    
    aboutTag: "कंपनीचा वारसा",
    aboutMainTitle: "थेट शेतातून शुद्ध मसाल्यांची व्यावसायिक किचनला जोड",
    aboutBadge: "आमची पायाभूत सुविधा",
    aboutCardTitle: "सत्त्व इंडिया",
    aboutCardDesc: "प्राधिकरण, निगडी, पुणे येथे स्थित आमचे अत्याधुनिक कोल्ड-मिल्लिंग युनिट व्यावसायिक हॉटेल्स आणि संस्थांना दर्जेदार खाद्यपदार्थ पुरवण्यासाठी सज्ज आहे.",
    aboutP1: "शुद्ध आणि भेसळमुक्त मसाले पुरवण्याच्या ध्येयाने सुरू झालेली सत्त्व इंडिया आज महाराष्ट्रातील नामांकित हॉटेल्स, केटरर्स आणि मेसची पहिली पसंती बनली आहे.",
    aboutP2: "ब्याडगी मिरची, हळद, उंझा जिरे आणि केरळची काळी मिरी थेट मूळ ठिकाणाहून मागवून आम्ही कमी तापमानावर दळतो, ज्यामुळे मसाल्यांचा नैसर्गिक सुगंध आणि रंग टिकून राहतो.",
    aboutPillar1: "हायजिनिक दळण",
    aboutPillar3: "विविध पॅकिंग",

    sectorTag: "संस्थात्मक क्षेत्रे",
    sectorTitle: "प्रत्येक व्यावसायिक गरजेसाठी परिपूर्ण पुरवठा",
    sectorDesc: "हॉटेल्सपासून ते मोठ्या औद्योगिक मेसपर्यंत आम्ही नियमित आणि वेळेवर माल पुरवतो.",
    sec1Title: "हॉटेल्स, कॅफे आणि रेस्टॉरंट्स",
    sec1Desc: "रेस्टॉरंटच्या चवीला साजेसे दर्जेदार गरम मसाले, ग्रेव्ही मसाले, सॉस आणि पापड-लोणचे.",
    sec2Title: "हॉस्टेल, कॉलेज आणि कंपनी मेस",
    sec2Desc: "मोठ्या प्रमाणावर लागणाऱ्या अन्नासाठी जास्त यील्ड (उतारा) देणारे परवडणारे घाऊक मसाले आणि धान्य.",
    sec4Title: "ग्लोबल एक्सपोर्ट्स आणि OEM",
    sec4Desc: "आंतरराष्ट्रीय दर्जाचे मशीन-क्लीन खडे मसाले, व्हॅक्यूम पॅकिंग आणि सर्व सरकारी कागदपत्रांसह.",

    routeTag: "पुणे व पिंपरी चिंचवड पुरवठा",
    routeTitle: "दररोजचे वितरण वेळापत्रक",
    routeDesc: "निगडी येथील मुख्य गोदामातून सर्व एमआयडीसी आणि हॉटेल क्लस्टर्समध्ये दररोज डिलिव्हरी.",
    catalogTag: "उत्पादन यादी",
    catalogTitle: "घाऊक मसाला आणि किराणा दर यादी",
    catalogDesc: "पॅकिंग किंवा टेस्ट सॅम्पल निवडून त्वरित WhatsApp वर कोटेशन मिळवा.",
    catMasale: "दळलेले मसाले (२०)",
    catWhole: "अख्खे खडे मसाले व ड्रायफ्रुट्स (२४)",
    catSauces: "सॉसेस (५)",
    catPapadPickle: "पापड आणि लोणचे (८)",
    catStaples: "इतर किराणा सामान (८)",
    formTag: "थेट घाऊक चौकशी",
    formTitle: "ऑर्डर कोटेशन तपशील",
    formDesc: "तुम्ही निवडलेली उत्पादने आणि प्रमाण खाली आपोआप जोडले गेले आहे.",
    formLabelBiz: "व्यवसाय / हॉटेलचे नाव *",
    formLabelPhone: "WhatsApp नंबर *",
    formLabelSector: "व्यवसायाचा प्रकार",
    formLabelLoc: "माल पोहोचवण्याचा पत्ता",
    formLabelReq: "निवडलेली उत्पादने आणि प्रमाण",
    formBtnSend: "WhatsApp वर कोटेशन पाठवा",

    footerBrandBio: "तुमचा हक्काचा B2B अन्न पुरवठादार. हॉटेल, केटरर्स, मेस आणि निर्यातीसाठी शुद्ध खडे मसाले, अस्सल दळलेले मसाले, लोणचे, सॉसेस आणि किराणा साहित्याचा खात्रीशीर पुरवठा.",
    footerSecHeader: "पुरवठा क्षेत्रे",
    footerCatHeader: "उत्पादन श्रेणी",
    footerHubHeader: "पुणे मुख्य वितरण केंद्र"
  },
  hi: {
    topCompliance: "FSSAI और ISO 9001:2015 प्रमाणित यूनिट",
    navAbout: "हमारे बारे में",
    navSectors: "सप्लाई सेक्टर",
    navRoutes: "लॉजिस्टिक्स ग्रिड",
    navCatalog: "कैटलॉग व ऑर्डर",
    navCert: "लैब COA रिपोर्ट",
    navQuoteDrawer: "ऑर्डर ड्रावर",
    btnBulkPricing: "ऑर्डर भेजें",
    heroBadge: "FSSAI और ISO प्रमाणित • सीधे मिल से थोक खाद्य आपूर्ति",
    heroTitle: "होटल, कैटरिंग और निर्यातकों के लिए शुद्ध मसाले और खाद्यान्न।",
    heroDesc: "निगड़ी, पुणे स्थित हमारी प्रोसेसिंग यूनिट से सीधे सप्लाई। बल्क पैक या शेफ टेस्टिंग सैंपल चुनकर ऑर्डर करें।",
    heroOrderBtn: "थोक ऑर्डर बनाएं",
    heroInspectCert: "सर्टिफिकेट देखें",
    proofHeader: "गुणवत्ता मानक",
    
    aboutTag: "कंपनी का इतिहास",
    aboutMainTitle: "खेतों की शुद्धता और कमर्शियल किचन का अटूट भरोसा",
    aboutBadge: "हमारा इंफ्रास्ट्रक्चर",
    aboutCardTitle: "सत्त्व इंडिया",
    aboutCardDesc: "प्राधिकरण, निगड़ी, पुणे में स्थित हमारा आधुनिक कोल्ड-मिलिंग प्लांट बड़े होटलों और संस्थानों को प्रीमियम खाद्यान्न आपूर्ति के लिए समर्पित है।",
    aboutP1: "शुद्धता और भरोसे के साथ शुरू हुई सत्त्व इंडिया आज महाराष्ट्र के शीर्ष होटलों, कैटरर्स और औद्योगिक कैंटीनों का प्रमुख सप्लायर बन चुकी है।",
    aboutP2: "ब्याडगी मिर्च, हल्दी, जीरा और केरल की काली मिर्च सीधे किसानों से लाकर कोल्ड-मिलिंग तकनीक से पीसी जाती है, ताकि उनका प्राकृतिक रंग और स्वाद पूरी तरह सुरक्षित रहे।",
    aboutPillar1: "हाइजीनिक मिलिंग",
    aboutPillar3: "फ्लेक्सिबल पैकिंग",

    sectorTag: "संस्थागत क्षेत्र",
    sectorTitle: "हर कमर्शियल सेक्टर के लिए अनुकूलित समाधान",
    sectorDesc: "होटलों से लेकर बड़ी कैंटीनों तक, हम समय पर और सही मात्रा में शुद्ध माल की डिलीवरी सुनिश्चित करते हैं।",
    sec1Title: "होटल, रेस्तरां और कैफे",
    sec1Desc: "ग्रेवी बेस, स्पेशल तंदूरी, बिरयानी मसाले और सॉस की निरंतर आपूर्ति।",
    sec2Title: "हॉस्टल, कॉलेज और मेस",
    sec2Desc: "बड़े पैमाने पर बनने वाले भोजन के लिए अधिक यील्ड देने वाले किफायती थोक मसाले और अनाज।",
    sec4Title: "ग्लोबल एक्सपोर्ट्स और OEM",
    sec4Desc: "मशीन से साफ किए गए खडे मसाले, वैक्यूम पैकिंग और सभी सरकारी निर्यात प्रमाणपत्रों के साथ।",

    routeTag: "पुणे एवं पिंपरी लॉजिस्टिक्स",
    routeTitle: "दैनिक डिलीवरी शेड्यूल",
    routeDesc: "निगड़ी हब से सभी प्रमुख होटल व औद्योगिक क्षेत्रों में नियमित डिलीवरी।",
    catalogTag: "उत्पाद सूची",
    catalogTitle: "थोक उत्पाद एवं मसाला ऑर्डर मैट्रिक्स",
    catalogDesc: "पैकिंग साइज या टेस्टिंग सैंपल चुनकर तुरंत WhatsApp कोटेशन प्राप्त करें।",
    catMasale: "पिसे हुए मसाले (२०)",
    catWhole: "खड़े मसाले और ड्राई फ्रूट्स (२४)",
    catSauces: "सॉस (५)",
    catPapadPickle: "पापड़ और अचार (८)",
    catStaples: "अन्य किराना सामग्री (८)",
    formTag: "सीधी थोक पूछताछ",
    formTitle: "ऑर्डर कोटेशन सारांश",
    formDesc: "कैटलॉग से चुने गए उत्पाद और मात्रा नीचे स्वतः जुड़ गए हैं।",
    formLabelBiz: "फर्म / होटल का नाम *",
    formLabelPhone: "WhatsApp नंबर *",
    formLabelSector: "व्यवसाय का प्रकार",
    formLabelLoc: "डिलीवरी का स्थान",
    formLabelReq: "चुने गए उत्पाद और मात्रा",
    formBtnSend: "WhatsApp पर कोटेशन भेजें",

    footerBrandBio: "आपका विश्वसनीय B2B खाद्य आपूर्ति साझेदार। होटल, कैटरर्स, मेस और निर्यातकों के लिए शुद्ध खड़े मसाले, पिसे हुए मसाले, सॉस और किराना उत्पादों की थोक आपूर्ति।",
    footerSecHeader: "सप्लाई सेक्टर",
    footerCatHeader: "उत्पाद श्रेणियां",
    footerHubHeader: "पुणे वितरण केंद्र"
  }
};

// ===== CART & UI STATE =====
let cart = {};
let orderMode = 'bulk';
let currentCategory = 'all';

// ===== CATALOG FUNCTIONS =====
function setMode(mode) {
  orderMode = mode;
  if (mode === 'bulk') {
    document.getElementById('mode-bulk').className = "px-3.5 py-1.5 rounded-xl text-xs font-bold bg-spice-700 text-white transition-all flex items-center gap-1.5 shadow-sm";
    document.getElementById('mode-sample').className = "px-3.5 py-1.5 rounded-xl text-xs font-bold text-stone-600 hover:text-stone-900 transition-all flex items-center gap-1.5";
  } else {
    document.getElementById('mode-sample').className = "px-3.5 py-1.5 rounded-xl text-xs font-bold bg-spice-700 text-white transition-all flex items-center gap-1.5 shadow-sm";
    document.getElementById('mode-bulk').className = "px-3.5 py-1.5 rounded-xl text-xs font-bold text-stone-600 hover:text-stone-900 transition-all flex items-center gap-1.5";
  }
  showToast(`Switched to ${mode === 'bulk' ? 'Commercial Bulk Packaging Mode' : 'Chef Sample Kit Mode (50-100g)'}`);
  renderCatalog();
}

function renderCatalog() {
  const grid = document.getElementById('productGrid');
  const search = document.getElementById('productSearch').value.toLowerCase();
  grid.innerHTML = '';

  const filtered = catalogData.filter(item => {
    const matchCat = currentCategory === 'all' || item.cat === currentCategory;
    const matchSearch = item.name.toLowerCase().includes(search) || item.tag.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  filtered.forEach(p => {
    const inCart = cart[p.name];
    const defaultPack = orderMode === 'sample' ? 'Sample Kit (100g Packet)' : p.packUnits[0];
    const currentUnit = inCart ? inCart.unit : defaultPack;
    const currentQty = inCart ? inCart.qty : 1;

    const card = document.createElement('div');
    card.className = `bg-white rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between hover-lift ${inCart ? 'border-spice-700 ring-2 ring-spice-700/20 shadow-md' : 'border-stone-200 hover:border-stone-400'}`;
    
    card.innerHTML = `
      <div>
        <div class="flex items-start justify-between gap-2 mb-1.5">
          <div class="flex items-center gap-1.5">
            <span class="w-3 h-3 rounded-full shrink-0 border border-stone-300" style="background-color: ${p.color}"></span>
            <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-stone-100 text-stone-600 tracking-wider">${p.tag}</span>
          </div>
          ${inCart ? '<span class="text-[11px] font-bold text-spice-700 bg-red-50 px-2 py-0.5 rounded animate-pulse">In Quote</span>' : ''}
        </div>
        <h4 class="font-serif font-bold text-stone-900 text-base leading-snug mt-1">${p.name}</h4>
      </div>

      <div class="mt-4 pt-3 border-t border-stone-100 space-y-2.5">
        ${orderMode === 'bulk' ? `
          <div>
            <label class="block text-[10px] uppercase font-bold text-stone-500 mb-1">Pack Format:</label>
            <select id="unit-${p.id}" class="w-full text-xs font-semibold bg-stone-50 border border-stone-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-spice-700 transition-all">
              ${p.packUnits.map(u => `<option value="${u}" ${u === currentUnit ? 'selected' : ''}>${u}</option>`).join('')}
            </select>
          </div>
        ` : `
          <div class="p-2 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900 font-medium">
            Chef Trial Packet: <strong>100g Sealed</strong>
            <input type="hidden" id="unit-${p.id}" value="Chef Sample (100g)" />
          </div>
        `}

        <div>
          <label class="block text-[10px] uppercase font-bold text-stone-500 mb-1">Quantity (Units):</label>
          <div class="flex items-center gap-2">
            <div class="flex items-center border border-stone-300 rounded-lg bg-stone-50 overflow-hidden">
              <button onclick="stepQty(${p.id}, -1)" class="px-2.5 py-1.5 text-stone-600 hover:bg-stone-200 font-bold text-xs transition-colors">-</button>
              <input type="number" min="1" max="1000" id="qty-${p.id}" value="${currentQty}" class="w-12 text-center text-xs font-bold bg-transparent focus:outline-none" />
              <button onclick="stepQty(${p.id}, 1)" class="px-2.5 py-1.5 text-stone-600 hover:bg-stone-200 font-bold text-xs transition-colors">+</button>
            </div>
            
            <button onclick="updateCartLine(${p.id}, '${p.name}')" class="flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 active:scale-95 ${inCart ? 'bg-stone-900 text-white hover:bg-stone-800' : 'bg-spice-700 text-white hover:bg-spice-800 shadow-sm'}">
              <i data-lucide="${inCart ? 'check' : 'plus'}" class="w-3.5 h-3.5"></i> ${inCart ? 'Update' : 'Add Units'}
            </button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  lucide.createIcons();
}

function stepQty(id, delta) {
  const input = document.getElementById(`qty-${id}`);
  let val = parseInt(input.value) || 1;
  val = Math.max(1, val + delta);
  input.value = val;
}

function updateCartLine(id, name) {
  const unit = document.getElementById(`unit-${id}`).value;
  const qty = parseInt(document.getElementById(`qty-${id}`).value) || 1;

  cart[name] = { unit, qty };
  updateCartUI();
  renderCatalog();
  renderDrawer();
  showToast(`Added ${qty} × [${unit}] of ${name}`);

  const navBadge = document.getElementById('navCartCount');
  const mobileBadge = document.getElementById('mobileCartBadge');
  navBadge.classList.add('animate-badge-pop');
  mobileBadge.classList.add('animate-badge-pop');
  setTimeout(() => {
    navBadge.classList.remove('animate-badge-pop');
    mobileBadge.classList.remove('animate-badge-pop');
  }, 350);
}

function removeFromCart(name) {
  delete cart[name];
  updateCartUI();
  renderCatalog();
  renderDrawer();
  showToast(`Removed ${name} from quote`);
}

function clearCart() {
  cart = {};
  updateCartUI();
  renderCatalog();
  renderDrawer();
  showToast('Cleared all items in quotation drawer');
}

function updateCartUI() {
  const keys = Object.keys(cart);
  const count = keys.length;
  document.getElementById('navCartCount').textContent = count;
  document.getElementById('mobileCartBadge').textContent = count;
  document.getElementById('drawerTotalCount').textContent = count;
  document.getElementById('itemCounterBadge').textContent = `${count} configured item(s)`;

  const reqBox = document.getElementById('bizRequirements');
  if (count > 0) {
    let lines = keys.map(k => `• ${cart[k].qty} × [${cart[k].unit}] of ${k}`);
    reqBox.value = `Customized Batch Quotation:\n${lines.join('\n')}\n\nDelivery Instructions / Target Timeline:\n`;
  } else {
    reqBox.value = '';
  }
}

function renderDrawer() {
  const list = document.getElementById('drawerItemList');
  const keys = Object.keys(cart);

  if (keys.length === 0) {
    list.innerHTML = `
      <div class="text-center py-12 text-stone-400 space-y-2">
        <i data-lucide="shopping-bag" class="w-10 h-10 mx-auto opacity-30"></i>
        <p class="text-xs">Your quotation drawer is empty.</p>
        <p class="text-[11px] text-stone-500">Add products from the catalog matrix.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  list.innerHTML = '';
  keys.forEach(k => {
    const item = cart[k];
    const row = document.createElement('div');
    row.className = "p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-3 hover:border-stone-300 transition-colors";
    row.innerHTML = `
      <div class="flex-1">
        <h5 class="font-bold text-stone-900 text-xs">${k}</h5>
        <div class="text-[11px] text-stone-500 font-medium mt-0.5">${item.qty} × ${item.unit}</div>
      </div>
      <button onclick="removeFromCart('${k}')" class="text-stone-400 hover:text-spice-700 p-1 transition-colors">
        <i data-lucide="trash-2" class="w-4 h-4"></i>
      </button>
    `;
    list.appendChild(row);
  });

  lucide.createIcons();
}

function toggleDrawer(show) {
  const drawer = document.getElementById('quoteDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (show) {
    renderDrawer();
    backdrop.classList.remove('hidden');
    setTimeout(() => backdrop.classList.add('opacity-100'), 10);
    drawer.classList.remove('translate-x-full');
  } else {
    drawer.classList.add('translate-x-full');
    backdrop.classList.remove('opacity-100');
    setTimeout(() => backdrop.classList.add('hidden'), 300);
  }
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = "bg-stone-900/95 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl border border-stone-700 flex items-center gap-2 transform transition-all duration-300 opacity-0 translate-y-2 pointer-events-auto backdrop-blur-md";
  toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i> <span>${msg}</span>`;
  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.classList.remove('opacity-0', 'translate-y-2');
  }, 50);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function setCategory(cat, evt) {
  currentCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.classList.remove('bg-spice-700', 'text-white', 'shadow-sm');
    btn.classList.add('bg-white', 'text-stone-700');
  });
  if(evt) {
    evt.currentTarget.classList.remove('bg-white', 'text-stone-700');
    evt.currentTarget.classList.add('bg-spice-700', 'text-white', 'shadow-sm');
  }
  renderCatalog();
}

function filterProducts() {
  renderCatalog();
}

function openCertModal(tab) {
  const modal = document.getElementById('certModal');
  const box = document.getElementById('certModalBox');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  setTimeout(() => {
    box.classList.remove('scale-95');
    box.classList.add('scale-100');
  }, 10);
  switchModalTab(tab);
}

function closeCertModal() {
  const modal = document.getElementById('certModal');
  const box = document.getElementById('certModalBox');
  box.classList.remove('scale-100');
  box.classList.add('scale-95');
  setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }, 200);
}

function switchModalTab(tab) {
  ['fssai', 'iso', 'coa'].forEach(t => {
    document.getElementById(`content-${t}`).classList.add('hidden');
    document.getElementById(`tab-${t}`).classList.remove('border-emerald-600', 'border-blue-600', 'border-amber-600', 'text-emerald-800', 'text-blue-800', 'text-amber-900');
    document.getElementById(`tab-${t}`).classList.add('border-transparent', 'text-stone-500');
  });

  document.getElementById(`content-${tab}`).classList.remove('hidden');
  const activeBtn = document.getElementById(`tab-${tab}`);
  activeBtn.classList.remove('border-transparent', 'text-stone-500');
  if (tab === 'fssai') activeBtn.classList.add('border-emerald-600', 'text-emerald-800');
  if (tab === 'iso') activeBtn.classList.add('border-blue-600', 'text-blue-800');
  if (tab === 'coa') activeBtn.classList.add('border-amber-600', 'text-amber-900');
  lucide.createIcons();
}

function changeLanguage(lang) {
  ['en', 'mr', 'hi'].forEach(l => {
    const btn = document.getElementById(`lang-${l}`);
    if(l === lang) {
      btn.classList.remove('text-stone-400');
      btn.classList.add('bg-spice-700', 'text-white');
    } else {
      btn.classList.remove('bg-spice-700', 'text-white');
      btn.classList.add('text-stone-400');
    }
  });

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  showToast(`Language switched to ${lang === 'en' ? 'English' : lang === 'mr' ? 'मराठी' : 'हिंदी'}`);
}

function handleQuoteSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('bizName').value.trim();
  const contactPerson = document.getElementById('bizContactPerson').value.trim();
  const phone = document.getElementById('bizPhone').value.trim();
  const type = document.getElementById('bizType').value;
  const loc = document.getElementById('bizLocation').value.trim();
  const req = document.getElementById('bizRequirements').value.trim();

  if (!/^[6-9]\d{9}$/.test(phone)) {
    showToast('⚠️ Please enter a valid 10-digit mobile number.');
    document.getElementById('bizPhone').focus();
    return;
  }

  const message = `*B2B BULK PROCUREMENT INQUIRY*%0A` +
    `*Business Name:* ${name}%0A` +
    `*Contact Person:* ${contactPerson}%0A` +
    `*WhatsApp Phone:* +91 ${phone}%0A` +
    `*Sector:* ${type}%0A` +
    `*Location:* ${loc}%0A%0A` +
    `*Configured Items:*%0A${encodeURIComponent(req)}`;

  window.open(`https://wa.me/919637515153?text=${message}`, '_blank');
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS animation library
  AOS.init({
    duration: 750,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
  });

  document.getElementById('total-count').textContent = catalogData.length;
  renderCatalog();
  renderDrawer();
  lucide.createIcons();

  // Scroll Progress Bar
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';
  });

  // Navbar Scroll Effect
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

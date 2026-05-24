/* ════════════════════════════════════════════════
   PARAÍSO DAS PALMEIRAS — script.js
   Sistema de reservas interativo + calendário
════════════════════════════════════════════════ */

/* ─── ESTADO GLOBAL ─── */
const state = {
  calMes: new Date().getMonth(),
  calAno: new Date().getFullYear(),
  checkIn: null,
  checkOut: null,
  selecionando: 'checkin', // 'checkin' | 'checkout'
};

/* Datas ocupadas (simuladas) — formato YYYY-MM-DD */
const datasOcupadas = gerarDatasOcupadas();

function gerarDatasOcupadas() {
  const ocupadas = new Set();
  const hoje = new Date();

  // Simula períodos ocupados nos próximos 3 meses
  const periodos = [
    { inicio: 5, fim: 9 },
    { inicio: 15, fim: 18 },
    { inicio: 23, fim: 26 },
    { inicio: 30, fim: 34 },
    { inicio: 42, fim: 45 },
    { inicio: 55, fim: 60 },
    { inicio: 70, fim: 74 },
    { inicio: 82, fim: 86 },
  ];

  periodos.forEach(({ inicio, fim }) => {
    for (let i = inicio; i <= fim; i++) {
      const d = new Date(hoje);
      d.setDate(hoje.getDate() + i);
      ocupadas.add(formatarData(d));
    }
  });
  return ocupadas;
}

function formatarData(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${dia}`;
}

function parseData(str) {
  if (!str) return null;
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/* ─── NAVBAR SCROLL ─── */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ─── HAMBURGER MENU ─── */
document.getElementById('hamburger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('navLinks').classList.toggle('open');
});

// Fecha menu ao clicar em link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('hamburger').classList.remove('active');
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* ─── SCROLL TO RESERVAS ─── */
function scrollToReservas() {
  document.getElementById('reservas').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── COUNTERS (adultos / crianças) ─── */
function changeCount(id, delta) {
  const el = document.getElementById(id);
  let val = parseInt(el.textContent);
  const min = id === 'adultos' ? 1 : 0;
  const max = 8;
  val = Math.max(min, Math.min(max, val + delta));
  el.textContent = val;
}

/* ═══════════════════════════════════════════════════
   CALENDÁRIO DE DISPONIBILIDADE
═══════════════════════════════════════════════════ */
function renderCalendario() {
  const cal = document.getElementById('calendario');
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const ano = state.calAno;
  const mes = state.calMes;

  const primeiroDia = new Date(ano, mes, 1);
  const ultimoDia = new Date(ano, mes + 1, 0);
  const diasNoMes = ultimoDia.getDate();
  const diaSemanaInicio = primeiroDia.getDay(); // 0=Dom

  const nomesMeses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  let html = `
    <div class="cal-header">
      <button class="cal-nav-btn" onclick="mudarMes(-1)">‹</button>
      <h4>${nomesMeses[mes]} ${ano}</h4>
      <button class="cal-nav-btn" onclick="mudarMes(1)">›</button>
    </div>
    <div class="cal-weekdays">
      <span>Dom</span><span>Seg</span><span>Ter</span>
      <span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span>
    </div>
    <div class="cal-days">
  `;

  // Células vazias antes do primeiro dia
  for (let i = 0; i < diaSemanaInicio; i++) {
    html += `<div class="cal-day vazio"></div>`;
  }

  const checkInDate  = state.checkIn  ? parseData(state.checkIn)  : null;
  const checkOutDate = state.checkOut ? parseData(state.checkOut) : null;

  for (let d = 1; d <= diasNoMes; d++) {
    const dataAtual = new Date(ano, mes, d);
    const dataStr = formatarData(dataAtual);
    const passado = dataAtual < hoje;
    const ocupado = datasOcupadas.has(dataStr);
    const eCheckIn  = state.checkIn  === dataStr;
    const eCheckOut = state.checkOut === dataStr;

    let noIntervalo = false;
    if (checkInDate && checkOutDate && dataAtual > checkInDate && dataAtual < checkOutDate) {
      noIntervalo = true;
    }

    let classes = 'cal-day';
    if (passado)       classes += ' passado';
    else if (ocupado)  classes += ' ocupado';
    else               classes += ' disponivel';

    if (eCheckIn)      classes += ' selecionado inicio-intervalo';
    if (eCheckOut)     classes += ' selecionado fim-intervalo';
    if (noIntervalo)   classes += ' no-intervalo';

    const clicavel = !passado && !ocupado;
    const onClick  = clicavel ? `onclick="selecionarDia('${dataStr}')"` : '';

    html += `<div class="${classes}" ${onClick} title="${dataStr}">${d}</div>`;
  }

  html += `</div>`;
  cal.innerHTML = html;
}

function mudarMes(delta) {
  state.calMes += delta;
  if (state.calMes < 0)  { state.calMes = 11; state.calAno--; }
  if (state.calMes > 11) { state.calMes = 0;  state.calAno++; }
  renderCalendario();
}

function selecionarDia(dataStr) {
  const dataClicada = parseData(dataStr);

  if (state.selecionando === 'checkin' || !state.checkIn) {
    // Seleciona check-in
    state.checkIn  = dataStr;
    state.checkOut = null;
    state.selecionando = 'checkout';
    document.getElementById('checkIn').value = dataStr;
    document.getElementById('checkOut').value = '';
    mostrarMensagemCal('Agora selecione a data de check-out no calendário ou no campo acima.');
  } else {
    const checkInDate = parseData(state.checkIn);

    if (dataClicada <= checkInDate) {
      // Clicou antes do check-in → recomeça
      state.checkIn  = dataStr;
      state.checkOut = null;
      state.selecionando = 'checkout';
      document.getElementById('checkIn').value = dataStr;
      document.getElementById('checkOut').value = '';
    } else {
      // Verifica se há datas ocupadas no intervalo
      const ocupadaNoIntervalo = verificarOcupadoEntre(state.checkIn, dataStr);
      if (ocupadaNoIntervalo) {
        mostrarMensagemCal('⚠️ Há datas indisponíveis no período selecionado. Escolha outro intervalo.', true);
        return;
      }
      state.checkOut = dataStr;
      state.selecionando = 'checkin';
      document.getElementById('checkOut').value = dataStr;
      calcularResumo();
    }
  }
  renderCalendario();
}

function verificarOcupadoEntre(inicio, fim) {
  const dInicio = parseData(inicio);
  const dFim    = parseData(fim);
  const cursor  = new Date(dInicio);
  cursor.setDate(cursor.getDate() + 1);
  while (cursor < dFim) {
    if (datasOcupadas.has(formatarData(cursor))) return true;
    cursor.setDate(cursor.getDate() + 1);
  }
  return false;
}

function mostrarMensagemCal(msg, erro = false) {
  let el = document.getElementById('calMsg');
  if (!el) {
    el = document.createElement('p');
    el.id = 'calMsg';
    el.style.cssText = 'font-size:0.8rem;margin-top:0.8rem;padding:0.7rem 1rem;border-radius:4px;transition:all 0.3s';
    document.getElementById('calendario').after(el);
  }
  el.textContent = msg;
  el.style.background = erro ? 'rgba(180,60,60,0.1)' : 'rgba(201,169,110,0.12)';
  el.style.color = erro ? '#B43C3C' : '#7A6040';
  setTimeout(() => { if (el) el.textContent = ''; }, 4000);
}

/* ─── Sincroniza inputs de data com o calendário ─── */
document.addEventListener('DOMContentLoaded', () => {
  renderCalendario();
  sincronizarInputDatas();
});

function sincronizarInputDatas() {
  const inputCi = document.getElementById('checkIn');
  const inputCo = document.getElementById('checkOut');

  inputCi.addEventListener('change', () => {
    if (!inputCi.value) return;
    state.checkIn = inputCi.value;
    state.checkOut = null;
    inputCo.value = '';
    state.selecionando = 'checkout';

    // Navega para o mês da data selecionada
    const d = parseData(inputCi.value);
    state.calMes = d.getMonth();
    state.calAno = d.getFullYear();
    renderCalendario();
    esconderResumo();
  });

  inputCo.addEventListener('change', () => {
    if (!inputCo.value || !state.checkIn) return;
    const d  = parseData(inputCo.value);
    const ci = parseData(state.checkIn);
    if (d <= ci) {
      mostrarMensagemCal('⚠️ O check-out deve ser após o check-in.', true);
      inputCo.value = '';
      return;
    }
    if (verificarOcupadoEntre(state.checkIn, inputCo.value)) {
      mostrarMensagemCal('⚠️ Há datas indisponíveis no período. Escolha outro intervalo.', true);
      inputCo.value = '';
      return;
    }
    state.checkOut = inputCo.value;
    state.selecionando = 'checkin';

    const d2 = parseData(inputCo.value);
    state.calMes = d2.getMonth();
    state.calAno = d2.getFullYear();
    renderCalendario();
    calcularResumo();
  });

  // Também recalcula ao mudar tipo de acomodação
  document.getElementById('tipoAcom').addEventListener('change', calcularResumo);
}

/* ─── CÁLCULO DE PREÇO ─── */
const precos = {
  quarto:  890,
  bungalo: 1890,
  suite:   2490,
};

const nomesAcom = {
  quarto:  'Quarto Luxo Vista Mar',
  bungalo: 'Bungalô Balinês Premium',
  suite:   'Suíte Master',
};

function calcularResumo() {
  if (!state.checkIn || !state.checkOut) { esconderResumo(); return; }
  const tipo = document.getElementById('tipoAcom').value;
  if (!tipo) { esconderResumo(); return; }

  const ci = parseData(state.checkIn);
  const co = parseData(state.checkOut);
  const diff = Math.round((co - ci) / (1000 * 60 * 60 * 24));
  if (diff <= 0) { esconderResumo(); return; }

  const preco = precos[tipo];
  const total = preco * diff;

  document.getElementById('resumoDiarias').textContent = `${diff} noite${diff > 1 ? 's' : ''}`;
  document.getElementById('resumoTipo').textContent     = nomesAcom[tipo];
  document.getElementById('resumoTotal').textContent    = `R$ ${total.toLocaleString('pt-BR')}`;
  document.getElementById('resumoPreco').style.display  = 'block';
}

function esconderResumo() {
  const el = document.getElementById('resumoPreco');
  if (el) el.style.display = 'none';
}

/* ─── CONFIRMAR RESERVA ─── */
function confirmarReserva() {
  const tipo  = document.getElementById('tipoAcom').value;
  const nome  = document.getElementById('nomeHospede').value.trim();
  const email = document.getElementById('emailHospede').value.trim();
  const ci    = state.checkIn;
  const co    = state.checkOut;

  if (!tipo) { alertaForm('Por favor, selecione o tipo de acomodação.'); return; }
  if (!ci)   { alertaForm('Por favor, informe a data de check-in.'); return; }
  if (!co)   { alertaForm('Por favor, informe a data de check-out.'); return; }
  if (!nome) { alertaForm('Por favor, informe seu nome completo.'); return; }
  if (!email || !email.includes('@')) { alertaForm('Por favor, informe um e-mail válido.'); return; }

  // Calcula noites e valor
  const diff = Math.round((parseData(co) - parseData(ci)) / (1000 * 60 * 60 * 24));
  const total = precos[tipo] * diff;

  const msg = `
    Olá, ${nome.split(' ')[0]}! 🌴\n
    Recebemos sua solicitação para ${nomesAcom[tipo]}.\n
    Check-in: ${formatarDataBR(ci)} — Check-out: ${formatarDataBR(co)} (${diff} noite${diff > 1 ? 's' : ''})\n
    Valor estimado: R$ ${total.toLocaleString('pt-BR')}\n
    Entraremos em contato em ${email} para confirmar e processar o pagamento.
  `.trim().replace(/\n    /g, '\n');

  document.getElementById('modalMsg').textContent = msg;
  document.getElementById('modalOverlay').classList.add('active');

  // Limpa formulário
  document.getElementById('tipoAcom').value       = '';
  document.getElementById('nomeHospede').value    = '';
  document.getElementById('emailHospede').value   = '';
  document.getElementById('checkIn').value        = '';
  document.getElementById('checkOut').value       = '';
  document.getElementById('adultos').textContent  = '2';
  document.getElementById('criancas').textContent = '0';
  state.checkIn  = null;
  state.checkOut = null;
  state.selecionando = 'checkin';
  esconderResumo();
  renderCalendario();
}

function alertaForm(msg) {
  let el = document.getElementById('formAlerta');
  if (!el) {
    el = document.createElement('div');
    el.id = 'formAlerta';
    el.style.cssText = `
      padding:0.8rem 1rem; border-radius:4px; margin-bottom:1rem;
      background:rgba(180,60,60,0.1); color:#B43C3C;
      font-size:0.82rem; letter-spacing:0.04em;
    `;
    document.querySelector('.reservas-form').insertBefore(
      el, document.querySelector('.btn-reservar.full')
    );
  }
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 4000);
}

function formatarDataBR(str) {
  if (!str) return '—';
  const [y, m, d] = str.split('-');
  return `${d}/${m}/${y}`;
}

/* ─── FECHAR MODAL ─── */
function fecharModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}
document.getElementById('modalOverlay').addEventListener('click', function (e) {
  if (e.target === this) fecharModal();
});

/* ─── ANIMAÇÕES DE ENTRADA (Intersection Observer) ─── */
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -60px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Aplica fade-in nos cards e seções
document.addEventListener('DOMContentLoaded', () => {
  const seletores = [
    '.servico-card', '.acom-card', '.dep-card',
    '.sobre-text', '.sobre-images', '.stat',
    '.contato-item', '.icon-item', '.gal-item',
  ];

  seletores.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(24px)';
      el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
      observer.observe(el);
    });
  });
});

// Classe visible para acionar animação
const styleEl = document.createElement('style');
styleEl.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(styleEl);

/* ─── EASTER EGG: clique na estrela do footer ─── */
document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('.brand-icon');
  icons.forEach(icon => {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', () => {
      icon.style.transition = 'transform 0.6s ease';
      icon.style.transform  = 'rotate(360deg) scale(1.5)';
      setTimeout(() => { icon.style.transform = 'rotate(0deg) scale(1)'; }, 700);
    });
  });
});
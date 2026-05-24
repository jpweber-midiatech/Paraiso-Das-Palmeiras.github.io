<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Paraíso das Palmeiras — Resort de Luxo</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
</head>
<body>

  <!-- ═══════════════════════════════════════════
       NAVBAR
  ═══════════════════════════════════════════ -->
  <header class="navbar" id="navbar">
    <div class="nav-brand">
      <span class="brand-icon">✦</span>
      <span class="brand-name">Paraíso<br><em>das Palmeiras</em></span>
    </div>
    <nav class="nav-links" id="navLinks">
      <a href="#sobre">Sobre</a>
      <a href="#servicos">Serviços</a>
      <a href="#acomodacoes">Acomodações</a>
      <a href="#reservas">Reservas</a>
      <a href="#contato">Contato</a>
    </nav>
    <button class="btn-reservar nav-cta" onclick="scrollToReservas()">Reservar Agora</button>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </header>

  <!-- ═══════════════════════════════════════════
       HERO
  ═══════════════════════════════════════════ -->
  <section class="hero" id="inicio">
    <div class="hero-bg">
      <!-- Coloque sua foto aqui: substitua o fundo abaixo por uma tag <img> ou background-image no CSS -->
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
      <p class="hero-tag">Resort de Luxo · Praia Exclusiva</p>
      <h1 class="hero-title">
        Um Paraíso<br /><em>te espera</em>
      </h1>
      <p class="hero-sub">Bungalôs balineses com vista para o mar, gastronomia de autor e serviço impecável em uma praia de águas cristalinas.</p>
      <div class="hero-actions">
        <button class="btn-reservar" onclick="scrollToReservas()">Fazer Reserva</button>
        <a href="#sobre" class="btn-ghost">Conheça o resort ↓</a>
      </div>
    </div>
    <div class="hero-scroll-hint">
      <span></span>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       SOBRE
  ═══════════════════════════════════════════ -->
  <section class="sobre" id="sobre">
    <div class="container sobre-grid">
      <div class="sobre-images">
        <div class="img-frame img-main">
          <img src="/Banco de imagens/pexels-quang-nguyen-vinh-222549-14036450.jpg" alt="Foto piscina">
          <div class="img-placeholder">📸 Foto Principal do Resort</div>
        </div>
        <div class="img-frame img-secondary">
          <img src="/Banco de imagens/pexels-rachel-claire-4577664.jpg" alt="bangalo balines">
          <div class="img-placeholder small">📸 Bungalô Balinês</div>
        </div>
        <div class="badge-award">
          <span class="badge-icon">✦</span>
          <span>Excelência<br>em Hospitalidade</span>
        </div>
      </div>
      <div class="sobre-text">
        <p class="section-tag">Sobre o Resort</p>
        <h2>Descubra o melhor<br />do turismo de luxo</h2>
        <p class="sobre-desc">O Paraíso das Palmeiras é uma propriedade de luxo situada em uma praia de águas cristalinas, onde o requinte encontra a natureza em perfeita harmonia. Nossos quartos aconchegantes e bungalôs balineses com vista para o mar são o cenário perfeito para uma experiência inesquecível.</p>
        <p class="sobre-desc">Com serviço de excelência e atenção a cada detalhe, garantimos que cada momento da sua estadia seja único.</p>
        <div class="sobre-stats">
          <div class="stat"><strong>15+</strong><span>Anos de experiência</span></div>
          <div class="stat"><strong>50+</strong><span>Bungalôs e suítes</span></div>
          <div class="stat"><strong>98%</strong><span>Satisfação dos hóspedes</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       SERVIÇOS (ícones)
  ═══════════════════════════════════════════ -->
  <section class="servicos-icons">
    <div class="container">
      <div class="icons-grid">
        <div class="icon-item"><span class="ico">🌊</span><p>Praia Privativa</p></div>
        <div class="icon-item"><span class="ico">🍽️</span><p>Restaurante</p></div>
        <div class="icon-item"><span class="ico">🏊</span><p>Piscina Vista Mar</p></div>
        <div class="icon-item"><span class="ico">🍹</span><p>Bar na Piscina</p></div>
        <div class="icon-item"><span class="ico">🏋️</span><p>Área Esportiva</p></div>
        <div class="icon-item"><span class="ico">🎪</span><p>Centro de Convenções</p></div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       SERVIÇOS DETALHADOS
  ═══════════════════════════════════════════ -->
  <section class="servicos" id="servicos">
    <div class="container">
      <p class="section-tag center">Nossos Serviços</p>
      <h2 class="center">Conforto e excelência<br /><em>em cada detalhe</em></h2>
      <div class="servicos-grid">

        <div class="servico-card">
          <div class="servico-img">
            <img src="/Banco de imagens/pexels-roman-odintsov-4869328.jpg" alt="lagosta prato">
            <div class="img-placeholder">📸 Restaurante</div>
          </div>
          <div class="servico-body">
            <h3>Restaurante Gourmet</h3>
            <p>Gastronomia de autor com ingredientes frescos locais, frutos do mar e uma carta de vinhos cuidadosamente selecionada, com vista panorâmica para o oceano.</p>
          </div>
        </div>

        <div class="servico-card destaque">
          <div class="servico-img">
            <img src="Banco de imagens/pexels-quang-nguyen-vinh-222549-14036485.jpg" alt="piscina">
            <div class="img-placeholder">📸 Piscina Vista Mar</div>
          </div>
          <div class="servico-body">
            <h3>Piscina Vista Mar</h3>
            <p>Mergulhe em nossa piscina infinita com vista privilegiada para o oceano. Espreguiçadeiras exclusivas com serviço de bar personalizado ao seu lado.</p>
          </div>
        </div>

        <div class="servico-card">
          <div class="servico-img">
            <img src="/Banco de imagens/pexels-norma-alejandra-norma-55232340-33234817.jpg" alt="">
            <div class="img-placeholder">📸 Convenções</div>
          </div>
          <div class="servico-body">
            <h3>Centro de Convenções</h3>
            <p>Espaços modernos e equipados para eventos corporativos, casamentos e celebrações especiais com suporte técnico completo e catering exclusivo.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       ACOMODAÇÕES
  ═══════════════════════════════════════════ -->
  <section class="acomodacoes" id="acomodacoes">
    <div class="container">
      <p class="section-tag center">Acomodações</p>
      <h2 class="center">Quartos & Bungalôs<br /><em>de luxo</em></h2>
      <div class="acomodacoes-grid">

        <div class="acom-card">
          <div class="acom-img">
            <img src="/Banco de imagens/pexels-balazsimon-7368344.jpg" alt="quarto com vista mar">
            <div class="img-placeholder">📸 Quarto Luxo</div>
          </div>
          <div class="acom-body">
            <div class="acom-header">
              <h3>Quarto Luxo Vista Mar</h3>
              <span class="acom-price">A partir de<br /><strong>R$ 890<small>/noite</small></strong></span>
            </div>
            <ul class="acom-features">
              <li>✦ Vista panorâmica para o mar</li>
              <li>✦ Limpeza diária incluída</li>
              <li>✦ Café da manhã incluso</li>
              <li>✦ Ar-condicionado e Wi-Fi</li>
            </ul>
            <button class="btn-reservar" onclick="scrollToReservas()">Reservar</button>
          </div>
        </div>

        <div class="acom-card featured">
          <div class="acom-badge">Mais Procurado</div>
          <div class="acom-img">
            <img src="/Banco de imagens/pexels-rachel-claire-4577664.jpg" alt="bangalo balines">
            <div class="img-placeholder">📸 Bungalô Balinês</div>
          </div>
          <div class="acom-body">
            <div class="acom-header">
              <h3>Bungalô Balinês Premium</h3>
              <span class="acom-price">A partir de<br /><strong>R$ 1.890<small>/noite</small></strong></span>
            </div>
            <ul class="acom-features">
              <li>✦ Frente ao mar — vista total</li>
              <li>✦ Piscina privativa</li>
              <li>✦ Varanda com espreguiçadeiras</li>
              <li>✦ Mordomia exclusiva</li>
            </ul>
            <button class="btn-reservar" onclick="scrollToReservas()">Reservar</button>
          </div>
        </div>

        <div class="acom-card">
          <div class="acom-img">
            <img src="/Banco de imagens/pexels-ahmetcotur-29702286.jpg" alt="quarto com varanda">
            <div class="img-placeholder">📸 Suíte Master</div>
          </div>
          <div class="acom-body">
            <div class="acom-header">
              <h3>Suíte Master</h3>
              <span class="acom-price">A partir de<br /><strong>R$ 2.490<small>/noite</small></strong></span>
            </div>
            <ul class="acom-features">
              <li>✦ 120m² de puro conforto</li>
              <li>✦ Banheira de hidromassagem</li>
              <li>✦ Sala de estar privativa</li>
              <li>✦ Acesso VIP ao resort</li>
            </ul>
            <button class="btn-reservar" onclick="scrollToReservas()">Reservar</button>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       GALERIA (espaços para fotos)
  ═══════════════════════════════════════════ -->
  <section class="galeria">
    <div class="galeria-grid">
      <div class="gal-item tall">
        <img src="/Banco de imagens/pexels-quang-nguyen-vinh-222549-5041929.jpg" alt="praia">
        <div class="img-placeholder">📸 Praia Exclusiva</div>
      </div>
      <div class="gal-item">
        <img src="/Banco de imagens/pexels-inna-linkk-480833623-37508461.jpg" alt="por do sol">
        <div class="img-placeholder">📸 Pôr do Sol</div>
      </div>
      <div class="gal-item">
        <img src="Banco de imagens/pexels-mariya-eskina-555701080-19025564.jpg" alt="vista mar">
        <div class="img-placeholder">📸 Vista do Mar</div>
      </div>
      <div class="gal-item wide">
        <img src="/Banco de imagens/pexels-quang-nguyen-vinh-222549-14036443.jpg" alt="piscina">
        <div class="img-placeholder">📸 Área de Lazer</div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       SISTEMA DE RESERVAS
  ═══════════════════════════════════════════ -->
  <section class="reservas" id="reservas">
    <div class="container">
      <p class="section-tag center light">Sistema de Reservas</p>
      <h2 class="center light">Verifique a disponibilidade<br /><em>e faça sua reserva</em></h2>

      <div class="reservas-wrapper">
        <!-- Formulário -->
        <div class="reservas-form">
          <h3>Detalhes da Estadia</h3>

          <div class="form-group">
            <label>Tipo de Acomodação</label>
            <select id="tipoAcom">
              <option value="">Selecione...</option>
              <option value="quarto">Quarto Luxo Vista Mar — R$ 890/noite</option>
              <option value="bungalo">Bungalô Balinês Premium — R$ 1.890/noite</option>
              <option value="suite">Suíte Master — R$ 2.490/noite</option>
            </select>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Check-in</label>
              <input type="date" id="checkIn" />
            </div>
            <div class="form-group">
              <label>Check-out</label>
              <input type="date" id="checkOut" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Adultos</label>
              <div class="counter-wrap">
                <button class="counter-btn" onclick="changeCount('adultos',-1)">−</button>
                <span id="adultos">2</span>
                <button class="counter-btn" onclick="changeCount('adultos',1)">+</button>
              </div>
            </div>
            <div class="form-group">
              <label>Crianças</label>
              <div class="counter-wrap">
                <button class="counter-btn" onclick="changeCount('criancas',-1)">−</button>
                <span id="criancas">0</span>
                <button class="counter-btn" onclick="changeCount('criancas',1)">+</button>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Nome Completo</label>
            <input type="text" id="nomeHospede" placeholder="Seu nome" />
          </div>

          <div class="form-group">
            <label>E-mail</label>
            <input type="email" id="emailHospede" placeholder="seu@email.com" />
          </div>

          <div class="resumo-preco" id="resumoPreco" style="display:none;">
            <div class="resumo-linha"><span>Diárias:</span><span id="resumoDiarias">—</span></div>
            <div class="resumo-linha"><span>Tipo:</span><span id="resumoTipo">—</span></div>
            <div class="resumo-linha total"><span>Total estimado:</span><span id="resumoTotal">—</span></div>
          </div>

          <button class="btn-reservar full" onclick="confirmarReserva()">Confirmar Reserva</button>
        </div>

        <!-- Calendário de Disponibilidade -->
        <div class="calendario-wrap">
          <h3>Calendário de Disponibilidade</h3>
          <div class="calendario" id="calendario"></div>
          <div class="legenda">
            <span class="leg-item"><span class="leg-dot disponivel"></span>Disponível</span>
            <span class="leg-item"><span class="leg-dot ocupado"></span>Ocupado</span>
            <span class="leg-item"><span class="leg-dot selecionado"></span>Selecionado</span>
          </div>
          <div class="cal-nav">
            <button onclick="mudarMes(-1)">← Mês anterior</button>
            <button onclick="mudarMes(1)">Próximo mês →</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       DEPOIMENTOS
  ═══════════════════════════════════════════ -->
  <section class="depoimentos">
    <div class="container">
      <p class="section-tag center">Depoimentos</p>
      <h2 class="center">O que nossos<br /><em>hóspedes dizem</em></h2>
      <div class="dep-grid">
        <div class="dep-card">
          <p class="dep-stars">★★★★★</p>
          <p class="dep-text">"Uma experiência absolutamente mágica. Os bungalôs balineses com vista para o mar são de tirar o fôlego. O serviço é impecável e o restaurante é sensacional."</p>
          <div class="dep-autor">
            <div class="dep-avatar"><!-- Coloque sua foto aqui: avatar do hóspede --><span>MA</span></div>
            <div><strong>Mariana A.</strong><span>São Paulo, SP</span></div>
          </div>
        </div>
        <div class="dep-card">
          <p class="dep-stars">★★★★★</p>
          <p class="dep-text">"Voltamos pela terceira vez e cada visita supera a anterior. A piscina infinita com vista para o oceano é simplesmente perfeita para relaxar."</p>
          <div class="dep-autor">
            <div class="dep-avatar"><span>RC</span></div>
            <div><strong>Roberto C.</strong><span>Rio de Janeiro, RJ</span></div>
          </div>
        </div>
        <div class="dep-card">
          <p class="dep-stars">★★★★★</p>
          <p class="dep-text">"Realizamos nosso casamento aqui e foi perfeito. O centro de convenções é lindo e a equipe cuidou de cada detalhe com muito carinho e profissionalismo."</p>
          <div class="dep-autor">
            <div class="dep-avatar"><span>LS</span></div>
            <div><strong>Larissa & Samuel</strong><span>Belo Horizonte, MG</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       CONTATO
  ═══════════════════════════════════════════ -->
  <section class="contato" id="contato">
    <div class="container contato-grid">
      <div class="contato-info">
        <p class="section-tag">Contato</p>
        <h2>Fale conosco</h2>
        <div class="contato-item">
          <span class="contato-ico">📍</span>
          <div><strong>Endereço</strong><p>Av. Beira Mar, s/n — Praia das Palmeiras<br />CEP 00000-000</p></div>
        </div>
        <div class="contato-item">
          <span class="contato-ico">📞</span>
          <div><strong>Telefone</strong><p>(00) 9 0000-0000</p></div>
        </div>
        <div class="contato-item">
          <span class="contato-ico">✉️</span>
          <div><strong>E-mail</strong><p>reservas@paraisodaspalmeiras.com.br</p></div>
        </div>
        <div class="contato-item">
          <span class="contato-ico">🕐</span>
          <div><strong>Recepção</strong><p>24 horas — todos os dias</p></div>
        </div>
      </div>
      <div class="contato-mapa">
        <!-- Coloque sua foto aqui: mapa ou foto aérea da localização -->
        <div class="img-placeholder mapa">📍 Mapa de Localização</div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       FOOTER
  ═══════════════════════════════════════════ -->
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="brand-icon">✦</span>
        <span>Paraíso das Palmeiras</span>
        <p>Resort de Luxo · Praia Exclusiva</p>
      </div>
      <div class="footer-links">
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#acomodacoes">Acomodações</a>
        <a href="#reservas">Reservas</a>
        <a href="#contato">Contato</a>
      </div>
      <div class="footer-social">
        <a href="#" aria-label="Instagram">Instagram</a>
        <a href="#" aria-label="Facebook">Facebook</a>
        <a href="#" aria-label="WhatsApp">WhatsApp</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Paraíso das Palmeiras. Todos os direitos reservados.</p>
    </div>
  </footer>

  <!-- Modal de Confirmação -->
  <div class="modal-overlay" id="modalOverlay">
    <div class="modal">
      <div class="modal-icon">✦</div>
      <h3>Reserva Solicitada!</h3>
      <p id="modalMsg">Sua solicitação foi recebida. Entraremos em contato em breve para confirmar sua reserva.</p>
      <button class="btn-reservar" onclick="fecharModal()">Fechar</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>

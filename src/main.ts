import "./style.css";

const sections = ["home", "tokenomics", "market", "dao"];

function createNavBar() {
  return `
    <nav class="navbar">
      ${sections
        .map(
          (section) => `
          <button class="nav-btn" id="${section}-btn">${section.toUpperCase()}</button>
        `
        )
        .join("")}
    </nav>
  `;
}

function createHomePage() {
  return `
    <div class="section" id="home">
      <h1>Welcome to PowerShit.xyz</h1>
      <p class="subtext">Where memes take down power. Own it. Trade it. Govern it.</p>
      <img src="/img/logo.png" alt="PowerShit.xyz Logo" class="logo"/>
      <p class="contract-info">
        <strong>Contract Address:</strong> 
        <span class="highlight">62mUZZVGkkfhAer9ASksXfvwdrUE9bV5QrPUBouQpump</span>
      </p>
      <a href="https://pump.fun/coin/62mUZZVGkkfhAer9ASksXfvwdrUE9bV5QrPUBouQpump" 
         class="buy-btn" target="_blank" rel="noopener noreferrer">💰 Buy $PIS</a>
    </div>
  `;
}

function createTokenomicsPage() {
  return `
    <div class="section" id="tokenomics">
      <h2>Tokenomics</h2>
      <p>PowerShit ($PIS) is launched on Pump.fun with a fair and open distribution.</p>
      <ul>
        <li><strong>Total Supply:</strong> 1,000,000,000 $PIS</li>
        <li><strong>Community-Owned:</strong> 100% distributed through the market</li>
        <li><strong>Liquidity & Exchange Listings:</strong> Driven by early adopters</li>
        <li><strong>Decentralized Growth:</strong> No team allocation, no pre-mint</li>
        <li><strong>Strategic Airdrops & Market Influence:</strong> Selective token distributions to create viral moments</li>
      </ul>
      <p>Taxes are not implemented at the contract level. Instead, community-driven DAO governance will determine strategic fund allocation.</p>
    </div>
  `;
}

function createMarketPage() {
  return `
    <div class="section" id="market">
      <h2>Prediction Market (Coming Soon)</h2>
      <p>Power dynamics change fast. Soon, you'll be able to bet on political events, world affairs, and market shifts using $PIS.</p>
      <p>Stay tuned for the launch and be the first to predict the future.</p>
    </div>
  `;
}

function createDAOPage() {
  return `
    <div class="section" id="dao">
      <h2>Power is Shit DAO</h2>
      <p>The $PIS holders will control the future of meme-driven political influence.</p>
      <p>Vote on decisions, fund viral campaigns, and decentralize global discourse.</p>
    </div>
  `;
}

function createFooter() {
  return `
    <footer class="footer">
      <p>Visit us at <a href="https://powershit.xyz" target="_blank">PowerShit.xyz</a></p>
      <p>Follow us for updates:</p>
      <a href="https://x.com/powershitxyz" target="_blank" class="social-link">Twitter</a>
      <a href="https://t.me/powershitxyz" target="_blank" class="social-link">Telegram</a>
      <p class="subtle-hint">Unexpected holders may arise. Stay tuned for market surprises.</p>
    </footer>
  `;
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
    ${createNavBar()}
    <div id="content">
      ${createHomePage()}
      ${createTokenomicsPage()}
      ${createMarketPage()}
      ${createDAOPage()}
    </div>
    ${createFooter()}
  </div>
`;

sections.forEach((section) => {
  document.getElementById(`${section}-btn`)?.addEventListener("click", () => {
    document.querySelectorAll(".section").forEach((el) => {
      el.classList.add("hidden");
    });
    document.getElementById(section)?.classList.remove("hidden");
  });
});

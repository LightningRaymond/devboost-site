const groups = [
  { id: 'page', title: 'On-page tools' },
  { id: 'devtools', title: 'DevTools workspace' },
  { id: 'utility', title: 'Quick utility' }
];

const features = [
  {
    id: 'inspector', title: 'Inspector', group: 'page', image: '01-inspector.png',
    summary: 'Select an element on the live page, understand its layout, and adjust its CSS in place.',
    useCase: 'Use Inspector when a spacing or typography issue is visible in the browser but the responsible CSS is hard to find. Select the element, tune it live, then carry the finished declarations back to your source code.',
    capabilities: ['Inspect typography, spacing, layout, backgrounds, borders, and shadows in grouped controls.', 'Edit declarations in the live CSS view, enable or disable them, and use property and value suggestions.', 'Pick colors, discover page custom properties, and copy the resulting CSS.', 'See element dimensions and box guides while moving through the page.'],
    steps: ['Open DevBoost on a page and choose Inspector.', 'Select the element you want to inspect.', 'Change a value in the panel and copy the CSS when it looks right.'],
    note: 'Changes are applied to the current page for inspection; copy the CSS into your project to keep them.',
    related: ['colors', 'fonts', 'responsive']
  },
  {
    id: 'eyedropper', title: 'Eyedropper', group: 'page', image: 'devboost-eyedropper.png',
    summary: 'Sample a pixel color directly from the page without leaving the tab.',
    useCase: 'Useful when a color comes from an image, gradient, or composited page element and is not obvious in a stylesheet. Sample the rendered pixel rather than guessing from nearby CSS.',
    capabilities: ['Pick a visible color from page content.', 'Copy the sampled value for use in CSS or a design system.', 'Launch it from the popup or the Alt+Shift+E shortcut.'],
    steps: ['Open Eyedropper from the DevBoost popup.', 'Point at the color you want to sample.', 'Copy the displayed value.'],
    related: ['colors', 'inspector']
  },
  {
    id: 'colors', title: 'Colors', group: 'page', image: 'devboost-colours.png',
    summary: 'Explore the colors used by the current page as a usable palette.',
    useCase: 'Start here when auditing a site palette or tracking down inconsistent shades. The list gives you a broad view; Eyedropper is better for one exact rendered pixel.',
    capabilities: ['Collect colors found in page styles.', 'Inspect and copy individual values.', 'Use the popup quick tool or Alt+Shift+P to open the palette.'],
    steps: ['Open Colors from the popup.', 'Review the discovered swatches.', 'Copy a value or use Eyedropper for a pixel-specific sample.'],
    related: ['eyedropper', 'inspector']
  },
  {
    id: 'fonts', title: 'Fonts', group: 'page', image: 'devboost-fonts.png',
    summary: 'Identify the typefaces and font styling in use on a page.',
    useCase: 'Use it during a typography handoff or when a page looks different from the design. Compare the detected families and weights before changing an individual element in Inspector.',
    capabilities: ['See fonts detected from the current page.', 'Inspect font information without hunting through stylesheets.', 'Use the results alongside Inspector when tuning typography.'],
    steps: ['Open Fonts from the popup quick tools.', 'Review the fonts found on the page.', 'Open Inspector to edit a specific element.'],
    related: ['inspector', 'colors']
  },
  {
    id: 'assets', title: 'Assets', group: 'page', image: 'devboost-assets.png',
    summary: 'Find page assets, inspect where they are used, and export the files you need.',
    useCase: 'Use Assets to answer which image or script a page is actually loading. For imagery, compare the file with its rendered size and use Optimize when the delivered asset is unnecessarily large.',
    capabilities: ['Browse discovered assets and sort or filter the list.', 'Jump to an asset on the page or replace it temporarily.', 'Download selected assets or save them all.', 'Optimize selected images for their displayed size and download the result.'],
    steps: ['Choose Assets in the popup.', 'Select an image or other asset from the list.', 'Use Jump, Replace, Download, or Optimize as needed.'],
    note: 'Image optimization works on assets the extension can retrieve; some third-party servers restrict access.',
    related: ['performance', 'capture']
  },
  {
    id: 'responsive', title: 'Responsive Viewer', group: 'page', image: '05-responsive.png',
    summary: 'Compare the same page at several device widths in one workspace.',
    useCase: 'Use it when a layout behaves well at one width but fails at the next breakpoint. Synchronized interactions make it easier to compare the same menu, form, or scroll position across devices.',
    capabilities: ['Add preset or custom devices and rotate or resize each view.', 'Synchronize navigation, inputs, clicks, and scrolling when comparing layouts.', 'Refresh all views together.'],
    steps: ['Open Responsive from the popup.', 'Add the device sizes you want to compare.', 'Use Settings to control mirroring while testing.'],
    note: 'Sites that disallow embedding may not render inside the preview frames.',
    related: ['capture', 'inspector']
  },
  {
    id: 'seo', title: 'SEO', group: 'page', image: '03-seo-audit.png',
    summary: 'Review page metadata, heading structure, structured data, and search previews.',
    useCase: 'Run the audit before publishing a page or when a search preview looks wrong. Follow the heading tree from H1 to H6, then check metadata and JSON-LD without changing the page itself.',
    capabilities: ['See the H1-H6 hierarchy and jump to a heading on the page.', 'Catch missing, empty, duplicate, or out-of-order headings with contextual suggestions.', 'Inspect title, description, canonical, robots, sitemap, Open Graph, and social card details.', 'Review raw JSON-LD scripts, validate common Schema.org types, and format or copy a payload.', 'Export scan results for a report.'],
    steps: ['Open SEO on the page you want to audit.', 'Expand Headings to review the hierarchy and jump to a problem item.', 'Review structured data and page metadata before exporting.'],
    note: 'The structured-data checks are local guidance, not a replacement for a search engine validation tool.',
    related: ['accessibility', 'performance', 'site-stack']
  },
  {
    id: 'site-stack', title: 'Site Stack', group: 'page', image: 'devboost-sitestack.png',
    summary: 'See what powers a site, from hosting signals to analytics, widgets, and libraries.',
    useCase: 'Use Site Stack at the start of a site investigation. It gives you a quick inventory of visible technologies and hosts so you know which integrations deserve a closer look.',
    capabilities: ['Identify technologies and external asset hosts observed on the page.', 'Review hosting and DNS-related signals.', 'Export a stack report as JSON or HTML.'],
    steps: ['Open Site Stack from the popup.', 'Review the detected categories.', 'Use Resolve DNS or export the report for later comparison.'],
    note: 'Detection is based on what is visible to the browser; server-side tools may not be identifiable.',
    related: ['assets', 'debug-lite', 'network']
  },
  {
    id: 'capture', title: 'Capture', group: 'page', image: 'devboost-capture.png',
    summary: 'Capture a viewport, a full page, a selected element, or a custom area.',
    useCase: 'Capture is for bug reports, design reviews, and handoffs that need visual evidence. Choose the smallest useful region, annotate the important detail, and review a full-page stitch before sharing it.',
    capabilities: ['Make viewport, full-page, element, and area screenshots.', 'Record the tab to a WebM video.', 'Annotate with rectangles, arrows, pen strokes, and text; move and edit annotations before export.', 'Crop and export the result as PNG or print it to PDF.', 'Handle sticky elements while stitching long pages.'],
    steps: ['Choose Capture from the popup.', 'Pick a capture mode or start recording.', 'Annotate the result and save or print it.'],
    note: 'Full-page stitching may vary on pages with unusual sticky or animated layouts; review the output before sharing.',
    related: ['responsive', 'assets']
  },
  {
    id: 'performance', title: 'Performance', group: 'page', image: 'devboost-performance.png',
    summary: 'Scan the current page for practical performance signals and heavy resources.',
    useCase: 'Use the scan to find likely bottlenecks on the current page, especially large resource groups. Pair an oversized-image finding with Assets to prepare a smaller replacement.',
    capabilities: ['Review page metrics and resource breakdowns.', 'Inspect audit findings in the on-page tool or DevTools panel.', 'Export DevTools scan results as JSON.', 'Use asset optimization alongside findings about oversized images.'],
    steps: ['Open Performance from the popup or DevBoost DevTools tab.', 'Run a scan, optionally after a reload.', 'Review audits and resource sizes, then export the result if needed.'],
    note: 'These checks describe the current browser session and do not replace a controlled lab benchmark.',
    related: ['assets', 'network', 'accessibility']
  },
  {
    id: 'accessibility', title: 'Accessibility', group: 'page', image: '04-accessibility.png',
    summary: 'Find accessibility issues and inspect the affected elements in context.',
    useCase: 'Run this while developing a page, not only at release time. Filter the findings by impact, jump to the affected element, and fix the most serious issues before a manual keyboard review.',
    capabilities: ['Run axe-based checks from DevTools.', 'Filter findings by impact, rule, target, or text.', 'Highlight affected page elements and copy the results as JSON.', 'Use the on-page accessibility view for a quick review.'],
    steps: ['Open Accessibility from the popup or DevBoost DevTools tab.', 'Run a scan and filter the findings.', 'Select a finding to inspect the affected element.'],
    note: 'Automated checks cannot prove full accessibility compliance; keyboard and assistive-technology testing still matter.',
    related: ['seo', 'performance', 'inspector']
  },
  {
    id: 'debug-lite', title: 'Debug-Lite', group: 'page', image: 'devboost-debug.png',
    summary: 'A compact in-page view of requests, console events, storage, memory, and analytics activity.',
    useCase: 'Use Debug-Lite when you need a quick view beside the page instead of a full DevTools session. It is particularly handy for checking a storage value or confirming that an analytics event fired.',
    capabilities: ['Inspect fetch/XHR and console activity plus JavaScript errors.', 'View or edit localStorage, sessionStorage, and accessible cookies.', 'Watch memory samples, DOM nodes, and event-loop lag.', 'Review dataLayer, Tealium, and analytics-tag events.', 'Keep tracking across navigation when persistence is enabled.'],
    steps: ['Open Debug from the popup.', 'Choose Network / Console, Storage, Memory, DataLayer, or Analytics.', 'Refresh or export the relevant log.'],
    note: 'Cookie visibility is limited to values accessible to page JavaScript.',
    related: ['network', 'site-stack', 'listeners']
  },
  {
    id: 'agentic', title: 'Agentic Browsing', group: 'page', image: 'agentic.png',
    summary: 'Audit how clearly a page exposes its tasks and controls to browser agents.',
    useCase: 'Use this audit when preparing a site for agent-assisted browsing. The checks focus on meaningful controls, machine-readable structure, discoverability, and available WebMCP tools.',
    capabilities: ['Run live-page readiness checks and review evidence-based recommendations.', 'Inspect registered WebMCP tools where present.', 'Import an optional Lighthouse JSON report with the Agentic Browsing category.', 'Copy the resulting audit as JSON.'],
    steps: ['Open the DevBoost tab in Chrome DevTools and select Agentic Browsing.', 'Run Agentic Scan on the current page.', 'Review checks, WebMCP tools, and recommendations.'],
    note: 'The Lighthouse import is optional and supplements the live scan; it does not replace it.',
    related: ['accessibility', 'seo']
  },
  {
    id: 'network', title: 'Network', group: 'devtools', image: 'network.png',
    summary: 'Inspect captured requests and responses, then move a request into API Tester.',
    useCase: 'Use Network to trace a slow, failed, or surprising request. Read its headers and formatted body, then hand the exact request to API Tester when you need to reproduce it with changes.',
    capabilities: ['Filter and sort traffic by URL, method, status, and type.', 'Customize built-in columns or add request and response header columns.', 'Review headers, preview, response, and timing in a resizable split view.', 'Format supported response types, search and fold the bounded preview, and open a full response for copy or download.', 'Copy cURL or use API Test to import a selected request.'],
    steps: ['Open Chrome DevTools and choose the DevBoost tab, then Network.', 'Reload or interact with the page to capture traffic.', 'Select a row to inspect it or send it to API Tester.'],
    note: 'Interactive response previews are limited for large bodies to keep DevTools responsive.',
    related: ['api-tester', 'request-rules', 'debug-lite']
  },
  {
    id: 'api-tester', title: 'API Tester', group: 'devtools', image: '02-api-tester.png',
    summary: 'Send HTTP requests from DevTools and inspect formatted responses.',
    useCase: 'Use API Tester to reproduce a page request, probe an endpoint, or build a small reusable collection. Environment variables keep hostnames and tokens out of repeated header and body edits.',
    capabilities: ['Choose a method, URL, headers, body, timeout, and cookie behavior.', 'Save requests and environments with reusable {{variable}} values in URLs, headers, and bodies.', 'Save response values as variables for later requests.', 'Associate saved JSON Schemas with requests for completion and validation.', 'Format JSON, resize request and response panes, or open a full response for copy and download.', 'Import a captured Network request to prefill the endpoint, headers, and body.'],
    steps: ['Open API Tester in the DevBoost DevTools tab.', 'Enter a URL, choose a method, and add headers or a body.', 'Send, review the response, then save the request or a response variable.'],
    note: 'Requests go to the endpoint you specify. Take care with credentials and production APIs.',
    related: ['network', 'request-rules', 'beautifier']
  },
  {
    id: 'beautifier', title: 'Code Beautifier', group: 'devtools', image: 'beautifier.png',
    summary: 'Format source code locally without switching to an external service.',
    useCase: 'Paste an unreadable response, snippet, or minified draft into the editor to make its structure clear. Choose the language first so the formatter uses the right parser.',
    capabilities: ['Format JavaScript, TypeScript, JSON, HTML, and CSS.', 'Choose indentation, quote style, and semicolon preference.', 'Use the editor for syntax highlighting, search, and editing before copying.'],
    steps: ['Open Code Tools in the DevBoost DevTools tab.', 'Select Beautifier and a language.', 'Paste code, choose options, and select Format.'],
    note: 'Formatting runs in the extension; your code is not sent to a formatting API.',
    related: ['diff-checker', 'injector']
  },
  {
    id: 'diff-checker', title: 'Diff Checker', group: 'devtools', image: 'diff-checker.png',
    summary: 'Compare two editable versions and merge individual differences.',
    useCase: 'Use Diff Checker for two versions of a config, response, or code snippet. Format before comparing when whitespace obscures the actual changes, then merge only the chunks you want.',
    capabilities: ['Compare JavaScript, TypeScript, JSON, HTML, CSS, or plain text.', 'Optionally format both sides before diffing.', 'Highlight the current difference and jump to the previous or next one.', 'Collapse unchanged sections and merge changes in either direction.'],
    steps: ['Open Code Tools and select Diff checker.', 'Paste a version into each side and choose Compare.', 'Navigate differences and merge the changes you want.'],
    related: ['beautifier', 'overrides']
  },
  {
    id: 'injector', title: 'Injector', group: 'devtools', image: 'injector.png',
    summary: 'Load a live script or stylesheet, experiment with edits, and apply them to the page.',
    useCase: 'Use Injector to test a CSS or JavaScript fix against the running page before editing the application source. Load an existing resource for context or inject a small new snippet.',
    capabilities: ['Browse scripts and stylesheets currently loaded by the page.', 'Load a resource or replace the editor content with a local file.', 'Apply a full file, a selected patch, or appended code.', 'Inject a new JavaScript or CSS resource.', 'Use syntax diagnostics before Apply or Reload.'],
    steps: ['Open Injector in the DevBoost DevTools tab.', 'Load a resource and edit it, or write a new JS/CSS snippet.', 'Apply the change, or save it through Overrides for reuse.'],
    note: 'Injected changes affect the current browser session, not the source files on the server.',
    related: ['overrides', 'beautifier', 'network']
  },
  {
    id: 'listeners', title: 'Event Listeners', group: 'devtools', image: 'listeners.png',
    summary: 'Find event handlers, their target elements, and their source files.',
    useCase: 'Use the listener scan when a click or input causes unexpected behavior. The selector takes you to the DOM target, while a source link can take you to the handler file when Chrome exposes it.',
    capabilities: ['Scan listeners for event type, selector, handler, source, and flags.', 'Filter the results and copy them as JSON.', 'Jump to and highlight a DOM target when a selector is available.'],
    steps: ['Open Listeners in the DevBoost DevTools tab.', 'Select Scan Listeners.', 'Filter the list and select a target to locate it on the page.'],
    note: 'Source locations depend on what Chrome can expose for the handler.',
    related: ['debug-lite', 'inspector']
  },
  {
    id: 'request-rules', title: 'Request Rules', group: 'devtools', image: 'request-rules.png',
    summary: 'Block, rewrite, or mock selected requests while testing a page.',
    useCase: 'Use a mock to test an empty state or server error without changing your backend. Block or rewrite a request to isolate a third-party dependency or test a different endpoint.',
    capabilities: ['Create block and URL-rewrite rules.', 'Mock a response with status, content type, headers, and body.', 'Use literal or /regex/ URL patterns with validation before installation.', 'Format JSON mock bodies and use environment variables.'],
    steps: ['Open Request Rules in the DevBoost DevTools tab.', 'Choose Block, Rewrite URL, or Mock response and enter a URL pattern.', 'Add the rule and install runtime rules for the current page.'],
    note: 'Runtime rules alter what the page receives during testing; disable them when you are done.',
    related: ['network', 'api-tester']
  },
  {
    id: 'overrides', title: 'Overrides', group: 'devtools', image: 'overrides.png',
    summary: 'Save edited resource content and reapply it during your debugging session.',
    useCase: 'Use Overrides when an experiment takes more than one reload to validate. Save the current editor content under a name, then apply it again without rebuilding the site.',
    capabilities: ['Save content from the editor under a named override.', 'Review and edit saved overrides.', 'Apply saved content now or reload the page with it.'],
    steps: ['Edit a resource in Injector.', 'Open Overrides and save the editor content.', 'Use Apply Saved or Reload With Saved when you need it again.'],
    note: 'Overrides are browser-side experiments; commit the final change to your application separately.',
    related: ['injector', 'diff-checker']
  },
  {
    id: 'clear-cache', title: 'Clear Cache', group: 'utility', image: 'clear-cache.png',
    summary: 'Refresh cached data for the current site without clearing your entire browser history.',
    useCase: 'Use this after replacing a stylesheet, script, or image when Chrome still displays the older file. It targets the current site so other sites are left alone.',
    capabilities: ['Use the popup quick action for the current site.', 'Repeat a test against fresh page resources.'],
    steps: ['Open the DevBoost popup on the affected site.', 'Choose Clear Cache.', 'Reload the page and repeat your test.'],
    note: 'Use this deliberately when comparing cached and uncached behavior.',
    related: ['performance', 'network']
  }
];

const storeUrl = 'https://chromewebstore.google.com/detail/devboost/lekminfdlmkjdjjgkddmomkkjcbbmcog';

const featureMap = new Map(features.map(feature => [feature.id, feature]));
const nav = document.getElementById('feature-nav');
const main = document.getElementById('main');
const search = document.getElementById('feature-search');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const menuBackdrop = document.getElementById('menu-backdrop');

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function routeId() {
  const match = location.hash.match(/^#feature\/([a-z-]+)$/);
  return match && featureMap.has(match[1]) ? match[1] : 'overview';
}

function closeMenu() {
  sidebar.classList.remove('open');
  menuBackdrop.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
}

function renderNav() {
  const active = routeId();
  const query = search.value.trim().toLowerCase();
  const visible = features.filter(feature => `${feature.title} ${feature.summary} ${feature.capabilities.join(' ')}`.toLowerCase().includes(query));
  nav.innerHTML = `
    <a class="nav-overview ${active === 'overview' ? 'active' : ''}" href="#overview" ${active === 'overview' ? 'aria-current="page"' : ''}>Overview <span aria-hidden="true">&rarr;</span></a>
    ${groups.map(group => {
      const items = visible.filter(feature => feature.group === group.id);
      if (!items.length) return '';
      return `<div class="nav-group"><div class="nav-group-title">${escapeHtml(group.title)}</div>${items.map(feature => `<a class="feature-link ${active === feature.id ? 'active' : ''}" href="#feature/${feature.id}" ${active === feature.id ? 'aria-current="page"' : ''}>${escapeHtml(feature.title)}</a>`).join('')}</div>`;
    }).join('')}
    ${visible.length ? '' : '<div class="nav-empty">No matching features.</div>'}
  `;
}

function directoryGroup(group) {
  const items = features.filter(feature => feature.group === group.id);
  return `<section class="overview-group" aria-labelledby="group-${group.id}"><div class="section-heading"><h2 id="group-${group.id}">${escapeHtml(group.title)}</h2><span>${items.length} tools</span></div><div class="feature-directory">${items.map(feature => `<a class="directory-link" href="#feature/${feature.id}"><span><strong>${escapeHtml(feature.title)}</strong><small>${escapeHtml(feature.summary)}</small></span><span class="directory-arrow" aria-hidden="true">&rarr;</span></a>`).join('')}</div></section>`;
}

function renderOverview() {
  main.innerHTML = `
    <div class="eyebrow">The complete feature guide</div>
    <h1>DevBoost</h1>
    <p class="intro">Inspect, test, audit, capture, and debug the web page in front of you. This guide covers every tool in DevBoost 1.0.7, from quick on-page panels to the deeper DevTools workspace.</p>
    <div class="hero-actions"><a class="button primary" href="${storeUrl}" target="_blank" rel="noopener noreferrer">Add to Chrome</a><a class="button" href="#feature/inspector">Explore the tools</a><a class="button" href="https://youtu.be/Bx0OsJlW7fE" target="_blank" rel="noopener noreferrer">Watch the video tour</a></div>
    <figure class="overview-media"><img src="media/01-inspector.png" alt="DevBoost Inspector selecting a heading and showing editable typography controls on a real page" width="1280" height="800"><figcaption class="media-caption"><strong>In the browser.</strong> Real DevBoost tools working on a sample page.</figcaption></figure>
    <section class="showcase" aria-labelledby="showcase-title"><div class="section-heading"><h2 id="showcase-title">Inside the toolkit</h2><span>Real interface captures</span></div><div class="showcase-grid">
      <a href="#feature/api-tester"><img src="media/02-api-tester.png" alt="API Tester request and formatted JSON response" loading="lazy"><span><strong>Test APIs</strong><small>Build requests and inspect responses.</small></span></a>
      <a href="#feature/seo"><img src="media/03-seo-audit.png" alt="SEO heading hierarchy audit" loading="lazy"><span><strong>Audit pages</strong><small>Review headings and metadata.</small></span></a>
      <a href="#feature/accessibility"><img src="media/04-accessibility.png" alt="Accessibility issues in DevBoost" loading="lazy"><span><strong>Find issues</strong><small>Inspect accessibility findings.</small></span></a>
      <a href="#feature/responsive"><img src="media/05-responsive.png" alt="Multiple responsive device previews" loading="lazy"><span><strong>Compare layouts</strong><small>Test widths side by side.</small></span></a>
    </div></section>
    ${groups.map(directoryGroup).join('')}
  `;
  document.title = 'DevBoost | Feature Guide';
}

function renderFeature(feature) {
  const group = groups.find(item => item.id === feature.group);
  const entryPoint = feature.id === 'clear-cache' ? 'Popup > Quick Tools'
    : ['beautifier', 'diff-checker'].includes(feature.id) ? 'Chrome DevTools > DevBoost > Code Tools'
    : feature.group === 'devtools' ? 'Chrome DevTools > DevBoost'
    : ['performance', 'accessibility', 'agentic'].includes(feature.id) ? 'Popup or Chrome DevTools > DevBoost'
    : 'DevBoost popup';
  main.innerHTML = `
    <article>
      <header class="feature-header">
        <div class="feature-kicker"><span>Feature guide</span><span>${escapeHtml(group.title)}</span></div>
        <h1>${escapeHtml(feature.title)}</h1>
        <p class="intro">${escapeHtml(feature.summary)}</p>
        <div class="feature-entry"><span>Open from</span><strong>${escapeHtml(entryPoint)}</strong></div>
      </header>
      ${feature.image ? `<figure class="feature-image ${feature.id === 'clear-cache' ? 'compact' : ''}"><img src="media/${escapeHtml(feature.image)}" alt="DevBoost ${escapeHtml(feature.title)} interface" loading="eager"><figcaption><span>DevBoost ${escapeHtml(feature.title)} in action</span><a href="media/${escapeHtml(feature.image)}" target="_blank" rel="noopener noreferrer">Open full size</a></figcaption></figure>` : ''}
      <div class="feature-body">
        <div><section><h2>When to use it</h2><p>${escapeHtml(feature.useCase)}</p></section><section><h2>What it does</h2><ul>${feature.capabilities.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section></div>
        <aside class="quick-start"><h2>Get started</h2><ol>${feature.steps.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ol>${feature.note ? `<p class="feature-note">${escapeHtml(feature.note)}</p>` : ''}</aside>
      </div>
      <section class="related"><h2>Explore next</h2><div class="related-links">${feature.related.map(id => `<a href="#feature/${id}">${escapeHtml(featureMap.get(id).title)} &rarr;</a>`).join('')}</div></section>
    </article>
  `;
  document.title = `${feature.title} | DevBoost`;
}

function render() {
  const id = routeId();
  renderNav();
  if (id === 'overview') renderOverview();
  else renderFeature(featureMap.get(id));
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

search.addEventListener('input', renderNav);
menuToggle.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  menuBackdrop.classList.toggle('active', open);
  menuToggle.setAttribute('aria-expanded', String(open));
});
menuBackdrop.addEventListener('click', closeMenu);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
window.addEventListener('hashchange', render);
render();

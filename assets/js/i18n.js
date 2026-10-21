(() => {
  const params = new URLSearchParams(window.location.search);
  const language = params.get('lang') === 'ja' ? 'ja' : 'en';
  const locale = (window.PORTFOLIO_LOCALES || {})[language] || {};
  const textTranslations = locale.text || {};
  const sourceProfile = JSON.parse(JSON.stringify(window.PROFILE || {}));
  const sourceProjects = JSON.parse(JSON.stringify(window.PROJECTS || []));
  const originalTextNodes = new WeakMap();
  const originalAttributes = new WeakMap();

  const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

  function mergeLocalized(source, overrides) {
    if (overrides === undefined) return source;
    if (Array.isArray(source) && Array.isArray(overrides)) {
      return source.map((item, index) => index < overrides.length
        ? mergeLocalized(item, overrides[index])
        : item).concat(overrides.slice(source.length));
    }
    if (isObject(source) && isObject(overrides)) {
      const result = { ...source };
      Object.entries(overrides).forEach(([key, value]) => {
        result[key] = key in source ? mergeLocalized(source[key], value) : value;
      });
      return result;
    }
    return overrides;
  }

  function replaceObjectContents(target, source) {
    Object.keys(target).forEach((key) => delete target[key]);
    Object.assign(target, source);
  }

  const localizedProfile = mergeLocalized(sourceProfile, locale.profile || {});
  if (window.PROFILE) replaceObjectContents(window.PROFILE, localizedProfile);

  const projectTranslations = locale.projects || {};
  const localizedProjects = sourceProjects.map((project) => {
    const localized = mergeLocalized(project, projectTranslations[project.id] || {});
    if (Array.isArray(localized.gallery)) {
      localized.gallery = localized.gallery.map((image) => ({
        ...image,
        title: textTranslations[image.title] || image.title,
      }));
    }
    return localized;
  });
  if (Array.isArray(window.PROJECTS)) window.PROJECTS.splice(0, window.PROJECTS.length, ...localizedProjects);

  document.documentElement.lang = language;
  document.documentElement.dataset.language = language;
  window.PORTFOLIO_LANGUAGE = language;
  window.portfolioText = (englishText) => textTranslations[englishText] || englishText;

  function translateTextNode(node) {
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
    const original = originalTextNodes.get(node);
    const match = original.match(/^(\s*)([\s\S]*?)(\s*)$/);
    const rawSource = match ? match[2] : original;
    const source = rawSource.replace(/\s+/g, ' ').trim();
    const translation = language === 'ja' ? textTranslations[source] : null;
    node.nodeValue = match
      ? `${match[1]}${translation || rawSource}${translation ? '' : match[3]}`
      : (translation || original);
  }

  function translateAttributes(root) {
    const elements = root.querySelectorAll ? root.querySelectorAll('[alt], [aria-label], [placeholder], [title], meta[name="description"][content]') : [];
    elements.forEach((element) => {
      ['alt', 'aria-label', 'placeholder', 'title', ...(element.matches('meta[name="description"]') ? ['content'] : [])].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        let originals = originalAttributes.get(element);
        if (!originals) {
          originals = {};
          originalAttributes.set(element, originals);
        }
        if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
        const original = originals[attribute];
        element.setAttribute(attribute, language === 'ja' ? (textTranslations[original] || original) : original);
      });
    });
  }

  function translateDocument() {
    if (document.body) {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) translateTextNode(node);
      translateAttributes(document.body);
      translateAttributes(document.head);
    }

    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.firstChild) translateTextNode(titleElement.firstChild);
  }

  function relativeUrl(url) {
    return `${url.pathname}${url.search}${url.hash}`;
  }

  function updateInternalLinks(root = document) {
    const links = root.querySelectorAll ? root.querySelectorAll('a[href]') : [];
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      let url;
      try {
        url = new URL(href, window.location.href);
      } catch (_) {
        return;
      }
      if (url.origin !== window.location.origin || !url.pathname.endsWith('.html')) return;
      if (language === 'ja') url.searchParams.set('lang', 'ja');
      else url.searchParams.delete('lang');
      link.setAttribute('href', relativeUrl(url));
    });
  }

  function setupLanguageSelects() {
    document.querySelectorAll('[data-language-select]').forEach((select) => {
      select.value = language;
      select.addEventListener('change', () => {
        const nextLanguage = select.value === 'ja' ? 'ja' : 'en';
        const url = new URL(window.location.href);
        if (nextLanguage === 'ja') url.searchParams.set('lang', 'ja');
        else url.searchParams.delete('lang');
        window.location.assign(relativeUrl(url));
      });
    });
  }

  setupLanguageSelects();
  updateInternalLinks();

  if (document.body) {
    const observer = new MutationObserver((records) => {
      let elementsAdded = false;
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            elementsAdded = true;
            updateInternalLinks(node);
          } else if (node.nodeType === Node.TEXT_NODE) {
            translateTextNode(node);
          }
        });
      });
      if (elementsAdded) translateDocument();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  document.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(() => {
      translateDocument();
      updateInternalLinks();
    }, 0);
  }, { once: true });
})();

// Prism.js syntax highlighting initialization
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-markup' // For XML

export function highlightAllCode() {
  // Find all pre > code elements
  document.querySelectorAll('pre code').forEach((block) => {
    // Ensure parent pre has language class
    const parent = block.parentElement
    if (
      parent &&
      !parent.classList.contains('language-javascript') &&
      !parent.classList.contains('language-jsx') &&
      !parent.classList.contains('language-css') &&
      !parent.classList.contains('language-bash') &&
      !parent.classList.contains('language-json') &&
      !parent.classList.contains('language-python') &&
      !parent.classList.contains('language-markup')
    ) {
      // Default to javascript for code examples
      parent.classList.add('language-javascript')
    }

    // Ensure code has language class
    if (
      !block.classList.contains('language-javascript') &&
      !block.classList.contains('language-jsx') &&
      !block.classList.contains('language-css') &&
      !block.classList.contains('language-bash') &&
      !block.classList.contains('language-json') &&
      !block.classList.contains('language-python') &&
      !block.classList.contains('language-markup')
    ) {
      block.classList.add('language-javascript')
    }

    // Apply syntax highlighting
    Prism.highlightElement(block)
  })
}

// Auto-run on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightAllCode)
  } else {
    highlightAllCode()
  }
}

// Also run after any DOM changes (for SPA navigation)
if (typeof MutationObserver !== 'undefined') {
  const observer = new MutationObserver((mutations) => {
    let shouldHighlight = false
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeType === 1 &&
            (node.tagName === 'PRE' || node.querySelector?.('pre'))
          ) {
            shouldHighlight = true
          }
        })
      }
    })
    if (shouldHighlight) {
      highlightAllCode()
    }
  })

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true })
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, { childList: true, subtree: true })
    })
  }
}

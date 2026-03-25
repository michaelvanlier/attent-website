import { useEffect } from 'react'

export function useSiteEffects() {
  useEffect(() => {
    // Delay slightly to ensure DOM is painted
    const timer = setTimeout(() => {
      // Scroll reveal — fadeUp with staggered delays
      const revealEls = document.querySelectorAll('.reveal')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      )
      revealEls.forEach((el) => {
        // If already in viewport, reveal immediately
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('revealed')
        } else {
          observer.observe(el)
        }
      })

      cleanupRef.observer = observer
    }, 100)

    const cleanupRef: { observer?: IntersectionObserver } = {}

    // Statement word-fill scroll animation
    const stWords = document.querySelectorAll('.stword')
    let stObserver: IntersectionObserver | null = null
    if (stWords.length) {
      stObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('filled')
            }
          })
        },
        { threshold: 0.5, rootMargin: '-10% 0px -30% 0px' }
      )
      stWords.forEach((w, i) => {
        ;(w as HTMLElement).style.transitionDelay = i * 0.04 + 's'
        stObserver!.observe(w)
      })
    }

    // Nav scroll state
    const nav = document.querySelector('.nav')
    function handleScroll() {
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('nav--scrolled')
        } else {
          nav.classList.remove('nav--scrolled')
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item')
    faqItems.forEach((item) => {
      const trigger = item.querySelector('.faq-question')
      if (trigger) {
        trigger.addEventListener('click', () => {
          const isOpen = item.classList.contains('faq-item--open')
          faqItems.forEach((i) => i.classList.remove('faq-item--open'))
          if (!isOpen) {
            item.classList.add('faq-item--open')
          }
        })
      }
    })

    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href && href !== '#') {
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      })
    })

    return () => {
      clearTimeout(timer)
      cleanupRef.observer?.disconnect()
      if (stObserver) stObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

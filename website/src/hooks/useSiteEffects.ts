import { useEffect } from 'react'

export function useSiteEffects() {
  useEffect(() => {
    const cleanups: (() => void)[] = []

    // --- Scroll Reveal ---
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))
    cleanups.push(() => revealObserver.disconnect())

    // --- Nav scroll behavior ---
    const nav = document.getElementById('mainNav')
    const onNavScroll = () => {
      nav?.classList.toggle('scrolled', window.scrollY > 100)
    }
    window.addEventListener('scroll', onNavScroll)
    cleanups.push(() => window.removeEventListener('scroll', onNavScroll))

    // --- FAQ Accordion ---
    const faqButtons = document.querySelectorAll('.faq-question')
    const faqHandlers: Array<{ btn: Element; handler: () => void }> = []
    faqButtons.forEach((btn) => {
      const handler = () => {
        const item = btn.parentElement
        const wasOpen = item?.classList.contains('open')
        document.querySelectorAll('.faq-item.open').forEach((i) => i.classList.remove('open'))
        if (!wasOpen) item?.classList.add('open')
      }
      btn.addEventListener('click', handler)
      faqHandlers.push({ btn, handler })
    })
    cleanups.push(() => {
      faqHandlers.forEach(({ btn, handler }) => btn.removeEventListener('click', handler))
    })

    // --- Tab switching ---
    const tabs = document.querySelectorAll('.use-tab')
    const tabHandlers: Array<{ tab: Element; handler: () => void }> = []
    tabs.forEach((tab) => {
      const handler = () => {
        document.querySelectorAll('.use-tab').forEach((t) => t.classList.remove('active'))
        document.querySelectorAll('.use-case-content').forEach((c) => c.classList.remove('active'))
        tab.classList.add('active')
        const tabId = (tab as HTMLElement).dataset.tab
        document.getElementById('tab-' + tabId)?.classList.add('active')
      }
      tab.addEventListener('click', handler)
      tabHandlers.push({ tab, handler })
    })
    cleanups.push(() => {
      tabHandlers.forEach(({ tab, handler }) => tab.removeEventListener('click', handler))
    })

    // --- Text cycle animation ---
    const cycle = document.getElementById('heroCycle')
    let cycleInterval: ReturnType<typeof setInterval> | undefined
    let cycleResizeHandler: (() => void) | undefined
    if (cycle) {
      const words = cycle.querySelectorAll('.text-cycle-word')
      if (words.length >= 2) {
        let idx = 0
        const measurer = document.createElement('span')
        measurer.style.cssText =
          'position:absolute;visibility:hidden;white-space:nowrap;pointer-events:none;font:inherit'
        cycle.parentNode?.appendChild(measurer)

        const setW = () => {
          measurer.textContent = words[idx].textContent
          cycle.style.width = measurer.offsetWidth + 'px'
        }

        if (document.fonts?.ready) document.fonts.ready.then(setW)
        setTimeout(setW, 100)
        setTimeout(setW, 500)

        cycleResizeHandler = setW
        window.addEventListener('resize', cycleResizeHandler)

        cycleInterval = setInterval(() => {
          const prev = idx
          idx = (idx + 1) % words.length
          words[prev].classList.remove('active')
          words[prev].classList.add('exit')
          words[idx].classList.add('active')
          setW()
          setTimeout(() => {
            words[prev].classList.remove('exit')
          }, 300)
        }, 3000)
      }
    }
    cleanups.push(() => {
      if (cycleInterval) clearInterval(cycleInterval)
      if (cycleResizeHandler) window.removeEventListener('resize', cycleResizeHandler)
    })

    // --- Statement text fill (scroll-based word coloring) ---
    const stWords = document.querySelectorAll('.statement-text .stword')
    let stObserver: IntersectionObserver | undefined
    if (stWords.length) {
      stObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('filled')
          })
        },
        { threshold: 0.5, rootMargin: '-10% 0px -30% 0px' }
      )
      stWords.forEach((w, i) => {
        ;(w as HTMLElement).style.transitionDelay = i * 0.04 + 's'
        stObserver!.observe(w)
      })
    }
    cleanups.push(() => stObserver?.disconnect())

    // --- Statement image cycling ---
    const imgIntervals: ReturnType<typeof setInterval>[] = []
    document.querySelectorAll('.statement-img').forEach((container) => {
      const imgs = container.querySelectorAll('img')
      if (imgs.length < 2) return
      let imgIdx = 0
      const interval = setInterval(() => {
        imgs[imgIdx].classList.remove('statement-img-active')
        imgIdx = (imgIdx + 1) % imgs.length
        imgs[imgIdx].classList.add('statement-img-active')
      }, 3500)
      imgIntervals.push(interval)
    })
    cleanups.push(() => imgIntervals.forEach((i) => clearInterval(i)))

    // --- Smooth scroll for nav links ---
    const navLinks = document.querySelectorAll('.nav-links a')
    const navLinkHandlers: Array<{ link: Element; handler: (e: Event) => void }> = []
    navLinks.forEach((link) => {
      const handler = (e: Event) => {
        e.preventDefault()
        const href = link.getAttribute('href')
        if (!href) return
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          document.querySelectorAll('.nav-links a').forEach((l) => l.classList.remove('active'))
          link.classList.add('active')
        }
      }
      link.addEventListener('click', handler)
      navLinkHandlers.push({ link, handler })
    })
    cleanups.push(() => {
      navLinkHandlers.forEach(({ link, handler }) => link.removeEventListener('click', handler))
    })

    // --- Active nav tracking on scroll ---
    const sections = document.querySelectorAll('section[id]')
    const onActiveNav = () => {
      let current = ''
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 200
        if (window.scrollY >= top) current = section.getAttribute('id') || ''
      })
      document.querySelectorAll('.nav-links a').forEach((link) => {
        link.classList.remove('active')
        if (link.getAttribute('href') === '#' + current) link.classList.add('active')
      })
    }
    window.addEventListener('scroll', onActiveNav)
    cleanups.push(() => window.removeEventListener('scroll', onActiveNav))

    return () => {
      cleanups.forEach((fn) => fn())
    }
  }, [])
}

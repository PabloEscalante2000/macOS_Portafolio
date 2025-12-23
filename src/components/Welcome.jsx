import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const FONT_WEIGHTS = {
   subtitle: {min: 100, max: 400, default: 100},
   title: {min:400, max:900, default: 400}
}


const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{fontVariationSettings: `'wght' ${baseWeight}`}}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ))
}

const setupTextHover = (container, type) => {
    if(!container) return;

    const letters = container.querySelectorAll('span');
    const {min, max, default: base} = FONT_WEIGHTS[type];

    const animateLetters = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration, 
            ease:"power2.out",
            fontVariationSettings: `'wght' ${weight}`
        })
    }

    const handlemOUSEmove = (e) => {
        const {left} = container.getBoundingClientRect()
        const mouseX = e.clientX - left

        letters.forEach((letter) => {
            const {left:l, width:w} = letter.getBoundingClientRect()
            const distance = Math.abs(mouseX - (l - left + w/2))
            const intensity = Math.exp(-(distance ** 2) / 2000)

            animateLetters(letter, min + (max - min) * intensity)
        })
    }

    const handleMouseLeave = () => letters.forEach((letter) => animateLetters(letter, base, 0.3))

    container.addEventListener("mousemove", handlemOUSEmove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
        container.addEventListener("mousemove", handlemOUSEmove)
        container.addEventListener("mouseleave", handleMouseLeave)
    }
}

function Welcome() {

    const titleRef = React.useRef(null);
    const subtitleRef = React.useRef(null);

    useGSAP(() => {
        const titleClanup = setupTextHover(titleRef.current, 'title');
        const subtitleCleanuo = setupTextHover(subtitleRef.current, 'subtitle');
        return () => {
            titleClanup();
            subtitleCleanuo();
        }
    }, [])

  return (
    <section id='welcome'>
        <p ref={subtitleRef}>
            {renderText(
                "Hey, I'm Pablo Escalante, welcome to my",
                "text-3xl font-georama",
                100
            )}
        </p>
        <h1 ref={titleRef} className='mt-7'>
            {renderText("portafolio","text-9xl italic font-georama")}
        </h1>

        <div className='small-screen'>
            <p>This portafolio is designed for desktop/tablet screens only</p>
        </div>
    </section>
  )
}

export default Welcome
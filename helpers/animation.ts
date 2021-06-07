export const slideUp = {
    hidden: {y: 100, opacity: 0},
    visible: (i=0) => ({y: 0, opacity: 1, transition: {
        ease: 'easeInOut',
        duration: .7,
        delay: i
    }})
}

export const zoomIn = {
    hidden: {scale: 0, opacity: 0},
    visible: (i=0) => ({scale: 1, opacity: 1, transition: {
        ease: 'easeInOut',
        duration: .7,
        delay: i
    }})
}

export const fadeIn = {
    hidden: { opacity: 0},
    visible: (i=0) => ({ opacity: 1, transition: {
        ease: 'easeInOut',
        duration: .7,
        delay: i
    }})
}


export const slideToRight = {
    hidden: {x: -100, opacity: 0},
    visible: (i=0) => ({x: 0, opacity: 1, transition: {
    ease: 'easeInOut',
    duration: .7,
    delay: i
}}) 
}

export const slideToLeft = {
    hidden: {x: 100, opacity: 0},
    visible: (i=0) => ({x: 0, opacity: 1, transition: {
    ease: 'easeInOut',
    duration: .7,
    delay: i
}}) 
}

export const slideDown = {
    hidden: {y: -100, opacity: 0},
    visible: (i = 0) => ({y: 0, opacity: 1,  transition: {
    ease: 'easeInOut',
    duration: .7,
    delay: i
}}),
   
}

export const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        delay: 0.6
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
}

export const itemSlideUp = {
    visible: { opacity: 1, y: 0, transition: {
        ease: 'easeInOut',
        duration: .5,
    } },
    hidden: { opacity: 0, y: 100 },
}
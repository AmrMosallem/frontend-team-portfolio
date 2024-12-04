import React from 'react'
import styled from 'styled-components'
import Card from './components/Card'
import { teamData } from './constants'

import { SectionTitle, ScrollableContainer } from './components/SharedComponents'
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 30px 0px;
  gap: 35px;
  transition: 0.6s;
  min-width: 100%;
  box-sizing: border-box;
  @media (max-width:650px) {
    padding: 15px 0px;
  }
`
const MembersSection = styled.section`

.section-quote{
 
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    padding: 0px 90px;
    font-family: "Playwrite DK Uloopet", cursive;
}
@media (max-width:650px) {
  .section-quote{
    padding: 0px 20px;
  }
}
`
function Members(props) {

  const scrollContainerRef = React.useRef(null);
  const cardRefs = React.useRef([]);

  let cards = (teamData.map((el, index) => <Card {...el} mobileScreen={props.mobileScreen} key={el.name} ref={el => (cardRefs.current[index] = el)} />))
  const [style, setStyle] = React.useState({
    width: props.mobileScreen ? teamData.length * 255 + "px" : teamData.length * 255 + 450 + "px"
  })

  React.useEffect(() => {
    setStyle({
      width: props.mobileScreen ? teamData.length * 255 + 20 + "px" : teamData.length * 255 + 450 + "px"
    })
  }, [props.mobileScreen])

  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let animation = true;
    const handleWheel = (event) => {
      event.preventDefault();
      animation = false;
      scrollContainer.scrollBy({
        left: event.deltaY,
        behavior: 'smooth',
      });
    };
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel);
    }

    for (let i = 0; i < cardRefs.current.length; i++) {
      const card = cardRefs.current[i];
      if (card) {
        card.addEventListener('click', () => {
          for (let j = 0; j < cardRefs.current.length; j++) {
            if (j === i) continue;
            const card2 = cardRefs.current[j];
            const cardWidth = parseInt(`${card2.style.width}`.split("px")[0]);
            if (cardWidth > 350 || cardWidth === 250) {
              card2.click(); animation = false;
            }
          }
        })
      }
    }
    const performAnimation = async () => {
      for (let i = 0; i < cardRefs.current.length; i++) {
        const card = cardRefs.current[i];
        // Scroll to the card
        // Simulate clicking the card
        if (card) {
          await new Promise(resolve => {

            setTimeout(() => {
              if (!animation) {
                return;
              }
              card.click(); 

              setTimeout(() => {
                if (!animation || (parseInt(`${card.style.width}`.split("px")[0]) <= 350 && parseInt(`${card.style.width}`.split("px")[0]) != 250)) { animation = false; return; }
                card.click(); // Second click
                scrollContainer.scrollBy({
                  left: 250,
                  behavior: 'smooth'
                })
                if (i == cardRefs.current.length - 1) {
                  scrollContainer.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                  })
                  animation = false;
                }
                resolve();
              }, 3500); // Wait before second click

            }, 500); // Wait before first click
          });
        }
      }

    };
    // Define the callback function to run when the element enters or leaves the viewport
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animation = true;
          performAnimation();
        } else {
          animation = false;
        }
      });
    };
    // Create an observer with options
    const observer = new IntersectionObserver(callback, {
      root: null, // Use the viewport as the root
      threshold: 0.2
    });

    // Start observing the target element
    observer.observe(scrollContainer);
  }, []);


  return (
    <MembersSection id="members" >
      <SectionTitle center={true}>Our Members<span className='section-subtitle'>Meet the Minds Behind the Magic.</span></SectionTitle>
      <ScrollableContainer ref={scrollContainerRef}>
        <CardsContainer style={style}>
          {cards}
        </CardsContainer>
      </ScrollableContainer>
      <p className='section-quote'>"Together, we’re more than just developers—we’re creators, innovators, and problem-solvers. Each member brings unique strengths, but it’s our collaboration that drives success. Let’s make the impossible possible, one project at a time."</p>
    </MembersSection>
  )
}

export default Members
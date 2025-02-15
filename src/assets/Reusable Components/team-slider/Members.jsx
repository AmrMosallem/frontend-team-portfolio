import React from 'react'
import styled from 'styled-components'
import MemberCard from './MemberCard'

const SectionTitle = styled.h1`

    font-family: "Nunito Sans", system-ui;
    box-sizing: border-box;
    width: 100%;
    font-size: ${props => props.size ? props.size : "56px"};
    text-align: ${props => props.center ? 'center' : 'left'};
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 0px;
    display:flex;
    flex-direction:column;
 
    .section-subtitle{
        font-size: 24px;
        font-weight: 400;
    }
    @media (max-width:650px) {
      padding:0px 20px;
      text-align: center;
        font-size: 36px;
        .section-subtitle{
        font-size: 16px;
        font-weight: 400;
    }
    }

`
const ScrollableContainer = styled.div`
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,195,126,0.5) 0%, rgba(254,213,164,1) 0%, rgba(177,148,114,1) 78%);
  border: 2px solid white;
  border-radius: 20px;
  margin: 20px auto;
  box-shadow: 0 0 10px white;
  transition: 0.35s ease-in-out;
  width: 90%;
  box-sizing: border-box;
  overflow-x: scroll;
  &::-webkit-scrollbar{
  height: 6px;
}
&::-webkit-scrollbar-track {
  background: none;
}
&::-webkit-scrollbar-thumb {
  background: var(--color-level-4) ;  
  border-radius: 20px;
}
`
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
function Members({ title, subtitle, teamData, quote, mobileScreen, ...props }) {

  const scrollContainerRef = React.useRef(null);
  const cardRefs = React.useRef([]);

  let cards =
    (teamData.map((el, index) => <MemberCard {...el}
      mobileScreen={mobileScreen}
      key={el.name} ref={el => (cardRefs.current[index] = el)} />))
  const [style, setStyle] = React.useState({
    width: mobileScreen ? teamData.length * 255 + "px" : teamData.length * 255 + 450 + "px"
  })

  React.useEffect(() => {
    setStyle({
      width: mobileScreen ? teamData.length * 255 + 20 + "px" : teamData.length * 255 + 450 + "px"
    })
  }, [mobileScreen])

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
    <MembersSection id="members" {...props} >
      <SectionTitle center={true}>{title}<span className='section-subtitle'>{subtitle}</span></SectionTitle>
      <ScrollableContainer ref={scrollContainerRef}>
        <CardsContainer style={style}>
          {cards}
        </CardsContainer>
      </ScrollableContainer>
      <p className='section-quote'>{quote}</p>
    </MembersSection>
  )
}

const teamDataExample = [
  {
    image: "",
    firstName: "Amr",
    lastName: "Mosallem",
    title: "Visionary Frontend Leader",
    about:
      "Amr is not just a leader; he’s the backbone of our team, combining exceptional management skills with a visionary approach to frontend development. His knack for creating intuitive, organized, and high-quality projects sets a benchmark for excellence in the field. With his organized approach and passion for excellence, Amr ensures every project reaches its full potential.",
    quote:
      "Leadership is not about control; it’s about empowering others to reach their potential.",
    github: "https://github.com/AmrMosallem",
    linkedin: "https://www.linkedin.com/in/amr-mosallem-0540b9314/",
  },
  {
    image: "",
    firstName: "Mazen",
    lastName: "Elwany",
    title: "Precision Expert",
    about:
      "Mazen is the embodiment of discipline and reliability, making him one of the most dependable frontend developers on our team. His unwavering commitment to excellence ensures that every task he undertakes is completed with accuracy and top-notch quality. Mazen’s work reflects his meticulous attention to detail and his ability to deliver results that exceed expectations.",
    quote: "Excellence is not an act; it’s a habit.",
    github: "https://github.com/Mazen-3lwany",
  },
]

export default Members
import React from 'react'
// import './Card.css'
import styled from 'styled-components';
import GlowingBorder from './GlowingBorder';

// export default function Card(props) {
//     const cardRef = React.useRef(null);

//     const [state, setState] = React.useState({
//         style: { width: "220px" },
//         name: props.firstName,
//         infoShown: false
//     })

//     const [aboutStyles, setAboutStyles] = React.useState({
//         maxWidth: "0",
//         padding: "0"
//     })

//     function cardHover() {
//         setState((prevState) => ({
//             ...prevState,
//             style: {
//                 ...prevState.style,
//                 width: prevState.infoShown ? prevState.style.width : "350px",
//                 filter: "brightness(1.2)"
//             },

//         }))
//         setTimeout(
//             () => {
//                 setState((prevState) => ({
//                     ...prevState,
//                 }))
//             }, 300
//         )
//     }
//     function cardMouseLeave(event) {
//         setState((prevState) => ({
//             ...prevState,
//             style: {
//                 ...prevState.style,
//                 width: prevState.infoShown ? prevState.style.width : "220px",
//                 filter: prevState.infoShown ? "brightness(1.2)" : "brightness(1)"
//             }
//         }))
//     }

//     function cardClick(event) {
//         if (event.target.tagName === "BUTTON")
//             return;
//         if (!state.infoShown) {
//             props.increaseWidth();
//             // props.scrollToRight();
//         }
//         else {
//             props.decreaseWidth();
//         }
//         setState((prevState) => ({
//             ...prevState,
//             name: prevState.infoShown ? props.firstName : props.firstName + " " + props.lastName,
//             infoShown: !prevState.infoShown,
//             style: {
//                 ...prevState.style,
//                 width: prevState.infoShown ? "350px" : "600px", filter: "brightness(1.2)"
//             }
//         }))
//         setAboutStyles(() => {
//             return state.infoShown ? {
//                 maxWidth: "0",
//                 padding: "0"
//             } : {
//                 maxWidth: "300px",
//                 padding: "0 20px"
//             }
//         })
//         if (cardRef.current) {
//             setTimeout(() => {
//                 cardRef.current.scrollIntoView({
//                     behavior: 'smooth', // Adds smooth scrolling
//                     block: 'center', // Ensures the component is centered in view
//                 });
//             }, 400)
//         }
//     }
//     return (

//         <div className='card-container' ref={cardRef} onMouseEnter={cardHover} onMouseLeave={cardMouseLeave} onClick={cardClick} style={state.style}>
//             <div className="card"  >
//                 <div className="card-overview">
//                     <img src={`/images/${props.image}`} alt="" />

//                     <div className="card-title">
//                         <span className='name'>{state.name}</span>
//                         <span className='title'>{props.title}</span>
//                     </div>


//                 </div>


//                 <div className="card-body" style={aboutStyles}>
//                     <div><p className="big-text">About</p>
//                         <span className="small-text">{props.about}</span>
//                         <span className="quote" >"{props.quote}"</span></div>


//                     <div className="card-buttons">
//                         <button className='linkedin'><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
//                         <button className='github'><i className="fa-brands fa-github"></i> GitHub</button>
//                     </div>
//                 </div>
//             </div>
//             <div className="border">
//                 <div className="border blurred">
//                 </div>
//             </div>
//         </div>

//     )
// }
const CardContainer = styled.div`
  position: relative;
  width: 220px;
  border-radius: 8px;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  &:hover .blurred {
  padding: 4px;
  border-radius: 12px;

  filter: blur(3px);
}
.card {
  border: 2px solid white;
  font-family: "Nunito Sans", system-ui;
  color: var(--text-color-level-5);
  background:  var(--color-level-1);
  display: flex;

  box-sizing: border-box;
  border-radius: inherit;
  overflow: hidden;
  height: 340px;
}
.card-overview {
  width: 100%;
  min-width: 220px;
  transition: 0.5s ease-in-out;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 250px;
  object-fit: cover;

  border-bottom-right-radius: 10px;
}
.card-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  position: relative;
  text-align: center;

}
.name {
  font-size: 24px;
  font-weight: 700;
}
.title {
  font-size: 15px;

}

.card-buttons {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 10px;
  flex: 1;
  padding-bottom:10px;
}

.card-buttons a {
  border: none;
  font-weight: 600;

  text-decoration: none;
  transition: 0.2s;
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 13px;
}
.linkedin {
  background: rgb(0, 106, 255);
  color: rgb(255, 255, 255);
  cursor: not-allowed;
}
.linkedin:hover {
  background: rgb(0, 68, 194);
}
.github {
  background: rgb(40, 40, 40);
  color: #ffffff;  cursor: pointer;
}
.github:hover {
  background: rgb(82, 82, 82);
}

.card-body {
  margin: 7px 0px;
  transition: 0.5s ease-in-out;
  max-width: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.body-name{
  margin: 0px;
  margin-bottom:5px;
  text-align:center;
  font-weight:700;
  font-size: 22px;
  padding: 2px 0px;
  
 border-radius:8px;
 box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);

}
.big-text {
  margin: 0px;
  font-size: 18px;
  font-weight: 600;
}
.small-text {
  font-size: 15px;
}

.quote {
  font-style: italic;
  font-size: 15px;
  margin-top: 5px;
  display: block;
}
@media( max-width: 650px) {
  .card{
   height:90dvh;
   max-height:440px;
  }
  .small-text, .quote {
    font-size: 13px;
    line-height: 1.4;
    display:block;
  }
  .card-buttons{
    margin-top:0px;
  }
} 
    `


const Card = React.forwardRef((props, ref) => {
  const cardRef = ref;

  const [state, setState] = React.useState({
    style: { width: "220px", filter: "brightness(1)" }, // filter: "brightness(1)" },
    name: props.firstName,
    infoShown: false
  })

  const [aboutStyles, setAboutStyles] = React.useState({
    maxWidth: "0",
    padding: "0"
  })
  const [overviewStyles, setOverviewStyles] = React.useState({
    width: "100%",
    minWidth: "220px",
  })

  function cardHover() {
    if (props.mobileScreen) {
      setState((prevState) => ({
        ...prevState,
        style: {
          ...prevState.style,
          filter: "brightness(1.1)"
        },
      }))
      return
    }
    setState((prevState) => ({
      ...prevState,
      style: {
        ...prevState.style,
        width: prevState.infoShown ? prevState.style.width : "350px",
        filter: "brightness(1.1)"
      },

    }))

  }
  function cardMouseLeave() {
    setState((prevState) => ({
      ...prevState,
      style: {
        ...prevState.style,
        width: prevState.infoShown ? prevState.style.width : "220px",
        filter: prevState.infoShown ? "brightness(1.1)" : "brightness(1)"
      }
    }))
  }

  function cardClick(event) {
    if (event.target.tagName === "A")
      return;
    if (props.mobileScreen) {
      setState((prevState) => ({
        ...prevState,
        name: prevState.infoShown ? props.firstName : props.firstName + " " + props.lastName,
        infoShown: !prevState.infoShown,
        style: {
          ...prevState.style,
          width: prevState.infoShown ? "220px" : "250px", filter: prevState.infoShown ? "brightness(1)" : "brightness(1.1)"
        }
      }))
      setOverviewStyles(() => {
        return state.infoShown ? {
          width: "100%",
          minWidth: "220px",
        } : {
          width: 0,
          minWidth: 0
        }
      })
      setAboutStyles(() => {
        return state.infoShown ? {
          maxWidth: "0",
          padding: "0"
        } : {
          maxWidth: "300px",
          padding: "10px 20px"
        }
      })
      return;
    }


    setState((prevState) => ({
      ...prevState,
      name: prevState.infoShown ? props.firstName : props.firstName + " " + props.lastName,
      infoShown: !prevState.infoShown,
      style: {
        ...prevState.style,
        width: prevState.infoShown ? "220px" : "650px", filter: prevState.infoShown ? "brightness(1)" : "brightness(1.1)"
      }
    }))
    setAboutStyles(() => {
      return state.infoShown ? {
        maxWidth: "0",
        padding: "10px 0"
      } : {
        maxWidth: "400px",
        padding: "10px 20px"
      }
    })
    if (cardRef.current) {
      setTimeout(() => {
        cardRef.current.scrollIntoView({
          behavior: 'smooth', // Adds smooth scrolling
          block: 'center', // Ensures the component is centered in view
        });
      }, 400)
    }
  }
  return (
    <CardContainer ref={cardRef} onMouseEnter={cardHover} onMouseLeave={cardMouseLeave} onClick={cardClick} style={state.style}>
      <div className="card"  >
        <div className="card-overview" style={overviewStyles}>
          <img src={props.image} alt="" />

          <div className="card-title">
            <span className='name'>{state.name}</span>
            <span className='title'>{props.title}</span>
          </div>
        </div>
        <div className="card-body" style={aboutStyles}>
          <div>
            {props.mobileScreen && <h2 className="body-name">{props.firstName} {props.lastName}</h2>}
            <p className="big-text">About</p>
            <span className="small-text">{props.about}</span>
            <span className="quote" >"{props.quote}"</span></div>
          <div className="card-buttons">
            <a className='linkedin'><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
            <a className='github' href={props.github}><i className="fa-brands fa-github"></i> GitHub</a>
          </div>
        </div>
      </div>
      <GlowingBorder />
    </CardContainer>

  )
})

export default Card
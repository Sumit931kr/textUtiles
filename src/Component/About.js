import React from 'react'

export default function About(props) {

 

    return (
        <>
        <div className="container" style={{backgroundColor: props.mode === 'dark'?'rgb(71 45 223)':'white',color: props.mode === 'dark'?'white':'black', borderRadius : '10px', border : '2px solid white'}}  >
            <h3 className="my-3">About Us</h3>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header " id="headingOne">
                        <button className="container accordion-button collapsed" style={{backgroundColor: props.mode === 'dark'?'rgb(37 21 131)':'white',color: props.mode === 'dark'?'white':'black',borderRadius : '10px'}}   type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show "  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'rgb(71 45 223)':'white',color: props.mode === 'dark'?'white':'black',borderRadius : '10px'}}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="container accordion-button collapsed" style={{backgroundColor: props.mode === 'dark'?'rgb(37 21 131)':'white',color: props.mode === 'dark'?'white':'black',borderRadius : '10px'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body"style={{backgroundColor: props.mode === 'dark'?'rgb(71 45 223)':'white',color: props.mode === 'dark'?'white':'black',borderRadius : '10px'}} >
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="container accordion-button collapsed" style={{backgroundColor: props.mode === 'dark'?'rgb(37 21 131)':'white',color: props.mode === 'dark'?'white':'black',borderRadius : '10px'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'rgb(71 45 223)':'white',color: props.mode === 'dark'?'white':'black',borderRadius : '10px'}}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
            </>
    )
}

import Container from "react-bootstrap/Container";
 

import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

const Test = () => {
  return (
    <>
      <ContentWrapper>
        <Container fluid>
          <div>
            <div className='row'>
              <div md={8} style={{position:'fixed', }} className='col-md-8'>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/oEcRj5F8MbM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div md={4}>
                <h1>hello world</h1>
                <h1>hello world</h1> <h1>hello world</h1>
                <h1>hello world</h1> <h1>hello world</h1>
                <h1>hello world</h1>
              </div>
            </div>

            <div>
              <div md={8} className='card shadow'>
               <strong>
               Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading. Because the image has a z-index of -1, it will be placed behind the heading.
 
               </strong>
               <br/>
               <strong>
               Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.

Because the image has a z-index of -1, it will be placed behind the heading. Because the image has a z-index of -1, it will be placed behind the heading.
 
               </strong>
              </div>
              <div md={4} className='card shadow'>
              Because the image has a z-index of -1, it will be placed behind the heading.Because the image has a z-index of -1, it will be placed behind the heading.
              </div>
            </div>
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
};

export default Test;

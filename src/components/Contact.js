import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Contact() {
  return (
    <div >
      <h1 className='mt-5' style={{ textAlign: 'center' }}>CATERING ORDER</h1>
      <div className="container py-5">

        <div className="border rounded  p-4">
          <form>
            <div className='row' >
              <div className="col form_margin my-3 form-group" >
                <label className='mb-1' htmlFor="name">Name *</label>
                <input type="text" className="py-2  form-control" id="name" placeholder="Name*" required />
              </div>
              <div className="col my-3 form-group">
                <label className='mb-1' htmlFor="email">Email *</label>
                <input type="email" className="py-2 form-control" id="email" placeholder="Email*" required />
              </div>
            </div>

            <div className='row'>
              <div className="col form_margin form-group">
                <label className='mb-1' htmlFor="phone">Phone Number *</label>
                <input type="tel" className="py-2 form-control" id="phone" placeholder="Phone Number*" required />
              </div>
              <div className="col  form-group">
                <label className='mb-1' htmlFor="people">Number of People *</label>
                <input type="number" className="py-2 form-control" id="people" placeholder="Number of People*" required />
              </div>
            </div>

            <div className='row'>
              <div className="col my-3 form_margin form-group">
                <label className='mb-1' htmlFor="event-date">Event Date *</label>
                <input type="date" className="py-2 form-control" id="event-date" placeholder="dd-mm-yyyy" required />
              </div>
              <div className="col my-3 form-group">
                <label className='mb-1' htmlFor="event-time">Event Time *</label>
                <input type="time" className="py-2 form-control" id="event-time" placeholder="--:-- --" required />
              </div>
            </div>

            <div className="my-3 form-group">
              <label className='mb-1' htmlFor="event-description">Describe the Event *</label>
              <textarea className="py-4 form-control" id="event-description" rows="3" placeholder="Describe the event" required></textarea>
            </div>

            <div className='container' >
              <h4 className='mt-4'>Will Your Event Require:</h4>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="warming-dishes" />
                <label className="mb-1 form-check-label" htmlFor="warming-dishes">Warming Dishes</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="serving-utensils" />
                <label className="mb-1 form-check-label" htmlFor="serving-utensils">Serving Utensils</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="lines" />
                <label className="mb-1 form-check-label" htmlFor="lines">Lines</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wait-staff" />
                <label className="mb-1 form-check-label" htmlFor="wait-staff">Wait Staff</label>
              </div>
              <p className="text-danger">** MAY INCLUDE ADDITIONAL CHARGES **</p>
            </div>

            <p className='pt-2 border-top' style={{ textAlign: 'end' }}>You will be contacted within 24 hours.</p>

            <button type="submit" className="btn submit-btn">Submit</button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;






























            // <div className='row' style={{justifyContent:'center'}}>
            //   <div className='col-5'>
            //     <button type="submit" className="btn btn-primary mt-3">Submit</button>
            //   </div>
            // </div>














  // <Card className="text-center mt-100  ">
  //   <Card.Header><h3>Contact Us</h3></Card.Header>
  //   <Card.Body>
  //     <Card.Title>Special title treatment</Card.Title>
  //     <Card.Text>
  //       With supporting text below as a natural lead-in to additional content.
  //     </Card.Text>
  //     <Button variant="dark">Meet us</Button>
  //   </Card.Body>
  // </Card>
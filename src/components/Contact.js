import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [people, setPeople] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventDescription, setEventDescription] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Perform form validation
    if (name.trim() === "") {
     alert("Name is required");
      return;
    }
    if (email.trim() === "") {
      alert("Email is required");
      return;
    }
    if (phone.trim() === "") {
      alert("Phone number is required");
      return;
    }
    if (people.trim() === "") {
      alert("Number of people is required");
      return;
    }
    if (eventDate.trim() === "") {
      alert("Event date is required");
      return;
    }
    if (eventTime.trim() === "") {
      alert("Event time is required");
      return;
    }
    if (eventDescription.trim() === "") {
      alert("Event description is required");
      return;
    }
 
    // Perform form submission logic
    console.log({
      name,
      email,
      phone,
      people,
      eventDate,
      eventTime,
      eventDescription,
    });
 
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setPeople('');
    setEventDate('');
    setEventTime('');
    setEventDescription('');
    
  };


  return (
    <div >
      <h1 className='mt-5' style={{ textAlign: 'center' }}>CATERING ORDER</h1>
      <div className="container py-5">

        <div className="border rounded  p-4">
          <form onSubmit={handleSubmit}>
            <div className='row' >
              <div className="col form_margin my-3 form-group" >
                <label className='mb-1' htmlFor="name">Name *</label>
                <input type="text" className="py-2  form-control" id="name" placeholder="Name*" 
                value={name}
                onChange={(e) => setName(e.target.value)}  />
                  
                
              </div>
              <div className="col my-3 form-group">
                <label className='mb-1' htmlFor="email">Email *</label>
                <input type="email" className="py-2 form-control" id="email" placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}  />
              </div>
            </div>

            <div className='row'>
              <div className="col form_margin form-group">
                <label className='mb-1' htmlFor="phone">Phone Number *</label>
                <input type="tel" className="py-2 form-control" id="phone" placeholder="Phone Number*"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}  />
              </div>
              <div className="col  form-group">
                <label className='mb-1' htmlFor="people">Number of People *</label>
                <input type="number" className="py-2 form-control" id="people" placeholder="Number of People*"
                value={people}
                onChange={(e) => setPeople(e.target.value)}/>
              </div>
            </div>

            <div className='row'>
              <div className="col my-3 form_margin form-group">
                <label className='mb-1' htmlFor="event-date">Event Date *</label>
                <input type="date" className="py-2 form-control" id="event-date" placeholder="dd-mm-yyyy" 
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}/>
              </div>
              <div className="col my-3 form-group">
                <label className='mb-1' htmlFor="event-time">Event Time *</label>
                <input type="time" className="py-2 form-control" id="event-time" placeholder="--:-- --" 
                 value={eventTime}
                 onChange={(e) => setEventTime(e.target.value)}/>
              </div>
            </div>

            <div className="my-3 form-group">
              <label className='mb-1' htmlFor="event-description">Describe the Event *</label>
              <textarea className="py-4 form-control" id="event-description" rows="3" placeholder="Describe the event"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
               ></textarea>
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
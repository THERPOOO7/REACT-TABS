import { useState, useEffect } from 'react';

function Contact() {


//   useEffect(() => {
//     // Retrieve the stored form data from local storage
//     const storedFormData = sessionStorage.getItem('formData');

//     // Check if form data exists in local storage
//     if (storedFormData) {
//       // Parse the form data JSON string into an object
//       const parsedFormData = JSON.parse(storedFormData);

//       // Set the form fields with the stored values
//       setName(parsedFormData.name);
//       setEmail(parsedFormData.email);
//       setPhone(parsedFormData.phone);
//       setPeople(parsedFormData.people);
//       setEventDate(parsedFormData.eventDate);
//       setEventTime(parsedFormData.eventTime);
//       setEventDescription(parsedFormData.eventDescription);
//     }
//   }, []);

  
// }
//------------------------------------------------------------------------------------------

  const [formField, setFormField] = useState({name : '', email : '', phone : '', people : '', eventDate : '', eventTime : '', eventDescription :'' })
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [people, setPeople] = useState('');
  // const [eventDate, setEventDate] = useState('');
  // const [eventTime, setEventTime] = useState('');
  // const [eventDescription, setEventDescription] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Perform form validation
    if (formField.name.trim() === "") {
     alert("Name is required");
      return;
    }
    if (formField.email.trim() === "") {
      alert("Email is required");
      return;
    }
    if (formField.phone.trim() === "") {
      alert("Phone number is required");
      return;
    }
    if (formField.people.trim() === "") {
      alert("Number of people is required");
      return;
    }
    if (formField.eventDate.trim() === "") {
      alert("Event date is required");
      return;
    }
    if (formField.eventTime.trim() === "") {
      alert("Event time is required");
      return;
    }
    if (formField.eventDescription.trim() === "") {
      alert("Event description is required");
      return;
    }
 
    // Perform form submission  
    const formData = {
      formField
      // name,
      // email,
      // phone,
      // people,
      // eventDate,
      // eventTime,
      // eventDescription,
    };


    //------------------------------------------------------------------------------------

  
  //     // Retrieve any existing stored form data from local storage
  // const storedFormData = sessionStorage.getItem('formData');

  // if (storedFormData) {
  //   // Parse the stored form data JSON string into an object
  //   const parsedStoredFormData = JSON.parse(storedFormData);

  //   // Update the existing form data with the new values
  //   const updatedFormData = {
  //     ...parsedStoredFormData,
  //     ...formData,
  //   };

  //   // Convert the updated form data to a JSON string
  //   const updatedFormDataJson = JSON.stringify(updatedFormData);

  //   // Store the updated form data in local storage
  //   sessionStorage.setItem('formData', updatedFormDataJson);


//----------------------------------------------------------------------------------------


    console.log(formData)
    // Convert the form data to a JSON string
    const formDataJson = JSON.stringify(formData);

    // Store the form data in local storage
    sessionStorage.setItem('formData', formDataJson);

    // Reset form fields
    // setName('');
    // setEmail('');
    // setPhone('');
    // setPeople('');
    // setEventDate('');
    // setEventTime('');
    // setEventDescription('');
    
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
                  value={formField.name}
                  onChange={(e) => setFormField(e.target.value)} />
              </div>
              <div className="col my-3 form-group">
                <label className='mb-1' htmlFor="email">Email *</label>
                <input type="email" className="py-2 form-control" id="email" placeholder="Email*"
                  value={formField.email}
                  onChange={(e) => handle(e.target.value)} />
              </div>
            </div>

            <div className='row'>
              <div className="col form_margin form-group">
                <label className='mb-1' htmlFor="phone">Phone Number *</label>
                <input type="tel" className="py-2 form-control" id="phone" placeholder="Phone Number*"
                  value={formField.phone}
                  onChange={(e) => setFormField(e.target.value)} />
              </div>
              <div className="col  form-group">
                <label className='mb-1' htmlFor="people">Number of People *</label>
                <input type="number" className="py-2 form-control" id="people" placeholder="Number of People*"
                  value={formField.people}
                  onChange={(e) => setFormField(e.target.value)} />
              </div>
            </div>

            <div className='row'>
              <div className="col my-3 form_margin form-group">
                <label className='mb-1' htmlFor="event-date">Event Date *</label>
                <input type="date" className="py-2 form-control" id="event-date" placeholder="dd-mm-yyyy"
                  value={formField.eventDate}
                  onChange={(e) => setFormField(e.target.value)} />
              </div>
              <div className="col my-3 form-group">
                <label className='mb-1' htmlFor="event-time">Event Time *</label>
                <input type="time" className="py-2 form-control" id="event-time" placeholder="--:-- --"
                  value={formField.eventTime}
                  onChange={(e) => setFormField(e.target.value)} />
              </div>
            </div>

            <div className="my-3 form-group">
              <label className='mb-1' htmlFor="event-description">Describe the Event *</label>
              <textarea className="py-4 form-control" id="event-description" rows="3" placeholder="Describe the event"
                value={formField.eventDescription}
                onChange={(e) => setFormField(e.target.value)}
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
            <div>
            <button type="submit" className="btn submit-btn">Submit</button>
            </div>
            <div className='col-3'>
                 <button type="submit" className="btn btn-primary mt-3" style={{borderRadius:'50px'}}>Edit</button>
               </div>

            {/* <button type="submit" className="btn submit-btn">Submit</button>
            {sessionStorage.getItem('formData') && (
              <button type="button" className="btn edit-btn" >
                Edit
              </button>
              )} */}
          </form>
           <div>
  
           </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;


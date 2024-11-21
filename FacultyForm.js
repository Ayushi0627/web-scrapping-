
import React, { useState } from 'react';
import './FacultyForm.css'; // Import CSS for styling

const App = () => {
  const [facultyName, setFacultyName] = useState('');
  const [department, setDepartment] = useState('');
  const [uniqueLink, setUniqueLink] = useState('');

  const facultyLinks = {
  
    'Dr Nagendra Pratap Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447338bff038a7808e10',
    'Dr Ajay Kr Sharma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447338bff038a7808e10',
    'Dr A L Sangal': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a78055b4',
    'Dr Harsh K Verma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a7805712',
    'Dr Renu Dhir': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a78057a2',
    'Mr D K Gupta': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447538bff038a780903f',
    'Dr Geeta Sikka': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a7805647',
    'Dr Rajneesh Rani': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445538bff038a78057f8',
    'Dr Amritpal Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446d38bff038a78088fb',
    'Dr Aruna Malik': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446c38bff038a780874c',
    'Dr K P Sharma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446838bff038a7807d43',
    'Dr Samayveer Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446b38bff038a78085b7',
    'Dr Urvashi': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446c38bff038a780870c',
    'Dr Avtar Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446338bff038a7807694',
    'Dr Prashant Kumar': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446d38bff038a78088bb',
    'Dr Banalaxmi Brahma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447438bff038a7808f65',
    'Mr Rahul Aggarwal': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a78057f4',
    'Dr Jagdeep Kaur': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446d38bff038a78088a2',
    'Dr Kunwar Pal': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446e38bff038a7808a14',
    'Dr Lalatendu Behera': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446e38bff038a7808a31',
    'Dr Madhurima Buragohian': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed50e15beeaa89d07faca8',
    'Dr Naina Yadav': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed51145beeaa89d07fbcb0',
    'Dr Shefali Arora': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447138bff038a7808ce8',
    'Dr Shweta Mahajan': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447038bff038a7808ccb',
    'Dr Somesula Manoj Kumar': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447538bff038a7808fad',
    'Dr Sumit Kumar': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed514d5beeaa89d07fd562',
    'Dr Swarnima Singh Gautam': 'https://departments.nitj.ac.in/dept/cse/Faculty/652795ccb8c492ab73d26ad2',
    'Dr Tanmay Kumar Behera': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed51815beeaa89d07fdf96',
    // Add all other faculty members here
  };

  const departments = ['Computer Science', 'Information Technology', 'Chemical Engg.', 'Instrumental and Control Engg.'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (facultyLinks[facultyName] && department) {
      const generatedLink = `${facultyLinks[facultyName]}/${department.replace(/\s+/g, '-').toLowerCase()}`;
      setUniqueLink(generatedLink);
    } else {
      alert('Please select both faculty name and department.');
    }
  };

  return (
    <div className="App">
      {/* Logo at the top */}
      <div className="logo-container">
        <img src="\logo.png" alt="Logo" className="logo" />
      </div>

      <div className="faculty-form">
        <h2>Faculty Form</h2>
        <h3>Where Knowledge Meets Collaboration</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            {/* Faculty Name Input */}
            <div>
              <label>Faculty Name:</label>
              <input
                type="text"
                value={facultyName}
                onChange={(e) => setFacultyName(e.target.value)}
                placeholder="Enter faculty name"
                list="faculty-names"
                required
              />
              <datalist id="faculty-names">
                {Object.keys(facultyLinks).map((faculty, index) => (
                  <option key={index} value={faculty} />
                ))}
              </datalist>
            </div>

            {/* Department Dropdown */}
            <div>
              <label>Department:</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              >
                <option value="">Select a department</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit">Generate Link</button>
        </form>

        {/* Display the generated link */}
        {uniqueLink && (
          <div className="generated-link">
            <p>Unique Link: <a href={uniqueLink} target="_blank" rel="noopener noreferrer">{uniqueLink}</a></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

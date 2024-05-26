import React from 'react';
import ChangeIndicator from './ChangeIndicator';
import MedalIcon from './MedalIcon';

// Employee data with photos
const employees = [
  { rank: 1, name: 'Rakesh Sharma', designation: 'UI/UX Designer', hours: '7(42)', change: '+1.5 hrs', photo: 'https://via.placeholder.com/150' },
  { rank: 2, name: 'Ankita Thakur', designation: 'HR Recruiter', hours: '7(41)', change: '+1.5 hrs', photo: 'https://via.placeholder.com/150' },
  { rank: 3, name: 'Sarah Yadav', designation: 'Product Manager', hours: '7(40)', change: '+1.5 hrs', photo: 'https://via.placeholder.com/150' },
  { rank: 4, name: 'Harsha Shivhare', designation: 'Designer', hours: '7(37)', change: '+1.5 hrs', photo: 'https://via.placeholder.com/150' },
  { rank: 5, name: 'Vanhi Rai', designation: 'Video Editor', hours: '7(37)', change: '-1.5 hrs', photo: 'https://via.placeholder.com/150' },
  { rank: 6, name: 'Bhanu Sharma', designation: 'Business Analyst', hours: '7(32)', change: '-1.5 hrs', photo: 'https://via.placeholder.com/150' },
  { rank: 7, name: 'Sunil Yadav', designation: 'Developer', hours: '7(24)', change: '+1.5 hrs', photo: 'https://via.placeholder.com/150' },
  { rank: 8, name: 'Akash Roy', designation: 'Business Analyst', hours: '7(21)', change: '-1.5 hrs', photo: 'https://via.placeholder.com/150' },
  { rank: 9, name: 'Rohit Soni', designation: 'Developer', hours: '7(20)', change: '-1.5 hrs', photo: 'https://via.placeholder.com/150' },
  { rank: 10, name: 'Suraj Chauhan', designation: 'Developer', hours: '7(18)', change: '-1.5 hrs', photo: 'https://via.placeholder.com/150' },
];

const App = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-between px-6 py-4 md:flex-row">
          <div className="flex items-center mb-2 md:mb-0">
            <img src="https://via.placeholder.com/50" alt="Logo" className="w-12 h-12 mr-4" />
            <div className="text-xl font-bold">Employees Activity Dashboard</div>
          </div>
          <div className="text-base text-gray-600">March 30, 2024 - 09:36 AM</div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:flex-1">
            <table className="min-w-full table-auto">
              <thead className="text-white bg-blue-600">
                <tr>
                  <th className="px-4 py-2 text-right">Rank</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Designation</th>
                  <th className="px-4 py-2 text-left">No. of hours worked</th>
                  <th className="px-4 py-2 text-left">Changes</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                    <td className="px-4 py-2 text-right border">
                      <div className="flex items-center justify-end">
                        {employee.rank <= 3 && <MedalIcon rank={employee.rank} />}
                        <span className="ml-2">{employee.rank}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-left border">
                      <div className="flex items-center">
                        <img className="w-8 h-8 mr-2 rounded-full" src={employee.photo} alt={employee.name} />
                        {employee.name}
                      </div>
                    </td>
                    <td className="px-4 py-2 text-left border">{employee.designation}</td>
                    <td className="px-4 py-2 text-left border">{employee.hours}</td>
                    <td className="px-4 py-2 text-left border">
                      <ChangeIndicator change={employee.change} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full p-4 mt-4 md:mt-0 md:w-1/4">
            <div className="flex flex-col items-center p-4 bg-white border rounded-lg shadow-md">
              <img className="w-16 h-16 mb-4 rounded-full" src="https://via.placeholder.com/150" alt="Employee of the Month" />
              <p className="font-bold text-center">Employee of the Month</p>
              <p className="text-lg text-center">Rakesh Sharma</p>
              <p className="mb-4 text-center text-gray-600">UI/UX Designer</p>
              <img className="w-40 h-40 rounded-lg" src="https://via.placeholder.com/150" alt="Employee of the Month Full Size" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

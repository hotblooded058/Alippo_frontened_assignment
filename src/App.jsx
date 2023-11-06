import { useState } from 'react';
// import { useEffect } from 'react';
import './App.css';

function App() {
  const initialData = [
    {
      "name": "John Doe",
      "age": 28,
      "city": "New York",
      "pinCode": "10001"
    },
    {
      "name": "Alice Smith",
      "age": 32,
      "city": "Los Angeles",
      "pinCode": null
    },
    {
      "name": "Bob Johnson",
      "age": 24,
      "city": "Chicago",
      "pinCode": "60601"
    },
    {
      "name": null,
      "age": 30,
      "city": "San Francisco",
      "pinCode": "94101"
    },
    {
      "name": "Sarah Brown",
      "age": 22,
      "city": "Miami",
      "pinCode": "33101"
    },
    {
      "name": "David Wilson",
      "age": 35,
      "city": "Houston",
      "pinCode": "77001"
    },
    {
      "name": "Emily Davis",
      "age": 29,
      "city": "Boston",
      "pinCode": "02201"
    },
    {
      "name": "Michael Lee",
      "age": 27,
      "city": "Seattle",
      "pinCode": "98101"
    },
    {
      "name": "Linda Martinez",
      "age": 31,
      "city": "Dallas",
      "pinCode": "75201"
    },
    {
      "name": "William Johnson",
      "age": 26,
      "city": "Phoenix",
      "pinCode": "85001"
    },
    {
      "name": null,
      "age": 33,
      "city": "Philadelphia",
      "pinCode": "19101"
    },
    {
      "name": "Megan Harris",
      "age": 25,
      "city": "San Diego",
      "pinCode": "92101"
    },
    {
      "name": "Richard Taylor",
      "age": 28,
      "city": "Denver",
      "pinCode": "80201"
    },
    {
      "name": "Sophia Clark",
      "age": 29,
      "city": "Atlanta",
      "pinCode": "30301"
    },
    {
      "name": "Kevin White",
      "age": 27,
      "city": "Las Vegas",
      "pinCode": "89101"
    },
    {
      "name": "Ava Turner",
      "age": 30,
      "city": "Detroit",
      "pinCode": "48201"
    },
    {
      "name": "Thomas Hall",
      "age": 32,
      "city": "Minneapolis",
      "pinCode": "55401"
    },
    {
      "name": "Olivia Allen",
      "age": 23,
      "city": "San Antonio",
      "pinCode": "78201"
    },
    {
      "name": "Daniel Martin",
      "age": 26,
      "city": "Portland",
      "pinCode": "97201"
    },
    {
      "name": "Ella Walker",
      "age": 34,
      "city": "Orlando",
      "pinCode": "32801"
    },
    {
      "name": "James Turner",
      "age": 27,
      "city": "Raleigh",
      "pinCode": "27601"
    },
    {
      "name": "Grace Scott",
      "age": 28,
      "city": "Nashville",
      "pinCode": "37201"
    },
    {
      "name": "Joseph Harris",
      "age": 31,
      "city": "Kansas City",
      "pinCode": "64101"
    },
    {
      "name": "Emma Nelson",
      "age": 25,
      "city": "St. Louis",
      "pinCode": "63101"
    },
    {
      "name": "Christopher Garcia",
      "age": 30,
      "city": "Tampa",
      "pinCode": "33601"
    },
    {
      "name": "Avery King",
      "age": 29,
      "city": "Cleveland",
      "pinCode": "44101"
    },
    {
      "name": "Sophia Turner",
      "age": 28,
      "city": "Austin",
      "pinCode": "78701"
    },
    {
      "name": "Ethan Wright",
      "age": 24,
      "city": "San Jose",
      "pinCode": "95101"
    },
    {
      "name": "Olivia Miller",
      "age": 33,
      "city": "Salt Lake City",
      "pinCode": "84101"
    }
  ];

  const [data, setData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [deleteIndex, setDeleteIndex] = useState(null);

  // useEffect(() => {
  //   fetch('https://assets.alippo.com/catalog/static/data.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  const openEditDialog = (index) => {
    setEditIndex(index);
    setEditedData(data[index]);
  };

  const closeDialogs = () => {
    setEditIndex(null);
    setDeleteIndex(null);
  };
  const openDeleteDialog = (index) => {
    setDeleteIndex(index);
  };

  const closeEditDialog = () => {
    setEditIndex(null);
    setEditedData({});
  };

  const handleEditSave = () => {
    const newData = [...data];
    newData[editIndex] = editedData;
    setData(newData);
    closeEditDialog();
  };

  const handleDeleteClick = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    closeDialogs();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw' }}>
      <div>
        <h1 className="heading">Table of Data</h1>
      </div>
      <div>
        <table className="data-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Pin Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1 || 'N/A'}</td>
                <td>{item.name || 'N/A'}</td>
                <td>{item.age || 'N/A'}</td>
                <td>{item.city || 'N/A'}</td>
                <td>{item.pinCode || 'N/A'}</td>
                <td>
                  <button onClick={() => openEditDialog(index)} className="edit-btn">Edit</button>
                  <span className="button-space"></span>
                  <button onClick={() => openDeleteDialog(index)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editIndex !== null && (
        <div className="edit-dialog">
          <div className="edit-card">
            <h1 className="edit-title">Edit Name</h1>
            <input
              type="text"
              className="edit-input"
              value={editedData.name || ''}
              onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
            />
            <div className="edit-card-buttons">
              <button className="edit-save" onClick={handleEditSave}>Save</button>
              <button className="edit-cancel" onClick={closeDialogs}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {deleteIndex !== null && (
        <div className="delete-dialog">
          <div className="delete-card">
            <h1 className="delete-title">Delete {deleteIndex + 1}</h1>
            <div className="delete-card-buttons">
              <button className="delete-confirm" onClick={() => handleDeleteClick(deleteIndex)}>Delete</button>
              <button className="delete-cancel" onClick={closeDialogs}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

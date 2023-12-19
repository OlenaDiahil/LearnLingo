import React, { useState, useEffect } from 'react';
import  database  from '../../firebase';
import { ref, get } from 'firebase/database';

const TeachersList = () => {
  const [teachersData, setTeachersData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teachersRef = ref(database, 'teachers');
        const snapshot = await get(teachersRef);
        const data = snapshot.val();
        setTeachersData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    
    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  if (!teachersData) {
    return <div>Loading...</div>;
  }
  console.log(teachersData)

  return (
    <div>
      <ul>
        {teachersData.map((teacher, index) => {
            return <li key={index}>
                <div>
                    <img src="#" alt={`avatar ${teacher.name} ${teacher.surname}`} />
                    <div>
                        <div>
                            <p>Languages</p>
                            <ul>
                                <li>Lessons online</li>
                                <li>Lessons done: {teacher.lessons_done}</li>
                                <li>Rating: {teacher.rating}</li>
                                <li>Price / 1 hour: {teacher.price_per_hour}$</li>
                            </ul>
                        </div>
                    </div>
                </div>
          </li>
        })}
      </ul>
    </div>
  );
};

export default TeachersList;

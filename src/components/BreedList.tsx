// File: BreedList.tsx
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const BreedList: React.FC = () => {
  const breeds = useSelector((state:any) => state.breeds.breeds);
  console.log(breeds);
  

  return (
    <div>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th>Name</th>
            <th>Life Expectancy</th>
            <th>Male Weight</th>
            <th>Female Weight</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {breeds.map((breed: any) => (
            <tr key={breed.id}>
              <td>{breed.name}</td>
              <td>{breed.life_min} - {breed.life_max} years</td>
              <td>{breed.male_weight_min} - {breed.male_weight_max} kg</td>
              <td>{breed.female_weight_min} - {breed.female_weight_max} kg</td>
              <td>{breed.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BreedList;

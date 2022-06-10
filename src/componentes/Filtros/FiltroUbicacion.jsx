import * as React from 'react';
import useState from 'react';
import Catalogo from '../Catalogo/Catalogo';
import DropdownUbicacion from './DropdownUbicacion';

    
function FiltroUbicacion() {

    const [filteredList, setFilteredList] = useState(Catalogo);

    const [selectedExp, setSelectedExp] = useState("");

    const filterByExp = (filteredData) => {
        // Avoid filter for empty string
        if (!SelectedExp) {
          return filteredData;
        }
      
        const filteredExp = filteredData.filter(
          (exp) => exp.etiquetas[0].ubicacion.split(" ").indexOf(selectedExp) !== -1
        );

      return filteredExp;
  };

  const handleExpChange = (event) => {
    setSelectedExp(event.target.value);
  };

  useEffect(() => {
    var filteredData = filterByExp(Catalogo);
    filteredData = filterByExp(filteredData);
    setFilteredList(filteredData);
  }, [selectedExp]);

  return(
    <DropdownUbicacion/>
  )
}
export default FiltroUbicacion
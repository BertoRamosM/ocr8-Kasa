/* eslint-disable react/prop-types */
import { DropsItem } from "../../hooks/useDropsItems";

const DropsItems = ({ selectedLogement }) => {
  return (
    <>
      <DropsItem title="Description" text={selectedLogement.description} />

      <DropsItem
        title="Équipements"
        text={
          <ul>
            {selectedLogement.equipments.map((equipment, index) => (
              <li key={index} style={{ listStyleType: "none" }}>
                {equipment}
              </li>
            ))}
          </ul>
        }
      ></DropsItem>
    </>
  );
};

export default DropsItems;

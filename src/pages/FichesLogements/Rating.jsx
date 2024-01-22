/* eslint-disable react/prop-types */
//function for the rating system
import { Rating, Star } from "./FichesStyles";
import StarYes from "../../assets/STAR_YES.png";
import StarNo from "../../assets/STAR_NO.png";

//array.from allow us to create an array based on the values numbers of rating
//the first element determines the lenght of the array : { length: maxRating }
//the second parameter will determine the value : (noparam, index)
export const Rate = ({ rating }) => {
  //max rating is 5
  const maxRating = 5;
  //we pass the rating value to a int number with floor and stored in  new variable
  const filledStars = Math.floor(rating);

  //we create a new array based on the filled stars
  const stars = Array.from({ length: maxRating }, (noparam, index) => (
    //here we add the conditional. if filledStars[index] = true => StarYes icon/ if filledStars[index] => false = StarNo icon
    <Star
      key={index}
      src={index < filledStars ? StarYes : StarNo}
      alt={index < filledStars ? "Filled Star" : "Empty Star"}
    />
  ));

  return <Rating>{stars}</Rating>;
};

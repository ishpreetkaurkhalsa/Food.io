// import styled from "styled-components";
// import { BASE_URL, Button, Container } from "../../App";
// const SearchResult = ({ data }) => {
//   return (
//     <FoodCardContainer>
//       <Container>
//         <FoodCards>
//           {data?.map(({ name, image, text, price }) => (
//             <FoodCard key={name}>
//               <div className="food_image">
//                 <img src={BASE_URL + image} />
//               </div>
//               <div className="food_info">
//                 <div className="info">
//                   <h3>{name}</h3>
//                   <p>{text}</p>
//                 </div>
//                 <Button>${price.toFixed(2)}</Button>
//               </div>
//             </FoodCard>
//           ))}
//         </FoodCards>
//       </Container>
//     </FoodCardContainer>
//   );
// };

// export default SearchResult;
// const FoodCardContainer = styled.section`
//   min-height: calc(100vh - 210px);
//   background-image: url("/bg.png");
//   background-size: cover;
// `;
// const FoodCards = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   row-gap: 32px;
//   column-gap: 20px;
//   justify-content: center;
//   align-items: center;
//   padding-top: 80px;
// `;
// const FoodCard = styled.div`
//   width: 340px;
//   height: 167px;
//   border: 0.66px solid;

//   border-image-source: radial-gradient(
//       80.69% 208.78% at 108.28% 112.58%,
//       #eabfff 0%,
//       rgba(135, 38, 183, 0) 100%
//     ),
//     radial-gradient(
//       80.38% 222.5% at -13.75% -12.36%,
//       #98f9ff 0%,
//       rgba(255, 255, 255, 0) 100%
//     );

//   background: url(.png),
//     radial-gradient(
//       90.16% 143.01% at 15.32% 21.04%,
//       rgba(165, 239, 255, 0.2) 0%,
//       rgba(110, 191, 244, 0.0447917) 77.08%,
//       rgba(70, 144, 213, 0) 100%
//     );
//   background-blend-mode: overlay, normal;
//   backdrop-filter: blur(13.1842px);

//   border-radius: 20px;

//   display: flex;
//   padding: 8px;

//   .food_info {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: end;
//     h3 {
//       margin-top: 8px;
//       font-size: 16px;
//       font-weight: 500;
//     }
//     p {
//       margin-top: 4px;
//       font-size: 12px;
//     }
//     button {
//       font-size: 12px;
//       }
//     }
// `;


// // components/SearchResult.js
// import React, { useState } from 'react';
// import styled from 'styled-components';

// const FoodCardContainer = styled.section`
//   ${'' /* min-height: calc(100vh - 100px);
//   background-image: url("/bg.png");
//   background-size: cover; */}
// `;

// const FoodCards = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   row-gap: 32px;
//   column-gap: 20px;
//   justify-content: center;
//   align-items: center;
//   padding-top: 80px;
//   img{
//     border-radius:20px;
//     height:140px;
//     width:auto;
//     margin:auto;
//   }
// `;

// const FoodCard = styled.div`
//   width: 340px;
//   height: 167px;
//   border: 0.66px solid;
//   border-image-source: radial-gradient(
//     80.69% 208.78% at 108.28% 112.58%,
//     #eabfff 0%,
//     rgba(135, 38, 183, 0) 100%
//   ),
//   radial-gradient(
//     80.38% 222.5% at -13.75% -12.36%,
//     #98f9ff 0%,
//     rgba(255, 255, 255, 0) 100%
//   );
//   background: url(.png),
//   radial-gradient(
//     90.16% 143.01% at 15.32% 21.04%,
//     rgba(165, 239, 255, 0.2) 0%,
//     rgba(110, 191, 244, 0.0447917) 77.08%,
//     rgba(70, 144, 213, 0) 100%
//   );
//   background-blend-mode: overlay, normal;
//   backdrop-filter: blur(13.1842px);
//   border-radius: 20px;
//   display: flex;
//   padding: 8px;

//   .food_info {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin:auto;
//     h3 {
//       margin-top: 8px;
//       font-size: 16px;
//       font-weight: 500;
//       margin-left:5px;
//     }
//     p {
//       margin-top: 4px;
//       font-size: 12px;
//     }
//     button {
//       font-size: 12px;
//       width: 80px;
//       height: 35px;
//       margin:10px;
//       border-radius: 10px;
//       border: none;
//       background-color: red;
//       color: white;
//       cursor: pointer;
//     }
//   }
// `;

// const SearchBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 20px;
//   margin-top:-100px;
//   margin-left:700px;
//   input[type='search'] {
//     ${'' /* width: 200px;
//     height: 30px;
//     padding: 8px;
//     border-radius: 20px;
//     border: none;
//     margin-right: 10px; */}
//     background-color: transparent;
//     border: 1px solid red;
//     color: white;
//     border-radius: 5px;
//     height: 40px;
//     font-size: 16px;
//     padding: 0 10px;
//   }

//   button {
//     width:60px;
//     height: 40px;
//     margin:3px;
//     border-radius: 10px;
//     border: none;
//     background-color: red;
//     color: white;
//     cursor: pointer;
//   }
// `;

// const SearchResult = () => {
//   const [meals, setMeals] = useState([]);
//   const [searchInput, setSearchInput] = useState('');

//   const handleInputChange = (e) => {
//     setSearchInput(e.target.value);
//   };

//   const handleSearch = () => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
//       .then(response => response.json())
//       .then(data => {
//         setMeals(data.meals || []);
//       });
//   };

//   return (
//     <FoodCardContainer>
//       <SearchBox>
//         <input
//           type="search"
//           id="search-input"
//           placeholder="Enter an ingredient"
//           value={searchInput}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </SearchBox>
//       <FoodCards>
//         {meals.map(meal => (
//           <FoodCard key={meal.idMeal}>
//             <img src={meal.strMealThumb} alt="food" />
//             <div className="food_info">
//               <h3>{meal.strMeal}</h3>
//               <p>{meal.strCategory}</p>
//               <button>Get Recipe</button>
//             </div>
//           </FoodCard>
//         ))}
//       </FoodCards>
//     </FoodCardContainer>
//   );
// };

// export default SearchResult;

// components/SearchResult.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FoodCardContainer = styled.section`
  ${'' /* min-height: calc(100vh - 100px);
  background-image: url("/bg.png");
  background-size: cover; */}
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;
  border-image-source: radial-gradient(
    80.69% 208.78% at 108.28% 112.58%,
    #eabfff 0%,
    rgba(135, 38, 183, 0) 100%
  ),
  radial-gradient(
    80.38% 222.5% at -13.75% -12.36%,
    #98f9ff 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: url(.png),
  radial-gradient(
    90.16% 143.01% at 15.32% 21.04%,
    rgba(165, 239, 255, 0.2) 0%,
    rgba(110, 191, 244, 0.0447917) 77.08%,
    rgba(70, 144, 213, 0) 100%
  );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  border-radius: 20px;
  display: flex;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:auto;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
      margin-left:5px;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
      width: 80px;
      height: 35px;
      margin:10px;
      border-radius: 10px;
      border: none;
      background-color: red;
      color: white;
      cursor: pointer;
    }
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top:-100px;
  margin-left:700px;
  input[type='search'] {
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
  }

  button {
    width:60px;
    height: 40px;
    margin:3px;
    border-radius: 10px;
    border: none;
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;

const RecipeModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
  color: white;
  border-radius: 10px;
  padding: 20px;
  z-index: 999;
  font-size:15px;
  button{
    width:60px;
    height: 30px;
    margin-top:12px;
    border-radius: 10px;
    border: none;
    background-color: white;
    color: red;
    cursor: pointer; 
  }
`;

const SearchResult = () => {
  const [meals, setMeals] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    if (selectedMeal) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedMeal.idMeal}`)
        .then(response => response.json())
        .then(data => {
          setRecipeDetails(data.meals[0]);
        });
    }
  }, [selectedMeal]);
  //path parameter
  //http methods

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        setMeals(data.meals || []);
      });
  };

  const handleGetRecipe = (meal) => {
    setSelectedMeal(meal);
  };

  const handleCloseModal = () => {
    setSelectedMeal(null);
    setRecipeDetails(null);
  };

  return (
    <FoodCardContainer>
      <SearchBox>
        <input
          type="search"
          id="search-input"
          placeholder="Enter an ingredient"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </SearchBox>
      <FoodCards>
        {meals.map(meal => (
          <FoodCard key={meal.idMeal}>
            <img src={meal.strMealThumb} alt="food" />
            <div className="food_info">
              <h3>{meal.strMeal}</h3>
              <p>{meal.strCategory}</p>
              <button onClick={() => handleGetRecipe(meal)}>Get Recipe</button>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
      {recipeDetails && (
        <RecipeModal>
          <h2>{recipeDetails.strMeal}</h2>
          <p>{recipeDetails.strInstructions}</p>
          <button onClick={handleCloseModal}>Close</button>
        </RecipeModal>
      )}
    </FoodCardContainer>
  );
};

export default SearchResult;

import styled from "styled-components";
import {useContext} from "react";
import {DarkModeContext} from "../App";

const BorderCountry = styled('span')`
  padding: 0.5rem 1rem;
  text-align: center;
  width: max-content;
  border-radius: 0.3rem;
  margin: 0 10px 10px;
  height: max-content;
`;
const SmallLight = styled("span")`
  font-weight: 300;
  font-size: 0.8rem;
`;
const CountryFeature = styled('span')`
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  padding-top: 0.7rem;
  padding-bottom: 1rem;
`;
const FlexBox = styled("span")`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;
export function Borders({ borders }) {
  const { darkMode} = useContext(DarkModeContext);


  return <FlexBox>
    <CountryFeature >Border Countries:</CountryFeature>
    {
      borders.map((border) => (
        <BorderCountry className={darkMode?'dark':'light'} key={border[0].cca3}>
          <SmallLight>{border[0].name.common}</SmallLight></BorderCountry>


      ))
    }
  </FlexBox>;
}
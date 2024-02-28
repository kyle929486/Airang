import React, { useContext } from 'react';
import { styled } from 'styled-components';
import SearchContext from '../store/search-context';
import { useNavigate } from 'react-router-dom';

const MainDiv = styled.div`
  margin: 15px;
  text-align: center;

`;

const Main = () => {

  const ctx = useContext(SearchContext);
  const navigate = useNavigate();

  const chooseSigun = (e) => {
    ctx.sigun = e.target.title;
    navigate(`/search`);
  };



  return (
    <MainDiv>
      <h3>우리 동네에 어떤 보육 시설이 있는지</h3>
      <h3>찾아볼까요?</h3>

      <img src="resources/지도_서울.jpg" useMap="#image-map" />

      <map name="image-map">
          <area target="_self" alt="강서구" title="강서구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="205,291,189,356,188,388,160,402,137,442,160,485,201,505,252,489,264,474,277,476,292,510,329,526,349,503,356,467,392,467,311,366" shape="poly"/>
          <area target="_self" alt="양천구" title="양천구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="254,489,264,529,255,581,280,594,302,595,334,572,344,594,375,596,387,577,387,532,407,511,387,470,357,466,350,502,329,527,291,509,276,478,263,474" shape="poly"/>
          <area target="_self" alt="구로구" title="구로구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="258,586,241,630,255,659,239,699,270,700,304,697,337,658,350,640,367,648,367,665,402,664,420,654,405,580,387,573,375,593,347,596,333,571,302,596" shape="poly"/>
          <area target="_self" alt="금천구" title="금천구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="367,666,386,728,419,809,456,807,482,769,462,747,452,673,420,653" shape="poly"/>
          <area target="_self" alt="영등포구" title="영등포구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="386,465,405,507,387,533,387,572,405,584,416,622,418,653,438,665,447,636,474,629,485,606,500,558,470,506" shape="poly"/>
          <area target="_self" alt="동작구" title="동작구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="439,659,446,636,474,631,496,559,544,558,588,591,605,604,616,624,612,687,593,696,571,683,562,646,536,633,488,635,478,649" shape="poly"/>
          <area target="_self" alt="관악구" title="관악구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="439,662,453,674,460,746,477,772,491,784,499,802,558,809,631,742,613,686,592,694,569,681,563,646,539,633,487,636" shape="poly"/>
          <area target="_self" alt="서초구" title="서초구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="594,595,625,591,678,545,709,603,720,659,750,681,765,728,805,705,838,700,851,734,869,749,837,801,788,836,726,808,721,735,699,731,663,769,634,737,615,708" shape="poly"/>
          <area target="_self" alt="강남구" title="강남구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="677,542,698,523,742,524,804,555,810,608,875,639,908,675,934,734,876,761,820,706,767,731,713,646" shape="poly"/>
          <area target="_self" alt="송파구" title="송파구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="801,553,805,613,876,646,903,685,932,734,972,705,1012,626,964,599,973,563,927,534,927,493,909,479,863,548" shape="poly"/>
          <area target="_self" alt="강동구" title="강동구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="910,480,921,441,957,423,1036,389,1060,425,1052,462,1063,491,993,510,989,542,969,570,938,559,917,526,923,496" shape="poly"/>
          <area target="_self" alt="마포구" title="마포구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="332,372,358,360,380,356,396,330,506,432,564,432,580,467,530,525,392,451" shape="poly"/>
          <area target="_self" alt="용산구" title="용산구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="532,523,576,579,622,577,691,510,679,475,630,457,576,458" shape="poly"/>
          <area target="_self" alt="성동구" title="성동구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="677,476,712,405,765,404,819,446,787,532,739,511,690,511" shape="poly"/>
          <area target="_self" alt="광진구" title="광진구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="830,405,805,464,784,530,811,545,856,537,891,491,902,449,876,422,889,398" shape="poly"/>
          <area target="_self" alt="서대문구" title="서대문구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="448,366,463,347,502,345,509,326,531,307,553,292,557,315,571,328,571,351,562,387,585,414,563,441,502,437,452,388" shape="poly"/>
          <area target="_self" alt="중구" title="중구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="566,434,585,411,622,403,657,409,710,406,708,432,680,474,636,467,578,461" shape="poly"/>
          <area target="_self" alt="은평구" title="은평구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="395,331,431,328,442,308,444,247,460,164,497,158,541,129,587,167,587,207,552,312,527,321,499,346,468,347,448,379" shape="poly"/>
          <area target="_self" alt="종로구" title="종로구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="577,212,610,212,636,287,627,311,619,325,664,336,681,384,713,384,710,411,631,412,583,417,561,387,555,316,553,245" shape="poly"/>
          <area target="_self" alt="동대문구" title="동대문구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="708,384,719,359,753,343,777,311,819,304,834,403,817,449,763,424,755,408,729,418,709,414" shape="poly"/>
          <area target="_self" alt="중랑구" title="중랑구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="820,278,818,302,825,405,860,406,888,400,901,373,916,330,928,282,908,253,852,257" shape="poly"/>
          <area target="_self" alt="성북구" title="성북구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="607,209,625,198,683,238,694,274,748,275,773,240,796,268,820,274,819,301,755,335,716,388,681,388,652,339,609,323,623,285" shape="poly"/>
          <area target="_self" alt="강북구" title="강북구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="651,63,622,130,621,197,654,228,678,244,698,285,751,281,779,244,717,164,684,145,687,60" shape="poly"/>
          <area target="_self" alt="도봉구" title="도봉구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="678,59,690,18,740,10,739,32,790,37,780,106,789,128,780,214,758,218,719,173,682,150" shape="poly"/>
          <area target="_self" alt="노원구" title="노원구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="785,41,818,16,842,16,853,32,886,41,871,72,892,110,876,127,875,161,908,177,916,217,908,235,894,258,856,259,819,278,793,271,757,217,778,201,784,139,774,107" shape="poly"/>
      </map>
    </MainDiv>
  );
};

export default Main;

import React, { useContext } from 'react';
import { styled } from 'styled-components';
import SearchContext from '../store/search-context';
import { useNavigate } from 'react-router-dom';

const MainDiv = styled.div`
  margin: 8vh;
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
        <area target="_self" alt="강서구" title="강서구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="155,217,99,338,151,383,195,364,212,363,224,388,246,394,267,376,266,352,295,352,236,276" shape="poly"/>
        <area target="_self" alt="양천구" title="양천구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="192,358,189,434,218,446,252,430,256,443,284,444,290,430,303,376,288,348,267,353,241,391,214,358" shape="poly"/>
        <area target="_self" alt="구로구" title="구로구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="192,435,251,429,290,430,309,441,317,494,272,501,261,482,250,503,229,525,177,529,181,469" shape="poly"/>
        <area target="_self" alt="영등포구" title="영등포구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="290,344,355,379,375,416,360,470,331,499,312,496,289,430,288,400,295,374" shape="poly"/>
        <area target="_self" alt="금천구" title="금천구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="275,496,315,492,342,507,362,583,342,608,312,608,288,546" shape="poly"/>
        <area target="_self" alt="동작구" title="동작구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="374,417,331,480,331,498,360,486,423,488,429,513,449,520,461,512,467,459,408,417" shape="poly"/>
        <area target="_self" alt="관악구" title="관악구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="331,492,363,474,406,477,424,483,441,517,463,515,475,555,424,607,372,604,342,555" shape="poly"/>
        <area target="_self" alt="서초구" title="서초구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="443,444,509,407,561,505,573,542,596,537,616,523,633,534,654,572,596,631,552,613,529,551,499,577,475,553,459,517,451,472" shape="poly"/>
        <area target="_self" alt="강남구" title="강남구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="509,407,521,391,558,392,605,416,621,469,659,479,678,499,698,547,673,568,647,566,615,535,572,549,557,513,532,487" shape="poly"/>
        <area target="_self" alt="송파구" title="송파구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="602,417,604,460,659,491,677,522,702,554,730,530,762,469,726,449,731,424,690,394,697,370,683,363,648,408" shape="poly"/>
        <area target="_self" alt="강동구" title="강동구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="681,362,684,330,719,312,750,309,778,292,794,314,797,369,749,387,735,427,702,422,684,391,692,374" shape="poly"/>
        <area target="_self" alt="마포구" title="마포구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="245,279,298,248,381,325,427,323,437,349,398,394,309,348,269,312" shape="poly"/>
        <area target="_self" alt="용산구" title="용산구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="430,341,395,392,435,436,468,435,518,382,511,357,476,343" shape="poly"/>
        <area target="_self" alt="성동구" title="성동구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="506,359,532,303,572,302,615,333,591,401,514,382" shape="poly"/>
        <area target="_self" alt="광진구" title="광진구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="609,333,623,302,666,296,662,334,677,338,657,387,639,406,605,410,586,400" shape="poly"/>
        <area target="_self" alt="서대문구" title="서대문구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="329,281,347,257,416,217,427,243,428,264,420,292,438,312,419,333,381,329" shape="poly"/>
        <area target="_self" alt="중구" title="중구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="424,321,441,308,466,299,536,303,532,330,511,359,480,353,430,349" shape="poly"/>
        <area target="_self" alt="은평구" title="은평구" onClick={chooseSigun} style={{cursor:'pointer'}}  coords="295,248,332,187,346,122,408,98,444,128,441,157,421,188,418,223,376,262,348,266,336,288" shape="poly"/>
        <area target="_self" alt="종로구" title="종로구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="435,158,461,160,478,217,473,231,463,244,497,254,512,286,534,286,534,304,474,308,466,303,435,313,416,292,430,258,416,238,417,184" shape="poly"/>
        <area target="_self" alt="성북구" title="성북구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="452,160,468,148,517,180,523,210,562,206,581,181,618,207,617,230,581,238,567,261,541,290,509,289,493,260,455,243,472,217" shape="poly"/>
        <area target="_self" alt="동대문구" title="동대문구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="618,225,626,306,612,335,572,320,567,308,548,311,532,306,531,285,537,267,578,229" shape="poly"/>
        <area target="_self" alt="중랑구" title="중랑구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="612,204,640,192,672,189,687,195,697,217,688,251,667,304,621,309" shape="poly"/>
        <area target="_self" alt="강북구" title="강북구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="464,95,466,156,508,186,519,214,567,211,583,180,538,121,514,103,518,59,511,41,484,48" shape="poly"/>
        <area target="_self" alt="도봉구" title="도봉구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="509,40,516,9,554,8,555,23,593,28,584,80,594,105,584,168,566,167,537,131,524,125,506,104" shape="poly"/>
        <area target="_self" alt="노원구" title="노원구" onClick={chooseSigun} style={{cursor:'pointer'}} coords="623,7,665,32,681,138,690,164,683,176,673,192,618,211,593,207,567,167,584,100,577,78,589,27" shape="poly"/>
      </map>

    </MainDiv>
  );
};

export default Main;

// Going to be prievew on homepage
// Going to be stateless function component
import React from 'react';


const ContestPreview = (contest) => (
  <div className="ContestPreview">
    <div className="category-name">
      {contest.categoryName}
    </div>
    <div className="contest-name">
      {contest.contestName}
    </div>
  </div>

)


export default ContestPreview;

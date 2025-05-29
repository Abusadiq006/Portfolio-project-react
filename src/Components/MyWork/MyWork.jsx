import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {

  const handleShowMore = () => {
    // Define what happens when 'Show More' is clicked
    console.log("Show More clicked");
    // You could load more projects here or navigate somewhere
  };

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <img 
              key={index} 
              src={work.w_img} 
              alt={`Project ${index + 1}`}  // Use backticks and ${} inside {}
            />
          )
        })}
      </div>
      <div className="mywork-showmore" onClick={handleShowMore}>
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow icon pointing to more work" />
      </div>
    </div>
  )
}

export default MyWork;

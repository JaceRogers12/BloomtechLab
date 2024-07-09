import React from 'react';
import GrantRatesByOfficeImg from "../../../styles/Images/bar-graph-no-text.png";
import GrantRatesByNationalityImg from "../../../styles/Images/pie-chart-no-text.png";
import GrantRatesOverTimeImg from "../../../styles/Images/line-graph-no-text.png";
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
//import PageNav from "../../common/PageNav";

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>
      <div className="graphs-section">
        <div className="grant-rates-graph">
          <img src={GrantRatesByOfficeImg} alt="Bar Graph" className="graph-img"/>
          <h3 className="graph-text">Search Grant Rates By Office</h3>
        </div>
        <div className="grant-rates-graph">
          <img src={GrantRatesByNationalityImg} alt="Pie Chart" className="graph-img"/>
          <h3 className="graph-text">Search Grant Rates by Nationality</h3>
        </div>
        <div className="grant-rates-graph">
          <img src={GrantRatesOverTimeImg} alt="Line Graph" className="graph-img"/>
          <h3 className="graph-text">Search Grant Rates Over Time</h3>
        </div>
      </div>
      <div className="graphs-buttons">
        <div className="view-more-data-btn-container">
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            onClick={() => history.push('/graphs')}
          >
            View the Data
          </Button>
        </div>
        <div className="view-more-data-btn-container">
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            onClick={() => history.push('/graphs')}
          >
            Download the Data
          </Button>
        </div>
      </div>
      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <h1 className="bottom-section-title">Systemic Disparity Insights</h1>
      <div className="bottom-section">
        <div className="systemic-disparity-item">
          <h1 className="systemic-disparity-rate">36%</h1>
          <h3 className="systemic-disparity-info">
            By the end of the Trump administration, the average asylum office grant rate had fallen 36 percent 
            from an average of 44% in fiscal year 2016 to 28 percent in fiscal year 2020.
          </h3>
        </div>
        <div className="systemic-disparity-item">
          <h1 className="systemic-disparity-rate">5%</h1>
          <h3 className="systemic-disparity-info">
            The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.
          </h3>
        </div>
        <div className="systemic-disparity-item">
          <h1 className="systemic-disparity-rate">6x Lower</h1>
          <h3 className="systemic-disparity-info">
            Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times 
            lower than the San Francisco asylum office.
          </h3>
        </div>
      </div>
      <div className="read-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          Read More
        </Button>
      </div>
      <div>
        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;

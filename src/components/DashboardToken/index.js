import React from 'react';

import DashboardSectionHeader from '../DashboardSectionHeader';
import DashboardTokenPriceChartWidget from '../DashboardTokenPriceChartWidget';
import DashboardStatsWidget from '../DashboardStatsWidget';
import DashboardTokenSupplyWidget from '../DashboardTokenSupplyWidget';
// import DashboardJoyCarousel from '../DashboardJoyCarousel';
import Exchange from '../dashboard-page/Token/Exchange';
import DashboardTokenReleaseScheduleChartWidget from '../DashboardTokenReleaseScheduleChartWidget';
import DashboardTokenAllocationTableWidget from '../DashboardTokenAllocationTableWidget';
import DashboardTokenMintingChartWidget from '../DashboardTokenMintingChartWidget';
import DashboardTokenRoiTableWidget from '../DashboardTokenRoiTableWidget';
import DashboardTokenSupplyDistributionTableWidget from '../DashboardTokenSupplyDistributionTableWidget';

import { tokenPriceMetrics } from './data';

import './style.scss';

const DashboardToken = () => {
  return (
    <section className="dashboard-token">
      <div className="dashboard-token__container">
        <DashboardSectionHeader sectionId="token" sectionHeading="Token" />
        <div className="dashboard-token__price-metrics-grid grid-indents">
          <DashboardTokenPriceChartWidget widgetCn="dashboard-token__price-chart-widget" />
          {tokenPriceMetrics.map((tokenPriceStats, index) => {
            return (
              <DashboardStatsWidget
                key={index}
                heading={tokenPriceStats.figure}
                text={tokenPriceStats.rate}
                helperText={tokenPriceStats.growthRate}
              />
            );
          })}
        </div>

        <DashboardTokenSupplyWidget />

        {/* <DashboardJoyCarousel /> */}

        <Exchange />

        <DashboardTokenReleaseScheduleChartWidget />

        <div className="dashboard-token__allocation-minting-grid grid-indents">
          <DashboardTokenAllocationTableWidget />
          <DashboardTokenMintingChartWidget />
        </div>

        <div className="dashboard-token__percentage-widgets-grid grid-indents">
          <DashboardStatsWidget heading="Supply staked for validation" text="25%" withTextSizeIncreasedFromMd />
          <DashboardStatsWidget heading="APR on staking" text="2.5%" withTextSizeIncreasedFromMd />
        </div>

        <div className="dashboard-token__stats-tables-grid grid-indents">
          <DashboardTokenRoiTableWidget />
          <DashboardTokenSupplyDistributionTableWidget />
        </div>
      </div>
    </section>
  );
};

export default DashboardToken;

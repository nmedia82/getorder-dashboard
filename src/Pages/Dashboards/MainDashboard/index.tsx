/** @format */

import React from "react";
import { Container, Row } from "reactstrap";
import WelcomeCard from "./WelcomeCard";
import TotalOrders from "./TotalOrder";
import ActivitiesStatus from "./ActivitiesStatus";
import TotalSales from "./TotalSales";
import OrderProgress from "./OrderProgress";
import ShippingFee from "./ShippingFee";
import Discounts from "./Discounts";
import Refunds from "./Refunds";
import RefundsAmount from "./RefundAmount";
import NetProfit from "./NetProfit";
import { useSelector } from "react-redux";
import Loader from "../../../Layout/Loader";
import ReportWidget from "../ReportWidget";
import { getFormattedPrice } from "../../../services/helper";

export default function MainDashboard() {
  const { isLoading, dashoardReports, currentRange } = useSelector(
    (state: any) => state.app
  );

  const {
    best_selling_items,
    service_fees,
    total_discount,
    total_completed_orders,
    total_refund_amount,
    total_refunds,
    total_sales,
    total_in_progress_orders,
    in_progress_sales,
    total_tax,
  } = dashoardReports;

  return (
    <Container fluid>
      {isLoading && <Loader />}
      <Row>
        {/* <WelcomeCard /> */}
        <TotalOrders total_orders={total_completed_orders} colClass="" />
        <ReportWidget
          Title={"Total Sales"}
          Data={getFormattedPrice(total_sales)}
          currentRange={currentRange}
        />
        <ReportWidget
          Title={"Total Fees"}
          Data={getFormattedPrice(total_discount)}
          currentRange={currentRange}
        />
        <ReportWidget
          Title={"Total Discounts"}
          Data={getFormattedPrice(service_fees)}
          currentRange={currentRange}
        />

        <ReportWidget
          Title={"Order (In-Progress)"}
          Data={total_in_progress_orders}
          currentRange={currentRange}
        />
        <ReportWidget
          Title={"Sales (In-Progress)"}
          Data={getFormattedPrice(in_progress_sales)}
          currentRange={currentRange}
        />

        <ReportWidget
          Title={"Total Refunds"}
          Data={total_refunds}
          currentRange={currentRange}
        />
        <ReportWidget
          Title={"Refund Amounts"}
          Data={getFormattedPrice(total_refund_amount)}
          currentRange={currentRange}
        />

        <NetProfit />
        <ActivitiesStatus />
      </Row>
    </Container>
  );
}

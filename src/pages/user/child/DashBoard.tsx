import React, { useEffect, useState } from "react";
import { Liquid, Area, RingProgress } from "@ant-design/plots";
import { useSelector } from "react-redux";
import { Avatar, Card, List, Skeleton } from "antd";
import expired from "../../../assets/images/expired.png";
import money from "../../../assets/images/money.png";
import plan from "../../../assets/images/plan.png";
import postpaid from "../../../assets/images/postpaid.png";
import { useGetBillQuery } from "@/redux/service/userApi";
import { Button, Space, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import moment from "moment";

interface tagObject {
  title: string;
  id: string;
}

interface ColumnDataType {
  key: string;
  no: number;
  date: string;
  amount: number;
  status: string;
  plan: string;
  datails: tagObject[];
}

const DashBoard = () => {
  const [billData, setBillData] = useState<ColumnDataType[]>([]);
  const { data: billList, isLoading } = useGetBillQuery(1);
  const [data, setData] = useState([]);
  const user = useSelector((state: any) => state.auth.user);

  console.log("user", user);

  React.useEffect(() => {
    billList?.bills.map((item: any, i: any) => {
      const { _id, createdAt, invoiceNo, amount, status, plan_id, payment_id } =
        item;

      const datails = [
        { title: "payment", id: payment_id?._id ? payment_id?._id : "0" },
        { title: "bill", id: _id },
      ];
      setBillData((prev) => [
        ...prev,
        {
          key: _id,
          no: invoiceNo,
          date: createdAt,
          amount,
          status,
          plan: plan_id?.name,
          datails,
        },
      ]);
    });
  }, [billList]);

  useEffect(() => {
    const asyncFetch = () => {
      fetch(
        "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log("fetch data failed", error);
        });
    };

    asyncFetch();
  }, []);

  const config = {
    data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
  };

  const findDate = (date: any) => {
    const today = new Date();
    const lastDate = new Date(date);

    console.log("today", typeof today);
    console.log("lastDate", typeof lastDate);

    const diffTime = Math.floor(
      (lastDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    console.log("diffTime", diffTime);

    return diffTime + " days";
  };

  const topData = [
    {
      name: "Current Plan",
      value: user?.currentPlan?.id?.name || "No Plan",
      image: plan,
    },
    {
      name: "Amount",
      value: "₹ " + (user?.currentPlan?.id?.amount || "No Plan"),
      image: money,
    },
    {
      name: "Expired In",
      value: user?.currentPlan?.validity.to
        ? findDate(user?.currentPlan?.validity.to)
        : "No Plan",
      image: expired,
    },
  ];

  return (
    <>
      <div style={{ marginLeft: 30 }}>
        <h2 style={{ textTransform: "capitalize" }}>Welcome {user?.name}</h2>
      </div>
      <div className="dashboard-main-banner">
        <div className="dashboard-banner">
          <img src={postpaid} />
          <div className="banner-content">
            <div>Now experience prepaid like never before</div>
          </div>
        </div>
      </div>
      <div className="home-dashboard">
        {topData.map((item, i) => {
          return (
            <div className="mini-card" key={i}>
              <img src={item.image} alt="background image" />
              <div className="mini-card-content">
                <h3>{item.name}</h3>
                <h4>{item.value}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className="home-dashboard">
        <Card className="pie-chart">
          <h3>Current Month Data Usage</h3>
          <Area {...config} />
        </Card>
        <div className="dashboard-bill">
          <div className="dashboard-bill-header">
            <h3>Recent Transcation</h3>
            <Button type="primary">
              <Link to="/bill">View all</Link>
            </Button>
          </div>
          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={billData.slice(0, 2)}
            renderItem={(item) => (
              <List.Item>
                <Skeleton avatar title={false} loading={isLoading} active>
                  <List.Item.Meta
                    title={item.plan}
                    description={moment(item.date).format("DD/MM/YYYY")}
                  />
                  <div>₹ {item.amount}</div>
                </Skeleton>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default DashBoard;

// <Card
//                     hoverable
//                     className='home-profile-card'
//                     style={{ width: 240, backgroundColor: '#515DFF' }}
//                 >
//                     <Avatar size={200} src={'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'} />
//                     <h2>Vijeeth</h2>
//                     <h3>Standard Plan</h3>
//                 </Card>

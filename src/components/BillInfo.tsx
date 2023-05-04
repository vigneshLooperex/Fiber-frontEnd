import { paymentData, userDetailsList } from "@/types/global";
import { Button, Image, List } from "antd";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useGetPaymetsQuery } from "@/redux/service/userApi";

type Props = {};

const myArray = (payment?: paymentData): userDetailsList[] => [
  {
    title: "Id",
    value: payment?._id || "-",
    type: "text",
  },
  {
    title: "Payment Mode",
    value: payment?.paymentMode || "-",
    type: "text",
  },
  {
    title: "Date",
    value: payment?.createdAt
      ? new Date(payment?.createdAt).toLocaleString()
      : "-",
    type: "date",
  },
  {
    title: "Plan Name",
    value: payment?.plan_id?.name || "-",
    type: "text",
  },
  {
    title: "Amount",
    value: "Rs.  " + (payment?.amount.toString() || "-"),
    type: "text",
  },
  {
    title: "Plan Discription",
    value: payment?.plan_id?.notes || "-",
    type: "text",
  },

  // {
  //   title: "profile",
  //   value: payment.profile || "",
  //   type: "image",
  // },
];

function BillInfo(props: Props) {
  const user = useSelector((state: any) => state.auth.user);
  const paymentList = useGetPaymetsQuery(1);
  const {} = props;
  const [payment, setPayment] = useState<paymentData | undefined>();
  useEffect(() => {
    setPayment(paymentList.data?.payments[0]);
  }, [paymentList]);

  return (
    <List
      // size='large'
      header={<h3>Last Payment</h3>}
      bordered
      dataSource={myArray(payment)}
      renderItem={(items) => {
        return (
          <List.Item>
            <List.Item.Meta description={<ListOrder {...{ ...items }} />} />
          </List.Item>
        );
      }}
    />
  );
}

const ListOrder = (list: userDetailsList) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="info-list">
      <h4>{list.title} :</h4>
      {(list.type === "text" || list.type === "number") && <p>{list.value}</p>}
      {list.type === "date" && (
        <p>
          {/* {moment(list.value).format("DD/MM/YYYY")} */}
          {list.value}
        </p>
      )}
      {list.type === "image" && (
        <>
          <Button type="primary" onClick={() => setVisible(true)}>
            show image preview
          </Button>
          <Image
            width={200}
            style={{ display: "none", color: "black" }}
            src={list.value}
            preview={{
              visible,
              src: list.value,
              onVisibleChange: (value) => {
                setVisible(value);
              },
            }}
          />
        </>
      )}
    </div>
  );
};

export default BillInfo;

import React from "react";
import api from "../api/api";

const Bank = () => {
  const handleFindAll = async () => {
    const users = await api.get("/users");
    console.log(users.data);
  };
  const handleAddCash = async () => {
    try {
      const result = await api.put("/bank/cash/60083c99a274f44caf5d7f4b", {
        amount: 50,
      });
      console.log(result.data);
    } catch (e) {
      console.log(e.error);
    }
  };
  const handleAddCredit = async () => {
    try {
      const result = await api.put("/bank/credit/60083c99a274f44caf5d7f4b", {
        amount: 50,
      });
      console.log(result.data);
    } catch (e) {
      console.log(e.error);
    }
  };
  const handleWithdraw = async () => {
    try {
      const result = await api.put("/bank/withdraw/60083c99a274f44caf5d7f4b", {
        amount: 50,
      });
      console.log(result.data);
    } catch (e) {
      console.log(e.error);
    }
  };
  const handleTransfer = async () => {
    try {
      const result = await api.put(
        "/bank/transfer/60083c99a274f44caf5d7f4b/60083ca3a274f44caf5d7f4c",
        {
          amount: 50,
        }
      );
      console.log(result.data);
    } catch (e) {
      console.log(e.error);
    }
  };
  return (
    <div>
      <h2>Bank</h2>
      <div onClick={handleFindAll}>Find all Users</div>
      <div onClick={handleAddCash}>Add Cash</div>
      <div onClick={handleAddCredit}>Add Credit</div>
      <div onClick={handleWithdraw}>Withdraw</div>
      <div onClick={handleTransfer}>Transfer</div>
    </div>
  );
};
export default Bank;

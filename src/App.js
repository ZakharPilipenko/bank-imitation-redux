import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customer.customer);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  const deleteCustomer = () => {};

  return (
    <div className="App">
      <div className="balance-wrapper">
        <div className="balance">Баланс: {cash}</div>
      </div>
      <div className="content">
        <button className="button" onClick={() => addCash(Number(prompt()))}>
          Пополнить счёт
        </button>
        <button className="button" onClick={() => getCash(Number(prompt()))}>
          Снять со счёта
        </button>
        <button className="button" onClick={() => addCustomer(prompt())}>
          Добавить клиента
        </button>
      </div>
      {customers.length > 0 ? (
        <div className="content" style={{ flexDirection: "column" }}>
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="customers"
              onClick={() => removeCustomer(customer)}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div className="content">Клиенты отсутствуют</div>
      )}
    </div>
  );
}

export default App;

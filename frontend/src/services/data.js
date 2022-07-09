import axios from "axios";

export const getData = async (start, limit) => {
  let indexing =
    "start=" +
    start * limit +
    "&limit=" +
    limit;
  let response = await axios.get(
    "http://localhost:8010/backend/DataLoading?" + indexing
  );
  let data = response.data.Data;
  let coun = response.data["count"];
  let count = parseInt(coun[0].count);
  data.map((data, index) => ({ ...data, id: index }));
  return { data, count };
};

export const addData = async (
  sl_no,
  business_code,
  cust_number,
  clear_date,
  buisness_year,
  doc_id,
  posting_date,
  document_create_date,
  due_in_date,
  invoice_currency,
  document_type,
  posting_id,
  total_open_amount,
  baseline_create_date,
  cust_payment_terms,
  invoice_id
) => {
  let data =
    "sl_no=" +
    sl_no +
    "&business_code=" +
    business_code +
    "&cust_number=" +
    cust_number +
    "&clear_date=" +
    clear_date +
    "&buisness_year=" +
    buisness_year +
    "&doc_id=" +
    doc_id +
    "&posting_date=" +
    posting_date +
    "&document_create_date=" +
    document_create_date +
    "&due_in_date=" +
    due_in_date +
    "&invoice_currency=" +
    invoice_currency +
    "&document_type=" +
    document_type +
    "&posting_id=" +
    posting_id +
    "&total_open_amount=" +
    total_open_amount +
    "&baseline_create_date=" +
    baseline_create_date +
    "&cust_payment_terms=" +
    cust_payment_terms +
    "&invoice_id=" +
    invoice_id;
  console.log(data);
  let response = await axios.get(
    "http://localhost:8010/backend/AddData?" + data
  );
  return response.data;
};


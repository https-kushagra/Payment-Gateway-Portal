
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;
import com.google.gson.Gson;

/**
 * Servlet implementation class AddData
 */
public class AddData extends HttpServlet {
	private static final long serialVersionUID = 1L;

	String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	String DB_URL = "jdbc:mysql://localhost/grey_goose";

	String USER = "root";
	String PASS = "root";

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			int sl_no = Integer.valueOf(request.getParameter("sl_no"));
			String business_code = request.getParameter("business_code");
			String cust_number = request.getParameter("cust_number");
			String clear_date =request.getParameter("clear_date");
			String buisness_year =request.getParameter("buisness_year");
			String doc_id = request.getParameter("doc_id");
			String posting_date = request.getParameter("posting_date");
			String document_create_date = request.getParameter("document_create_date");
			String due_in_date = request.getParameter("due_in_date");
			String invoice_currency = request.getParameter("invoice_currency");
			String document_type = request.getParameter("document_type");
			String posting_id = request.getParameter("posting_id");
			String total_open_amount = request.getParameter("total_open_amount");
			String baseline_create_date = request.getParameter("baseline_create_date");
			String cust_payment_terms = request.getParameter("cust_payment_terms");
			String invoice_id = request.getParameter("invoice_id");

			HashMap<Object, Object> Response = new HashMap<Object, Object>();
			Class.forName(JDBC_DRIVER);
			Connection con = DriverManager.getConnection(DB_URL, USER, PASS);
			String sql = "INSERT INTO winter_internship (sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1,sl_no);
			ps.setString(2,business_code);
			ps.setString(3,cust_number);
			ps.setString(4,clear_date);
			ps.setString(5,buisness_year);
			ps.setString(6,doc_id);
			ps.setString(7,posting_date);
			ps.setString(8,document_create_date);
			ps.setString(9,due_in_date);
			ps.setString(10,invoice_currency);
			ps.setString(11,document_type);
			ps.setString(12,posting_id);
			ps.setString(13,total_open_amount);
			ps.setString(14,baseline_create_date);
			ps.setString(15,cust_payment_terms);
			ps.setString(16,invoice_id);
			
			if (ps.executeUpdate()>0) {
				Response.put("insert",true);
			}
			else {
				Response.put("insert",false);
			}
			
			Gson gson = new Gson();
			String JSONresponse = gson.toJson(Response);
			response.setHeader("Access-control-Allow-Origin","*");
			response.getWriter().append(JSONresponse);
			
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

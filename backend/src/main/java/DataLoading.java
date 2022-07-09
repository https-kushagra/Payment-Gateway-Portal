import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;

import com.google.gson.Gson;


public class DataLoading extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
    String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	String DB_URL = "jdbc:mysql://localhost/grey_goose";
	
	String USER = "root";
	String PASS = "root";
	
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		int start = Integer.parseInt(request.getParameter("start"));
		int limit = Integer.parseInt(request.getParameter("limit"));
		
		try {
			ArrayList<Data> datas = new ArrayList<>();
			ArrayList<Data> count = new ArrayList<>();
			HashMap<Object, Object> Response = new HashMap<Object, Object>();
			
			Class.forName(JDBC_DRIVER);
			Connection con = DriverManager.getConnection(DB_URL,USER,PASS);
			PreparedStatement ps= con.prepareStatement("Select * from winter_internship ORDER BY limit ?,? ");
			ps.setInt(1, start);
			ps.setInt(2, limit);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) { 
				Data fetchData = new Data();
				fetchData.setSl_no(rs.getString(1));
				fetchData.setBusiness_code(rs.getString(2));
				fetchData.setCust_number(rs.getString(3));
				fetchData.setClear_date(rs.getString(4));
				fetchData.setBuisness_year(rs.getString(5));
				fetchData.setDoc_id(rs.getString(6));
				fetchData.setPosting_date(rs.getString(7));
				fetchData.setDocument_create_date(rs.getString(8));
				fetchData.setDocument_create_date1(rs.getString(9));
				fetchData.setDue_in_date(rs.getString(10));
				fetchData.setInvoice_currency(rs.getString(11));
				fetchData.setDocument_type(rs.getString(12));
				fetchData.setPosting_id(rs.getString(13));
				fetchData.setArea_business(rs.getString(14));
				fetchData.setTotal_open_amount(rs.getString(15));
				fetchData.setBaseline_create_date(rs.getString(16));
				fetchData.setCust_payment_terms(rs.getString(17));
				fetchData.setInvoice_id(rs.getString(18));
				fetchData.setIsOpen(rs.getString(19));
				fetchData.setAging_bucket(rs.getString(20));
				fetchData.setIs_deleted(rs.getString(21));
				datas.add(fetchData);
			}
			Response.put("Data",datas);
			
			String sql = "select count(*) count from winter_internship";
			ps=con.prepareStatement(sql);
			ResultSet s = ps.executeQuery();
			while(s.next()) {
				Data fetchData = new Data();
				fetchData.setCount(s.getString(1));
				count.add(fetchData);
			}
			Response.put("count",count);
			
			rs.close();
			ps.close();
			con.close();
			
			Gson gson = new Gson();
			String dataFetch =gson.toJson(Response);
			response.setHeader("Access-control-Allow-Origin","*");
			response.getWriter().append(dataFetch);
		}
		catch(Exception e) {
			System.out.println(e);
		}
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}

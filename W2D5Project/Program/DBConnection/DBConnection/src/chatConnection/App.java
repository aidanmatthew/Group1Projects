package chatConnection;


public class App {

	public static void main(String[] args) {
		
		DBConnect.insert(new History("Limos","test2!"));
		DBConnect.getAllHistory();
		
//		DBConnect.getPreferredDateHistory("24-06-2016");
//		DBConnect.getCustomDate("25-06-2016", "26-07-2016");
		
		DBConnect.insert(new Logs("It works 2!"));
		DBConnect.getAllLogs();
		
	}

}

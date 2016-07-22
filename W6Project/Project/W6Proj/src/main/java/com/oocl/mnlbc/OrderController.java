/**
 * 
 */
package com.oocl.mnlbc;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.oocl.mnlbc.dao.OrderDAO;
import com.oocl.mnlbc.entity.Order;

/**
 * @author DELEOAN
 * @author RACELPA
 *
 */
@Controller
@RequestMapping(value = "/order")
public class OrderController {
	final static Logger logger = Logger.getLogger(OrderController.class);
	
	@Autowired
	OrderDAO orderDao;

	@ResponseBody
	@RequestMapping(value = "/getAllOrders", method = RequestMethod.GET)
	public List<Order> getAllOrder() {
		orderDao.init();
		// logger.info("Getting all list of Order");
		List<Order> orderList = orderDao.getAllOrder();
		return orderList;
	}

	@ResponseBody
	@RequestMapping(value = { "/getAllOrderByUser" }, method = RequestMethod.POST)
	public List<Order> getAllOrderByUserID(@RequestParam(required = true) int userId) {
		orderDao.init();
		List<Order> orderList = orderDao.getOrderByUserId(userId);
		// logger.info("Getting all order by User ID");
		return orderList;
	}

	@ResponseBody
	@RequestMapping(value = "/getOrderById/{id}", method = RequestMethod.GET)
	public Order getOrderById(@PathVariable("id") int id) {
		orderDao.init();
		/// logger.info("Getting all order by ID");
		Order order = orderDao.getOrderById(id);
		return order;
	}

	@ResponseBody
	@RequestMapping(value = { "/addOrder" }, method = RequestMethod.POST)
	public String addOrder(@RequestBody Order order) {
		orderDao.init();
		orderDao.addOrder(order);
		return "success";
	}

}
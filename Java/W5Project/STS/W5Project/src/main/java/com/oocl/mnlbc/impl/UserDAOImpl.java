package com.oocl.mnlbc.impl;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import com.oocl.mnlbc.dao.UserDAO;
import com.oocl.mnlbc.mapper.UserMapper;
import com.oocl.mnlbc.model.User;

/**
 * Implements the UserDAO to specify the actions that will be done by each
 * methods.
 * 
 * @author Group 1 
 * @since 07-18-2016
 */
public class UserDAOImpl implements UserDAO {
	private DataSource dataSource;
	private PlatformTransactionManager transactionManager;
	private JdbcTemplate jdbcTemplateObject;

	public List<User> getAllUsers() {
		String query = "SELECT * FROM users";
		List<User> users = jdbcTemplateObject.query(query, new UserMapper());
		return users;
	}

	public DataSource getDataSource() {
		return dataSource;
	}

	public DataSource executeTestSource() {
		return dataSource;
	}

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
		this.jdbcTemplateObject = new JdbcTemplate(dataSource);
	}

	public PlatformTransactionManager getTransactionManager() {
		return transactionManager;
	}

	public void setTransactionManager(PlatformTransactionManager transactionManager) {
		this.transactionManager = transactionManager;
	}

	public User getUserByID(int id) {
		String query = "SELECT * FROM users WHERE ID = " + id;
		User users = jdbcTemplateObject.queryForObject(query, new UserMapper());
		return users;
	}

	public User getUserByUsername(String username) {
		String query = "SELECT * FROM users WHERE USERNAME = " + username;
		User users = jdbcTemplateObject.queryForObject(query, new UserMapper());
		return users;
	}

	public User addUser(final User user) {

		TransactionTemplate tt = new TransactionTemplate(getTransactionManager());
		tt.execute(new TransactionCallback() {
			public Object doInTransaction(TransactionStatus status) {
				JdbcTemplate jt = new JdbcTemplate(executeTestSource());
				StringBuilder query = new StringBuilder();
				query.append(
						"INSERT INTO USERS (USERNAME,PASSWORD,FIRSTNAME,MIDDLENAME,LASTNAME,GENDER,EMAIL,ADDRESS,CONTACTS,IS_DISABLED,TYPE) VALUES (");
				query.append("'" + user.getUsername() + "',");
				query.append("'" + user.getPassword() + "',");
				query.append("'" + user.getFirstname() + "',");
				query.append("'" + user.getMiddlename() + "',");
				query.append("'" + user.getLastname() + "',");
				query.append("'" + user.getGender() + "',");
				query.append("'" + user.getEmail() + "',");
				query.append("'" + user.getAddress() + "',");
				query.append("'" + user.getContact() + "',");
				query.append(user.isDisabled() ? "1" : "0" + ",");
				query.append("'" + user.getType() + "')");
				jt.update(query.toString());

				return null;
			}
		});

		return user;
	}

	public boolean checkUsernameExistence(String username) {
		String query = "SELECT * FROM USERS WHERE USERNAME = '" + username + "'";
		List<User> users = jdbcTemplateObject.query(query, new UserMapper());
		if (users.size() > 0) {
			return true;
		} else {
			return false;
		}
	}

	public boolean checkEmailExistence(String email) {
		String query = "SELECT * FROM USERS WHERE EMAIL = '" + email + "'";
		List<User> users = jdbcTemplateObject.query(query, new UserMapper());
		if (users.size() > 0) {
			return true;
		} else {
			return false;
		}
	}

}

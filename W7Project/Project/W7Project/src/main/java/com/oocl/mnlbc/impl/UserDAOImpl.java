package com.oocl.mnlbc.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.oocl.mnlbc.dao.AbstractJPADAO;
import com.oocl.mnlbc.dao.UserDAO;
import com.oocl.mnlbc.entity.Tray;
import com.oocl.mnlbc.entity.User;

/**
 * 
 * @author LIMOSJO
 *
 */
public class UserDAOImpl extends AbstractJPADAO<User> implements UserDAO {

	
	public UserDAOImpl(){
		setClazz(User.class );
	}

	@Override
	public User getUserByUsername(String username) {
		Query query = entityManager.createQuery("select u from User u where u.username = :username");
		query.setParameter("username", username);
		User userReturn = (User) query.getSingleResult();
		return userReturn;
	}


	@Override
	public boolean checkUsernameExistence(String username) {

		Query query = entityManager.createQuery("select u from User u where u.username = :username");
		query.setParameter("username", username);
		List<User> users = query.getResultList();
		if (users.size() > 0) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public boolean checkEmailExistence(String email) {
		Query query = entityManager.createQuery("select u from User u where u.email = :email");
		query.setParameter("email", email);
		List<User> users = query.getResultList();
		if (users.size() > 0) {
			return true;
		} else {
			return false;
		}
	}


}
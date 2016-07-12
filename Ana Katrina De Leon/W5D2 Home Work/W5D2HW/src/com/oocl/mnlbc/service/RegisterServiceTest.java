package com.oocl.mnlbc.service;

import static org.junit.Assert.*;

import org.junit.Test;

/**
 * 
 * @author deleoan
 *
 */
public class RegisterServiceTest {

	RegisterService rs = new RegisterService();

	@Test
	public void testValidateUserFailed() {
		boolean testFailed = rs.validateRegistration("deleoan", "password", "Ana Katrina", "De Leon", "Laguna Phils",
				"password", "test@email.com");
		assertFalse(testFailed);
	}

	@Test
	public void testValidateUserSuccess() {
		boolean testSuccess = rs.validateRegistration("deleoan", "password", "Ana Katrina", "De Leon", "Laguna Phils",
				"password", "test@email.com");
		assertTrue(testSuccess);
	}

	@Test
	public void testConfirmPasswordSuccess() {
		boolean testSuccessPass = rs.confirmPass("password", "password");
		assertTrue(testSuccessPass);
	}

	@Test
	public void testConfirmPasswordFailed() {
		boolean testFailedPass = rs.confirmPass("pass", "password");
		assertTrue(testFailedPass);
	}
}

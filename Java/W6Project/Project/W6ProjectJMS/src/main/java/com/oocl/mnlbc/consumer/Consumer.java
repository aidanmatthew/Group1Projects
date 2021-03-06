/**
 * 
 */
package com.oocl.mnlbc.consumer;

import java.util.ArrayList;
import java.util.List;

import javax.jms.Connection;
import javax.jms.ConnectionFactory;
import javax.jms.Destination;
import javax.jms.JMSException;
import javax.jms.MessageConsumer;
import javax.jms.Session;

import org.apache.activemq.ActiveMQConnectionFactory;

import com.oocl.mnlbc.listener.Listener;
import com.oocl.mnlbc.model.MessageDetails;

/**
 * @author DEQUILLA
 *
 */
public class Consumer {
	private static final String USER_NAME = ActiveMQConnectionFactory.DEFAULT_BROKER_URL;
	private static final String PASSOWRD = ActiveMQConnectionFactory.DEFAULT_PASSWORD;
	private static final String BROKEN_URL = ActiveMQConnectionFactory.DEFAULT_BROKER_URL;

	private static ConnectionFactory connectionFactory = null;
	private static Connection connection = null;
	private static Session session = null;
	private static Destination destination = null;
	private static MessageConsumer messageConsumer = null;
	private List<MessageDetails> messageList = new ArrayList<MessageDetails>();

	/**
	 * 
	 */
	public Consumer() {
		createQueue();
	}

	/**
	 * 
	 */
	private void createQueue() {
		try {
			connectionFactory = new ActiveMQConnectionFactory(USER_NAME, PASSOWRD, BROKEN_URL);
			connection = connectionFactory.createConnection();
			connection.start();
			session = connection.createSession(true, Session.AUTO_ACKNOWLEDGE);
			destination = session.createQueue("BurgerQueenQueue");
			messageConsumer = session.createConsumer(destination);
			Listener listener = new Listener();
			listener.setMessageList(messageList);
			messageConsumer.setMessageListener(listener);

		} catch (JMSException e) {
			e.printStackTrace();
		}
	}

	/**
	 * @return the message list
	 */
	public List<MessageDetails> getMessageList() {
		return messageList;
	}

	/**
	 * @param message
	 *            list the message list to set
	 */
	public void setMessageList(List<MessageDetails> messageList) {
		this.messageList = messageList;
	}

}

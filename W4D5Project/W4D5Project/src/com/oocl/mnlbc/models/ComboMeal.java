package com.oocl.mnlbc.models;

import java.util.List;

/**
 * 
 * @author Group 1
 *
 */

public class ComboMeal {
	private int id;
	private String comboMealCode;
	private String name;
	private String description;
	private double price;
	private String image;
	private List<Meal> mealList;

	public ComboMeal(String comboMealCode, String name, String description, double price, String image, List<Meal> mealList) {
		super();
		this.comboMealCode = comboMealCode;
		this.name = name;
		this.description = description;
		this.price = price;
		this.image = image;
		this.mealList = mealList;
	}

	public int getId() {
		return id;
	}

	public String getComboMealCode() {
		return comboMealCode;
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public double getPrice() {
		return price;
	}

	public String getImage() {
		return image;
	}

	public List<Meal> getMealList() {
		return mealList;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setComboMealCode(String comboMealCode) {
		this.comboMealCode = comboMealCode;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public void setMealList(List<Meal> mealList) {
		this.mealList = mealList;
	}

}
